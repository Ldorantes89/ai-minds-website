import { NextResponse } from "next/server";
import crypto from "node:crypto";

/**
 * Cal.com → Notion webhook bridge.
 *
 * Cal.com posts a BOOKING_CREATED event here whenever someone books a meeting.
 * We verify the HMAC signature, then create a row in the Notion "AI Minds — Leads"
 * database with the booking details (name, email, business, industry, pain points,
 * meeting time, booking URL).
 *
 * Env vars required (set in Vercel project settings):
 *   - NOTION_TOKEN          internal integration secret (secret_xxx)
 *   - NOTION_LEADS_DB_ID    database id (d72fcef92e844a8d98320245c50e2cf9)
 *   - CAL_WEBHOOK_SECRET    random string shared with Cal.com
 *
 * Cal.com webhook URL: https://<your-domain>/api/cal-webhook
 * Subscribe to: BOOKING_CREATED (and optionally BOOKING_CANCELLED).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOTION_API = "https://api.notion.com/v1/pages";
const NOTION_VERSION = "2022-06-28";

type CalResponse = { label?: string; value?: string | string[] } | string;
type CalAttendee = { name?: string; email?: string; timeZone?: string };
type CalPayload = {
  triggerEvent?: string;
  payload?: {
    title?: string;
    uid?: string;
    startTime?: string;
    endTime?: string;
    attendees?: CalAttendee[];
    responses?: Record<string, CalResponse>;
    metadata?: Record<string, unknown>;
  };
};

/** Pull a string out of a Cal.com response field, regardless of shape. */
function readResponse(
  responses: Record<string, CalResponse> | undefined,
  ...candidateKeys: string[]
): string | undefined {
  if (!responses) return undefined;
  const lowerMap = Object.fromEntries(
    Object.entries(responses).map(([k, v]) => [k.toLowerCase(), v])
  );
  for (const key of candidateKeys) {
    const hit = lowerMap[key.toLowerCase()];
    if (!hit) continue;
    if (typeof hit === "string") return hit;
    const val = (hit as { value?: string | string[] }).value;
    if (typeof val === "string") return val;
    if (Array.isArray(val)) return val.join(", ");
  }
  return undefined;
}

/** Map a free-text industry to one of the Notion select options. */
function mapIndustry(input: string | undefined): string {
  if (!input) return "Other";
  const v = input.toLowerCase();
  if (/dent|ortho|denti/.test(v)) return "Dental";
  if (/med ?spa|aestheti|botox/.test(v)) return "Med Spa";
  if (/law|legal|attorney|firm/.test(v)) return "Law Firm";
  if (/hvac|plumb|electric|trade|contractor|roof/.test(v)) return "HVAC / Trades";
  if (/salon|barber|stylist|nail/.test(v)) return "Salon / Barber";
  if (/hotel|hospitality|airbnb|inn|resort|restaurant/.test(v)) return "Hospitality";
  if (/real ?estate|realtor|broker|property/.test(v)) return "Real Estate";
  return "Other";
}

function verifySignature(rawBody: string, signature: string | null, secret: string): boolean {
  if (!signature) return false;
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(signature.replace(/^sha256=/, ""), "hex");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export async function POST(req: Request) {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DB_ID = process.env.NOTION_LEADS_DB_ID;
  const CAL_SECRET = process.env.CAL_WEBHOOK_SECRET;

  if (!NOTION_TOKEN || !DB_ID) {
    return NextResponse.json(
      { error: "Server missing NOTION_TOKEN or NOTION_LEADS_DB_ID" },
      { status: 500 }
    );
  }

  const rawBody = await req.text();

  // Verify Cal.com signature when a secret is configured.
  if (CAL_SECRET) {
    const sig =
      req.headers.get("x-cal-signature-256") ?? req.headers.get("x-cal-signature");
    if (!verifySignature(rawBody, sig, CAL_SECRET)) {
      return NextResponse.json({ error: "invalid signature" }, { status: 401 });
    }
  }

  let body: CalPayload;
  try {
    body = JSON.parse(rawBody) as CalPayload;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  // Only act on BOOKING_CREATED. Other events are ack'd but ignored.
  if (body.triggerEvent && body.triggerEvent !== "BOOKING_CREATED") {
    return NextResponse.json({ ok: true, ignored: body.triggerEvent });
  }

  const p = body.payload ?? {};
  const attendee = p.attendees?.[0] ?? {};
  const responses = p.responses ?? {};

  const name =
    attendee.name ??
    readResponse(responses, "name", "your name", "Your name") ??
    "(unknown)";
  const email =
    attendee.email ?? readResponse(responses, "email", "your email");
  const phone = readResponse(responses, "phone", "phone number");
  const business = readResponse(
    responses,
    "business",
    "business name",
    "company",
    "company name"
  );
  const industryRaw = readResponse(responses, "industry", "what industry");
  const pain = readResponse(
    responses,
    "pain",
    "what's eating your week",
    "what is eating your week",
    "what is eating your week?",
    "notes",
    "additional notes"
  );
  const bookingUrl = p.uid
    ? `https://cal.com/booking/${p.uid}`
    : undefined;

  // Build the Notion page properties map.
  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: name } }] },
    Stage: { select: { name: "Audit Scheduled" } },
    Source: { select: { name: "Cal.com" } },
    Industry: { select: { name: mapIndustry(industryRaw) } },
  };
  if (email) properties.Email = { email };
  if (phone) properties.Phone = { phone_number: phone };
  if (business)
    properties.Business = { rich_text: [{ text: { content: business } }] };
  if (pain)
    properties["Pain Points"] = { rich_text: [{ text: { content: pain } }] };
  if (p.startTime)
    properties["Booked At"] = { date: { start: p.startTime, end: p.endTime } };
  if (bookingUrl) properties["Cal Booking URL"] = { url: bookingUrl };

  const notionRes = await fetch(NOTION_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: DB_ID },
      properties,
    }),
  });

  if (!notionRes.ok) {
    const text = await notionRes.text();
    return NextResponse.json(
      { error: "notion api failed", status: notionRes.status, detail: text },
      { status: 502 }
    );
  }

  const out = (await notionRes.json()) as { id?: string };
  return NextResponse.json({ ok: true, notionPageId: out.id });
}

/** Simple health check — handy for the user to confirm the route is reachable. */
export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/cal-webhook",
    notes: "POST Cal.com BOOKING_CREATED events here. GET is a health check.",
  });
}
