"use client";

import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const EN = {
  eyebrow: "Pricing",
  title: "One flat price.\nNo surprises.",
  setup: "$499",
  setupLabel: "one-time setup",
  monthly: "$199",
  monthlyLabel: "/month after 30 days",
  after: "Cancel anytime. No contract.",
  features: [
    "Bella & Leo — both AI employees fully built",
    "Trained on your services, prices & schedule",
    "English & Spanish — 24/7",
    "Works via WhatsApp, SMS, and phone call",
    "Live in 3–5 business days",
    "Morning summary text every day",
    "You approve before anything goes live",
  ],
  cta: "Start with a Free Audit",
  roiTitle: "The math is simple",
  roiDesc: "One recovered job = $400. Bella costs $199/mo. You need less than 1 job per month to break even. Most clients recover 5–12 jobs in their first 30 days.",
  guarantee: "30-Day Money-Back Guarantee",
  guaranteeDesc: "Not happy in 30 days? Full refund. No questions. No awkward calls.",
};

const ES = {
  eyebrow: "Precio",
  title: "Un precio fijo.\nSin sorpresas.",
  setup: "$499",
  setupLabel: "configuración única",
  monthly: "$199",
  monthlyLabel: "/mes después de 30 días",
  after: "Cancela cuando quieras. Sin contrato.",
  features: [
    "Bella y Leo — los dos empleados construidos",
    "Entrenados con tus servicios, precios y horario",
    "Inglés y Español — 24/7",
    "Funciona por WhatsApp, SMS y llamada",
    "En vivo en 3–5 días hábiles",
    "Resumen por texto cada mañana",
    "Tú apruebas antes de salir en vivo",
  ],
  cta: "Empieza con una Auditoría Gratis",
  roiTitle: "El cálculo es sencillo",
  roiDesc: "Un trabajo recuperado = $400. Bella cuesta $199/mes. Necesitas menos de 1 trabajo al mes para que se pague solo. La mayoría recupera 5–12 trabajos en 30 días.",
  guarantee: "Garantía de Devolución de 30 Días",
  guaranteeDesc: "¿No estás feliz en 30 días? Devolución completa. Sin preguntas. Sin llamadas incómodas.",
};

export function V2Pricing({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#000000" }} className="py-20 sm:py-28" id="pricing">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
            {t.eyebrow}
          </span>
          <h2 className="font-black tracking-tight text-white whitespace-pre-line" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            {t.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Pricing card */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(34,197,94,0.3)", background: "#111111" }}>
            <div className="px-8 py-7" style={{ borderBottom: "1px solid rgba(34,197,94,0.15)", background: "rgba(34,197,94,0.05)" }}>
              <div className="flex items-baseline gap-2">
                <span className="font-black text-white" style={{ fontSize: "3.5rem", lineHeight: 1 }}>{t.setup}</span>
                <span className="font-medium text-[14px]" style={{ color: "rgba(255,255,255,0.4)" }}>{t.setupLabel}</span>
              </div>
              <p className="font-semibold text-[15px] mt-1 text-white">
                {t.monthly} <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>{t.monthlyLabel}</span>
              </p>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>{t.after}</p>
            </div>

            <div className="px-8 py-7">
              <ul className="flex flex-col gap-3.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#22C55E" }} />
                    <span className="text-[13.5px]" style={{ color: "rgba(255,255,255,0.65)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={site.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-full font-bold transition-all hover:opacity-90 w-full"
                style={{ background: "#22C55E", color: "#000000", padding: "15px 24px", fontSize: "0.95rem" }}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ROI + Guarantee */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl p-7" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="font-bold text-white text-[17px] mb-3">{t.roiTitle}</p>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{t.roiDesc}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { n: "$400", l: lang === "es" ? "1 trabajo" : "1 job" },
                  { n: "$199", l: lang === "es" ? "Bella/mes" : "Bella/mo" },
                  { n: "10×", l: lang === "es" ? "retorno típico" : "typical ROI" },
                ].map((s) => (
                  <div key={s.n} className="text-center rounded-xl p-3" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.12)" }}>
                    <p className="font-black text-[1.4rem]" style={{ color: "#22C55E" }}>{s.n}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-7 flex items-start gap-4" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}>
              <ShieldCheck className="h-8 w-8 shrink-0 mt-0.5" style={{ color: "#22C55E" }} />
              <div>
                <p className="font-bold text-white text-[16px]">{t.guarantee}</p>
                <p className="text-[13px] mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{t.guaranteeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
