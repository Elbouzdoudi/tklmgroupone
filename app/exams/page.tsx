import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Exam Preparation Morocco | IELTS, TOEFL, Cambridge | Takalam",
  description: "Prepare for IELTS, TOEFL, Cambridge, and Duolingo English Test with expert coaching. Achieve your target scores with personalized exam preparation courses in Morocco.",
  keywords: [
    "IELTS preparation Morocco",
    "TOEFL course Morocco",
    "Cambridge English exam",
    "Duolingo English Test",
    "English exam prep",
    "exam preparation course",
    "تحضير امتحان الإنجليزية المغرب",
    "preparation examen anglais Maroc"
  ],
  alternates: {
    canonical: "https://takalamenglish.ma/exams",
  },
  openGraph: {
    title: "English Exam Preparation | IELTS, TOEFL, Cambridge | Takalam",
    description: "Expert coaching for all major English proficiency exams. Achieve your target score with Takalam.",
    type: "website",
  },
};

const examSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "English Exam Preparation Course",
  "description": "Comprehensive preparation for IELTS, TOEFL, Cambridge, and other English proficiency exams.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Takalam English Center",
    "url": "https://takalamenglish.ma"
  },
  "courseMode": "online",
  "educationalLevel": "Intermediate to Advanced",
  "inLanguage": "en"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://takalamenglish.ma"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Exam Preparation",
      "item": "https://takalamenglish.ma/exams"
    }
  ]
};

const exams = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "The most popular English test for study, work, and migration to English-speaking countries.",
    purposes: ["University admission", "Immigration (UK, Canada, Australia)", "Professional registration"],
    sections: ["Listening", "Reading", "Writing", "Speaking"],
    color: "red",
    link: "/ielts"
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description: "Widely accepted by universities and institutions in the US and around the world.",
    purposes: ["US university admission", "Scholarships", "Professional certification"],
    sections: ["Reading", "Listening", "Speaking", "Writing"],
    color: "blue",
    link: null
  },
  {
    name: "Cambridge",
    fullName: "Cambridge English Qualifications",
    description: "Recognized globally for education, employment, and visa applications.",
    purposes: ["B2 First (FCE)", "C1 Advanced (CAE)", "C2 Proficiency (CPE)"],
    sections: ["Reading & Use of English", "Writing", "Listening", "Speaking"],
    color: "purple",
    link: null
  },
  {
    name: "Duolingo",
    fullName: "Duolingo English Test (DET)",
    description: "A modern, convenient test accepted by over 4,000 institutions worldwide.",
    purposes: ["University admission", "Quick certification", "Affordable alternative"],
    sections: ["Literacy", "Comprehension", "Production", "Conversation"],
    color: "green",
    link: null
  }
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Mock Tests",
    description: "Practice with full-length mock exams under real test conditions"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Writing Feedback",
    description: "Detailed corrections and suggestions on every essay and task"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Speaking Practice",
    description: "1-on-1 speaking sessions with real-time feedback and tips"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Strategy Training",
    description: "Learn time management and test-taking strategies that work"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Score Tracking",
    description: "Monitor your progress with regular practice tests and assessments"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Study Materials",
    description: "Access to practice questions, vocabulary lists, and study guides"
  }
];

const successStories = [
  { name: "Youssef A.", exam: "IELTS", score: "Band 7.5", goal: "Canada Immigration" },
  { name: "Sara M.", exam: "TOEFL", score: "105/120", goal: "US University" },
  { name: "Ahmed K.", exam: "Cambridge C1", score: "Grade A", goal: "Professional Career" },
  { name: "Nadia R.", exam: "Duolingo", score: "130/160", goal: "Master's Program" }
];

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Takalam English Center"
                width={600}
                height={150}
                className="h-20 w-auto -my-2"
              />
            </Link>
            <Link
              href="/"
              className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Exam Preparation
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Achieve Your <span className="text-indigo-300">Target Score</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
              Expert preparation for IELTS, TOEFL, Cambridge, and Duolingo English Test. 
              Get the scores you need for university, immigration, or career advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#exams"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all shadow-lg"
              >
                Choose Your Exam
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all border border-indigo-500"
              >
                Free Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600">200+</div>
              <div className="text-slate-600 mt-1">Students Certified</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600">7.0+</div>
              <div className="text-slate-600 mt-1">Avg IELTS Score</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600">95%</div>
              <div className="text-slate-600 mt-1">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600">4</div>
              <div className="text-slate-600 mt-1">Exams Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section id="exams" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Choose Your <span className="text-indigo-600">Exam</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer specialized preparation for all major English proficiency tests.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {exams.map((exam, index) => {
              const colorClasses: Record<string, { bg: string; text: string; border: string; badge: string }> = {
                red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", badge: "bg-red-600" },
                blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", badge: "bg-blue-600" },
                purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", badge: "bg-purple-600" },
                green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", badge: "bg-green-600" }
              };
              const colors = colorClasses[exam.color];
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm border-2 ${colors.border} hover:shadow-lg transition-all`}
                >
                  <div className={`${colors.bg} p-6`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`inline-block ${colors.badge} text-white text-sm font-bold px-3 py-1 rounded-full mb-2`}>
                          {exam.name}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">{exam.fullName}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{exam.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Perfect for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exam.purposes.map((purpose, pIndex) => (
                          <span key={pIndex} className={`text-xs ${colors.bg} ${colors.text} px-2 py-1 rounded-full`}>
                            {purpose}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Test sections:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {exam.sections.map((section, sIndex) => (
                          <div key={sIndex} className="flex items-center gap-2 text-sm text-slate-600">
                            <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {section}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {exam.link ? (
                      <Link
                        href={exam.link}
                        className={`inline-flex items-center justify-center gap-2 w-full ${colors.badge} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all`}
                      >
                        View {exam.name} Course
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href="#contact"
                        className={`inline-flex items-center justify-center gap-2 w-full ${colors.badge} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all`}
                      >
                        Start {exam.name} Prep
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What's <span className="text-indigo-600">Included</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to prepare effectively and achieve your target score.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Student <span className="text-indigo-600">Success Stories</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real students who achieved their goals with Takalam.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mx-auto mb-4">
                  {story.name.charAt(0)}
                </div>
                <h3 className="font-bold text-slate-900">{story.name}</h3>
                <div className="mt-2 mb-3">
                  <span className="inline-block bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {story.exam}: {story.score}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{story.goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Exam Prep?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get a free diagnostic assessment to identify your strengths and areas for improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212600000000?text=Hi, I'm interested in exam preparation. I want to prepare for [EXAM NAME]."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Free Assessment
            </a>
            <a
              href="mailto:contact@takalamenglish.ma?subject=Exam Preparation Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-800 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Takalam English Center. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/ielts" className="hover:text-white transition-colors">IELTS</Link>
            <Link href="/business-english" className="hover:text-white transition-colors">Business English</Link>
            <Link href="/corporate" className="hover:text-white transition-colors">Corporate</Link>
            <Link href="/kids" className="hover:text-white transition-colors">Kids</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
