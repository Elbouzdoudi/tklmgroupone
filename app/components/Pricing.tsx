"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

export default function Pricing() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const packages = [
    {
      name: t("pricing.singleName"),
      price: "200",
      currency: "DHS",
      highlight: false,
      features: [
        t("pricing.singleFeature1"),
        t("pricing.singleFeature2"),
      ],
      note: t("pricing.singleNote"),
      cta: t("pricing.singleCta"),
    },
    {
      name: t("pricing.weeklyName"),
      price: "550",
      currency: "DHS",
      highlight: false,
      features: [
        t("pricing.weeklyFeature1"),
        t("pricing.weeklyFeature2"),
        t("pricing.weeklyFeature3"),
      ],
      note: null,
      cta: t("pricing.weeklyCta"),
    },
    {
      name: t("pricing.monthlyName"),
      price: "2200",
      currency: "DHS",
      highlight: true,
      badge: t("pricing.monthlyBadge"),
      features: [
        t("pricing.monthlyFeature1"),
        t("pricing.monthlyFeature2"),
        t("pricing.monthlyFeature3"),
      ],
      note: null,
      cta: t("pricing.monthlyCta"),
    },
    {
      name: t("pricing.trimesterName"),
      price: "6500",
      currency: "DHS",
      highlight: false,
      features: [
        t("pricing.trimesterFeature1"),
        t("pricing.trimesterFeature2"),
        t("pricing.trimesterFeature3"),
      ],
      note: null,
      cta: t("pricing.trimesterCta"),
    },
  ];

  const pricingNotes = [
    t("pricing.note1"),
    t("pricing.note2"),
    t("pricing.note3"),
    t("pricing.note4"),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="private-sessions"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-green-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("pricing.title")} <span className="text-green-600">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            {t("pricing.subtitle")}
          </p>
          <p className="text-md text-green-700 font-medium bg-green-100 inline-block px-4 py-2 rounded-full">
            {t("pricing.positioning")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative card-hover bg-white rounded-2xl p-6 border-2 transition-all ${
                pkg.highlight
                  ? "border-green-500 shadow-lg shadow-green-100"
                  : "border-gray-100"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Most Popular Badge */}
              {pkg.highlight && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-green-600">
                    {pkg.price}
                  </span>
                  <span className="text-lg text-gray-500 font-medium">
                    {pkg.currency}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Note (for Single Session) */}
              {pkg.note && (
                <p className="text-xs text-green-700 bg-green-50 rounded-lg p-3 mb-6 text-center">
                  {pkg.note}
                </p>
              )}

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 px-4 rounded-xl font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Notes */}
        {/* Money-Back Guarantee Badge */}
        <div
          className={`mb-8 ${
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-green-800 text-lg">{t("pricing.guaranteeTitle")}</h4>
                <p className="text-green-600 text-sm">{t("pricing.guaranteeDesc")}</p>
              </div>
            </div>
            <a href="/rules" className="inline-flex items-center gap-1 text-green-700 text-sm font-medium hover:text-green-800 mt-2">
              {t("pricing.guaranteeLink")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Pricing Notes */}
        <div
          className={`bg-white rounded-xl p-6 border border-gray-100 ${
            isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            {pricingNotes.map((note, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {note}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
