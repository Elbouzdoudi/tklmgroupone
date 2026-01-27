"use client";

import { useLanguage } from "./LanguageContext";

export function useTranslation() {
  const { locale, setLocale, t, dir } = useLanguage();
  
  return {
    t,
    locale,
    setLocale,
    dir,
    isRTL: dir === "rtl",
  };
}
