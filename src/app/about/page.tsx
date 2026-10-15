import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Minds is founded by Luis Dorantes (Dallas, TX) — ex-IBM enterprise sales (8+ yrs), former IBM TechXchange Community Manager (20,000+ developers), Bronze Stevie Award 2025 winner. The mission: give every small business an AI team that works alongside their humans.",
};

export default function AboutPage() {
  return <AboutContent />;
}
