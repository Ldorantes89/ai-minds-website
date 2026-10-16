"use client";

import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

const EN = {
  title: "Book your free\n15-min audit.",
  sub: "We show you exactly how many calls you're losing and what it's costing you. No pitch. No commitment. Just the numbers.",
  cta: "Book Free Audit",
  phone: "Or call / text: (214) 810-0799",
  note: "Luis Dorantes · AI Minds · Dallas, TX",
};

const ES = {
  title: "Agenda tu auditoría\ngratis de 15 min.",
  sub: "Te mostramos exactamente cuántas llamadas estás perdiendo y cuánto te está costando. Sin presión. Sin compromiso. Solo los números.",
  cta: "Agenda Auditoría Gratis",
  phone: "O llama / manda texto: (214) 810-0799",
  note: "Luis Dorantes · AI Minds · Dallas, TX",
};

export function V2Cta({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#000000" }} className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8 text-center">
        {/* Green glow */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-20" style={{ background: "radial-gradient(ellipse, #22C55E 0%, transparent 70%)" }} />

        <h2 className="font-black text-white whitespace-pre-line relative" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
          {t.title}
        </h2>
        <p className="mt-6 text-[1rem] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
          {t.sub}
        </p>

        <a
          href={site.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full font-bold transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ background: "#22C55E", color: "#000000", padding: "18px 44px", fontSize: "1.05rem" }}
        >
          {t.cta}
          <ArrowRight className="h-5 w-5" />
        </a>

        <p className="mt-6 text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
          <Phone className="inline h-3.5 w-3.5 mr-1.5" />
          {t.phone}
        </p>
        <p className="mt-2 text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>{t.note}</p>
      </div>
    </section>
  );
}
