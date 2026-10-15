"use client";

import { X, Check, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const rowIds = [1, 2, 3, 4, 5, 6] as const;

export function CostComparison() {
  const t = useT();

  return (
    <Section id="value">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("cost.eyebrow")}
            title={
              <>
                {t("cost.title.a")}{" "}
                <span className="text-gradient-brand">{t("cost.title.b")}</span>
              </>
            }
            description={t("cost.desc")}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.03)] p-7 backdrop-blur-md sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.06)] text-ink-tertiary">
                  <X className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-ink-quaternary">
                    {t("cost.human.label")}
                  </p>
                  <p className="font-display text-[19px] font-bold tracking-tightish text-ink-secondary">
                    {t("cost.human.sub")}
                  </p>
                </div>
              </div>
              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-display text-[44px] font-extrabold tracking-tightest text-ink-secondary">
                  {t("cost.human.price")}
                </span>
                <span className="text-[14px] text-ink-quaternary">
                  {t("cost.human.period")}
                </span>
              </div>
              <ul className="mt-7 flex flex-col gap-3">
                {rowIds.map((i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between border-b border-[rgba(10,10,20,0.08)] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-[13.5px] text-ink-tertiary">
                      {t(`cost.row${i}.label` as DictKey)}
                    </span>
                    <span className="text-[14px] font-semibold text-ink-secondary">
                      {t(`cost.row${i}.human` as DictKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-brand-violet/40 bg-[rgba(124,58,237,0.06)] p-7 backdrop-blur-md shadow-glow sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[rgba(124,58,237,0.45)] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[rgba(59,130,246,0.35)] blur-3xl" />
              <div className="relative flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_4px_14px_-2px_rgba(124,58,237,0.55)]">
                  <Sparkles className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-brand-violet">
                    {t("cost.ai.label")}
                  </p>
                  <p className="font-display text-[19px] font-bold tracking-tightish text-ink-primary">
                    {t("cost.ai.sub")}
                  </p>
                </div>
              </div>
              <div className="relative mt-7 flex items-baseline gap-2">
                <span className="font-display text-[44px] font-extrabold tracking-tightest text-ink-primary">
                  {t("cost.ai.price")}
                </span>
                <span className="text-[14px] text-ink-tertiary">
                  {t("cost.ai.period")}
                </span>
              </div>
              <ul className="relative mt-7 flex flex-col gap-3">
                {rowIds.map((i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between border-b border-[rgba(10,10,20,0.1)] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-[13.5px] text-ink-tertiary">
                      {t(`cost.row${i}.label` as DictKey)}
                    </span>
                    <span className="flex items-center gap-1.5 text-[14px] font-bold text-ink-primary">
                      <Check className="h-3.5 w-3.5 text-success" strokeWidth={3} />
                      {t(`cost.row${i}.ai` as DictKey)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="relative mt-6 text-[12.5px] leading-relaxed text-ink-quaternary">
                {t("cost.note")}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
