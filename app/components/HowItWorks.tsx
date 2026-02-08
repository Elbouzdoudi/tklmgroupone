"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../i18n/useTranslation";

export default function HowItWorks() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const privateSteps = [
    {
      number: "01",
      title: t("howItWorks.private.step1Title"),
      description: t("howItWorks.private.step1Desc"),
    },
    {
      number: "02",
      title: t("howItWorks.private.step2Title"),
      description: t("howItWorks.private.step2Desc"),
    },
    {
      number: "03",
      title: t("howItWorks.private.step3Title"),
      description: t("howItWorks.private.step3Desc"),
    },
    {
      number: "04",
      title: t("howItWorks.private.step4Title"),
      description: t("howItWorks.private.step4Desc"),
    },
  ];

  const groupSteps = [
    {
      number: "01",
      title: t("howItWorks.group.step1Title"),
      description: t("howItWorks.group.step1Desc"),
    },
    {
      number: "02",
      title: t("howItWorks.group.step2Title"),
      description: t("howItWorks.group.step2Desc"),
    },
    {
      number: "03",
      title: t("howItWorks.group.step3Title"),
      description: t("howItWorks.group.step3Desc"),
    },
    {
      number: "04",
      title: t("howItWorks.group.step4Title"),
      description: t("howItWorks.group.step4Desc"),
    },
    {
      number: "05",
      title: t("howItWorks.group.step5Title"),
      description: t("howItWorks.group.step5Desc"),
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
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden"
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Private Sessions Flow */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{t("howItWorks.privateTitle")}</h3>
            </div>

            <div className="space-y-4">
              {privateSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#private-sessions"
              className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition-colors w-full justify-center"
            >
              {t("howItWorks.privateCta")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Group Sessions Flow */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{t("howItWorks.groupTitle")}</h3>
            </div>

            <div className="space-y-4">
              {groupSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#group-sessions"
              className="mt-6 inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition-colors w-full justify-center"
            >
              {t("howItWorks.groupCta")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
