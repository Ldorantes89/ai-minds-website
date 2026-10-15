import {
  MessageCircle,
  Target,
  CalendarCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

export type Agent = {
  /** URL/file-safe identity — also the avatar filename: /avatars/{slug}.png */
  slug: string;
  /** The "AI employee" persona — the friendly, hireable first name */
  persona: string;
  /** The job this employee owns */
  role: string;
  /** Signature brand color (hex) used for this agent's glow, avatar, accents */
  color: string;
  /** Single uppercase letter for the avatar monogram */
  monogram: string;
  /** lucide icon centered in the avatar / shown on cards */
  icon: LucideIcon;
  /** Flip to `true` once /avatars/{slug}.png exists. See public/avatars/README.md */
  hasAvatar: boolean;
  oneLiner: string;
  bullets: [string, string, string];
  /** Extended copy used on the /agents detail page — paints the real SMB moment */
  detail: string;
  /** Concrete numeric outcomes SMB owners actually track */
  outcomes: [string, string, string];
};

export const agents: Agent[] = [
  {
    slug: "ava",
    persona: "Sophie",
    role: "Customer Support",
    color: "#14b8a6",
    monogram: "A",
    icon: MessageCircle,
    hasAvatar: true,
    oneLiner:
      "Answers every customer message in 60 seconds — chat, DM, WhatsApp, Messenger.",
    bullets: [
      "Replies on Instagram DM, web chat & WhatsApp instantly",
      "Knows your hours, prices, services & policies cold",
      "Escalates to you only when it's actually important",
    ],
    detail:
      "It's 9pm Sunday. Someone DMs your Instagram asking 'are you open tomorrow?' If you don't answer in 5 minutes, 80% will book somewhere else. Ava replies in 60 seconds across every channel — even while you sleep — and only pings you when a customer truly needs a human.",
    outcomes: [
      "200+ customer messages handled per month",
      "<60-second average first reply",
      "78% resolved without ever bothering you",
    ],
  },
  {
    slug: "leo",
    persona: "Leo",
    role: "Sales & Lead Follow-Up",
    color: "#f97316",
    monogram: "L",
    icon: Target,
    hasAvatar: true,
    oneLiner:
      "Replies to every new lead in under a minute — and never lets one go cold.",
    bullets: [
      "Texts & emails leads within 60 sec of form fill",
      "Qualifies budget, timing & fit — books the meeting",
      "Follows up at 1, 3, 7 & 14 days on ghosters",
    ],
    detail:
      "A lead fills out your contact form at 9:47pm Friday. You see it Monday morning — they've already booked your competitor. Leo replies in under a minute by text and email, qualifies them with a few smart questions, drops a meeting straight into your Calendly or HubSpot, and chases the ones who go quiet for two weeks.",
    outcomes: [
      "Under 60-second speed-to-lead",
      "3× more booked meetings from the same traffic",
      "Zero leads ever forgotten",
    ],
  },
  {
    slug: "bella",
    persona: "Elena",
    role: "Front Desk & Scheduling",
    color: "#6366f1",
    monogram: "B",
    icon: CalendarCheck,
    hasAvatar: true,
    oneLiner:
      "Picks up every phone call in a natural voice — books straight into your calendar.",
    bullets: [
      "Answers 100% of calls — English or Spanish",
      "Books in Google Calendar, Square, Acuity & Cal.com",
      "Sends confirmation + reminder texts to kill no-shows",
    ],
    detail:
      "It's Saturday and you're with a client. Bella picks up the 7 calls you would have missed in a natural voice, books them straight into your calendar, sends a confirmation text, and routes anything urgent (a panicked patient, a leaking pipe) to your cell. You stop losing $200+ per missed call.",
    outcomes: [
      "100% call coverage, 24/7 — English & Spanish",
      "4+ extra bookings/day that would have gone elsewhere",
      "Half the no-shows thanks to automatic reminders",
    ],
  },
  {
    slug: "maya",
    persona: "Chloe",
    role: "Marketing & Content",
    color: "#ec4899",
    monogram: "M",
    icon: Sparkles,
    hasAvatar: true,
    oneLiner:
      "Keeps your Instagram, TikTok & Google Business posting on autopilot.",
    bullets: [
      "Writes & schedules posts to IG, TikTok, FB & Google Business",
      "Drafts your weekly email newsletter & promos",
      "Turns 1 client photo into 5 platform-native posts",
    ],
    detail:
      "It's Thursday. Your last Instagram post was 17 days ago. The algorithm killed your reach and your competitor posted today. Maya studies your past content for voice, writes captions that sound like you, schedules to every platform, drafts your weekly newsletter, and repurposes one client photo into a week of content.",
    outcomes: [
      "28+ posts/month across 4 platforms",
      "1 on-brand email newsletter every week, ready for approval",
      "8+ hours/week of marketing work eliminated",
    ],
  },
  {
    slug: "ruby",
    persona: "Stella",
    role: "Reviews & Reputation",
    color: "#e11d48",
    monogram: "R",
    icon: Star,
    hasAvatar: true,
    oneLiner:
      "Asks every happy customer for a 5-star review — privately catches the unhappy ones first.",
    bullets: [
      "Texts customers 2 hours after service for a review",
      "Routes happy → public review, unhappy → private feedback",
      "Drafts on-brand replies to every Google & Yelp review",
    ],
    detail:
      "Your last 5 customers were thrilled — and not one left a review. Meanwhile one cranky guy who barely bought anything posted a 1-star. Ruby texts every customer 2 hours after their visit. Happy people get a 1-tap link to Google or Yelp. Unhappy people get routed to a private form that lands in your inbox — before they post publicly.",
    outcomes: [
      "6× more reviews per month",
      "Average star rating +0.4 in 90 days",
      "Most unhappy customers caught before they post",
    ],
  },
];

/** Lookup helper for detail/aux usage */
export function getAgent(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}
