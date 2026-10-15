import Link from "next/link";

/**
 * Free-floating "mind cluster" mark. No enclosing square — premium and modern
 * (Linear, Notion, Figma all skip the square). One large center orb (the
 * mind) and two smaller satellite orbs (collaborators), joined by smooth
 * curved arcs.
 */
export function LogoMark({
  className = "",
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nOrbCenter" cx="36%" cy="30%" r="78%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="35%" stopColor="#7C3AED" />
            <stop offset="78%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </radialGradient>
          <radialGradient id="nOrbL" cx="34%" cy="28%" r="80%">
            <stop offset="0%" stopColor="#DDD6FE" />
            <stop offset="55%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#312E81" />
          </radialGradient>
          <radialGradient id="nOrbR" cx="36%" cy="28%" r="80%">
            <stop offset="0%" stopColor="#BFDBFE" />
            <stop offset="55%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </radialGradient>
          <radialGradient id="nAura" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#6366F1" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="nArc"
            x1="0"
            y1="0"
            x2="80"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="nGloss" cx="40%" cy="22%" r="32%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Soft aura */}
        <circle cx="40" cy="44" r="34" fill="url(#nAura)" />
        {/* Connecting arcs */}
        <g
          stroke="url(#nArc)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        >
          <path d="M19 22 C 23 36, 32 42, 40 44" />
          <path d="M61 22 C 57 36, 48 42, 40 44" />
        </g>
        {/* Left satellite */}
        <g>
          <circle cx="19" cy="22" r="9" fill="url(#nOrbL)" />
          <ellipse
            cx="16.5"
            cy="18.5"
            rx="3.4"
            ry="2.2"
            fill="#FFFFFF"
            opacity="0.55"
          />
        </g>
        {/* Right satellite */}
        <g>
          <circle cx="61" cy="22" r="9" fill="url(#nOrbR)" />
          <ellipse
            cx="58.6"
            cy="18.5"
            rx="3.4"
            ry="2.2"
            fill="#FFFFFF"
            opacity="0.55"
          />
        </g>
        {/* Center orb */}
        <g>
          <circle cx="40" cy="48" r="16" fill="url(#nOrbCenter)" />
          <ellipse cx="36" cy="40" rx="9" ry="5.5" fill="url(#nGloss)" />
          <path
            d="M52 54 A 16 16 0 0 1 36 63"
            stroke="#FFFFFF"
            strokeOpacity="0.18"
            strokeWidth="1"
            fill="none"
          />
        </g>
      </svg>
    </span>
  );
}

/**
 * Full lockup used in the navbar / footer / hero corners.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="AI Minds — home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-ai-minds.png"
        alt="AI Minds"
        width={120}
        height={40}
        style={{ objectFit: "contain", height: 36, width: "auto", filter: "brightness(0) invert(1)" }}
      />
    </Link>
  );
}
