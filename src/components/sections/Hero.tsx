"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/primitives";
import { Avatar } from "@/components/Avatar";
import { HeroChatDemo } from "@/components/HeroChatDemo";
import { agents, type Agent } from "@/lib/agents";
import { site } from "@/lib/site";
import { alpha } from "@/lib/color";
import { useT } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const reduce = useReducedMotion();
  const t = useT();
  const trust = [t("hero.trust1"), t("hero.trust2"), t("hero.trust3")];

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Massive ambient color blobs — Sintra-grade bloom */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[120px] opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.20), transparent 65%)",
          }}
        />
        <div
          className="absolute left-[8%] top-[18%] h-[320px] w-[320px] rounded-full blur-[100px] opacity-50"
          style={{ background: "rgba(236,72,153,0.18)" }}
        />
        <div
          className="absolute right-[8%] top-[22%] h-[320px] w-[320px] rounded-full blur-[100px] opacity-50"
          style={{ background: "rgba(34,197,94,0.15)" }}
        />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(10,10,20,0.16)] bg-[rgba(10,10,20,0.06)] px-4 py-1.5 text-[13px] font-semibold tracking-tightish text-ink-secondary backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-brand-violet" />
              {t("hero.pill")}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="display-h1 mt-7 max-w-5xl text-balance text-ink-primary"
          >
            {t("hero.h1.a")}{" "}
            <span className="text-gradient-brand">{t("hero.h1.b")}</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="body-lg mt-6 max-w-2xl text-pretty text-ink-secondary"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            {...fade(0.24)}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href={site.calUrl} external size="lg">
              {t("hero.cta.primary")}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#team" variant="secondary" size="lg">
              {t("hero.cta.secondary")}
            </Button>
          </motion.div>

          <motion.ul
            {...fade(0.32)}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] font-medium text-ink-tertiary"
          >
            {trust.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-ink-quaternary" />
                )}
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <AvatarCluster reduce={!!reduce} />

        {/* Live demo chat — see Ava reply in real time */}
        <motion.div
          {...fade(0.5)}
          className="relative mt-16 hidden flex-col items-center sm:flex"
        >
          <p className="mb-5 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink-quaternary">
            {t("hero.chatLabel")}
          </p>
          <HeroChatDemo />
        </motion.div>

        {/* Mobile chat demo */}
        <motion.div
          {...fade(0.5)}
          className="relative mt-10 flex flex-col items-center sm:hidden"
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-quaternary">
            {t("hero.chatLabelMobile")}
          </p>
          <HeroChatDemo />
        </motion.div>

        {/* Mobile compact row */}
        <motion.div
          {...fade(0.4)}
          className="relative mt-12 grid grid-cols-4 gap-x-3 gap-y-4 sm:hidden"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient-soft blur-3xl" />
          {agents.map((agent) => (
            <div
              key={agent.slug}
              className="relative flex flex-col items-center gap-1.5"
            >
              <Avatar agent={agent} size={64} showMonogram={false} />
              <span className="text-[11px] font-semibold text-ink-secondary">
                {agent.persona}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

/**
 * Big floating cluster — 8 characters scattered in an arc.
 * Each character gets a name chip directly under it.
 * Sizes and positions chosen to read as a "team huddle" around the headline.
 */
type Position = {
  left: string;
  top: string;
  size: number;
  float: number;
  delay: number;
};

const positions: Position[] = [
  { left: "4%", top: "2%", size: 110, float: 6.0, delay: 0 },
  { left: "20%", top: "58%", size: 96, float: 7.5, delay: 0.4 },
  { left: "38%", top: "-2%", size: 126, float: 6.5, delay: 0.8 },
  { left: "58%", top: "52%", size: 104, float: 7.0, delay: 0.2 },
  { left: "76%", top: "4%", size: 120, float: 6.2, delay: 0.6 },
  { left: "92%", top: "56%", size: 92, float: 8.0, delay: 1.0 },
  { left: "12%", top: "30%", size: 86, float: 7.2, delay: 1.2 },
  { left: "70%", top: "30%", size: 90, float: 6.8, delay: 0.5 },
];

function AvatarCluster({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto mt-20 hidden h-[440px] max-w-6xl sm:block"
    >
      {/* central soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient-soft blur-3xl" />

      {agents.map((agent, i) => {
        const p = positions[i];
        return (
          <FloatingAgent
            key={agent.slug}
            agent={agent}
            position={p}
            reduce={reduce}
          />
        );
      })}
    </motion.div>
  );
}

function FloatingAgent({
  agent,
  position,
  reduce,
}: {
  agent: Agent;
  position: Position;
  reduce: boolean;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left: position.left, top: position.top }}
      animate={reduce ? {} : { y: [0, -14, 0] }}
      transition={{
        duration: position.float,
        repeat: Infinity,
        ease: "easeInOut",
        delay: position.delay,
      }}
    >
      <div className="flex -translate-x-1/2 flex-col items-center gap-2">
        <Avatar
          agent={agent}
          size={position.size}
          showMonogram={false}
          priority
        />
        <span
          className="rounded-full border px-2.5 py-0.5 text-[11.5px] font-semibold tracking-tightish backdrop-blur"
          style={{
            color: agent.color,
            background: alpha(agent.color, 0.12),
            borderColor: alpha(agent.color, 0.35),
          }}
        >
          {agent.persona}
        </span>
      </div>
    </motion.div>
  );
}
