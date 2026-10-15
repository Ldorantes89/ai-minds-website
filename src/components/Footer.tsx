"use client";

import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { LogoMark } from "./Logo";
import { Container } from "./primitives";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const productLinks: { href: string; key: DictKey }[] = [
  { href: "/agents", key: "nav.agents" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/how-it-works", key: "nav.howItWorks" },
];
const companyLinks: { href: string; key: DictKey }[] = [
  { href: "/about", key: "footer.about" },
  { href: "/contact", key: "footer.contact" },
  { href: "/privacy", key: "footer.privacy" },
  { href: "/terms", key: "footer.terms" },
];

function TikTok({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.1v12.4a2.5 2.5 0 1 1-2.5-2.5c.27 0 .53.04.78.12v-3.2a5.7 5.7 0 0 0-.78-.05 5.66 5.66 0 1 0 5.66 5.66V9.2a7.3 7.3 0 0 0 4.2 1.33V7.4a4.28 4.28 0 0 1-3.2-1.58Z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTok },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
];

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(10,10,20,0.1)]">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-[16px] font-bold tracking-tightish text-ink-primary">
                AI Minds
              </span>
            </Link>
            <p className="max-w-xs text-[14px] leading-relaxed text-ink-tertiary">
              {t("footer.tagline")}
            </p>
            <div className="mt-1 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(10,10,20,0.1)] text-ink-tertiary transition-colors hover:border-brand-indigo/50 hover:bg-[rgba(124,58,237,0.12)] hover:text-ink-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="text-[13px] font-semibold tracking-tightish text-ink-primary">
              {t("footer.product")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-ink-tertiary transition-colors hover:text-ink-primary"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="text-[13px] font-semibold tracking-tightish text-ink-primary">
              {t("footer.company")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-ink-tertiary transition-colors hover:text-ink-primary"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="text-[13px] font-semibold tracking-tightish text-ink-primary">
              {t("footer.getStarted")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={site.calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-ink-tertiary transition-colors hover:text-ink-primary"
                >
                  {t("nav.book")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[14px] text-ink-tertiary transition-colors hover:text-ink-primary"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[rgba(10,10,20,0.1)] pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-quaternary">
            {t("footer.copyright", { year })}
          </p>
          <p className="text-[13px] text-ink-quaternary">
            {t("footer.tagline")} · ai-minds.ai
          </p>
        </div>
      </Container>
    </footer>
  );
}
