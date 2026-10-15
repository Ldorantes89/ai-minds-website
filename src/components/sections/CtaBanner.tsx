"use client";

import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n/LocaleProvider";

export function CtaBanner({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  const t = useT();
  const finalTitle = title ?? t("cta.title");
  const finalSub = subtitle ?? t("cta.sub");

  return (
    <Section className="pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-[rgba(10,10,20,0.14)] px-8 py-16 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-brand-gradient-soft" />
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),transparent_70%)]" />
              <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[rgba(59,130,246,0.25)] blur-3xl" />
            </div>

            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <h2 className="display-h2 text-balance text-ink-primary">
                {finalTitle}
              </h2>
              <p className="body-lg mt-5 max-w-xl text-pretty">{finalSub}</p>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <Button href={site.calUrl} external size="lg">
                  {t("cta.button")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={`mailto:${site.email}`}
                  variant="secondary"
                  size="lg"
                >
                  {t("cta.emailBtn")}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
