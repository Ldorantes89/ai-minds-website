"use client";

const EN = {
  eyebrow: "How it works",
  title: "Live in 5 days.\nWe handle everything.",
  steps: [
    { num: "01", time: "Today", title: "Free 15-min audit", desc: "We show you exactly how many calls you're losing per week and what it's costing you. No pitch. No commitment." },
    { num: "02", time: "Days 1–5", title: "We build & train Bella", desc: "We connect Bella to your phone system and train her on your services, pricing, service area, and schedule. You approve everything." },
    { num: "03", time: "Day 5", title: "Bella goes live", desc: "Every call answered in 2 rings. Every job booked. You get a morning summary text of everything that happened overnight." },
  ],
  dashboard: "Your dashboard",
  dashboardDesc: "See every call, every booking, and every lead in real time — from your phone or computer.",
};

const ES = {
  eyebrow: "Cómo funciona",
  title: "En vivo en 5 días.\nNosotros nos encargamos de todo.",
  steps: [
    { num: "01", time: "Hoy", title: "Auditoría gratis de 15 min", desc: "Te mostramos exactamente cuántas llamadas pierdes por semana y cuánto te está costando. Sin presión. Sin compromiso." },
    { num: "02", time: "Días 1–5", title: "Construimos y entrenamos a Bella", desc: "Conectamos a Bella a tu sistema telefónico y la entrenamos con tus servicios, precios, área y horario. Tú apruebas todo." },
    { num: "03", time: "Día 5", title: "Bella sale en vivo", desc: "Cada llamada contestada en 2 timbres. Cada trabajo agendado. Recibes un resumen por texto cada mañana." },
  ],
  dashboard: "Tu panel de control",
  dashboardDesc: "Ve cada llamada, cada reservación y cada lead en tiempo real — desde tu celular o computadora.",
};

export function V2HowItWorks({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#111111" }} className="py-20 sm:py-28" id="how-it-works">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
            {t.eyebrow}
          </span>
          <h2 className="font-black tracking-tight text-white whitespace-pre-line" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            {t.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {t.steps.map((step, i) => (
            <div key={step.num} className="relative rounded-2xl p-7" style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.07)" }}>
              {i < 2 && (
                <div className="hidden sm:block absolute top-10 -right-3 w-6 h-px z-10" style={{ background: "rgba(34,197,94,0.4)" }} />
              )}
              <div className="flex items-center justify-between mb-5">
                <span className="font-black text-[3rem] leading-none" style={{ color: "rgba(34,197,94,0.15)" }}>{step.num}</span>
                <span className="rounded-full px-3 py-1 text-[11px] font-semibold" style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
                  {step.time}
                </span>
              </div>
              <h3 className="font-bold text-white text-[16px] mb-2">{step.title}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5" style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)" }}>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl" style={{ background: "rgba(34,197,94,0.1)" }}>
            📊
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-white text-[16px]">{t.dashboard}</p>
            <p className="text-[13px] mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{t.dashboardDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
