"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n/LocaleProvider";

/**
 * Mobile-only fixed bottom CTA. Appears after the user scrolls past the hero,
 * stays out of the way on desktop. Most SMB traffic is mobile — this is the
 * highest-leverage micro-conversion surface on the page.
 */
export function MobileStickyCta() {
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-300 sm:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="rounded-full border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.85)] p-1 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <a
          href={site.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient text-[14.5px] font-bold tracking-tightish text-white shadow-[0_6px_20px_-4px_rgba(124,58,237,0.65)]"
        >
          {t("cta.button")}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
