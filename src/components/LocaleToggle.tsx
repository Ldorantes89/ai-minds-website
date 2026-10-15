"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

/**
 * Small EN | ES segmented pill switch. Lives in the navbar; mobile-friendly.
 */
export function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Switch language / Cambiar idioma"
      className={`inline-flex items-center rounded-full border border-[rgba(10,10,20,0.16)] bg-[rgba(10,10,20,0.05)] p-0.5 text-[11.5px] font-bold uppercase tracking-[0.08em] backdrop-blur ${className}`}
    >
      {(["en", "es"] as const).map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`relative h-6 min-w-[28px] rounded-full px-2 transition-colors ${
              active
                ? "bg-brand-gradient text-white shadow-[0_2px_10px_-2px_rgba(124,58,237,0.55)]"
                : "text-ink-tertiary hover:text-ink-primary"
            }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
