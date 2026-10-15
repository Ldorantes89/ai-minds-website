import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing. Pick 1 AI employee ($199/mo), pick any 3 ($499/mo), or hire the full team of 8 ($999/mo). Setup fees one-time. Cancel anytime.",
};

export default function PricingPage() {
  return <PricingContent />;
}
