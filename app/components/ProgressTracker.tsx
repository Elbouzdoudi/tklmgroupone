"use client";

import { useLanguage } from "../i18n/LanguageContext";

const content = {
  en: {
    badge: "📊 Coming Soon",
    title: "Track Your Progress Like Never Before",
    subtitle: "Our upcoming learning dashboard will help you visualize your journey to fluency",
    features: [
      {
        icon: "📈",
        title: "Skill Breakdown",
        description: "See your progress in Speaking, Listening, Reading, and Writing"
      },
      {
        icon: "🎯",
        title: "Goal Tracking",
        description: "Set targets and celebrate milestones along the way"
      },
      {
        icon: "📅",
        title: "Session History",
        description: "Review past sessions, notes, and areas for improvement"
      },
      {
        icon: "🏆",
        title: "Achievement Badges",
        description: "Earn rewards as you hit learning milestones"
      }
    ],
    mockProgress: {
      overall: 72,
      speaking: 78,
      listening: 85,
      grammar: 65,
      vocabulary: 68
    },
    ctaText: "Get Early Access",
    ctaSubtext: "Be the first to know when it launches",
    recentActivity: "Recent Activity",
    activities: [
      { type: "Session", text: "Completed Business English Session", time: "2 hours ago" },
      { type: "Achievement", text: "Earned 'Conversation Master' Badge", time: "Yesterday" },
      { type: "Milestone", text: "Reached 50 Sessions Milestone", time: "3 days ago" }
    ]
  },
  fr: {
    badge: "📊 Bientôt Disponible",
    title: "Suivez Vos Progrès Comme Jamais",
    subtitle: "Notre tableau de bord vous aidera à visualiser votre parcours vers la maîtrise",
    features: [
      {
        icon: "📈",
        title: "Analyse des Compétences",
        description: "Voyez vos progrès en Expression, Compréhension, Lecture et Écriture"
      },
      {
        icon: "🎯",
        title: "Suivi des Objectifs",
        description: "Définissez des cibles et célébrez les étapes importantes"
      },
      {
        icon: "📅",
        title: "Historique des Sessions",
        description: "Révisez les sessions passées, notes et points à améliorer"
      },
      {
        icon: "🏆",
        title: "Badges de Réussite",
        description: "Gagnez des récompenses en atteignant vos objectifs"
      }
    ],
    mockProgress: {
      overall: 72,
      speaking: 78,
      listening: 85,
      grammar: 65,
      vocabulary: 68
    },
    ctaText: "Accès Anticipé",
    ctaSubtext: "Soyez le premier informé du lancement",
    recentActivity: "Activité Récente",
    activities: [
      { type: "Session", text: "Session d'anglais des affaires terminée", time: "Il y a 2 heures" },
      { type: "Achievement", text: "Badge 'Maître de Conversation' obtenu", time: "Hier" },
      { type: "Milestone", text: "50 sessions atteintes", time: "Il y a 3 jours" }
    ]
  },
  ar: {
    badge: "📊 قريباً",
    title: "تتبع تقدمك بشكل لم يسبق له مثيل",
    subtitle: "لوحة التحكم القادمة ستساعدك على تصور رحلتك نحو الطلاقة",
    features: [
      {
        icon: "📈",
        title: "تحليل المهارات",
        description: "تابع تقدمك في التحدث والاستماع والقراءة والكتابة"
      },
      {
        icon: "🎯",
        title: "تتبع الأهداف",
        description: "حدد أهدافاً واحتفل بالإنجازات على طول الطريق"
      },
      {
        icon: "📅",
        title: "سجل الجلسات",
        description: "راجع الجلسات السابقة والملاحظات ومجالات التحسين"
      },
      {
        icon: "🏆",
        title: "شارات الإنجاز",
        description: "احصل على مكافآت عند تحقيق أهداف التعلم"
      }
    ],
    mockProgress: {
      overall: 72,
      speaking: 78,
      listening: 85,
      grammar: 65,
      vocabulary: 68
    },
    ctaText: "احصل على الوصول المبكر",
    ctaSubtext: "كن أول من يعرف عند الإطلاق",
    recentActivity: "النشاط الأخير",
    activities: [
      { type: "Session", text: "أكملت جلسة إنجليزية للأعمال", time: "منذ ساعتين" },
      { type: "Achievement", text: "حصلت على شارة 'خبير المحادثة'", time: "أمس" },
      { type: "Milestone", text: "وصلت لـ 50 جلسة", time: "منذ 3 أيام" }
    ]
  }
};

const skillLabels = {
  en: { speaking: "Speaking", listening: "Listening", grammar: "Grammar", vocabulary: "Vocabulary" },
  fr: { speaking: "Expression", listening: "Compréhension", grammar: "Grammaire", vocabulary: "Vocabulaire" },
  ar: { speaking: "التحدث", listening: "الاستماع", grammar: "القواعد", vocabulary: "المفردات" }
};

export default function ProgressTracker() {
  const { locale } = useLanguage();
  const t = content[locale as keyof typeof content] || content.en;
  const labels = skillLabels[locale as keyof typeof skillLabels] || skillLabels.en;
  const isRTL = locale === "ar";

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 ${isRTL ? "rtl" : ""}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Mock Dashboard Preview */}
          <div className="relative">
            {/* Dashboard Card */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
              {/* Overall Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 font-medium">Overall Progress</span>
                  <span className="text-2xl font-bold text-emerald-400">{t.mockProgress.overall}%</span>
                </div>
                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000"
                    style={{ width: `${t.mockProgress.overall}%` }}
                  ></div>
                </div>
              </div>

              {/* Skill Breakdown */}
              <div className="space-y-4">
                {Object.entries({ speaking: t.mockProgress.speaking, listening: t.mockProgress.listening, grammar: t.mockProgress.grammar, vocabulary: t.mockProgress.vocabulary }).map(([skill, value]) => (
                  <div key={skill}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">{labels[skill as keyof typeof labels]}</span>
                      <span className="text-sm font-medium text-gray-300">{value}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill === 'speaking' ? 'bg-blue-500' :
                          skill === 'listening' ? 'bg-purple-500' :
                          skill === 'grammar' ? 'bg-amber-500' : 'bg-pink-500'
                        }`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-gray-300 font-medium mb-4">{t.recentActivity}</h4>
                <div className="space-y-3">
                  {t.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <span className={`w-2 h-2 rounded-full mt-1.5 ${
                        activity.type === 'Session' ? 'bg-emerald-400' :
                        activity.type === 'Achievement' ? 'bg-amber-400' : 'bg-purple-400'
                      }`}></span>
                      <div>
                        <p className="text-gray-300">{activity.text}</p>
                        <p className="text-gray-500 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative blur effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10"></div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className="group flex gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <button
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>🔔</span>
                <span>{t.ctaText}</span>
              </button>
              <p className="text-center text-gray-500 text-sm mt-3">{t.ctaSubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
