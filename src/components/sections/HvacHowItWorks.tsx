"use client";

import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Free 15-min audit",
    desc: "We look at your missed call window and show you exactly how many jobs you're losing per week. No commitment.",
    time: "Today",
  },
  {
    number: "02",
    title: "We build & train Bella",
    desc: "We wire Bella into your phone system and train her on your services, pricing, service area, and calendar. You approve before anything goes live.",
    time: "Days 1–5",
  },
  {
    number: "03",
    title: "Bella goes live",
    desc: "Every call gets answered in 2 rings. Jobs get booked. You get a text summary of every interaction every morning.",
    time: "Day 5",
  },
];

export function HvacHowItWorks() {
  return (
    <Section id="how-it-works" className="scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Live in 5 days. Zero tech setup."
            description="We handle everything. You just approve it before it goes live."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col rounded-2xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md">
                <div className="flex items-start justify-between">
                  <span
                    className="font-display text-[44px] font-extrabold leading-none tracking-tightest"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </span>
                  <span className="rounded-full bg-[rgba(59,130,246,0.12)] px-2.5 py-0.5 text-[11px] font-bold tracking-tightish text-brand-blue">
                    {step.time}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[18px] font-bold tracking-tightish text-ink-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-tertiary">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
