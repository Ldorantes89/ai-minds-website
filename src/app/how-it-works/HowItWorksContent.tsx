"use client";

import { Clock, ShieldCheck, RefreshCw, Check, type LucideIcon } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const stepIds = [1, 2, 3, 4] as const;
const principles: { icon: LucideIcon; id: 1 | 2 | 3 }[] = [
  { icon: Clock, id: 1 },
  { icon: ShieldCheck, id: 2 },
  { icon: RefreshCw, id: 3 },
];

export function HowItWorksContent() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t("how.eyebrow")}
        title={t("how.headerTitle")}
        description={t("how.headerDesc")}
      />

      <Section className="pt-12">
        <Container>
          <RevealGroup className="relative flex flex-col gap-5" stagger={0.08}>
            {stepIds.map((i) => {
              const gets: DictKey[] = [
                `how.s${i}.gets.1` as DictKey,
                `how.s${i}.gets.2` as DictKey,
                `how.s${i}.gets.3` as DictKey,
              ];
              return (
                <RevealItem key={i}>
                  <div className="group rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md transition-all duration-300 hover:border-[rgba(10,10,20,0.18)] sm:p-9">
                    <div className="grid gap-7 lg:grid-cols-[auto_1fr_1.2fr] lg:items-start lg:gap-10">
                      {/* Number + label */}
                      <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-3">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-[20px] font-extrabold tabular-nums tracking-tightish text-white shadow-[0_6px_20px_-4px_rgba(124,58,237,0.6)]">
                          {i}
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink-quaternary">
                            {t(`how.s${i}.label` as DictKey)}
                          </span>
                          <span className="rounded-full border border-brand-violet/30 bg-[rgba(124,58,237,0.08)] px-2.5 py-0.5 text-[11.5px] font-semibold tracking-tightish text-brand-violet">
                            {t(`how.s${i}.dur` as DictKey)}
                          </span>
                        </div>
                      </div>

                      {/* Title + what we do */}
                      <div>
                        <h2 className="font-display text-[20px] font-bold tracking-tightish text-ink-primary">
                          {t(`how.s${i}.title` as DictKey)}
                        </h2>
                        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-tertiary">
                          {t(`how.s${i}.body` as DictKey)}
                        </p>
                      </div>

                      {/* What you get */}
                      <div className="rounded-2xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.03)] p-5">
                        <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-ink-quaternary">
                          {t("how.getsLabel")}
                        </p>
                        <ul className="mt-3 flex flex-col gap-2.5">
                          {gets.map((gk) => (
                            <li key={gk} className="flex items-start gap-2.5">
                              <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-success">
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                              <span className="text-[13.5px] leading-snug text-ink-secondary">
                                {t(gk)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("how.principles.eyebrow")}
              title={t("how.principles.title")}
              description={t("how.principles.desc")}
            />
          </Reveal>
          <RevealGroup
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
            stagger={0.06}
          >
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <RevealItem key={p.id}>
                  <div className="h-full rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,10,20,0.18)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_4px_16px_-2px_rgba(124,58,237,0.55)]">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-display text-[17px] font-bold tracking-tightish text-ink-primary">
                      {t(`how.p${p.id}.title` as DictKey)}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-tertiary">
                      {t(`how.p${p.id}.body` as DictKey)}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
