"use client";

import { Container, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const sectionIds = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export function TermsContent() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t("terms.eyebrow")}
        title={t("terms.title")}
        description={t("terms.desc")}
      />

      <Section className="pt-12 pb-28">
        <Container>
          <Reveal>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-ink-quaternary">
              {t("terms.updated")}
            </p>
            <div className="mt-10 flex flex-col gap-10">
              {sectionIds.map((i) => (
                <section key={i}>
                  <h2 className="font-display text-[20px] font-bold tracking-tightish text-ink-primary">
                    {i}. {t(`terms.s${i}.title` as DictKey)}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                    {t(`terms.s${i}.body` as DictKey)}
                  </p>
                </section>
              ))}
            </div>
            <p className="mt-12 text-[13px] text-ink-quaternary">
              {t("terms.contact")}
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
