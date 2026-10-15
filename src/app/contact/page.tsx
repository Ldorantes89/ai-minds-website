import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free AI audit or send us a message. AI Minds builds, hosts, and manages AI agents for small businesses.",
};

export default function ContactPage() {
  return <ContactContent />;
}
