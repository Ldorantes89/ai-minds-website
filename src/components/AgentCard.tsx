"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { type Agent } from "@/lib/agents";
import { Avatar } from "@/components/Avatar";
import { alpha } from "@/lib/color";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

export function AgentCard({ agent }: { agent: Agent }) {
  const t = useT();
  const role = t(`agent.${agent.slug}.role` as DictKey);
  const oneLiner = t(`agent.${agent.slug}.oneLiner` as DictKey);
  const bullets = [
    t(`agent.${agent.slug}.b1` as DictKey),
    t(`agent.${agent.slug}.b2` as DictKey),
    t(`agent.${agent.slug}.b3` as DictKey),
  ];

  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(10,10,20,0.22)]"
      style={
        {
          ["--agent" as string]: agent.color,
          ["--agent-glow" as string]: alpha(agent.color, 0.45),
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 80% at 50% -10%, ${alpha(
            agent.color,
            0.22
          )}, transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 24px 60px -16px ${alpha(agent.color, 0.55)}` }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="agent-avatar relative origin-bottom transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110">
          <Avatar agent={agent} size={76} />
        </div>
        <span
          className="rounded-full px-3 py-1 text-[11.5px] font-semibold tracking-tightish"
          style={{
            color: agent.color,
            background: alpha(agent.color, 0.14),
            border: `1px solid ${alpha(agent.color, 0.3)}`,
          }}
        >
          {role}
        </span>
      </div>

      <div className="relative mt-5">
        <h3 className="font-display text-[22px] font-bold tracking-tightish text-ink-primary">
          {agent.persona}
        </h3>
        <p className="mt-1.5 text-[14.5px] leading-snug text-ink-secondary">
          {oneLiner}
        </p>
      </div>

      <ul className="relative mt-5 flex flex-col gap-2.5 border-t border-[rgba(10,10,20,0.1)] pt-5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
              style={{ background: alpha(agent.color, 0.18), color: agent.color }}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-[13.5px] leading-snug text-ink-tertiary">
              {b}
            </span>
          </li>
        ))}
      </ul>

      <span
        className="relative mt-5 inline-flex items-center gap-1 text-[13px] font-semibold tracking-tightish opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ color: agent.color }}
      >
        {t("agents.meetCta", { name: agent.persona })}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}
