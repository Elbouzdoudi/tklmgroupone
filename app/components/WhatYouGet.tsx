"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../i18n/useTranslation";

export default function WhatYouGet() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    { title: t("whatYouGet.feature1Title"), description: t("whatYouGet.feature1Desc") },
    { title: t("whatYouGet.feature2Title"), description: t("whatYouGet.feature2Desc") },
    { title: t("whatYouGet.feature3Title"), description: t("whatYouGet.feature3Desc") },
    { title: t("whatYouGet.feature4Title"), description: t("whatYouGet.feature4Desc") },
    { title: t("whatYouGet.feature5Title"), description: t("whatYouGet.feature5Desc") },
    { title: t("whatYouGet.feature6Title"), description: t("whatYouGet.feature6Desc") },
    { title: t("whatYouGet.feature7Title"), description: t("whatYouGet.feature7Desc") },
    { title: t("whatYouGet.feature8Title"), description: t("whatYouGet.feature8Desc") },
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
      id="what-you-get"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div
            className={`relative order-2 lg:order-1 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-40"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/whatyougetpic.jpg"
                  alt="Focused student learning English online"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{t("whatYouGet.sessionDuration")}</p>
                      <p className="text-xs text-gray-500">{t("whatYouGet.perSession")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div
              className={`mb-10 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t("whatYouGet.title")} <span className="text-green-600">{t("whatYouGet.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-gray-600">
                {t("whatYouGet.subtitle")}
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(index + 1) * 75}ms` }}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
