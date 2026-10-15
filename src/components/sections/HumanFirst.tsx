"use client";

import { Heart, Users, Zap } from "lucide-react";
import { Container, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

export function HumanFirst() {
  const t = useT();

  return (
    <Section id="philosophy" className="scroll-mt-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] px-6 py-14 backdrop-blur-md sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute left-1/2 top-1/2 h-96 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient-soft blur-3xl opacity-70" />
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(10,10,20,0.16)] bg-[rgba(10,10,20,0.06)] px-4 py-1.5 text-[13px] font-semibold tracking-tightish text-ink-secondary">
                <Heart className="h-3.5 w-3.5 text-brand-violet" />
                {t("human.pill")}
              </span>
              <h2 className="display-h2 mt-6 text-balance text-ink-primary">
                {t("human.title.a")}{" "}
                <span className="line-through decoration-[rgba(255,255,255,0.25)] decoration-2 underline-offset-[6px]">
                  {t("human.title.strike")}
                </span>{" "}
                {t("human.title.b")}
                <br className="hidden sm:block" />
                {t("human.title.c")}{" "}
                <span className="text-gradient-brand">
                  {t("human.title.gradient")}
                </span>
                {t("human.title.d")}
              </h2>
              <p className="body-lg mx-auto mt-5 max-w-2xl text-ink-secondary">
                {t("human.desc")}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              <div className="rounded-2xl border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.05)] p-7 text-center backdrop-blur">
                <Users
                  className="mx-auto h-7 w-7 text-ink-secondary"
                  strokeWidth={1.8}
                />
                <h3 className="mt-4 font-display text-[19px] font-bold tracking-tightish text-ink-primary">
                  {t("human.col1.title")}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-tertiary">
                  {t("human.col1.body")}
                </p>
              </div>

              <div className="flex items-center justify-center text-3xl font-extrabold text-ink-tertiary md:px-2">
                +
              </div>

              <div className="rounded-2xl border border-brand-violet/30 bg-[rgba(124,58,237,0.07)] p-7 text-center backdrop-blur">
                <span className="mx-auto inline-flex h-9 items-center justify-center rounded-full bg-brand-gradient px-3 text-[13px] font-bold text-white shadow-[0_4px_14px_-2px_rgba(124,58,237,0.55)]">
                  AI Minds
                </span>
                <h3 className="mt-4 font-display text-[19px] font-bold tracking-tightish text-ink-primary">
                  {t("human.col2.title")}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-tertiary">
                  {t("human.col2.body")}
                </p>
              </div>

              <div className="flex items-center justify-center text-3xl font-extrabold text-ink-tertiary md:px-2">
                =
              </div>

              <div className="rounded-2xl border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.05)] p-7 text-center backdrop-blur">
                <Zap
                  className="mx-auto h-7 w-7 text-brand-blue"
                  strokeWidth={1.8}
                />
                <h3 className="mt-4 font-display text-[19px] font-bold tracking-tightish text-ink-primary">
                  {t("human.col3.title")}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-tertiary">
                  {t("human.col3.body")}
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
