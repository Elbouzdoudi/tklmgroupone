"use client";

import { useTranslation } from "../i18n/useTranslation";
import { useLanguage } from "../i18n/LanguageContext";

export default function ComparePlans() {
  const { t } = useTranslation();
  const { dir, locale } = useLanguage();
  const isRTL = dir === "rtl";

  const content = {
    en: {
      title: "Compare",
      titleHighlight: "Your Options",
      subtitle: "Find the perfect learning format for your goals and budget",
      private: "1-on-1 Private",
      group: "Group Sessions",
      features: [
        { name: "Personal Attention", private: "100% focused on you", group: "Shared with 5-10 students" },
        { name: "Schedule Flexibility", private: "Book anytime", group: "Fixed schedule" },
        { name: "Lesson Customization", private: "Fully personalized", group: "Structured curriculum" },
        { name: "Speaking Time", private: "50 mins/session", group: "~10 mins/session" },
        { name: "Progress Speed", private: "Fastest results", group: "Gradual improvement" },
        { name: "Best For", private: "Quick results, busy schedules", group: "Budget-friendly, social learning" },
        { name: "Starting Price", private: "200 MAD/session", group: "200 MAD/month" },
      ],
      privateCta: "Start Private Lessons",
      groupCta: "Join a Group",
      recommendation: "Not sure? Start with a single trial session for 200 MAD!"
    },
    fr: {
      title: "Comparez",
      titleHighlight: "Vos Options",
      subtitle: "Trouvez le format d'apprentissage idéal pour vos objectifs et budget",
      private: "Privé 1-à-1",
      group: "Sessions de Groupe",
      features: [
        { name: "Attention Personnelle", private: "100% focalisé sur vous", group: "Partagé avec 5-10 étudiants" },
        { name: "Flexibilité Horaire", private: "Réservez à tout moment", group: "Horaire fixe" },
        { name: "Personnalisation", private: "Entièrement personnalisé", group: "Programme structuré" },
        { name: "Temps de Parole", private: "50 min/session", group: "~10 min/session" },
        { name: "Vitesse de Progrès", private: "Résultats rapides", group: "Amélioration progressive" },
        { name: "Idéal Pour", private: "Résultats rapides, emploi du temps chargé", group: "Budget limité, apprentissage social" },
        { name: "Prix de Départ", private: "200 MAD/session", group: "200 MAD/mois" },
      ],
      privateCta: "Commencer en Privé",
      groupCta: "Rejoindre un Groupe",
      recommendation: "Pas sûr? Commencez par une session d'essai à 200 MAD!"
    },
    ar: {
      title: "قارن",
      titleHighlight: "خياراتك",
      subtitle: "اعثر على تنسيق التعلم المثالي لأهدافك وميزانيتك",
      private: "خاص 1-إلى-1",
      group: "جلسات جماعية",
      features: [
        { name: "الاهتمام الشخصي", private: "100% مركز عليك", group: "مشترك مع 5-10 طلاب" },
        { name: "مرونة الجدول", private: "احجز في أي وقت", group: "جدول ثابت" },
        { name: "التخصيص", private: "مخصص بالكامل", group: "منهج منظم" },
        { name: "وقت التحدث", private: "50 دقيقة/جلسة", group: "~10 دقائق/جلسة" },
        { name: "سرعة التقدم", private: "نتائج أسرع", group: "تحسن تدريجي" },
        { name: "الأفضل لـ", private: "نتائج سريعة، جداول مشغولة", group: "ميزانية محدودة، تعلم اجتماعي" },
        { name: "السعر المبدئي", private: "200 درهم/جلسة", group: "200 درهم/شهر" },
      ],
      privateCta: "ابدأ الدروس الخاصة",
      groupCta: "انضم لمجموعة",
      recommendation: "غير متأكد؟ ابدأ بجلسة تجريبية واحدة بـ 200 درهم!"
    }
  };

  const text = content[locale as keyof typeof content] || content.en;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" id="compare-plans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {text.title} <span className="text-green-600">{text.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{text.subtitle}</p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="p-4 sm:p-6"></div>
            <div className="p-4 sm:p-6 text-center border-x border-gray-200 bg-green-50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{text.private}</h3>
              <span className="inline-block mt-1 px-2 py-0.5 bg-green-200 text-green-800 text-xs rounded-full font-medium">
                {isRTL ? "الأكثر مبيعاً" : "Most Popular"}
              </span>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{text.group}</h3>
              <span className="inline-block mt-1 px-2 py-0.5 bg-blue-200 text-blue-800 text-xs rounded-full font-medium">
                {isRTL ? "الأقل تكلفة" : "Best Value"}
              </span>
            </div>
          </div>

          {/* Table Body */}
          {text.features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`grid grid-cols-3 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} ${idx === text.features.length - 1 ? "" : "border-b border-gray-100"}`}
            >
              <div className="p-4 sm:p-5 font-medium text-gray-700 text-sm sm:text-base flex items-center">
                {feature.name}
              </div>
              <div className="p-4 sm:p-5 text-center border-x border-gray-100 text-sm sm:text-base">
                <span className="text-green-700 font-medium">{feature.private}</span>
              </div>
              <div className="p-4 sm:p-5 text-center text-sm sm:text-base">
                <span className="text-blue-700">{feature.group}</span>
              </div>
            </div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
            <div className="p-4 sm:p-6"></div>
            <div className="p-4 sm:p-6 text-center border-x border-gray-200">
              <a
                href="#private-sessions"
                className="inline-block w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                {text.privateCta}
              </a>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <a
                href="#group-sessions"
                className="inline-block w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                {text.groupCta}
              </a>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-sm sm:text-base">{text.recommendation}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
