"use client";

import { ShieldCheck, Zap, Lock } from "lucide-react";
import { Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

export function TrustStrip() {
  const t = useT();
  return (
    <section className="relative py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-ink-quaternary">
              {t("trust.label")}
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              <li className="flex items-center gap-2.5 text-ink-secondary opacity-75 transition-opacity hover:opacity-100">
                <AnthropicMark className="h-6 w-6" />
                <span className="font-display text-[18px] font-bold tracking-tight">
                  Anthropic
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-ink-secondary opacity-75 transition-opacity hover:opacity-100">
                <OpenAIMark className="h-6 w-6" />
                <span className="font-display text-[18px] font-bold tracking-tight">
                  OpenAI
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-ink-secondary opacity-75 transition-opacity hover:opacity-100">
                <ElevenLabsMark className="h-6 w-6" />
                <span className="font-display text-[18px] font-bold tracking-tight">
                  ElevenLabs
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-ink-secondary opacity-75 transition-opacity hover:opacity-100">
                <TwilioMark className="h-6 w-6" />
                <span className="font-display text-[18px] font-bold tracking-tight">
                  Twilio
                </span>
              </li>
            </ul>

            <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium text-ink-tertiary">
              <li className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-success" strokeWidth={2.4} />
                {t("trust.pledge1")}
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-success" strokeWidth={2.4} />
                {t("trust.pledge2")}
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-success" strokeWidth={2.4} />
                {t("trust.pledge3")}
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AnthropicMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.95 4h-2.85l5.18 16h2.85L14.95 4Zm-7.3 0L2.47 20h2.9l1.06-3.36h5.41L12.9 20h2.9L10.6 4H7.65Zm-.21 9.95 1.7-5.37 1.69 5.37H7.44Z" />
    </svg>
  );
}

function OpenAIMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22.28 9.83a5.78 5.78 0 0 0-.5-4.76 5.84 5.84 0 0 0-6.3-2.81A5.85 5.85 0 0 0 11.1.94a5.84 5.84 0 0 0-5.58 4.05A5.84 5.84 0 0 0 1.62 7.8a5.86 5.86 0 0 0 .72 6.87 5.78 5.78 0 0 0 .49 4.76 5.84 5.84 0 0 0 6.3 2.81A5.84 5.84 0 0 0 13.5 23.1a5.84 5.84 0 0 0 5.58-4.04 5.85 5.85 0 0 0 3.9-2.82 5.86 5.86 0 0 0-.72-6.86 6 6 0 0 0 .02.45ZM13.5 22.1a4.33 4.33 0 0 1-2.78-1l.14-.08 4.62-2.67a.76.76 0 0 0 .38-.66v-6.51l1.95 1.13a.07.07 0 0 1 .04.05v5.39a4.34 4.34 0 0 1-4.35 4.35Z" />
    </svg>
  );
}

function ElevenLabsMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <rect x="5" y="3" width="4" height="18" rx="1" />
      <rect x="15" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}

function TwilioMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.5" cy="8.5" r="2" />
      <circle cx="15.5" cy="8.5" r="2" />
      <circle cx="8.5" cy="15.5" r="2" />
      <circle cx="15.5" cy="15.5" r="2" />
    </svg>
  );
}
