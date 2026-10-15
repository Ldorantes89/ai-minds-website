"use client";

import { Calendar, Mail, ArrowRight, Clock } from "lucide-react";
import { Container, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n/LocaleProvider";

export function ContactContent() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t("contact.eyebrow")}
        title={
          <>
            {t("contact.title.a")}{" "}
            <span className="text-gradient-brand">
              {t("contact.title.b")}
            </span>
          </>
        }
        description={t("contact.desc")}
      />

      <Section className="pt-12 pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <div className="flex flex-col gap-5">
                <div className="relative overflow-hidden rounded-3xl border border-brand-indigo/50 bg-[rgba(99,102,241,0.06)] p-8 shadow-glow backdrop-blur-md">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgba(124,58,237,0.3)] blur-3xl" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_4px_16px_-2px_rgba(124,58,237,0.55)]">
                    <Calendar className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h2 className="relative mt-5 font-display text-[20px] font-bold tracking-tightish text-ink-primary">
                    {t("contact.book.title")}
                  </h2>
                  <p className="relative mt-2 text-[14.5px] leading-relaxed text-ink-tertiary">
                    {t("contact.book.body")}
                  </p>
                  <Button
                    href={site.calUrl}
                    external
                    size="lg"
                    className="relative mt-6 w-full"
                  >
                    {t("cta.button")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-6 backdrop-blur-md transition-colors hover:border-[rgba(10,10,20,0.22)] hover:bg-[rgba(10,10,20,0.08)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.06)] text-brand-violet">
                    <Mail className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[15px] font-bold tracking-tightish text-ink-primary">
                      {t("contact.email.title")}
                    </p>
                    <p className="truncate text-[14px] text-ink-tertiary">
                      {site.email}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-quaternary transition-transform group-hover:translate-x-0.5 group-hover:text-ink-secondary" />
                </a>

                <div className="flex items-center gap-4 rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-6 backdrop-blur-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.1)] text-success">
                    <Clock className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-bold tracking-tightish text-ink-primary">
                      {t("contact.fast.title")}
                    </p>
                    <p className="text-[14px] text-ink-tertiary">
                      {t("contact.fast.body")}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
