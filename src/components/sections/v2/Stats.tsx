"use client";

const EN = {
  label: "The numbers don't lie",
  stats: [
    { number: "3–5", unit: "missed calls/day", desc: "Average for a 5-person HVAC company" },
    { number: "67%", unit: "never call back", desc: "They call your competitor instead" },
    { number: "$18K", unit: "lost every month", desc: "At $400/job avg × 5 missed calls/day" },
    { number: "$199", unit: "/month", desc: "What Bella costs. Pays for itself in 1 job." },
  ],
};

const ES = {
  label: "Los números no mienten",
  stats: [
    { number: "3–5", unit: "llamadas perdidas/día", desc: "Promedio en una empresa HVAC de 5 personas" },
    { number: "67%", unit: "nunca vuelven a llamar", desc: "Llaman a tu competencia en cambio" },
    { number: "$18K", unit: "perdidos cada mes", desc: "A $400/trabajo × 5 llamadas perdidas/día" },
    { number: "$199", unit: "/mes", desc: "Lo que cuesta Bella. Se paga con 1 trabajo." },
  ],
};

export function V2Stats({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#111111" }} className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] mb-12" style={{ color: "rgba(255,255,255,0.3)" }}>
          {t.label}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
          {t.stats.map((s, i) => (
            <div
              key={i}
              className="p-8 text-center"
              style={{ background: "#111111" }}
            >
              <p
                className="font-black leading-none tabular-nums"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  color: i === 3 ? "#22C55E" : i < 3 ? "#EF4444" : "#FFFFFF",
                }}
              >
                {s.number}
              </p>
              <p className="font-semibold text-[13px] mt-3 text-white">{s.unit}</p>
              <p className="text-[12px] mt-2 leading-snug" style={{ color: "rgba(255,255,255,0.35)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
