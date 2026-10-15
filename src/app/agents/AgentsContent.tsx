"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { Industries } from "@/components/sections/Industries";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Avatar } from "@/components/Avatar";
import { agents } from "@/lib/agents";
import { alpha } from "@/lib/color";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

export function AgentsContent() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t("agentsPage.eyebrow")}
        title={
          <>
            {t("agentsPage.title.a")}{" "}
            <span className="text-gradient-brand">
              {t("agentsPage.title.b")}
            </span>
            {t("agentsPage.title.c")}
          </>
        }
        description={t("agentsPage.desc")}
      />

      <Section className="pt-12">
        <Container>
          <RevealGroup className="flex flex-col gap-6" stagger={0.05}>
            {agents.map((agent, i) => {
              const role = t(`agent.${agent.slug}.role` as DictKey);
              const oneLiner = t(`agent.${agent.slug}.oneLiner` as DictKey);
              const detail = t(`agent.${agent.slug}.detail` as DictKey);
              const bullets = [
                t(`agent.${agent.slug}.b1` as DictKey),
                t(`agent.${agent.slug}.b2` as DictKey),
                t(`agent.${agent.slug}.b3` as DictKey),
              ];
              const outcomes = [
                t(`agent.${agent.slug}.o1` as DictKey),
                t(`agent.${agent.slug}.o2` as DictKey),
                t(`agent.${agent.slug}.o3` as DictKey),
              ];
              return (
                <RevealItem key={agent.slug}>
                  <article
                    id={agent.slug}
                    className="group relative scroll-mt-28 overflow-hidden rounded-[28px] border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-8 backdrop-blur-md transition-colors duration-300 hover:border-[rgba(10,10,20,0.18)] sm:p-10"
                    style={
                      {
                        ["--agent" as string]: agent.color,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
                      style={{ background: alpha(agent.color, 0.22) }}
                    />

                    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
                      <div>
                        <div className="flex items-start gap-5">
                          <Avatar agent={agent} size={88} priority={i < 2} />
                          <div className="pt-1">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h2 className="font-display text-[26px] font-extrabold tracking-tightish text-ink-primary">
                                {agent.persona}
                              </h2>
                              <span
                                className="rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold tracking-tightish"
                                style={{
                                  color: agent.color,
                                  background: alpha(agent.color, 0.14),
                                  border: `1px solid ${alpha(agent.color, 0.3)}`,
                                }}
                              >
                                {role}
                              </span>
                            </div>
                            <p
                              className="mt-1.5 text-[15px] font-medium"
                              style={{ color: agent.color }}
                            >
                              {oneLiner}
                            </p>
                          </div>
                        </div>

                        <p className="mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-ink-secondary">
                          {detail}
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
                          {bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-center gap-2 text-[14px] text-ink-tertiary"
                            >
                              <Check
                                className="h-4 w-4 shrink-0"
                                strokeWidth={2.4}
                                style={{ color: agent.color }}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className="rounded-2xl border p-6"
                        style={{
                          borderColor: alpha(agent.color, 0.25),
                          background: alpha(agent.color, 0.06),
                        }}
                      >
                        <p className="flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                          {t("agents.whatYouGet")}
                        </p>
                        <ul className="mt-4 flex flex-col gap-3">
                          {outcomes.map((o) => (
                            <li
                              key={o}
                              className="flex items-start gap-2.5 text-[14px] leading-snug text-ink-secondary"
                            >
                              <ArrowUpRight
                                className="mt-0.5 h-4 w-4 shrink-0"
                                strokeWidth={2}
                                style={{ color: agent.color }}
                              />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <span className="pointer-events-none absolute right-7 top-7 font-display text-[14px] font-bold tabular-nums tracking-tightish text-ink-quaternary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </article>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-xl text-center text-[14.5px] leading-relaxed text-ink-tertiary">
              {t("agents.noMatchNote")}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Industries />

      <CtaBanner
        title={t("agentsPage.cta.title")}
        subtitle={t("agentsPage.cta.sub")}
      />
    </>
  );
}
