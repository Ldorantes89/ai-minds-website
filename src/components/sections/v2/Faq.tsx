"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const EN = {
  eyebrow: "Questions",
  title: "Real questions. Honest answers.",
  faqs: [
    {
      q: "Will my customers know it's AI?",
      a: "We disclose it as a 'virtual assistant' — most customers just think you hired someone. If your industry requires explicit AI labels, we do that by default.",
    },
    {
      q: "Does it work with WhatsApp?",
      a: "Yes. Bella and Leo work over WhatsApp, SMS, and phone calls — whatever your customers already use. No new app, no account. They just text or call like normal.",
    },
    {
      q: "What if I already have a receptionist?",
      a: "Bella doesn't replace your receptionist — she handles after-hours, overflow calls, and nights & weekends. Your receptionist keeps their job and gets to focus on the work that needs a real person.",
    },
    {
      q: "What if the AI makes a mistake?",
      a: "Bella has guardrails. Anything risky — like emergencies, big decisions, or refunds — gets transferred to you immediately. You also approve everything before it goes live.",
    },
    {
      q: "Does it work with my scheduling software?",
      a: "Yes. Google Calendar, Housecall Pro, ServiceTitan, Jobber, Square, Acuity, and more. We wire into what you already use.",
    },
    {
      q: "How fast can I cancel?",
      a: "Any month. No contract. We export your data and configs on the way out. No fees, no penalties.",
    },
  ],
};

const ES = {
  eyebrow: "Preguntas",
  title: "Preguntas reales. Respuestas honestas.",
  faqs: [
    {
      q: "¿Mis clientes van a saber que es IA?",
      a: "Lo presentamos como un 'asistente virtual' — la mayoría de clientes simplemente piensan que contrataste a alguien. Si tu industria requiere etiquetas de IA explícitas, lo hacemos por defecto.",
    },
    {
      q: "¿Funciona con WhatsApp?",
      a: "Sí. Bella y Leo funcionan por WhatsApp, SMS y llamadas — lo que ya usan tus clientes. Sin app nueva, sin cuenta. Solo mandan texto o llaman como siempre.",
    },
    {
      q: "¿Qué pasa si ya tengo una recepcionista?",
      a: "Bella no reemplaza a tu recepcionista — ella maneja las llamadas fuera de horario, el desbordamiento y las noches y fines de semana. Tu recepcionista conserva su trabajo.",
    },
    {
      q: "¿Qué pasa si la IA comete un error?",
      a: "Bella tiene límites. Cualquier cosa arriesgada — emergencias, decisiones grandes, reembolsos — se transfiere a ti inmediatamente. También apruebas todo antes de salir en vivo.",
    },
    {
      q: "¿Funciona con mi software de citas?",
      a: "Sí. Google Calendar, Housecall Pro, ServiceTitan, Jobber, Square, Acuity y más. Lo conectamos con lo que ya usas.",
    },
    {
      q: "¿Qué tan rápido puedo cancelar?",
      a: "Cualquier mes. Sin contrato. Exportamos tus datos y configuraciones al salir. Sin cargos, sin penalizaciones.",
    },
  ],
};

export function V2Faq({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: "#ffffff" }} className="py-20 sm:py-28" id="faq">
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] mb-4"
            style={{
              background: "rgba(15,32,68,0.07)",
              color: "#0F1F35",
              border: "1px solid rgba(15,32,68,0.15)",
            }}
          >
            {t.eyebrow}
          </span>
          <h2
            className="font-black tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", color: "#0F1F35", lineHeight: 1.1 }}
          >
            {t.title}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {t.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  border: isOpen ? "2px solid #2563EB" : "1px solid #E5E7EB",
                  background: isOpen ? "#EFF6FF" : "#fff",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bold text-[15px] leading-snug"
                    style={{ color: "#0F1F35" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: isOpen ? "#2563EB" : "#F3F4F6",
                      color: isOpen ? "white" : "#6B7280",
                    }}
                  >
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-6 pb-5 text-[14px] leading-relaxed"
                      style={{ color: "#6B7280" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
