"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  Calendar,
  Globe,
  MessageSquare,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

const agents = [
  {
    name: "Bella",
    role: "AI Phone Agent",
    tagline: "Answers every call in 2 rings. Books the job. Never sleeps.",
    color: "#3b82f6",
    colorBg: "rgba(59,130,246,0.08)",
    colorBorder: "rgba(59,130,246,0.25)",
    emoji: "📞",
    features: [
      {
        icon: Phone,
        text: "100% of calls answered, 24/7 — nights, weekends, holidays",
      },
      {
        icon: Calendar,
        text: "Books directly into your calendar in real time",
      },
      {
        icon: Globe,
        text: "English & Spanish — natural voice, sounds human",
      },
      {
        icon: Clock,
        text: "Sends a confirmation text the second the job is booked",
      },
    ],
    demo: {
      label: "Bella · After hours · 11:48 PM",
      messages: [
        { from: "customer", text: "Hi, my AC stopped working — you guys available tonight?" },
        { from: "bella", text: "Hi! Yes, we have emergency service available. I can book a tech for tonight between 9–11 PM or first thing tomorrow at 7 AM. Which works better?" },
        { from: "customer", text: "Tonight please, it's really hot" },
        { from: "bella", text: "Got it — booked for 9–11 PM tonight. You'll get a text confirmation now and a reminder 1 hour before. Anything else?" },
      ],
    },
    result: "12+ jobs recovered per month from after-hours calls alone",
  },
  {
    name: "Leo",
    role: "AI Sales Follow-Up",
    tagline: "Texts every lead in 60 seconds. Follows up for 14 days. Closes.",
    color: "#6366f1",
    colorBg: "rgba(99,102,241,0.08)",
    colorBorder: "rgba(99,102,241,0.25)",
    emoji: "📲",
    features: [
      {
        icon: MessageSquare,
        text: "Texts every new lead within 60 seconds of a missed call or form fill",
      },
      {
        icon: TrendingUp,
        text: "Follows up at 1, 3, 7 and 14 days — most competitors stop after 1",
      },
      {
        icon: Calendar,
        text: "Qualifies the job and books the appointment into your calendar",
      },
      {
        icon: Clock,
        text: "Re-engages cold leads with seasonal promotions automatically",
      },
    ],
    demo: {
      label: "Leo · New lead · 2 minutes after missed call",
      messages: [
        { from: "leo", text: "Hey! This is Bella with DFW HVAC. Sorry we missed your call — how can we help? 🔧" },
        { from: "customer", text: "Yeah my furnace is making a weird noise" },
        { from: "leo", text: "Got it — we can have a tech out tomorrow morning. Does 8 AM or 10 AM work for you?" },
        { from: "customer", text: "8 AM works" },
        { from: "leo", text: "Perfect — booked for 8 AM. Tech will call 30 min before. See you tomorrow! ✅" },
      ],
    },
    result: "67% of leads that don't answer calls will respond to a text",
  },
];

export function HvacAgents() {
  const reduce = useReducedMotion();

  return (
    <Section id="agents" className="scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The solution"
            title={
              <>
                Two AI employees.{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Zero missed jobs.
                </span>
              </>
            }
            description="Bella answers every call. Leo follows up every lead. Together they capture the jobs you're currently losing every single day."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {agents.map((agent, i) => (
            <Reveal key={agent.name} delay={i * 0.1}>
              <div
                className="flex h-full flex-col overflow-hidden rounded-3xl border backdrop-blur-md"
                style={{
                  background: agent.colorBg,
                  borderColor: agent.colorBorder,
                }}
              >
                {/* Header */}
                <div className="border-b px-7 py-6" style={{ borderColor: agent.colorBorder }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-xl"
                      style={{ background: agent.colorBg, border: `1px solid ${agent.colorBorder}` }}
                    >
                      {agent.emoji}
                    </span>
                    <div>
                      <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                        {agent.role}
                      </p>
                      <h3 className="font-display text-[22px] font-extrabold tracking-tightish text-ink-primary">
                        {agent.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-[15px] font-medium leading-snug text-ink-secondary">
                    {agent.tagline}
                  </p>
                </div>

                {/* Features */}
                <div className="border-b px-7 py-5" style={{ borderColor: agent.colorBorder }}>
                  <ul className="flex flex-col gap-3">
                    {agent.features.map((f) => {
                      const Icon = f.icon;
                      return (
                        <li key={f.text} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full"
                            style={{ background: `${agent.color}22` }}
                          >
                            <Icon className="h-3 w-3" style={{ color: agent.color }} />
                          </span>
                          <span className="text-[13.5px] leading-snug text-ink-secondary">
                            {f.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Live demo */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-quaternary">
                    {agent.demo.label}
                  </p>
                  <div className="flex flex-col gap-2">
                    {agent.demo.messages.map((msg, mi) => (
                      <motion.div
                        key={mi}
                        initial={{ opacity: 0, x: msg.from === "customer" ? -8 : 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + mi * 0.15, duration: 0.4 }}
                        className={`flex ${msg.from === "customer" ? "justify-start" : "justify-end"}`}
                      >
                        <span
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[12.5px] leading-relaxed ${
                            msg.from === "customer"
                              ? "rounded-tl-sm bg-[rgba(10,10,20,0.1)] text-ink-secondary"
                              : "rounded-tr-sm text-white"
                          }`}
                          style={
                            msg.from !== "customer"
                              ? { background: agent.color }
                              : undefined
                          }
                        >
                          {msg.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div
                  className="mt-auto border-t px-7 py-4"
                  style={{ borderColor: agent.colorBorder, background: `${agent.color}0d` }}
                >
                  <p className="text-[13px] font-semibold" style={{ color: agent.color }}>
                    ✓ {agent.result}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button href={site.calUrl} external size="lg">
              Get Bella & Leo working for you
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
