"use client";

import { useState } from "react";
import { V2Hero } from "@/components/sections/v2/Hero";
import { V2Stats } from "@/components/sections/v2/Stats";
import { V2Agents } from "@/components/sections/v2/Agents";
import { V2HowItWorks } from "@/components/sections/v2/HowItWorks";
import { V2Pricing } from "@/components/sections/v2/Pricing";
import { V2Faq } from "@/components/sections/v2/Faq";
import { V2Cta } from "@/components/sections/v2/Cta";

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <>
      {/* Floating lang toggle */}
      <div
        className="fixed bottom-5 right-5 z-50 flex rounded-full overflow-hidden shadow-lg"
        style={{ border: "1px solid rgba(255,255,255,0.2)" }}
      >
        {(["en", "es"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className="px-4 py-2 text-[12px] font-black uppercase tracking-widest transition-all"
            style={{
              background: lang === l ? "#F97316" : "#0F2044",
              color: lang === l ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <V2Hero lang={lang} />
      <V2Stats lang={lang} />
      <V2Agents lang={lang} />
      <V2HowItWorks lang={lang} />
      <V2Pricing lang={lang} />
      <V2Faq lang={lang} />
      <V2Cta lang={lang} />
    </>
  );
}
