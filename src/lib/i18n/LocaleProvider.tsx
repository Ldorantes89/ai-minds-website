"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  dictionary,
  interpolate,
  type DictKey,
  type Locale,
} from "@/lib/i18n/dictionary";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: (key: DictKey, vars?: Record<string, string | number>) => string;
};

const LocaleContext = createContext<Ctx | null>(null);

const COOKIE_KEY = "ai-minds-locale";
const STORAGE_KEY = "ai-minds-locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

function isLocale(v: string | null | undefined): v is Locale {
  return v === "en" || v === "es";
}

function readCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|; )ai-minds-locale=([^;]+)/);
  return m && isLocale(m[1]) ? m[1] : null;
}

function writeCookie(l: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_KEY}=${l}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  /** SSR-injected initial locale (from cookie). Eliminates EN→ES flash on hydration. */
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(
    initialLocale ?? DEFAULT_LOCALE
  );

  useEffect(() => {
    // Only run if we don't already trust the SSR-injected locale.
    if (initialLocale) {
      document.documentElement.lang = initialLocale;
      return;
    }
    try {
      const fromCookie = readCookie();
      if (fromCookie) {
        setLocaleState(fromCookie);
        document.documentElement.lang = fromCookie;
        return;
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLocale(saved)) {
        setLocaleState(saved);
        writeCookie(saved);
        document.documentElement.lang = saved;
        return;
      }
      const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
      if (browser === "es") {
        setLocaleState("es");
        writeCookie("es");
        document.documentElement.lang = "es";
      }
    } catch {
      // ignore storage failures
    }
  }, [initialLocale]);

  const setLocale = useCallback((l: Locale) => {
    if (!LOCALES.includes(l)) return;
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      writeCookie(l);
      document.documentElement.lang = l;
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "es" : "en");
  }, [locale, setLocale]);

  const t = useCallback(
    (key: DictKey, vars?: Record<string, string | number>) => {
      const table = dictionary[locale] ?? dictionary[DEFAULT_LOCALE];
      const raw = table[key] ?? dictionary[DEFAULT_LOCALE][key] ?? key;
      return interpolate(raw, vars);
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, toggle, t }),
    [locale, setLocale, toggle, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}

export function useT() {
  return useLocale().t;
}
