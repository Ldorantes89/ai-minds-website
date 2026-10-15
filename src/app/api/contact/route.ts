import { NextResponse } from "next/server";

/**
 * Stubbed contact endpoint.
 *
 * This logs the submission server-side and returns success. There is no
 * database or email provider wired up — to make it real, forward `data`
 * to your provider of choice (Resend, a CRM webhook, etc.) below.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = String(data.name ?? "").trim();
  const business = String(data.business ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  // Basic validation
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !email || !message || !emailValid) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, a valid email, and a message." },
      { status: 422 }
    );
  }

  // In production, forward this somewhere. For now we just log it.
  console.log("[contact] New submission:", { name, business, email, message });

  // Small artificial delay so the UI shows its loading state.
  await new Promise((r) => setTimeout(r, 600));

  return NextResponse.json({
    ok: true,
    message: "Thanks! We'll be in touch within one business day.",
  });
}
