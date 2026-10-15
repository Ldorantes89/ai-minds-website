"use client";

import { Lock, ShieldCheck, Database, Users, FileDown, AlertTriangle } from "lucide-react";
import { Container, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const sections = [
  { id: 1, icon: Database },
  { id: 2, icon: Lock },
  { id: 3, icon: ShieldCheck },
  { id: 4, icon: Users },
  { id: 5, icon: FileDown },
  { id: 6, icon: AlertTriangle },
] as const;

export function PrivacyContent() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t("privacy.eyebrow")}
        title={t("privacy.title")}
        description={t("privacy.desc")}
      />

      <Section className="pt-12 pb-28">
        <Container>
          <Reveal>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-ink-quaternary">
              {t("privacy.updated")}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <section
                    key={s.id}
                    className="rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md sm:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_4px_16px_-2px_rgba(124,58,237,0.55)]">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h2 className="font-display text-[19px] font-bold tracking-tightish text-ink-primary">
                          {t(`privacy.s${s.id}.title` as DictKey)}
                        </h2>
                        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
                          {t(`privacy.s${s.id}.body` as DictKey)}
                        </p>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-brand-violet/30 bg-[rgba(124,58,237,0.06)] p-7 backdrop-blur-md sm:p-8">
              <h3 className="font-display text-[17px] font-bold tracking-tightish text-ink-primary">
                {t("privacy.contact.title")}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-secondary">
                {t("privacy.contact.body")}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
