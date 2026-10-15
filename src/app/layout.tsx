import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/dictionary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://ai-minds.ai";

const META = {
  en: {
    title: "AI Minds — Your team, multiplied",
    description:
      "AI Minds gives your existing team 8 tireless AI coworkers that handle the busywork — so your people can focus on what only humans can do. We don't replace employees. We multiply them.",
    ogDescription:
      "8 AI coworkers that handle the busywork — so your humans can focus on what matters. Not replacing your team. Multiplying them.",
    twDescription:
      "8 AI coworkers that handle the busywork. We don't replace your team. We multiply them.",
  },
  es: {
    title: "AI Minds — Tu equipo, multiplicado",
    description:
      "AI Minds le da a tu equipo 8 compañeros de IA que se encargan del trabajo repetitivo — para que tu gente pueda enfocarse en lo que solo los humanos pueden hacer. No reemplazamos empleados. Los multiplicamos.",
    ogDescription:
      "8 compañeros de IA que se encargan del trabajo repetitivo — para que tus humanos se enfoquen en lo que importa. No reemplazamos a tu equipo. Lo multiplicamos.",
    twDescription:
      "8 compañeros de IA que se encargan del trabajo repetitivo. No reemplazamos a tu equipo. Lo multiplicamos.",
  },
} as const;

export function generateMetadata(): Metadata {
  const c = cookies().get("ai-minds-locale")?.value;
  const lang: "en" | "es" = c === "es" ? "es" : "en";
  const m = META[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: m.title, template: "%s · AI Minds" },
    description: m.description,
    keywords: [
      "AI coworkers",
      "AI for small business",
      "agents as a service",
      "AI receptionist",
      "AI for SMB",
      "augment not replace",
      "AI Minds",
    ],
    authors: [{ name: "AI Minds" }],
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: "AI Minds",
      title: m.title,
      description: m.ogDescription,
      locale: lang === "es" ? "es_MX" : "en_US",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "AI Minds — Your team, multiplied. 8 AI coworkers for your business.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.twDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: { index: true, follow: true },
  };
}

function readLocaleFromCookies(): Locale {
  const c = cookies().get("ai-minds-locale")?.value;
  return c === "es" || c === "en" ? c : "en";
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialLocale = readLocaleFromCookies();
  return (
    <html
      lang={initialLocale}
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-ink-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content / Saltar al contenido
        </a>
        <LocaleProvider initialLocale={initialLocale}>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileStickyCta />
        </LocaleProvider>
      </body>
    </html>
  );
}
