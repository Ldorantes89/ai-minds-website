import type { Metadata } from "next";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "AI Minds Terms & Conditions. Service terms, payment, ownership, liability, and governing law for the AI Minds platform.",
};

export default function TermsPage() {
  return <TermsContent />;
}
