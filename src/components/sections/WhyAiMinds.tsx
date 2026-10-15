"use client";

import Image from "next/image";
import {
  HandHeart,
  Target,
  Hammer,
  ShieldCheck,
  Award,
  Users,
  Languages,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const reasons: { icon: LucideIcon; id: 1 | 2 | 3 | 4 }[] = [
  { icon: HandHeart, id: 1 },
  { icon: Target, id: 2 },
  { icon: Hammer, id: 3 },
  { icon: ShieldCheck, id: 4 },
];

export function WhyAiMinds() {
  const t = useT();

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            description={t("why.desc")}
          />
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
          stagger={0.06}
        >
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <RevealItem key={r.id}>
                <div className="group flex h-full gap-5 rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,10,20,0.18)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_4px_16px_-2px_rgba(124,58,237,0.55)]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display text-[17px] font-bold tracking-tightish text-ink-primary">
                      {t(`why.r${r.id}.title` as DictKey)}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-tertiary">
                      {t(`why.r${r.id}.body` as DictKey)}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.04)] p-8 backdrop-blur-md sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[rgba(124,58,237,0.3)] blur-3xl" />

            <div className="relative grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-brand-gradient blur-2xl opacity-50"
                  />
                  <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-[rgba(10,10,20,0.22)] shadow-[0_18px_40px_-10px_rgba(124,58,237,0.6)]">
                    <Image
                      src="/founder/luis.png"
                      alt="Luis Dorantes, Founder of AI Minds"
                      fill
                      sizes="128px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div>
                <Quote
                  className="h-6 w-6 text-brand-indigo/60"
                  fill="currentColor"
                />
                <p className="mt-3 text-pretty text-[17.5px] leading-relaxed text-ink-secondary sm:text-[19px]">
                  {t("why.founder.quote.a")}{" "}
                  <span className="font-bold text-ink-primary">
                    {t("why.founder.quote.b")}
                  </span>
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-tertiary">
                  <span className="font-bold text-ink-primary">
                    {t("why.founder.name")}
                  </span>
                  <span className="text-ink-quaternary">·</span>
                  <span>{t("why.founder.title")}</span>
                </div>
                <ul className="mt-4 flex flex-wrap items-center gap-2">
                  <li className="flex items-center gap-1.5 rounded-full border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.06)] px-3 py-1 text-[12px] font-medium text-ink-secondary">
                    <Award className="h-3.5 w-3.5 text-amber-300" />
                    {t("why.founder.cred1")}
                  </li>
                  <li className="flex items-center gap-1.5 rounded-full border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.06)] px-3 py-1 text-[12px] font-medium text-ink-secondary">
                    <Users className="h-3.5 w-3.5 text-brand-violet" />
                    {t("why.founder.cred2")}
                  </li>
                  <li className="rounded-full border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.06)] px-3 py-1 text-[12px] font-medium text-ink-secondary">
                    {t("why.founder.cred3")}
                  </li>
                  <li className="flex items-center gap-1.5 rounded-full border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.06)] px-3 py-1 text-[12px] font-medium text-ink-secondary">
                    <Languages className="h-3.5 w-3.5 text-brand-blue" />
                    {t("why.founder.cred4")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
