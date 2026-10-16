"use client";

const EN = {
  label: "The numbers don't lie",
  stats: [
    { number: "3–5", unit: "missed calls/day", desc: "Average for a 5-person HVAC company" },
    { number: "67%", unit: "never call back", desc: "They call your competitor instead" },
    { number: "$18K", unit: "lost every month", desc: "At $400/job avg × 5 missed calls/day" },
    { number: "199", unit: "dollars/month", desc: "What Bella costs. Pays for itself in 1 job." },
  ],
};

const ES = {
  label: "Los números no mienten",
  stats: [
    { number: "3–5", unit: "llamadas perdidas/día", desc: "Promedio en una empresa HVAC de 5 personas" },
    { number: "67%", unit: "nunca vuelven a llamar", desc: "Llaman a tu competencia en cambio" },
    { number: "$18K", unit: "perdidos cada mes", desc: "A $400/trabajo × 5 llamadas perdidas/día" },
    { number: "199", unit: "dólares/mes", desc: "Lo que cuesta Bella. Se paga con 1 trabajo." },
  ],
};

export function V2Stats({ lang }: { lang: "en" | "es" }) {
  const t = lang === "es" ? ES : EN;

  return (
    <section style={{ background: "#EFF6FF" }} className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <p
          className="text-center text-[11px] font-black uppercase tracking-[0.2em] mb-10"
          style={{ color: "#9CA3AF" }}
        >
          {t.label}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "#ffffff",
                border: i === 3 ? "2px solid #2563EB" : "1px solid #E5E7EB",
                boxShadow: i === 3 ? "0 8px 32px rgba(37,99,235,0.15)" : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <p
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  color: i === 3 ? "#2563EB" : i < 3 ? "#EF4444" : "#1E3A5F",
                }}
              >
                {i === 3 ? "$" : ""}{s.number}
              </p>
              <p
                className="font-bold text-[13px] mt-2"
                style={{ color: "#1E3A5F" }}
              >
                {s.unit}
              </p>
              <p
                className="text-[12px] mt-1.5 leading-snug"
                style={{ color: "#6B7280" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
