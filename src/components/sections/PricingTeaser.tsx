"use client";

import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n/LocaleProvider";

export function PricingTeaser() {
  const t = useT();

  const features = [
    t("pricing.pilot.f1"),
    t("pricing.pilot.f2"),
    t("pricing.pilot.f3"),
    t("pricing.pilot.f4"),
    t("pricing.pilot.f5"),
  ];

  return (
    <Section id="pricing" className="scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("pricing.eyebrow")}
            title={
              <>
                {t("pricing.title.a")}{" "}
                <span className="text-gradient-brand">{t("pricing.title.b")}</span>
              </>
            }
            description={t("pricing.desc")}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-14 max-w-lg">
            {/* Pilot card */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-indigo/50 bg-[rgba(99,102,241,0.06)] p-8 shadow-glow backdrop-blur-md sm:p-10">
              {/* Glow blob */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-violet/20 blur-3xl"
              />

              {/* Badge */}
              <span className="inline-block rounded-full bg-brand-gradient px-3.5 py-1 text-[12px] font-bold tracking-tightish text-white shadow-[0_4px_14px_-2px_rgba(124,58,237,0.6)]">
                {t("pricing.pilot.badge")}
              </span>

              {/* Headline */}
              <h3 className="mt-4 font-display text-[22px] font-bold tracking-tightish text-ink-primary">
                {t("pricing.pilot.name")}
              </h3>
              <p className="mt-1.5 text-[15px] text-ink-secondary">
                {t("pricing.pilot.headline")}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-[56px] font-extrabold leading-none tracking-tightest text-ink-primary">
                  {t("pricing.pilot.price")}
                </span>
                <span className="text-[14px] text-ink-tertiary">
                  {t("pricing.pilot.note")}
                </span>
              </div>
              <p className="mt-2 text-[13.5px] font-medium text-brand-violet">
                {t("pricing.pilot.after")}
              </p>

              {/* Feature list */}
              <ul className="mt-7 flex flex-col gap-3 border-t border-[rgba(10,10,20,0.1)] pt-7">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[rgba(124,58,237,0.2)] text-brand-violet">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] leading-snug text-ink-secondary">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
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

              {/* Sub note */}
              <p className="mt-4 text-center text-[12.5px] leading-relaxed text-ink-quaternary">
                {t("pricing.pilot.auditNote")}
              </p>
            </div>

            {/* "Want more?" teaser */}
            <div className="mt-5 flex items-center justify-center gap-2.5 text-[13px] text-ink-quaternary">
              <Sparkles className="h-3.5 w-3.5 text-brand-violet" />
              <span>
                {t("pricing.pilot.expand")}{" "}
                <a
                  href="/pricing"
                  className="font-semibold text-brand-violet hover:text-brand-hover"
                >
                  {t("pricing.pilot.expandCta")}
                </a>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Guarantee */}
        <Reveal delay={0.12}>
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
      </Container>
    </Section>
  );
}
