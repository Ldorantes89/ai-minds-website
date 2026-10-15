import type { Metadata } from "next";
import { HowItWorksContent } from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From a free 30-minute AI audit to a fully managed AI team in days. See exactly how AI Minds builds, hosts, trains, and improves your AI employees.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
