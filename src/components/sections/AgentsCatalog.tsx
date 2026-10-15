"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { AgentCard } from "@/components/AgentCard";
import { Button } from "@/components/Button";
import { agents } from "@/lib/agents";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

export function AgentsCatalog() {
  const t = useT();

  return (
    <Section id="team" className="relative scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("agents.eyebrow")}
            title={
              <>
                {t("agents.title.a")}{" "}
                <span className="text-gradient-brand">{t("agents.title.b")}</span>
              </>
            }
            description={t("agents.desc")}
          />
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {agents.map((agent) => (
            <RevealItem key={agent.slug} className="h-full">
              <Link
                href={`/agents#${agent.slug}`}
                className="block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label={t("agents.aria.meet", {
                  name: agent.persona,
                  role: t(`agent.${agent.slug}.role` as DictKey),
                })}
              >
                <AgentCard agent={agent} />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button href="/agents" variant="secondary" size="lg">
              {t("agents.cta.full")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
