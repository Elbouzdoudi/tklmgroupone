"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

export default function GroupSessions() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Simulated seat counts - in production, these would come from a database
  const [seatsFilled] = useState({
    group10: 6,
    group5: 3,
  });

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

  const groupPackages = [
    {
      name: t("groupSessions.group10Name"),
      price: "200",
      currency: "MAD",
      perMonth: t("groupSessions.perMonth"),
      perLearner: t("groupSessions.perLearner"),
      highlight: false,
      totalSeats: 10,
      filledSeats: seatsFilled.group10,
      features: [
        t("groupSessions.group10Feature1"),
        t("groupSessions.group10Feature2"),
        t("groupSessions.group10Feature3"),
        t("groupSessions.group10Feature4"),
      ],
      conditions: [
        t("groupSessions.group10Condition1"),
        t("groupSessions.group10Condition2"),
      ],
      cta: t("groupSessions.group10Cta"),
    },
    {
      name: t("groupSessions.group5Name"),
      price: "400",
      currency: "MAD",
      perMonth: t("groupSessions.perMonth"),
      perLearner: t("groupSessions.perLearner"),
      highlight: true,
      badge: t("groupSessions.smallGroupBadge"),
      totalSeats: 5,
      filledSeats: seatsFilled.group5,
      features: [
        t("groupSessions.group5Feature1"),
        t("groupSessions.group5Feature2"),
        t("groupSessions.group5Feature3"),
        t("groupSessions.group5Feature4"),
      ],
      conditions: [
        t("groupSessions.group5Condition1"),
        t("groupSessions.group5Condition2"),
      ],
      cta: t("groupSessions.group5Cta"),
    },
  ];

  const timeSlots = [
    { id: "8pm-9pm", label: "8:00 p.m. – 9:00 p.m." },
    { id: "9pm-10pm", label: "9:00 p.m. – 10:00 p.m." },
  ];

  const dayOptions = [
    { id: "mon-wed", label: "Monday – Wednesday" },
    { id: "tue-thu", label: "Tuesday – Thursday" },
    { id: "fri-sun", label: "Friday – Sunday" },
  ];

  return (
    <section
      ref={sectionRef}
      id="group-sessions"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-blue-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("groupSessions.title")} <span className="text-blue-600">{t("groupSessions.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            {t("groupSessions.subtitle")}
          </p>
          <p className="text-md text-blue-700 font-medium bg-blue-100 inline-block px-4 py-2 rounded-full">
            {t("groupSessions.positioning")}
          </p>
        </div>

        {/* Framing Line */}
        <div
          className={`bg-white rounded-2xl p-6 mb-8 border border-blue-100 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "100ms" }}
        >
          <p className="text-gray-700 leading-relaxed text-center font-medium">
            {t("groupSessions.framingLine")}
          </p>
        </div>

        {/* Fixed Schedule Section */}
        <div
          className={`bg-white rounded-2xl p-6 mb-12 border border-blue-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "150ms" }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t("groupSessions.scheduleTitle")}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Time Slots */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("groupSessions.timeSlotLabel")}
              </h4>
              <div className="space-y-2">
                {timeSlots.map((slot) => (
                  <div key={slot.id} className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{slot.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day Options */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t("groupSessions.dayOptionsLabel")}
              </h4>
              <div className="space-y-2">
                {dayOptions.map((day) => (
                  <div key={day.id} className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{day.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restrictions */}
          <div className="mt-6 pt-6 border-t border-blue-100">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{t("groupSessions.noCustomTimes")}</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{t("groupSessions.noDayChanges")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Group Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {groupPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                pkg.highlight
                  ? "border-blue-500 shadow-lg shadow-blue-100"
                  : "border-gray-100"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Badge */}
              {pkg.highlight && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-blue-600">
                    {pkg.price}
                  </span>
                  <span className="text-lg text-gray-500 font-medium">
                    {pkg.currency}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {pkg.perMonth} ({pkg.perLearner})
                </p>
              </div>

              {/* Seat Counter */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">{t("groupSessions.seatsFilled")}</span>
                  <span className="font-semibold text-blue-600">
                    {pkg.filledSeats} / {pkg.totalSeats}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(pkg.filledSeats / pkg.totalSeats) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-center">
                  {pkg.totalSeats - pkg.filledSeats} {t("groupSessions.seatsRemaining")}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
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

              {/* Conditions */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-xs font-semibold text-blue-800 mb-2">{t("groupSessions.conditions")}</p>
                <ul className="space-y-2">
                  {pkg.conditions.map((condition, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-blue-700">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-4 px-4 rounded-xl font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Important Information Box */}
        <div
          className={`bg-white rounded-2xl p-6 border border-blue-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {t("groupSessions.howGroupsWork")}
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
              {t("groupSessions.howStep1")}
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
              {t("groupSessions.howStep2")}
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
              {t("groupSessions.howStep3")}
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
              {t("groupSessions.howStep4")}
            </li>
          </ul>

          {/* Communication Policy Notice */}
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800 font-medium flex items-start gap-2">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {t("groupSessions.communicationNotice")}
            </p>
          </div>
        </div>

        {/* Money-Back Guarantee Badge */}
        <div
          className={`mt-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-blue-800 text-lg">{t("groupSessions.guaranteeTitle")}</h4>
                <p className="text-blue-600 text-sm">{t("groupSessions.guaranteeDesc")}</p>
              </div>
            </div>
            <a href="/rules" className="inline-flex items-center gap-1 text-blue-700 text-sm font-medium hover:text-blue-800 mt-2">
              {t("groupSessions.guaranteeLink")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
