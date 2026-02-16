"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { dir, locale } = useLanguage();
  const isRTL = dir === "rtl";

  const content = {
    en: {
      title: "Wait! Special Offer 🎁",
      subtitle: "Enroll now & get a FREE diagnostic test",
      description: "When you enroll today, you'll receive a complimentary 15-minute oral diagnostic test with one of our tutors!",
      cta: "Enroll & Get My Bonus",
      noThanks: "No thanks, I'll pass",
      features: [
        "15-min oral test with a real tutor",
        "Discover your exact English level",
        "Get a personalized learning plan"
      ]
    },
    fr: {
      title: "Attendez ! Offre Spéciale 🎁",
      subtitle: "Inscrivez-vous et recevez un test diagnostic GRATUIT",
      description: "En vous inscrivant aujourd'hui, vous recevrez un test diagnostic oral de 15 minutes avec l'un de nos tuteurs !",
      cta: "M'inscrire & Obtenir Mon Bonus",
      noThanks: "Non merci, je passe",
      features: [
        "Test oral de 15 min avec un vrai tuteur",
        "Découvrez votre niveau exact",
        "Obtenez un plan d'apprentissage personnalisé"
      ]
    },
    ar: {
      title: "انتظر! عرض خاص 🎁",
      subtitle: "سجل الآن واحصل على اختبار تشخيصي مجاني",
      description: "عند التسجيل اليوم، ستحصل على اختبار تشخيصي شفوي مجاني لمدة 15 دقيقة مع أحد مدرسينا!",
      cta: "سجل واحصل على المكافأة",
      noThanks: "لا شكراً",
      features: [
        "اختبار شفوي 15 دقيقة مع مدرس حقيقي",
        "اكتشف مستواك الحقيقي",
        "احصل على خطة تعلم مخصصة"
      ]
    }
  };

  const text = content[locale as keyof typeof content] || content.en;

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem("exitPopupShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    // Also trigger on mobile when user scrolls up quickly (intent to leave)
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY - 100 && currentScrollY < 200 && !hasShown) {
        // User scrolled up quickly near the top
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
      lastScrollY = currentScrollY;
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setShowPopup(false)}
    >
      <div 
        className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in ${isRTL ? "text-right" : "text-left"}`}
        onClick={(e) => e.stopPropagation()}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 px-6 py-8 text-white text-center">
          <div className="text-4xl mb-3">🎓</div>
          <h2 className="text-2xl font-bold mb-2">{text.title}</h2>
          <p className="text-green-100 font-medium">{text.subtitle}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">{text.description}</p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            {text.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={() => setShowPopup(false)}
            className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            {text.cta}
          </a>

          {/* No thanks link */}
          <button
            onClick={() => setShowPopup(false)}
            className="block w-full text-gray-400 text-sm text-center mt-4 hover:text-gray-600 transition-colors"
          >
            {text.noThanks}
          </button>
        </div>

        {/* Urgency badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          {isRTL ? "عرض محدود" : "Limited Offer"}
        </div>
      </div>
    </div>
  );
}
