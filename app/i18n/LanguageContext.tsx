"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

export type Locale = "en" | "fr" | "ar";

type Translations = typeof en;

const translations: Record<Locale, Translations> = {
  en,
  fr: fr as Translations,
  ar: ar as Translations,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration and language detection
  useEffect(() => {
    setIsHydrated(true);
    
    // Check localStorage first
    const savedLocale = localStorage.getItem("takalam-lang") as Locale | null;
    if (savedLocale && ["en", "fr", "ar"].includes(savedLocale)) {
      setLocaleState(savedLocale);
      return;
    }

    // Auto-detect browser language
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === "ar") {
      setLocaleState("ar");
    } else if (browserLang === "fr") {
      setLocaleState("fr");
    } else {
      setLocaleState("en");
    }
  }, []);

  // Persist language choice
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("takalam-lang", newLocale);
  };

  // Translation function with nested key support (e.g., "hero.badge")
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English if key not found
        let fallback: unknown = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === "object" && fk in fallback) {
            fallback = (fallback as Record<string, unknown>)[fk];
          } else {
            return key; // Return key if not found anywhere
          }
        }
        return typeof fallback === "string" ? fallback : key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  const dir = locale === "ar" ? "rtl" : "ltr";

  // Prevent hydration mismatch by rendering with default locale on server
  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={{ locale: "en", setLocale, t, dir: "ltr" }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
