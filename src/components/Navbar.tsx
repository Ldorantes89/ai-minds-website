"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { LocaleToggle } from "./LocaleToggle";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n/LocaleProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const navItems: { href: string; key: DictKey }[] = [
  { href: "/agents", key: "nav.agents" },
  { href: "/how-it-works", key: "nav.howItWorks" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/about", key: "nav.about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-[rgba(10,10,20,0.1)] bg-bg/60 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-3 px-6 lg:px-8">
          <Logo />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 rounded-full border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.05)] px-1.5 py-1.5 backdrop-blur md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-1.5 text-[14px] font-semibold tracking-tightish transition-colors ${
                    active
                      ? "bg-[rgba(10,10,20,0.1)] text-ink-primary"
                      : "text-ink-tertiary hover:text-ink-primary"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LocaleToggle />
            <Button href={site.calUrl} external size="sm">
              {t("nav.book")}
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <LocaleToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.05)] text-ink-secondary transition-colors hover:bg-[rgba(10,10,20,0.1)]"
              aria-label={open ? "✕" : "☰"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold tracking-tightish text-ink-secondary transition-colors hover:bg-[rgba(10,10,20,0.08)] hover:text-ink-primary"
                  >
                    {t(item.key)}
                    <ArrowRight className="h-4 w-4 text-ink-quaternary" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4">
                <Button href={site.calUrl} external size="lg" className="w-full">
                  {t("nav.book")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
