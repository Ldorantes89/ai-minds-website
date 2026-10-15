import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy & Security",
  description:
    "How AI Minds handles your data. Encryption, storage, third-party providers, ownership, and your rights. SOC 2-aligned, HIPAA-friendly on the Full Team plan.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
