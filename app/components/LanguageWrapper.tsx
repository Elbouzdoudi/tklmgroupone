"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "../i18n/LanguageContext";

function DirectionHandler({ children }: { children: React.ReactNode }) {
  const { locale, dir } = useLanguage();

  useEffect(() => {
    // Update html attributes for RTL support
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
    
    // Add/remove RTL class for styling
    if (dir === "rtl") {
      document.documentElement.classList.add("rtl");
      document.body.classList.add("font-arabic");
    } else {
      document.documentElement.classList.remove("rtl");
      document.body.classList.remove("font-arabic");
    }
  }, [locale, dir]);

  return <>{children}</>;
}

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <DirectionHandler>{children}</DirectionHandler>
    </LanguageProvider>
  );
}
