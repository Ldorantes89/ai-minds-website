"use client";

import Image from "next/image";
import { MapPin, Users, Award, Briefcase, Languages } from "lucide-react";
import { Container, Section } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const credentials = [
  { icon: Briefcase, id: 1 },
  { icon: Users, id: 2 },
  { icon: Award, id: 3 },
  { icon: Languages, id: 4 },
] as const;

export function AboutContent() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={
          <>
            {t("about.title.a")}{" "}
            <span className="text-gradient-brand">{t("about.title.b")}</span>
          </>
        }
        description={t("about.desc")}
      />

      <Section className="pt-12">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
            {/* Founder card */}
            <Reveal>
              <div className="sticky top-24 overflow-hidden rounded-3xl border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.04)] backdrop-blur-md">
                <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-[rgba(10,10,20,0.1)]">
                  <div className="absolute inset-0 bg-brand-gradient-soft" />
                  <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[rgba(124,58,237,0.4)] blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[rgba(59,130,246,0.35)] blur-3xl" />
                  <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-[rgba(255,255,255,0.25)] shadow-[0_18px_40px_-10px_rgba(124,58,237,0.7)]">
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
                <div className="p-7">
                  <h2 className="font-display text-[21px] font-extrabold tracking-tightish text-ink-primary">
                    {t("about.founder.name")}
                  </h2>
                  <p className="mt-1 text-[14px] text-ink-tertiary">
                    {t("about.founder.title")}
                  </p>
                  <p className="mt-3 flex items-center gap-1.5 text-[13.5px] text-ink-tertiary">
                    <MapPin className="h-3.5 w-3.5" />
                    {t("about.founder.location")}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2 text-[13px] text-ink-secondary">
                    <li>· {t("about.founder.b1")}</li>
                    <li>· {t("about.founder.b2")}</li>
                    <li>· {t("about.founder.b3")}</li>
                    <li>· {t("about.founder.b4")}</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Story */}
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <p className="text-pretty text-[18px] leading-relaxed tracking-tightish text-ink-secondary">
                  {t("about.story1.lead")}{" "}
                  <span className="text-ink-primary">Luis Dorantes</span>
                  {t("about.story1.body")}
                </p>
                <p className="text-pretty text-[16px] leading-relaxed text-ink-tertiary">
                  {t("about.story2")}
                </p>
                <p className="text-pretty text-[16px] leading-relaxed text-ink-tertiary">
                  {t("about.story3")}
                </p>

                <blockquote className="mt-2 rounded-2xl border-l-2 border-brand-indigo bg-[rgba(99,102,241,0.06)] p-6">
                  <p className="text-pretty text-[18px] leading-relaxed tracking-tightish text-ink-secondary">
                    {t("about.mission")}
                  </p>
                  <footer className="mt-3 text-[13.5px] text-ink-quaternary">
                    {t("about.missionAttr")}
                  </footer>
                </blockquote>

                <RevealGroup
                  className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  stagger={0.06}
                >
                  {credentials.map((c) => {
                    const Icon = c.icon;
                    return (
                      <RevealItem key={c.id}>
                        <div className="h-full rounded-2xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-5 backdrop-blur-md">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-[0_4px_14px_-2px_rgba(124,58,237,0.5)]">
                            <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                          </span>
                          <h3 className="mt-4 font-display text-[14.5px] font-bold tracking-tightish text-ink-primary">
                            {t(`about.cred.c${c.id}.title` as DictKey)}
                          </h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-tertiary">
                            {t(`about.cred.c${c.id}.body` as DictKey)}
                          </p>
                        </div>
                      </RevealItem>
                    );
                  })}
                </RevealGroup>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBanner title={t("about.cta.title")} subtitle={t("about.cta.sub")} />
    </>
  );
}
