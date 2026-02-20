import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English for Kids Morocco | Children's English Classes | Takalam",
  description: "Fun and engaging English classes for children in Morocco. Age-appropriate lessons that build confidence and communication skills. Online classes for kids aged 6-16.",
  keywords: [
    "English for kids Morocco",
    "Children English classes",
    "Kids English course online",
    "English lessons for children",
    "Learn English kids Morocco",
    "cours anglais enfants Maroc",
    "تعليم الإنجليزية للأطفال المغرب"
  ],
  alternates: {
    canonical: "https://takalamenglish.ma/kids",
  },
  openGraph: {
    title: "English for Kids | Takalam English Center Morocco",
    description: "Fun, engaging English classes designed for children. Build your child's confidence in English communication.",
    type: "website",
  },
};

const kidsSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "English for Kids Program",
  "description": "Fun and engaging English classes for children aged 6-16 in Morocco.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Takalam English Center",
    "url": "https://takalamenglish.ma"
  },
  "courseMode": "online",
  "educationalLevel": "Primary and Secondary",
  "inLanguage": "en",
  "audience": {
    "@type": "Audience",
    "audienceType": "Children aged 6-16"
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
      "name": "Kids English",
      "item": "https://takalamenglish.ma/kids"
    }
  ]
};

const ageGroups = [
  {
    age: "6-9 years",
    title: "Little Explorers",
    description: "Foundation building through play, songs, and interactive activities",
    features: ["Playful learning", "Basic vocabulary", "Simple conversations", "Fun activities"],
    color: "pink"
  },
  {
    age: "10-12 years",
    title: "Young Learners",
    description: "Building confidence with structured lessons and creative projects",
    features: ["Grammar basics", "Reading skills", "Writing practice", "Presentations"],
    color: "purple"
  },
  {
    age: "13-16 years",
    title: "Teen Achievers",
    description: "Academic English and real-world communication skills",
    features: ["Academic English", "Exam preparation", "Essay writing", "Debate skills"],
    color: "blue"
  }
];

const features = [
  {
    icon: "🎮",
    title: "Fun & Interactive",
    description: "Games, stories, and activities that make learning feel like play"
  },
  {
    icon: "👨‍🏫",
    title: "Qualified Teachers",
    description: "Experienced instructors trained to work with young learners"
  },
  {
    icon: "📱",
    title: "100% Online",
    description: "Learn from the comfort of home with flexible scheduling"
  },
  {
    icon: "👥",
    title: "Small Groups",
    description: "Maximum 6 students per class for personalized attention"
  },
  {
    icon: "📊",
    title: "Progress Reports",
    description: "Regular updates for parents on their child's development"
  },
  {
    icon: "🏆",
    title: "Certificates",
    description: "Achievement certificates to celebrate milestones"
  }
];

export default function KidsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kidsSchema) }}
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-pink-500"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-300 rounded-full"></div>
          <div className="absolute bottom-10 right-1/3 w-16 h-16 bg-purple-300 rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">🌟</span>
              Ages 6-16
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              English for <span className="text-yellow-200">Kids</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Fun, engaging, and effective English classes designed specifically for young learners. 
              Help your child build confidence and communication skills that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all shadow-lg"
              >
                View Programs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all"
              >
                Free Trial Class
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kids Love Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Kids <span className="text-orange-500">Love</span> Learning With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe learning English should be exciting, not stressful. Our methods keep kids engaged and motivated.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Programs by <span className="text-orange-500">Age Group</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Age-appropriate curriculum designed to match your child's developmental stage and learning needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => {
              const colorClasses = {
                pink: "from-pink-500 to-pink-600 border-pink-200",
                purple: "from-purple-500 to-purple-600 border-purple-200",
                blue: "from-blue-500 to-blue-600 border-blue-200"
              };
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 ${group.color === 'pink' ? 'border-pink-200' : group.color === 'purple' ? 'border-purple-200' : 'border-blue-200'}`}
                >
                  <div className={`bg-gradient-to-r ${group.color === 'pink' ? 'from-pink-500 to-pink-600' : group.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-blue-500 to-blue-600'} text-white p-6`}>
                    <div className="text-sm font-medium opacity-90">{group.age}</div>
                    <h3 className="text-2xl font-bold mt-1">{group.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-6">{group.description}</p>
                    <div className="space-y-3">
                      {group.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <svg className={`w-5 h-5 flex-shrink-0 ${group.color === 'pink' ? 'text-pink-500' : group.color === 'purple' ? 'text-purple-500' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What <span className="text-orange-500">Parents</span> Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 text-lg italic">
                "My daughter went from being shy about speaking English to confidently chatting with her teacher. 
                The interactive lessons keep her excited for every class!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
                  F
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Fatima Z.</div>
                  <div className="text-slate-500 text-sm">Parent of 8-year-old</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 text-lg italic">
                "The teachers really understand how to engage teenagers. My son's grades in English at school 
                improved significantly, and he actually enjoys the lessons!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  K
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Khalid M.</div>
                  <div className="text-slate-500 text-sm">Parent of 14-year-old</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Give Your Child the Gift of English
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free trial class and see how much fun learning English can be!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212722774753?text=Hi, I'm interested in English classes for my child."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +212 722 774 753
            </a>
            <a
              href="mailto:contact@takalamenglish.ma?subject=Kids English Classes Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all"
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
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/business-english" className="hover:text-white transition-colors">Business English</Link>
            <Link href="/ielts" className="hover:text-white transition-colors">IELTS</Link>
            <Link href="/corporate" className="hover:text-white transition-colors">Corporate</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
