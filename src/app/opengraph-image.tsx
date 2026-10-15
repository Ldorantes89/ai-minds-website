import { ImageResponse } from "next/og";

/**
 * Dynamic OG image for the homepage. Served at /opengraph-image when a
 * crawler (WhatsApp, iMessage, Slack, Facebook, X, LinkedIn) requests the
 * page preview. Composes the brand, tagline, and the 8 agent avatars over
 * the white-theme gradient.
 */

export const runtime = "edge";
export const alt =
  "AI Minds — Your team, multiplied. 8 AI coworkers for small businesses.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-minds.ai";

const agents = [
  { slug: "ava", color: "#14b8a6" },
  { slug: "leo", color: "#f97316" },
  { slug: "bella", color: "#6366f1" },
  { slug: "maya", color: "#ec4899" },
  { slug: "penny", color: "#22c55e" },
  { slug: "vera", color: "#f59e0b" },
  { slug: "ruby", color: "#e11d48" },
  { slug: "max", color: "#3b82f6" },
];

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse 60% 40% at 18% 0%, rgba(124,58,237,0.20), transparent 60%), radial-gradient(ellipse 55% 35% at 85% 8%, rgba(59,130,246,0.18), transparent 58%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99,102,241,0.14), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f7f5ff 50%, #ffffff 100%)",
          padding: "70px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #3b82f6 100%)",
              boxShadow: "0 8px 24px -4px rgba(124,58,237,0.45)",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "white",
                marginTop: 2,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: -0.5,
              color: "#0a0a14",
              display: "flex",
              gap: 6,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(120deg, #7c3aed 0%, #6366f1 45%, #3b82f6 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ai
            </span>
            <span>minds</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            marginTop: 60,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
              color: "#0a0a14",
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <span>Your team,</span>
            <span
              style={{
                background:
                  "linear-gradient(120deg, #7c3aed 0%, #6366f1 45%, #3b82f6 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              multiplied.
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#3a3a52",
              lineHeight: 1.3,
            }}
          >
            8 AI coworkers that handle the busywork — your humans stay.
          </div>
        </div>

        {/* Agent row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: "auto",
          }}
        >
          {agents.map((a) => (
            <div
              key={a.slug}
              style={{
                display: "flex",
                width: 110,
                height: 110,
                borderRadius: 999,
                overflow: "hidden",
                boxShadow: `0 14px 30px -10px ${a.color}AA, 0 0 0 4px white, 0 0 0 6px ${a.color}33`,
              }}
            >
              <img
                src={`${SITE_URL}/avatars/${a.slug}.png`}
                width={110}
                height={110}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
