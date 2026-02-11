"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { Locale } from "../i18n/LanguageContext";

// Flag components as SVGs for consistent rendering
const FlagUK = () => (
  <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 40">
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const FlagFR = () => (
  <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 40">
    <rect width="20" height="40" fill="#002654"/>
    <rect x="20" width="20" height="40" fill="#fff"/>
    <rect x="40" width="20" height="40" fill="#CE1126"/>
  </svg>
);

const FlagMA = () => (
  <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 40">
    <rect width="60" height="40" fill="#C1272D"/>
    <path d="M30,10 L32.5,17.5 L40,17.5 L34,22.5 L36.5,30 L30,25 L23.5,30 L26,22.5 L20,17.5 L27.5,17.5 Z" fill="none" stroke="#006233" strokeWidth="1.5"/>
  </svg>
);

const flags: Record<Locale, React.ReactNode> = {
  en: <FlagUK />,
  fr: <FlagFR />,
  ar: <FlagMA />,
};

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600"
        aria-label="Select language"
      >
        {flags[currentLang.code]}
        <span>{currentLang.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50 min-w-[100px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-green-50 transition-colors ${
                locale === lang.code
                  ? "bg-green-50 text-green-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              {flags[lang.code]}
              <span>{lang.label}</span>
              {locale === lang.code && (
                <svg className="w-4 h-4 ml-auto text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
