"use client";

import { useLanguage } from "../i18n/LanguageContext";

const content = {
  en: {
    badge: "📚 Getting Started",
    title: "How to Prepare for Your Learning Journey",
    subtitle: "Simple steps to maximize your progress from day one",
    steps: [
      {
        icon: "🎯",
        title: "Set Clear Goals",
        description: "Define what you want to achieve - whether it's conversational fluency, business English, or IELTS preparation. We'll create a personalized roadmap.",
        tip: "Pro tip: Write down 3 specific situations where you want to use English confidently."
      },
      {
        icon: "📱",
        title: "Prepare Your Environment",
        description: "Find a quiet space with good lighting and stable internet. Use headphones for better audio quality during sessions.",
        tip: "Pro tip: Test your camera and microphone before your first session."
      },
      {
        icon: "📝",
        title: "Keep a Learning Journal",
        description: "Track new vocabulary, grammar points, and your progress. Review your notes between sessions to reinforce learning.",
        tip: "Pro tip: Use a digital note app to organize topics and search easily."
      },
      {
        icon: "🗣️",
        title: "Practice Daily",
        description: "Even 15 minutes daily makes a huge difference. Listen to English podcasts, watch shows, or think in English throughout your day.",
        tip: "Pro tip: Change your phone language to English for passive learning."
      }
    ],
    cta: "Enroll Now & Get Your Diagnostic Test",
    ctaSubtext: "Includes a 15-min oral assessment with a tutor to personalize your learning"
  },
  fr: {
    badge: "📚 Pour Commencer",
    title: "Comment Préparer Votre Parcours d'Apprentissage",
    subtitle: "Des étapes simples pour maximiser vos progrès dès le premier jour",
    steps: [
      {
        icon: "🎯",
        title: "Définissez des Objectifs Clairs",
        description: "Définissez ce que vous voulez accomplir - que ce soit la fluidité conversationnelle, l'anglais des affaires ou la préparation IELTS.",
        tip: "Conseil pro : Notez 3 situations spécifiques où vous voulez utiliser l'anglais avec confiance."
      },
      {
        icon: "📱",
        title: "Préparez Votre Environnement",
        description: "Trouvez un espace calme avec un bon éclairage et une connexion internet stable. Utilisez des écouteurs pour une meilleure qualité audio.",
        tip: "Conseil pro : Testez votre caméra et micro avant votre première session."
      },
      {
        icon: "📝",
        title: "Tenez un Journal d'Apprentissage",
        description: "Suivez le nouveau vocabulaire, les points de grammaire et vos progrès. Révisez vos notes entre les sessions.",
        tip: "Conseil pro : Utilisez une application de notes pour organiser les sujets."
      },
      {
        icon: "🗣️",
        title: "Pratiquez Quotidiennement",
        description: "Même 15 minutes par jour font une énorme différence. Écoutez des podcasts, regardez des séries ou pensez en anglais.",
        tip: "Conseil pro : Changez la langue de votre téléphone en anglais."
      }
    ],
    cta: "Inscrivez-vous et Obtenez Votre Test",
    ctaSubtext: "Inclut une évaluation orale de 15 min avec un tuteur pour personnaliser votre apprentissage"
  },
  ar: {
    badge: "📚 للبدء",
    title: "كيف تستعد لرحلة التعلم",
    subtitle: "خطوات بسيطة لتحقيق أقصى تقدم من اليوم الأول",
    steps: [
      {
        icon: "🎯",
        title: "حدد أهدافاً واضحة",
        description: "حدد ما تريد تحقيقه - سواء كانت الطلاقة في المحادثة، أو الإنجليزية للأعمال، أو التحضير لـ IELTS.",
        tip: "نصيحة: اكتب 3 مواقف محددة تريد استخدام الإنجليزية فيها بثقة."
      },
      {
        icon: "📱",
        title: "جهز بيئتك",
        description: "ابحث عن مكان هادئ مع إضاءة جيدة واتصال إنترنت مستقر. استخدم سماعات للحصول على جودة صوت أفضل.",
        tip: "نصيحة: اختبر الكاميرا والميكروفون قبل جلستك الأولى."
      },
      {
        icon: "📝",
        title: "احتفظ بدفتر للتعلم",
        description: "تتبع المفردات الجديدة ونقاط القواعد وتقدمك. راجع ملاحظاتك بين الجلسات لتعزيز التعلم.",
        tip: "نصيحة: استخدم تطبيق ملاحظات رقمي لتنظيم المواضيع."
      },
      {
        icon: "🗣️",
        title: "تدرب يومياً",
        description: "حتى 15 دقيقة يومياً تُحدث فرقاً كبيراً. استمع لبودكاست إنجليزي، شاهد عروضاً، أو فكر بالإنجليزية.",
        tip: "نصيحة: غير لغة هاتفك للإنجليزية للتعلم السلبي."
      }
    ],
    cta: "سجل الآن واحصل على اختبارك التشخيصي",
    ctaSubtext: "يشمل تقييماً شفوياً لمدة 15 دقيقة مع مدرس لتخصيص تعلمك"
  }
};

export default function HowToPrepare() {
  const { locale } = useLanguage();
  const t = content[locale as keyof typeof content] || content.en;
  const isRTL = locale === "ar";

  return (
    <section className={`py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 ${isRTL ? "rtl" : ""}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {t.steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              {/* Step Number */}
              <div className={`absolute ${isRTL ? "-right-3" : "-left-3"} -top-3 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Pro Tip */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-3">
                <p className="text-sm text-amber-800 font-medium">
                  💡 {step.tip}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            <span>{t.cta}</span>
            <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-4 text-gray-500 text-sm">{t.ctaSubtext}</p>
        </div>
      </div>
    </section>
  );
}
