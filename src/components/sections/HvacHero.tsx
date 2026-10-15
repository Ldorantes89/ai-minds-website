"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, PhoneMissed } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/primitives";
import { site } from "@/lib/site";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const trust = [
  "Answers in 2 rings, 24/7",
  "English & Spanish",
  "Live in 5 days",
];

export function HvacHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Background bloom */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-8%] h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(59,130,246,0.30), transparent 60%), radial-gradient(circle at 65% 60%, rgba(99,102,241,0.22), transparent 65%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          {/* Pill */}
          <motion.div {...(reduce ? {} : fade(0))}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(10,10,20,0.16)] bg-[rgba(10,10,20,0.06)] px-4 py-1.5 text-[13px] font-semibold tracking-tightish text-ink-secondary backdrop-blur-md">
              <Phone className="h-3.5 w-3.5 text-brand-blue" />
              AI Phone Agent for HVAC &amp; Plumbing — Dallas, TX
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...(reduce ? {} : fade(0.08))}
            className="display-h1 mt-7 max-w-4xl text-balance text-ink-primary"
          >
            Stop losing{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              $15,000/mo
            </span>{" "}
            to missed calls.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...(reduce ? {} : fade(0.16))}
            className="body-lg mt-6 max-w-2xl text-pretty text-ink-secondary"
          >
            Bella answers every call in 2 rings — books the job, sends a confirmation text,
            and works 24/7 in English or Spanish. You wake up to a full schedule.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...(reduce ? {} : fade(0.24))}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href={site.calUrl} external size="lg">
              Book a free 15-min audit
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.ul
            {...(reduce ? {} : fade(0.32))}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] font-medium text-ink-tertiary"
          >
            {trust.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-ink-quaternary" />
                )}
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Missed call visual */}
        <motion.div
          {...(reduce ? {} : fade(0.42))}
          className="mx-auto mt-16 flex max-w-sm flex-col items-center gap-4"
        >
          <MissedCallDemo />
        </motion.div>
      </Container>
    </section>
  );
}

function MissedCallDemo() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-[rgba(10,10,20,0.12)] bg-[rgba(10,10,20,0.05)] p-6 backdrop-blur-md">
      <p className="mb-4 text-center text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-quaternary">
        Without Bella · 11:47 PM
      </p>

      {/* Missed call notification */}
      <div className="mb-3 flex items-center gap-3 rounded-xl border border-[rgba(239,68,68,0.25)] bg-[rgba(239,68,68,0.08)] px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(239,68,68,0.15)]">
          <PhoneMissed className="h-4 w-4 text-red-400" />
        </span>
        <div>
          <p className="text-[13px] font-semibold text-ink-primary">
            Missed call
          </p>
          <p className="text-[12px] text-ink-tertiary">(214) 555-0192 · AC repair</p>
        </div>
        <span className="ml-auto text-[11px] font-bold text-red-400">-$450</span>
      </div>

      <div className="mb-3 flex items-center gap-3 rounded-xl border border-[rgba(239,68,68,0.25)] bg-[rgba(239,68,68,0.08)] px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(239,68,68,0.15)]">
          <PhoneMissed className="h-4 w-4 text-red-400" />
        </span>
        <div>
          <p className="text-[13px] font-semibold text-ink-primary">
            Missed call
          </p>
          <p className="text-[12px] text-ink-tertiary">(972) 555-0847 · Water heater</p>
        </div>
        <span className="ml-auto text-[11px] font-bold text-red-400">-$380</span>
      </div>

      <div className="mb-5 flex items-center gap-3 rounded-xl border border-[rgba(239,68,68,0.25)] bg-[rgba(239,68,68,0.08)] px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(239,68,68,0.15)]">
          <PhoneMissed className="h-4 w-4 text-red-400" />
        </span>
        <div>
          <p className="text-[13px] font-semibold text-ink-primary">
            Missed call
          </p>
          <p className="text-[12px] text-ink-tertiary">(469) 555-0334 · Drain clog</p>
        </div>
        <span className="ml-auto text-[11px] font-bold text-red-400">-$320</span>
      </div>

      <div className="rounded-xl bg-[rgba(239,68,68,0.1)] px-4 py-3 text-center">
        <p className="text-[13px] font-bold text-red-400">
          3 missed calls tonight = $1,150 lost
        </p>
        <p className="mt-0.5 text-[11.5px] text-ink-tertiary">
          They called your competitor. They booked.
        </p>
      </div>
    </div>
  );
}
