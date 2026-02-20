import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business English Course Morocco | Professional English Training",
  description: "Master Business English for your career. Learn professional vocabulary, email writing, presentations, meetings & negotiations. Online courses for Moroccan professionals.",
  keywords: [
    "Business English Morocco",
    "Professional English course",
    "Corporate English training",
    "Business English online",
    "English for work Morocco",
    "Professional communication English",
    "anglais professionnel Maroc",
    "الانجليزية للاعمال المغرب"
  ],
  alternates: {
    canonical: "https://takalamenglish.ma/business-english",
  },
  openGraph: {
    title: "Business English Course | Takalam English Center Morocco",
    description: "Professional English training for your career success. Master business vocabulary, emails, and presentations.",
    type: "website",
  },
};

// Business English Schema for SEO
const businessEnglishSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Business English Course",
  "description": "Professional Business English training covering business vocabulary, email writing, presentations, meetings, and negotiations.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Takalam English Center",
    "url": "https://takalamenglish.ma"
  },
  "courseMode": "online",
  "educationalLevel": "Intermediate to Advanced",
  "inLanguage": "en",
  "occupationalCategory": "Business Professional",
  "offers": {
    "@type": "Offer",
    "category": "Business English Training",
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
      "name": "Business English",
      "item": "https://takalamenglish.ma/business-english"
    }
  ]
};

export default function BusinessEnglishPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessEnglishSchema) }}
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
          <li className="text-gray-900 font-medium">Business English</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Professional English Training
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Master <span className="text-green-600">Business English</span> for Career Success
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Communicate confidently in professional settings. Learn the vocabulary, phrases, and skills you need to succeed in international business.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Email Writing</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Presentations</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Negotiations</span>
                </div>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-lg"
              >
                Start Learning
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Who Is This For?</h3>
                  <div className="space-y-4">
                    {[
                      { role: "🧑‍💼", title: "Managers & Executives", desc: "Leading international teams" },
                      { role: "💼", title: "Sales Professionals", desc: "Closing deals with global clients" },
                      { role: "🎓", title: "Job Seekers", desc: "Preparing for English interviews" },
                      { role: "🚀", title: "Entrepreneurs", desc: "Expanding to international markets" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-2xl">{item.role}</span>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                          <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            What You&apos;ll <span className="text-green-600">Learn</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Practical skills you can apply immediately in your professional life.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Emails",
                icon: "📧",
                points: ["Clear, concise writing", "Formal vs informal tone", "Common phrases & templates", "Following up professionally"]
              },
              {
                title: "Meetings & Calls",
                icon: "📞",
                points: ["Leading meetings", "Expressing opinions", "Active listening", "Conference call etiquette"]
              },
              {
                title: "Presentations",
                icon: "📊",
                points: ["Structuring content", "Opening & closing", "Handling Q&A", "Visual aid language"]
              },
              {
                title: "Negotiations",
                icon: "🤝",
                points: ["Making proposals", "Counter-offers", "Finding compromise", "Closing deals"]
              },
              {
                title: "Networking",
                icon: "🌐",
                points: ["Small talk", "Introducing yourself", "Following up", "LinkedIn messages"]
              },
              {
                title: "Reports & Documents",
                icon: "📝",
                points: ["Executive summaries", "Data presentation", "Professional formatting", "Proofreading skills"]
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

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industries We <span className="text-green-600">Specialize In</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🏦", name: "Finance & Banking" },
              { icon: "💻", name: "IT & Technology" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "🏭", name: "Manufacturing" },
              { icon: "✈️", name: "Tourism & Hospitality" },
              { icon: "📦", name: "Import/Export" },
              { icon: "🏗️", name: "Real Estate" },
              { icon: "📈", name: "Marketing & Sales" },
            ].map((industry, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{industry.icon}</div>
                <p className="font-medium text-gray-700 text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Business English Helps <span className="text-green-600">Your Career</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Better Job Opportunities",
                desc: "Many Moroccan companies now require English for management positions. Stand out in your job search.",
                stat: "70%",
                statDesc: "of high-paying jobs require English"
              },
              {
                title: "Higher Salary Potential",
                desc: "Professionals with strong English skills earn significantly more than their peers.",
                stat: "+30%",
                statDesc: "average salary increase"
              },
              {
                title: "International Opportunities",
                desc: "Work with global clients, travel for business, or relocate to English-speaking countries.",
                stat: "Global",
                statDesc: "career mobility"
              },
              {
                title: "Confidence in Meetings",
                desc: "No more staying quiet in meetings. Express your ideas clearly and persuasively.",
                stat: "100%",
                statDesc: "confidence boost"
              },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="flex-shrink-0 w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">{benefit.stat}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{benefit.desc}</p>
                  <p className="text-green-600 text-xs font-medium">{benefit.statDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Book a free consultation to discuss your professional goals and create a customized learning plan.
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
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
            >
              Read Our Blog
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
            <Link href="/ielts" className="hover:text-green-400">IELTS</Link>
            <Link href="/rules" className="hover:text-green-400">Terms</Link>
            <Link href="/#contact" className="hover:text-green-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
