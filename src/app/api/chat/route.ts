import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Ava, an AI customer support agent for AI Minds. AI Minds provides done-for-you AI agents for small businesses. You help visitors understand how AI can help their business handle customer DMs, calls, bookings, and lead follow-up 24/7. Be warm, concise, and specific. Always tie back to the business owner's pain: missed calls, after-hours DMs, lost bookings. Keep responses under 3 sentences. If they ask about pricing, mention Solo at $199/mo, Squad at $499/mo, Full Team at $999/mo. If they want to book a call, direct them to cal.com/ai-minds.`;

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey || apiKey === "your_groq_api_key_here") {
    return NextResponse.json(
      { error: "GROQ_API_KEY not configured" },
      { status: 500 }
    );
  }

  const groqRes = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    }
  );

  if (!groqRes.ok) {
    const err = await groqRes.text();
    console.error("Groq API error:", err);
    return NextResponse.json(
      { error: "Groq API request failed" },
      { status: 502 }
    );
  }

  const data = await groqRes.json();
  const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't get a response right now.";

  return NextResponse.json({ reply });
}
