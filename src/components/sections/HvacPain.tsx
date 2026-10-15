"use client";

import { Container, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

const stats = [
  {
    number: "3–5",
    unit: "missed calls/day",
    desc: "Average for a 5-person HVAC or plumbing company in DFW",
  },
  {
    number: "67%",
    unit: "hang up after 2 rings",
    desc: "And call the next company on Google. You never even know they called.",
  },
  {
    number: "$18K",
    unit: "lost every month",
    desc: "At $400/job avg × 5 missed calls/day × 30 days. That's real money.",
  },
];

export function HvacPain() {
  return (
    <Section id="the-problem">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(239,68,68,0.18)] bg-[rgba(239,68,68,0.04)] px-6 py-14 backdrop-blur-md sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute left-1/2 top-1/2 h-80 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(239,68,68,0.08)] blur-3xl" />
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.08)] px-4 py-1.5 text-[13px] font-semibold tracking-tightish text-red-400">
                The $15,000 problem every HVAC owner ignores
              </span>
              <h2 className="display-h2 mt-6 text-balance text-ink-primary">
                Every missed call is a job{" "}
                <span className="text-red-400">your competitor closed.</span>
              </h2>
              <p className="body-lg mx-auto mt-5 max-w-2xl text-ink-secondary">
                You&apos;re busy on a job. Your phone rings. You can&apos;t answer.
                That customer doesn&apos;t leave a voicemail — they call the next
                number on Google and book with someone else. This happens 3–5
                times a day.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.number}
                  className="rounded-2xl border border-[rgba(239,68,68,0.2)] bg-[rgba(10,10,20,0.04)] p-7 text-center backdrop-blur"
                >
                  <p
                    className="font-display text-[52px] font-extrabold leading-none tracking-tightest"
                    style={{
                      background:
                        "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.number}
                  </p>
                  <p className="mt-1 text-[14px] font-bold text-ink-primary">
                    {s.unit}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-tertiary">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
