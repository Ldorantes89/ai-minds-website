"use client";

import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const stepIds = [1, 2, 3, 4] as const;

export function HowItWorks({ withHeading = true }: { withHeading?: boolean }) {
  const t = useT();

  return (
    <Section id="how-it-works" className="scroll-mt-24">
      <Container>
        {withHeading && (
          <Reveal>
            <SectionHeading
              eyebrow={t("how.eyebrow")}
              title={t("how.title")}
              description={t("how.desc")}
            />
          </Reveal>
        )}

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {stepIds.map((i) => (
            <RevealItem key={i}>
              <div className="group relative flex h-full flex-col rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,10,20,0.18)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-[15px] font-bold tabular-nums tracking-tightish text-white shadow-[0_4px_14px_-2px_rgba(124,58,237,0.6)]">
                    {i}
                  </span>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ink-quaternary">
                    {t(`how.s${i}.label` as DictKey)}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[17px] font-bold tracking-tightish text-ink-primary">
                  {t(`how.s${i}.title` as DictKey)}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-tertiary">
                  {t(`how.s${i}.body` as DictKey)}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
