"use client";

import {
  Stethoscope,
  Sparkles,
  Scale,
  Wrench,
  Scissors,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

type Industry = {
  icon: typeof Stethoscope;
  key: "dental" | "medspa" | "law" | "hvac" | "barber" | "realestate";
  agents: string[];
  color: string;
};

const industries: Industry[] = [
  { icon: Stethoscope, key: "dental", agents: ["Bella", "Ruby", "Max"], color: "#6366f1" },
  { icon: Sparkles, key: "medspa", agents: ["Ava", "Maya", "Bella"], color: "#ec4899" },
  { icon: Scale, key: "law", agents: ["Leo", "Max", "Vera"], color: "#f59e0b" },
  { icon: Wrench, key: "hvac", agents: ["Bella", "Leo", "Ruby"], color: "#3b82f6" },
  { icon: Scissors, key: "barber", agents: ["Bella", "Maya", "Ava"], color: "#e11d48" },
  { icon: Building2, key: "realestate", agents: ["Ava", "Leo", "Penny"], color: "#22c55e" },
];

export function Industries() {
  const t = useT();
  return (
    <Section id="industries" className="scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("industries.eyebrow")}
            title={
              <>
                {t("industries.title.a")}{" "}
                <span className="text-gradient-brand">
                  {t("industries.title.b")}
                </span>
              </>
            }
            description={t("industries.desc")}
          />
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {industries.map((ind) => (
            <RevealItem key={ind.key}>
              <div
                className="group relative h-full overflow-hidden rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,10,20,0.22)]"
                style={{ ["--c" as string]: ind.color }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 50% -10%, var(--c)33, transparent 60%)",
                  }}
                />
                <span
                  className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: `${ind.color}1F`,
                    color: ind.color,
                    border: `1px solid ${ind.color}3D`,
                  }}
                >
                  <ind.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="relative mt-5 font-display text-[18px] font-bold tracking-tightish text-ink-primary">
                  {t(`industries.${ind.key}.name` as DictKey)}
                </h3>
                <p className="relative mt-2 text-[14px] leading-relaxed text-ink-tertiary">
                  {t(`industries.${ind.key}.blurb` as DictKey)}
                </p>
                <div className="relative mt-5 flex flex-wrap items-center gap-1.5">
                  {ind.agents.map((a) => (
                    <span
                      key={a}
                      className="rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold tracking-tightish"
                      style={{
                        color: ind.color,
                        background: `${ind.color}1A`,
                        border: `1px solid ${ind.color}3D`,
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-md text-center text-[14px] text-ink-tertiary">
            {t("industries.notListed.text")}{" "}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-semibold text-brand-violet hover:text-brand-hover"
            >
              {t("industries.notListed.cta")}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
