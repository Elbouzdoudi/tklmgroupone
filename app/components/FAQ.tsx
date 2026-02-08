"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../i18n/useTranslation";

export default function FAQ() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"private" | "group">("private");

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

  const privateFaqs = [
    { q: t("faq.private.q1"), a: t("faq.private.a1") },
    { q: t("faq.private.q2"), a: t("faq.private.a2") },
    { q: t("faq.private.q3"), a: t("faq.private.a3") },
    { q: t("faq.private.q4"), a: t("faq.private.a4") },
    { q: t("faq.private.q5"), a: t("faq.private.a5") },
    { q: t("faq.private.q6"), a: t("faq.private.a6") },
  ];

  const groupFaqs = [
    { q: t("faq.group.q1"), a: t("faq.group.a1") },
    { q: t("faq.group.q2"), a: t("faq.group.a2") },
    { q: t("faq.group.q3"), a: t("faq.group.a3") },
    { q: t("faq.group.q4"), a: t("faq.group.a4") },
    { q: t("faq.group.q5"), a: t("faq.group.a5") },
    { q: t("faq.group.q6"), a: t("faq.group.a6") },
  ];

  const faqs = activeTab === "private" ? privateFaqs : groupFaqs;

  // Reset open index when switching tabs
  useEffect(() => {
    setOpenIndex(0);
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("faq.title")} <span className="text-green-600">{t("faq.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className={`flex justify-center mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("private")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === "private"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t("faq.privateTab")}
            </button>
            <button
              onClick={() => setActiveTab("group")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === "group"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {t("faq.groupTab")}
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div
          className={`space-y-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`border rounded-2xl overflow-hidden ${
                activeTab === "private" ? "border-green-200" : "border-blue-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    activeTab === "private" ? "text-green-600" : "text-blue-600"
                  } ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice for Group Sessions */}
        {activeTab === "group" && (
          <div
            className={`mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {t("faq.communicationTitle")}
            </h4>
            <p className="text-amber-700 text-sm">
              {t("faq.communicationText")}
            </p>
          </div>
        )}

        {/* Still Have Questions */}
        <div
          className={`mt-12 text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-gray-600 mb-4">{t("faq.stillQuestions")}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            {t("faq.contactUs")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
