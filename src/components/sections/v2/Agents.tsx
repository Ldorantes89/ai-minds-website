"use client";

import { MessageCircle, Phone, Calendar, Clock, TrendingUp, CheckCircle } from "lucide-react";
import { site } from "@/lib/site";

const EN = {
  eyebrow: "Meet your two AI employees",
  title: "Bella answers calls. Leo captures leads.",
  sub: "Both work 24/7 on WhatsApp, text, or call — whatever your customers already use. No app needed.",
  connectTitle: "How your customers reach them",
  connectSub: "No new app. No account. They just text or call — the same way they do now.",
  channels: ["WhatsApp", "SMS / Text", "Phone Call", "iMessage"],
  bella: {
    name: "Bella",
    role: "AI Phone & Text Agent",
    tagline: "Answers every call in 2 rings. Books the job. Sends confirmation.",
    color: "#F97316",
    features: [
      "100% of calls answered 24/7 — nights, weekends, holidays",
      "Books directly into your Google Calendar or scheduling app",
      "English & Spanish — natural voice, not robotic",
      "Texts a confirmation the moment the job is booked",
      "Transfers to you when it's a real emergency",
    ],
    result: "12+ jobs recovered per month from after-hours calls alone",
  },
  leo: {
    name: "Leo",
    role: "AI Lead Follow-Up Agent",
    tagline: "Texts every new lead in 60 seconds. Follows up 14 days.",
    color: "#0F2044",
    features: [
      "Texts every missed call within 60 seconds automatically",
      "Follows up at 1, 3, 7, and 14 days — most competitors stop at 1",
      "Qualifies the job and books the appointment",
      "Re-engages cold leads with seasonal promos",
      "Works over WhatsApp or SMS — whatever the customer prefers",
    ],
    result: "67% of leads who don't answer calls will respond to a text",
  },
  ctaLabel: "Get Bella & Leo working for you",
};

const ES = {
  eyebrow: "Conoce a tus dos empleados de IA",
  title: "Bella contesta llamadas. Leo captura leads.",
  sub: "Los dos trabajan 24/7 por WhatsApp, texto o llamada — lo que ya usan tus clientes. Sin app nueva.",
  connectTitle: "Cómo te contactan tus clientes",
  connectSub: "Sin app nueva. Sin cuenta. Solo mandan texto o llaman — igual que siempre.",
  channels: ["WhatsApp", "SMS / Texto", "Llamada", "iMessage"],
  bella: {
    name: "Bella",
    role: "Agente de Llamadas y Texto con IA",
    tagline: "Contesta cada llamada en 2 timbres. Agenda el trabajo. Manda confirmación.",
    color: "#F97316",
    features: [
      "100% de llamadas contestadas 24/7 — noches, fines de semana, días festivos",
      "Agenda directamente en tu Google Calendar o app de citas",
      "Inglés y Español — voz natural, no robótica",
      "Manda confirmación por texto cuando agenda el trabajo",
      "Te transfiere cuando es una emergencia real",
    ],
    result: "12+ trabajos recuperados por mes solo de llamadas nocturnas",
  },
  leo: {
    name: "Leo",
    role: "Agente de Seguimiento de Leads con IA",
    tagline: "Manda texto a cada lead en 60 segundos. Sigue por 14 días.",
    color: "#0F2044",
    features: [
      "Manda texto a cada llamada perdida en 60 segundos automáticamente",
      "Sigue al día 1, 3, 7 y 14 — la mayoría se rinde al primer intento",
      "Califica el trabajo y agenda la cita",
      "Re-activa leads fríos con promociones de temporada",
      "Trabaja por WhatsApp o SMS — lo que prefiera el cliente",
    ],
    result: "67% de leads que no contestan llamadas sí responden texto",
  },
  ctaLabel: "Contrata a Bella y Leo",
};

const whatsappIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function V2Agents({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;
  const agents = [t.bella, t.leo];

  return (
    <section style={{ background: "#ffffff" }} className="py-20 sm:py-28" id="agents">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] mb-4"
            style={{
              background: "rgba(249,115,22,0.1)",
              color: "#F97316",
              border: "1px solid rgba(249,115,22,0.25)",
            }}
          >
            {t.eyebrow}
          </span>
          <h2
            className="font-black tracking-tight text-balance"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              color: "#0F2044",
              lineHeight: 1.1,
            }}
          >
            {t.title}
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-[1rem] leading-relaxed"
            style={{ color: "#6B7280" }}
          >
            {t.sub}
          </p>
        </div>

        {/* WhatsApp/channel connect bar */}
        <div
          className="rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center gap-5"
          style={{
            background: "#F0FDF4",
            border: "1px solid rgba(37,211,102,0.3)",
          }}
        >
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
            style={{ background: "#25D366", color: "white" }}
          >
            {whatsappIcon}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-[15px]" style={{ color: "#14532D" }}>
              {t.connectTitle}
            </p>
            <p className="text-[13px] mt-0.5" style={{ color: "#166534" }}>
              {t.connectSub}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {t.channels.map((ch) => (
              <span
                key={ch}
                className="rounded-full px-3 py-1 text-[12px] font-bold"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  color: "#15803D",
                  border: "1px solid rgba(37,211,102,0.3)",
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Agent cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="rounded-3xl overflow-hidden"
              style={{
                border: `2px solid ${agent.color}33`,
                boxShadow: `0 12px 40px ${agent.color}18`,
              }}
            >
              {/* Card header */}
              <div
                className="px-7 py-6"
                style={{ background: agent.color }}
              >
                <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white opacity-75">
                  {agent.role}
                </p>
                <h3 className="text-[2rem] font-black text-white leading-none mt-1">
                  {agent.name}
                </h3>
                <p className="text-[14px] text-white opacity-85 mt-2 leading-snug">
                  {agent.tagline}
                </p>
              </div>

              {/* Features */}
              <div className="px-7 py-6" style={{ background: "#FAFAFA" }}>
                <ul className="flex flex-col gap-3">
                  {agent.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle
                        className="h-4 w-4 mt-0.5 shrink-0"
                        style={{ color: agent.color }}
                      />
                      <span className="text-[13.5px] leading-snug" style={{ color: "#374151" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result banner */}
              <div
                className="px-7 py-4 flex items-center gap-2"
                style={{
                  background: `${agent.color}12`,
                  borderTop: `1px solid ${agent.color}22`,
                }}
              >
                <TrendingUp className="h-4 w-4 shrink-0" style={{ color: agent.color }} />
                <p className="text-[13px] font-semibold" style={{ color: agent.color }}>
                  {agent.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={site.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl font-bold text-white transition-all hover:opacity-90"
            style={{
              background: "#F97316",
              padding: "16px 36px",
              fontSize: "1rem",
              boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
            }}
          >
            {t.ctaLabel}
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
