"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Locale, type TranslationKey, translations } from "./locales";

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "lnr-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "zh-CN";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "zh-CN" || saved === "zh-TW" || saved === "en") return saved;
  // detect from browser
  const lang = navigator.language;
  if (lang.startsWith("zh")) {
    return lang.includes("TW") || lang.includes("HK") || lang.includes("Hant")
      ? "zh-TW"
      : "zh-CN";
  }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh-CN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l === "en" ? "en" : l;
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[locale]?.[key] ?? translations["zh-CN"][key] ?? key;
    },
    [locale],
  );

  // prevent hydration mismatch by showing zh-CN until mounted
  const value: I18nContextType = {
    locale: mounted ? locale : "zh-CN",
    setLocale,
    t: mounted ? t : (key) => translations["zh-CN"][key] ?? key,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
