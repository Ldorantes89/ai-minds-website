"use client";

import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const EN = {
  eyebrow: "Pricing",
  title: "One flat price. No surprises.",
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
  title: "Un precio fijo. Sin sorpresas.",
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
  roiDesc: "Un trabajo recuperado = $400. Bella cuesta $199/mes. Necesitas menos de 1 trabajo al mes para que se pague solo. La mayoría de clientes recupera 5–12 trabajos en sus primeros 30 días.",
  guarantee: "Garantía de Devolución de 30 Días",
  guaranteeDesc: "¿No estás feliz en 30 días? Devolución completa. Sin preguntas. Sin llamadas incómodas.",
};

export function V2Pricing({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#EFF6FF" }} className="py-20 sm:py-28" id="pricing">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] mb-4"
            style={{
              background: "rgba(37,99,235,0.1)",
              color: "#2563EB",
              border: "1px solid rgba(37,99,235,0.25)",
            }}
          >
            {t.eyebrow}
          </span>
          <h2
            className="font-black tracking-tight text-balance"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#0F1F35", lineHeight: 1.1 }}
          >
            {t.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Pricing card */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: "2px solid #2563EB",
              boxShadow: "0 16px 48px rgba(37,99,235,0.2)",
            }}
          >
            <div
              className="px-8 py-7"
              style={{ background: "#2563EB" }}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-black text-white" style={{ fontSize: "3.5rem", lineHeight: 1 }}>
                  {t.setup}
                </span>
                <span className="text-white opacity-80 font-semibold text-[14px]">
                  {t.setupLabel}
                </span>
              </div>
              <p className="text-white opacity-90 font-bold text-[15px] mt-1">
                {t.monthly}{" "}
                <span className="opacity-75 font-normal">{t.monthlyLabel}</span>
              </p>
              <p className="text-white opacity-65 text-[12px] mt-1">{t.after}</p>
            </div>

            <div className="px-8 py-7" style={{ background: "#fff" }}>
              <ul className="flex flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 shrink-0"
                      style={{ color: "#2563EB" }}
                    />
                    <span className="text-[13.5px]" style={{ color: "#374151" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={site.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-xl font-bold text-white transition-all hover:opacity-90 w-full"
                style={{
                  background: "#0F1F35",
                  padding: "15px 24px",
                  fontSize: "0.95rem",
                }}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ROI + Guarantee */}
          <div className="flex flex-col gap-6">
            {/* ROI */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: "#0F1F35",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="font-black text-white text-[17px] mb-3">
                {t.roiTitle}
              </p>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {t.roiDesc}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { n: "$400", l: lang === "es" ? "1 trabajo" : "1 job" },
                  { n: "$199", l: lang === "es" ? "Bella/mes" : "Bella/mo" },
                  { n: "10×", l: lang === "es" ? "retorno típico" : "typical ROI" },
                ].map((s) => (
                  <div key={s.n} className="text-center rounded-xl p-3" style={{ background: "rgba(37,99,235,0.12)" }}>
                    <p className="font-black text-[1.4rem]" style={{ color: "#2563EB" }}>{s.n}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div
              className="rounded-2xl p-7 flex items-start gap-4"
              style={{
                background: "#F0FDF4",
                border: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              <ShieldCheck className="h-8 w-8 shrink-0 mt-0.5" style={{ color: "#16A34A" }} />
              <div>
                <p className="font-black text-[16px]" style={{ color: "#14532D" }}>
                  {t.guarantee}
                </p>
                <p className="text-[13px] mt-2 leading-relaxed" style={{ color: "#166534" }}>
                  {t.guaranteeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
