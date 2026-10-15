"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const faqIds = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export function Faq() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
            description={t("faq.desc")}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
            {faqIds.map((i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                    isOpen
                      ? "border-brand-violet/35 bg-[rgba(124,58,237,0.05)]"
                      : "border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] hover:border-[rgba(10,10,20,0.22)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[16px] font-bold tracking-tightish text-ink-primary sm:text-[17px]">
                      {t(`faq.q${i}` as DictKey)}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "border-brand-violet/40 bg-brand-violet/10 text-brand-violet"
                          : "border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.05)] text-ink-tertiary"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.4} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.4} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink-secondary sm:px-6 sm:pb-6">
                        {t(`faq.a${i}` as DictKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
