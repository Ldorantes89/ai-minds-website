"use client";

import Image from "next/image";
import {
  MapPin,
  MessageCircle,
  Quote,
  Star,
  Award,
  Users,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const statKeys: { value: DictKey; label: DictKey; sub: DictKey }[] = [
  { value: "case.stat1.value", label: "case.stat1.label", sub: "case.stat1.sub" },
  { value: "case.stat2.value", label: "case.stat2.label", sub: "case.stat2.sub" },
  { value: "case.stat3.value", label: "case.stat3.label", sub: "case.stat3.sub" },
  { value: "case.stat4.value", label: "case.stat4.label", sub: "case.stat4.sub" },
];

export function CaseStudy() {
  const t = useT();

  return (
    <Section className="relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("case.eyebrow")}
            title={
              <>
                {t("case.title.a")}{" "}
                <span className="text-gradient-brand">
                  {t("case.title.b")}
                </span>
              </>
            }
            description={t("case.desc")}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14 overflow-hidden rounded-[28px] border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.04)] backdrop-blur-md">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgba(99,102,241,0.3)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[rgba(124,58,237,0.22)] blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
              <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_4px_16px_-2px_rgba(99,102,241,0.6)]">
                      <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-display text-[17px] font-bold tracking-tightish text-ink-primary">
                        {t("case.brand")}
                      </p>
                      <p className="flex items-center gap-1.5 text-[13px] text-ink-tertiary">
                        <MapPin className="h-3.5 w-3.5" />
                        {t("case.location")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Quote
                      className="h-7 w-7 text-brand-indigo/70"
                      fill="currentColor"
                    />
                    <p className="mt-4 text-pretty text-[19px] leading-relaxed tracking-tightish text-ink-secondary sm:text-[21px]">
                      {t("case.quote")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[rgba(99,102,241,0.4)]">
                      <Image
                        src="/avatars/bella.png"
                        alt="Bella"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[13.5px] font-bold tracking-tightish text-ink-primary">
                        {t("case.poweredBy")}
                      </p>
                      <p className="text-[12px] text-ink-tertiary">
                        {t("case.poweredByRole")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.06)] px-3 py-1 text-[12px] font-medium text-ink-tertiary">
                      <Star
                        className="h-3 w-3 text-amber-300"
                        fill="currentColor"
                      />
                      {t("case.rating")}
                    </span>
                    <span className="rounded-full border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.1)] px-3 py-1 text-[12px] font-medium text-success">
                      {t("case.live")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px border-t border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] lg:border-l lg:border-t-0">
                {statKeys.map((s, i) => (
                  <div key={i} className="px-6 py-6 sm:px-7 sm:py-7">
                    <p className="font-display text-[28px] font-extrabold leading-none tracking-tightest text-ink-primary">
                      {t(s.value)}
                    </p>
                    <p className="mt-2 text-[13px] font-semibold leading-snug text-ink-secondary">
                      {t(s.label)}
                    </p>
                    <p className="text-[11.5px] text-ink-quaternary">
                      {t(s.sub)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mt-6 flex flex-col items-center gap-5 rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.03)] p-6 backdrop-blur-md sm:flex-row sm:items-center sm:gap-7 sm:p-7">
            <div className="relative shrink-0">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-brand-gradient blur-2xl opacity-40"
              />
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-[rgba(255,255,255,0.2)] shadow-[0_10px_28px_-6px_rgba(124,58,237,0.55)] sm:h-20 sm:w-20">
                <Image
                  src="/founder/luis.png"
                  alt="Luis Dorantes, Founder of AI Minds"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-pretty text-[14.5px] leading-relaxed text-ink-secondary sm:text-[15.5px]">
                {t("case.founder.quote")}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-ink-tertiary">
                <span className="font-bold text-ink-primary">
                  {t("case.founder.name")}
                </span>
                <span className="text-ink-quaternary">·</span>
                <span>{t("case.founder.title")}</span>
                <span className="hidden text-ink-quaternary sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-3 w-3 text-amber-300" />
                  {t("case.founder.cred1")}
                </span>
                <span className="hidden text-ink-quaternary sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-3 w-3 text-brand-violet" />
                  {t("case.founder.cred2")}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
