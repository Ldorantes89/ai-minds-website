"use client";

import {
  PhoneOff,
  Snowflake,
  ReceiptText,
  FileStack,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const pains: { icon: LucideIcon; id: 1 | 2 | 3 | 4 | 5 }[] = [
  { icon: PhoneOff, id: 1 },
  { icon: Snowflake, id: 2 },
  { icon: ReceiptText, id: 3 },
  { icon: FileStack, id: 4 },
  { icon: Megaphone, id: 5 },
];

export function Problem() {
  const t = useT();

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("problem.eyebrow")}
            title={t("problem.title")}
            description={t("problem.desc")}
          />
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <RevealItem key={p.id}>
                <div className="group h-full rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,10,20,0.18)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.06)] text-ink-secondary transition-colors group-hover:text-ink-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-[18px] font-bold tracking-tightish text-ink-primary">
                    {t(`problem.p${p.id}.title` as DictKey)}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-tertiary">
                    {t(`problem.p${p.id}.body` as DictKey)}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
