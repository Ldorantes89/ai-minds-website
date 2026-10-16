"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const navItems = [
  { href: "#agents", label: "Agents" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-[14px] font-medium transition-colors rounded-full hover:bg-white/5"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full font-semibold transition-all hover:opacity-90 text-[13.5px]"
            style={{ background: "#22C55E", color: "#000000", padding: "8px 20px" }}
          >
            Book free audit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/5"
          style={{ color: "rgba(255,255,255,0.7)" }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 md:hidden flex flex-col gap-1 px-6 py-6"
          style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)" }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-4 text-lg font-medium rounded-2xl transition-colors hover:bg-white/5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center rounded-full font-bold transition-all"
            style={{ background: "#22C55E", color: "#000000", padding: "16px 24px", fontSize: "1rem" }}
          >
            Book free audit
          </a>
        </div>
      )}
    </header>
  );
}
