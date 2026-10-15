"use client";

import Image from "next/image";
import { type Agent } from "@/lib/agents";
import { lighten, darken, alpha } from "@/lib/color";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

type AvatarProps = {
  agent: Agent;
  /** pixel size of the circular chip */
  size?: number;
  /** extra classes for the outer wrapper */
  className?: string;
  /** show the small monogram badge on the fallback chip */
  showMonogram?: boolean;
  priority?: boolean;
};

/**
 * Renders an agent's portrait.
 *
 * - If `agent.hasAvatar` is true, shows /avatars/{slug}.png via next/image,
 *   framed in a colored glossy ring.
 * - Otherwise renders a premium fallback: a glossy 3D "character chip" — a
 *   radial gradient in the agent's color (highlight → richer color → dark edge),
 *   inner glow, soft drop shadow in the agent color, and the agent's large white
 *   lucide icon centered with a smaller monogram.
 */
export function Avatar({
  agent,
  size = 96,
  className = "",
  showMonogram = true,
  priority = false,
}: AvatarProps) {
  const { color, icon: Icon, persona, monogram, slug } = agent;
  const t = useT();
  const role = t(`agent.${slug}.role` as DictKey);

  // Build the glossy color story for the chip.
  const highlight = lighten(color, 0.55);
  const mid = color;
  const edge = darken(color, 0.45);

  const chipBackground = `
    radial-gradient(circle at 32% 26%, ${alpha(highlight, 0.95)} 0%, ${alpha(
      mid,
      0.95
    )} 42%, ${edge} 100%)
  `;

  const iconSize = Math.round(size * 0.4);
  const monogramSize = Math.max(11, Math.round(size * 0.16));

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* soft color glow behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full blur-xl"
        style={{
          background: alpha(color, 0.55),
          transform: "scale(0.92)",
        }}
      />

      {agent.hasAvatar ? (
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: size,
            height: size,
            boxShadow: `0 0 0 2px ${alpha(highlight, 0.5)}, 0 10px 30px -6px ${alpha(
              color,
              0.6
            )}`,
          }}
        >
          <Image
            src={`/avatars/${slug}.png`}
            alt={`${persona} — ${role}`}
            fill
            sizes={`${size}px`}
            className="object-cover"
            priority={priority}
          />
          {/* gloss sheen */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 32% 22%, rgba(255,255,255,0.35), transparent 45%)",
            }}
          />
        </div>
      ) : (
        <div
          role="img"
          aria-label={`${persona} — ${role}`}
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: size,
            height: size,
            background: chipBackground,
            boxShadow: `
              inset 0 ${size * 0.04}px ${size * 0.08}px ${alpha(highlight, 0.6)},
              inset 0 -${size * 0.06}px ${size * 0.12}px ${alpha(edge, 0.7)},
              0 ${size * 0.08}px ${size * 0.22}px -${size * 0.04}px ${alpha(
                color,
                0.65
              )},
              0 0 0 1px ${alpha(highlight, 0.35)}
            `,
          }}
        >
          {/* glossy top highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              top: "7%",
              left: "12%",
              right: "12%",
              height: "42%",
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.6), transparent 70%)",
              filter: "blur(2px)",
            }}
          />
          {/* inner color glow */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              boxShadow: `inset 0 0 ${size * 0.25}px ${alpha(highlight, 0.45)}`,
            }}
          />

          {/* centered lucide icon */}
          <Icon
            className="relative z-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
            style={{ width: iconSize, height: iconSize }}
            strokeWidth={2}
            aria-hidden
          />

          {/* small monogram badge */}
          {showMonogram && (
            <span
              aria-hidden
              className="absolute z-10 flex items-center justify-center rounded-full font-display font-bold text-white"
              style={{
                bottom: "-4%",
                right: "-4%",
                width: size * 0.34,
                height: size * 0.34,
                fontSize: monogramSize,
                background: darken(color, 0.25),
                boxShadow: `0 2px 8px ${alpha(color, 0.55)}, inset 0 1px 0 ${alpha(
                  highlight,
                  0.6
                )}`,
                border: `1.5px solid ${alpha(highlight, 0.5)}`,
              }}
            >
              {monogram}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
