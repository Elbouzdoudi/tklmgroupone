"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../i18n/useTranslation";

export default function HowItWorks() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      number: "01",
      title: t("howItWorks.step1Title"),
      description: t("howItWorks.step1Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: "02",
      title: t("howItWorks.step2Title"),
      description: t("howItWorks.step2Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: t("howItWorks.step3Title"),
      description: t("howItWorks.step3Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-green-600 relative overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/cafe-learning.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-green-400/30 -translate-x-1/2 z-0"></div>
              )}

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>

                {/* Number */}
                <div className="text-green-200 font-bold text-sm mb-2">
                  {t("howItWorks.step")} {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-green-100 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 ${
            isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors"
          >
            {t("howItWorks.cta")}
            <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
