import type { Metadata } from "next";
import { AgentsContent } from "./AgentsContent";

export const metadata: Metadata = {
  title: "Meet the team",
  description:
    "Meet your AI team — Ava, Leo, Bella, Maya, Penny, Vera, Ruby, and Max. Specialized AI employees for support, sales, scheduling, marketing, finance, invoicing, reviews, and paperwork. Built, hosted, and managed by AI Minds.",
};

export default function AgentsPage() {
  return <AgentsContent />;
}
