"use client";

import { useState } from "react";
import { ArrowRight, PhoneCall, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const EN = {
  pill: "For HVAC & Plumbing Companies · Dallas, TX",
  h1a: "Stop Losing Jobs",
  h1b: "to Missed Calls.",
  sub: "Bella answers every call 24/7 — books the job, texts a confirmation, and works in English or Spanish. Your customers reach you on WhatsApp, text, or call. You wake up to a full schedule.",
  cta1: "Book a Free 15-Min Audit",
  cta2: "See How It Works",
  t1: "Answers in 2 rings",
  t2: "English & Spanish",
  t3: "Live in 5 days",
  t4: "Cancel anytime",
  missedTitle: "Tonight's missed calls",
  missedSub: "While you were on a job",
  lostLabel: "Lost to competitors",
};

const ES = {
  pill: "Para Empresas de HVAC y Plomería · Dallas, TX",
  h1a: "Deja de Perder Trabajos",
  h1b: "por Llamadas Sin Responder.",
  sub: "Bella contesta cada llamada 24/7 — agenda el trabajo, manda confirmación por texto, y trabaja en inglés o español. Tus clientes te contactan por WhatsApp, texto o llamada. Despiertas con la agenda llena.",
  cta1: "Auditoría Gratis de 15 Min",
  cta2: "Ver Cómo Funciona",
  t1: "Contesta en 2 timbres",
  t2: "Inglés y Español",
  t3: "En vivo en 5 días",
  t4: "Cancela cuando quieras",
  missedTitle: "Llamadas perdidas esta noche",
  missedSub: "Mientras estabas en un trabajo",
  lostLabel: "Perdido con competidores",
};

const missed = [
  { name: "John M.", job: "AC repair · emergency", amount: "$520" },
  { name: "Rosa G.", job: "Pipe leak · urgent", amount: "$380" },
  { name: "David L.", job: "Water heater install", amount: "$650" },
];

export function V2Hero({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section
      style={{ background: "#0F1F35" }}
      className="relative overflow-hidden pt-28 pb-0 sm:pt-36"
    >
      {/* Blue diagonal accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, #2563EB 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20">
          {/* Left — copy */}
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.4)",
                color: "#60A5FA",
              }}
            >
              <PhoneCall className="h-3 w-3" />
              {t.pill}
            </span>

            <h1
              className="font-black leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
            >
              {t.h1a}
              <br />
              <span style={{ color: "#60A5FA" }}>{t.h1b}</span>
            </h1>

            <p
              className="mt-6 leading-relaxed"
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.72)",
                maxWidth: "520px",
              }}
            >
              {t.sub}
            </p>

            {/* WhatsApp badge */}
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5"
              style={{
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.35)",
              }}
            >
              <MessageCircle
                className="h-4 w-4"
                style={{ color: "#25D366" }}
              />
              <span
                className="text-[13px] font-semibold"
                style={{ color: "#25D366" }}
              >
                {lang === "es"
                  ? "Funciona con WhatsApp · Texto · Llamada"
                  : "Works via WhatsApp · Text · Call"}
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={site.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "#2563EB",
                  padding: "14px 28px",
                  fontSize: "0.95rem",
                  boxShadow: "0 8px 24px rgba(37,99,235,0.45)",
                }}
              >
                {t.cta1}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all hover:opacity-80"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "14px 28px",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {t.cta2}
              </a>
            </div>

            {/* Trust pills */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {[t.t1, t.t2, t.t3, t.t4].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-[13px] font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "#2563EB" }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — missed calls widget */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm rounded-2xl overflow-hidden"
              style={{
                background: "#0a1628",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div>
                  <p
                    className="font-bold text-white text-[15px]"
                  >
                    {t.missedTitle}
                  </p>
                  <p
                    className="text-[12px] mt-0.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {t.missedSub}
                  </p>
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    color: "#f87171",
                    border: "1px solid rgba(239,68,68,0.3)",
                  }}
                >
                  11:47 PM
                </span>
              </div>

              {/* Missed calls */}
              <div className="p-4 flex flex-col gap-3">
                {missed.map((call) => (
                  <div
                    key={call.name}
                    className="flex items-center gap-3 rounded-xl p-3.5"
                    style={{
                      background: "rgba(239,68,68,0.07)",
                      border: "1px solid rgba(239,68,68,0.18)",
                    }}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(239,68,68,0.15)" }}
                    >
                      <PhoneCall
                        className="h-4 w-4"
                        style={{ color: "#f87171" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-semibold text-[13px] text-white"
                      >
                        {call.name}
                      </p>
                      <p
                        className="text-[11.5px] truncate"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        {call.job}
                      </p>
                    </div>
                    <span
                      className="font-bold text-[13px] shrink-0"
                      style={{ color: "#f87171" }}
                    >
                      -{call.amount}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total lost */}
              <div
                className="mx-4 mb-4 rounded-xl p-4 text-center"
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.25)",
                }}
              >
                <p
                  className="font-black text-[28px] leading-none"
                  style={{ color: "#f87171" }}
                >
                  $1,550
                </p>
                <p
                  className="text-[12px] mt-1 font-medium"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {t.lostLabel}
                </p>
              </div>

              {/* Divider with "With Bella" */}
              <div
                className="flex items-center gap-3 px-4 pb-4"
              >
                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {lang === "es" ? "Con Bella" : "With Bella"}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
              </div>

              <div
                className="mx-4 mb-4 rounded-xl p-4 text-center"
                style={{
                  background: "rgba(37,99,235,0.1)",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                <p
                  className="font-black text-[28px] leading-none"
                  style={{ color: "#60A5FA" }}
                >
                  $0
                </p>
                <p
                  className="text-[12px] mt-1 font-medium"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {lang === "es"
                    ? "Bella contestó · Trabajos agendados ✓"
                    : "Bella answered · Jobs booked ✓"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave into white */}
      <div style={{ background: "#0F1F35", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full"
          style={{ display: "block", height: "60px" }}
        >
          <path d="M0,60 L1440,60 L1440,20 Q720,-20 0,20 Z" fill="#EFF6FF" />
        </svg>
      </div>
    </section>
  );
}
