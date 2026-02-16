import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IELTS Preparation Course Morocco | Takalam English Center",
  description: "Prepare for IELTS exam with personalized coaching in Morocco. Speaking, Writing, Reading & Listening practice. Achieve your target band score with expert guidance.",
  keywords: [
    "IELTS preparation Morocco",
    "IELTS course Morocco",
    "IELTS coaching Casablanca",
    "IELTS speaking practice",
    "IELTS writing help",
    "IELTS exam prep online",
    "تحضير ايلتس المغرب",
    "preparation IELTS Maroc"
  ],
  openGraph: {
    title: "IELTS Preparation Course | Takalam English Center Morocco",
    description: "Achieve your target IELTS band score with personalized coaching. Expert guidance for all 4 sections.",
    type: "website",
  },
};

// IELTS Schema for SEO
const ieltsSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "IELTS Preparation Course",
  "description": "Comprehensive IELTS preparation course covering Speaking, Writing, Reading, and Listening sections with personalized coaching.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Takalam English Center",
    "url": "https://takalamenglish.ma"
  },
  "courseMode": "online",
  "educationalLevel": "Intermediate to Advanced",
  "inLanguage": "en",
  "offers": {
    "@type": "Offer",
    "category": "IELTS Preparation",
    "priceCurrency": "MAD",
    "availability": "https://schema.org/InStock"
  }
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
      "name": "IELTS Preparation",
      "item": "https://takalamenglish.ma/ielts"
    }
  ]
};

export default function IELTSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ieltsSchema) }}
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

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-green-600">Home</Link></li>
          <li><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
          <li className="text-gray-900 font-medium">IELTS Preparation</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                IELTS Exam Preparation
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Achieve Your Target <span className="text-green-600">IELTS Score</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Personalized IELTS coaching focused on YOUR weak areas. Get expert guidance for Speaking, Writing, Reading, and Listening sections.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1-on-1 Sessions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mock Tests</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed Feedback</span>
                </div>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-lg"
              >
                Start IELTS Prep
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">IELTS Band Score Goals</h3>
                  <div className="space-y-4">
                    {[
                      { band: "Band 6.0", desc: "University admission (most programs)" },
                      { band: "Band 6.5", desc: "Professional registration" },
                      { band: "Band 7.0", desc: "Competitive universities" },
                      { band: "Band 7.5+", desc: "Top universities & immigration" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded">{item.band}</span>
                        <span className="text-gray-600 text-sm">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Complete IELTS <span className="text-green-600">Preparation</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We cover all four sections of the IELTS exam with focused practice and expert strategies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Speaking",
                icon: "🎤",
                color: "green",
                points: ["Part 1, 2, 3 practice", "Fluency techniques", "Pronunciation tips", "Real mock interviews"]
              },
              {
                title: "Writing",
                icon: "✍️",
                color: "blue",
                points: ["Task 1 & Task 2", "Essay structures", "Grammar correction", "Time management"]
              },
              {
                title: "Reading",
                icon: "📖",
                color: "purple",
                points: ["Skimming & scanning", "Question types", "Time strategies", "Vocabulary building"]
              },
              {
                title: "Listening",
                icon: "🎧",
                color: "orange",
                points: ["All 4 sections", "Note-taking skills", "Accent training", "Practice tests"]
              },
            ].map((section, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Prepare IELTS with <span className="text-green-600">Takalam</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Focus",
                desc: "We identify YOUR weak areas and create a custom study plan. No generic courses.",
                icon: "🎯"
              },
              {
                title: "Speaking Specialist",
                desc: "Speaking is where most students struggle. We focus 50%+ on speaking practice.",
                icon: "💬"
              },
              {
                title: "Flexible Schedule",
                desc: "Study at your pace, on your schedule. Morning, evening, or weekend sessions.",
                icon: "📅"
              },
              {
                title: "Real Mock Tests",
                desc: "Practice with real IELTS-style tests and get detailed feedback on every answer.",
                icon: "📝"
              },
              {
                title: "Moroccan Teacher",
                desc: "Understands the challenges Arabic speakers face with English pronunciation and grammar.",
                icon: "🇲🇦"
              },
              {
                title: "Affordable Pricing",
                desc: "Quality IELTS prep without the expensive language school prices.",
                icon: "💰"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Achieve Your IELTS Goals?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Book a free consultation to discuss your target score and create your study plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-colors"
            >
              Book Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/blog/ielts-preparation-guide"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
            >
              Read IELTS Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} Takalam English Center. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <Link href="/blog" className="hover:text-green-400">Blog</Link>
            <Link href="/rules" className="hover:text-green-400">Terms</Link>
            <Link href="/#contact" className="hover:text-green-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
