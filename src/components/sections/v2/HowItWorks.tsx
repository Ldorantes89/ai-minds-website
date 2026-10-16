"use client";

const EN = {
  eyebrow: "How it works",
  title: "Live in 5 days. We handle everything.",
  steps: [
    {
      num: "01",
      time: "Today",
      title: "Free 15-min audit",
      desc: "We show you exactly how many calls you're losing per week and what it's costing you. No pitch. No commitment.",
    },
    {
      num: "02",
      time: "Days 1–5",
      title: "We build & train Bella",
      desc: "We connect Bella to your phone system and train her on your services, pricing, service area, and schedule. You approve everything before it goes live.",
    },
    {
      num: "03",
      time: "Day 5",
      title: "Bella goes live",
      desc: "Every call answered in 2 rings. Every job booked. You get a morning summary text of everything that happened overnight.",
    },
  ],
  dashboard: "Your dashboard",
  dashboardDesc: "See every call, every booking, and every lead in real time — from your phone or computer.",
};

const ES = {
  eyebrow: "Cómo funciona",
  title: "En vivo en 5 días. Nosotros nos encargamos de todo.",
  steps: [
    {
      num: "01",
      time: "Hoy",
      title: "Auditoría gratis de 15 min",
      desc: "Te mostramos exactamente cuántas llamadas pierdes por semana y cuánto te está costando. Sin presión. Sin compromiso.",
    },
    {
      num: "02",
      time: "Días 1–5",
      title: "Construimos y entrenamos a Bella",
      desc: "Conectamos a Bella a tu sistema telefónico y la entrenamos con tus servicios, precios, área de servicio y horario. Tú apruebas todo antes de que salga en vivo.",
    },
    {
      num: "03",
      time: "Día 5",
      title: "Bella sale en vivo",
      desc: "Cada llamada contestada en 2 timbres. Cada trabajo agendado. Recibes un resumen por texto cada mañana de todo lo que pasó en la noche.",
    },
  ],
  dashboard: "Tu panel de control",
  dashboardDesc: "Ve cada llamada, cada reservación y cada lead en tiempo real — desde tu celular o computadora.",
};

export function V2HowItWorks({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#0F1F35" }} className="py-20 sm:py-28" id="how-it-works">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] mb-4"
            style={{
              background: "rgba(37,99,235,0.15)",
              color: "#2563EB",
              border: "1px solid rgba(37,99,235,0.3)",
            }}
          >
            {t.eyebrow}
          </span>
          <h2
            className="font-black tracking-tight text-white text-balance"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", lineHeight: 1.1 }}
          >
            {t.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {t.steps.map((step, i) => (
            <div
              key={step.num}
              className="relative rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Connector line */}
              {i < 2 && (
                <div
                  className="hidden sm:block absolute top-10 -right-3 w-6 h-0.5 z-10"
                  style={{ background: "#2563EB" }}
                />
              )}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-black"
                  style={{
                    fontSize: "3rem",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {step.num}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-bold"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    color: "#2563EB",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  {step.time}
                </span>
              </div>
              <h3
                className="font-black text-white text-[17px] mb-2"
              >
                {step.title}
              </h3>
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dashboard callout */}
        <div
          className="rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
          style={{
            background: "rgba(37,99,235,0.1)",
            border: "1px solid rgba(37,99,235,0.25)",
          }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl mx-auto sm:mx-0"
            style={{ background: "rgba(37,99,235,0.2)" }}
          >
            📊
          </div>
          <div>
            <p className="font-black text-white text-[17px]">{t.dashboard}</p>
            <p
              className="text-[13.5px] mt-1 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {t.dashboardDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
