"use client";

import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { CostComparison } from "@/components/sections/CostComparison";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n/LocaleProvider";

const pilotFeatures = [
  "pricing.pilot.f1",
  "pricing.pilot.f2",
  "pricing.pilot.f3",
  "pricing.pilot.f4",
  "pricing.pilot.f5",
] as const;

type ExpandTier = { nameKey: string; priceKey: string; noteKey: string; descKey: string };
const expandTiers: ExpandTier[] = [
  { nameKey: "pricing.solo.name", priceKey: "pricing.solo.monthly", noteKey: "pricing.solo.note", descKey: "pricing.solo.headline" },
  { nameKey: "pricing.squad.name", priceKey: "pricing.squad.monthly", noteKey: "pricing.squad.note", descKey: "pricing.squad.headline" },
  { nameKey: "pricing.full.name", priceKey: "pricing.full.monthly", noteKey: "pricing.full.note", descKey: "pricing.full.headline" },
];

export function PricingContent() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t("pricing.eyebrow")}
        title={
          <>
            {t("pricing.headerTitle.a")}{" "}
            <span className="text-gradient-brand">{t("pricing.headerTitle.b")}</span>
          </>
        }
        description={t("pricing.headerDesc")}
      />

      <Section className="pt-12">
        <Container>
          {/* Single pilot card */}
          <Reveal>
            <div className="mx-auto max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-brand-indigo/50 bg-[rgba(99,102,241,0.06)] p-8 shadow-glow backdrop-blur-md sm:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-violet/20 blur-3xl"
                />

                <span className="inline-block rounded-full bg-brand-gradient px-3.5 py-1 text-[12px] font-bold tracking-tightish text-white shadow-[0_4px_14px_-2px_rgba(124,58,237,0.6)]">
                  {t("pricing.pilot.badge")}
                </span>

                <h2 className="mt-4 font-display text-[24px] font-bold tracking-tightish text-ink-primary">
                  {t("pricing.pilot.name")}
                </h2>
                <p className="mt-1.5 text-[15.5px] text-ink-secondary">
                  {t("pricing.pilot.headline")}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-[60px] font-extrabold leading-none tracking-tightest text-ink-primary">
                    {t("pricing.pilot.price")}
                  </span>
                  <span className="text-[14px] text-ink-tertiary">
                    {t("pricing.pilot.note")}
                  </span>
                </div>
                <p className="mt-2 text-[14px] font-semibold text-brand-violet">
                  {t("pricing.pilot.after")}
                </p>

                <ul className="mt-8 flex flex-col gap-3.5 border-t border-[rgba(10,10,20,0.1)] pt-7">
                  {pilotFeatures.map((fk) => (
                    <li key={fk} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[rgba(124,58,237,0.2)] text-brand-violet">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[14.5px] leading-snug text-ink-secondary">
                        {t(fk as any)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={site.calUrl}
                  external
                  variant="primary"
                  size="lg"
                  className="mt-8 w-full"
                >
                  {t("pricing.pilot.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="mt-4 text-center text-[13px] leading-relaxed text-ink-quaternary">
                  {t("pricing.pilot.auditNote")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Guarantee */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.06)] p-7 backdrop-blur-md sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgba(34,197,94,0.25)] blur-3xl" />
              <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(34,197,94,0.15)] text-success ring-1 ring-[rgba(34,197,94,0.35)]">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-[rgba(34,197,94,0.18)] px-2.5 py-0.5 text-[11.5px] font-bold uppercase tracking-[0.08em] text-success">
                    {t("pricing.guarantee.badge")}
                  </span>
                  <h3 className="mt-2 font-display text-[19px] font-bold tracking-tightish text-ink-primary sm:text-[21px]">
                    {t("pricing.guarantee.title")}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-secondary">
                    {t("pricing.guarantee.body")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* After 30 days — expand tier reference */}
          <Reveal delay={0.12}>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="h-5 w-5 text-brand-violet shrink-0" />
                <p className="text-[15px] font-semibold text-ink-primary">
                  {t("pricing.expand.title")}
                </p>
              </div>

              <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.06}>
                {expandTiers.map((tier) => (
                  <RevealItem key={tier.nameKey}>
                    <div className="rounded-2xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-5 hover:-translate-y-1 transition-transform duration-300">
                      <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                        {t(tier.nameKey as any)}
                      </p>
                      <p className="mt-2 font-display text-[28px] font-extrabold leading-none tracking-tightest text-ink-primary">
                        {t(tier.priceKey as any)}
                        <span className="text-[13px] font-normal text-ink-quaternary ml-1">/mo</span>
                      </p>
                      <p className="mt-1.5 text-[13px] text-ink-tertiary">
                        {t(tier.noteKey as any)}
                      </p>
                      <p className="mt-3 text-[13.5px] text-ink-secondary">
                        {t(tier.descKey as any)}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <p className="mt-6 text-center text-[13px] text-ink-quaternary">
                {t("pricing.expand.note")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-xl text-center text-[13.5px] leading-relaxed text-ink-quaternary">
              {t("pricing.fine")}
            </p>
          </Reveal>
        </Container>
      </Section>

      <CostComparison />
      <Faq />
      <CtaBanner />
    </>
  );
}
