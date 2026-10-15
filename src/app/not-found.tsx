"use client";

import { Container } from "@/components/primitives";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n/LocaleProvider";

export default function NotFound() {
  const t = useT();
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <Container className="text-center">
        <p className="font-display text-[72px] font-extrabold tracking-tightest text-gradient-brand">
          404
        </p>
        <h1 className="display-h3 mt-2 text-ink-primary">{t("404.title")}</h1>
        <p className="body-lg mx-auto mt-4 max-w-md">{t("404.desc")}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" size="lg">
            {t("404.home")}
          </Button>
          <Button href="/agents" variant="secondary" size="lg">
            {t("404.team")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
