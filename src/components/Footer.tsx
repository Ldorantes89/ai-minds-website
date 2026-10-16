"use client";

import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { site } from "@/lib/site";

function TikTok({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
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

const productLinks = [
  { href: "#agents", label: "Agents" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "How it works" },
];

const companyLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: `mailto:${site.email}`, label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img
                src="/logo-ai-minds.png"
                alt="AI Minds"
                style={{ height: 28, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="max-w-xs text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              AI answering agents for HVAC & Plumbing companies in Dallas, TX. Never miss a service call.
            </p>
            <div className="mt-1 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              Product
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              Get started
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={site.calUrl} target="_blank" rel="noopener noreferrer" className="text-[14px] transition-colors hover:text-white" style={{ color: "#22C55E" }}>
                  Book free audit →
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-[14px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {year} AI Minds · Dallas, TX
          </p>
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            ai-minds.ai
          </p>
        </div>
      </div>
    </footer>
  );
}
