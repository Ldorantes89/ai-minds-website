"use client";

import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

const EN = {
  title: "Book your free 15-min audit.",
  sub: "We show you exactly how many calls you're losing and what it's costing you. No pitch. No commitment. Just the numbers.",
  cta: "Book Free Audit",
  phone: "Or call / text: (214) 810-0799",
  note: "Luis Dorantes · AI Minds · Dallas, TX",
};

const ES = {
  title: "Agenda tu auditoría gratis de 15 min.",
  sub: "Te mostramos exactamente cuántas llamadas estás perdiendo y cuánto te está costando. Sin presión. Sin compromiso. Solo los números.",
  cta: "Agenda Auditoría Gratis",
  phone: "O llama / manda texto: (214) 810-0799",
  note: "Luis Dorantes · AI Minds · Dallas, TX",
};

export function V2Cta({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#0F1F35" }} className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8 text-center">
        <h2
          className="font-black text-white text-balance"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.05 }}
        >
          {t.title}
        </h2>
        <p
          className="mt-5 text-[1rem] leading-relaxed max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {t.sub}
        </p>

        <a
          href={site.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl font-bold text-white transition-all hover:opacity-90"
          style={{
            background: "#2563EB",
            padding: "17px 40px",
            fontSize: "1.05rem",
            boxShadow: "0 12px 32px rgba(37,99,235,0.45)",
          }}
        >
          {t.cta}
          <ArrowRight className="h-5 w-5" />
        </a>

        <p
          className="mt-5 text-[13px] font-semibold"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <Phone className="inline h-3.5 w-3.5 mr-1.5" />
          {t.phone}
        </p>

        <p
          className="mt-2 text-[12px]"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {t.note}
        </p>
      </div>
    </section>
  );
}
