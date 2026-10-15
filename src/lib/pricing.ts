export type Tier = {
  name: string;
  /** Quick "what you get" framing line */
  headline: string;
  blurb: string;
  /** One-time setup fee (build + train + integrate) */
  setup: string;
  /** Monthly subscription (manage + host + optimize) */
  monthly: string;
  /** Annotation displayed under the price (e.g. "per agent") */
  monthlyNote?: string;
  /** Bullet features shown on the card */
  features: string[];
  popular?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Solo",
    headline: "Start with your biggest time-killer.",
    blurb:
      "Pick the one AI employee that solves your most painful daily problem. Less than a phone bill.",
    setup: "$499 one-time setup",
    monthly: "$199",
    monthlyNote: "/mo · 1 AI employee",
    features: [
      "1 AI employee of your choice",
      "1 channel (chat, voice, or social)",
      "Trained on your business + brand voice",
      "Wired into 1 tool you already use",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Squad",
    headline: "Pick any 3 — most owners' sweet spot.",
    blurb:
      "Cover your highest-pain workflows: usually front desk + lead follow-up + reviews. Save 17% vs Solo.",
    setup: "$999 one-time setup",
    monthly: "$499",
    monthlyNote: "/mo · pick any 3 agents",
    popular: true,
    features: [
      "Any 3 AI employees you choose",
      "Multi-channel (voice, chat, SMS, social)",
      "CRM / calendar / booking integration",
      "Monthly strategy call with the founder",
      "Bi-weekly optimization & retraining",
      "Priority support",
    ],
  },
  {
    name: "Full Team",
    headline: "All 5 AI employees, working together.",
    blurb:
      "The complete team running your business 24/7. 20% cheaper per agent than buying Solo.",
    setup: "$1,499 one-time setup",
    monthly: "$799",
    monthlyNote: "/mo · all 5 agents · $160 ea.",
    features: [
      "All 5 AI employees — full roster",
      "Unlimited channels & integrations",
      "Custom workflows + handoffs between agents",
      "Dedicated AI Minds account manager",
      "Weekly optimization & A/B testing",
      "99.9% uptime SLA",
    ],
  },
];
