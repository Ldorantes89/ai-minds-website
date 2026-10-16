"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function MobileStickyCta() {
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
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={site.calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-full items-center justify-center gap-2 rounded-full font-bold text-[15px]"
        style={{ background: "#22C55E", color: "#000000", boxShadow: "0 8px 30px rgba(34,197,94,0.4)" }}
      >
        Book Free Audit
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
