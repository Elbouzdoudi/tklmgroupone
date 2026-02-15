import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - English Learning Tips & Guides",
  description: "Free English learning tips, speaking strategies, IELTS preparation guides, and confidence-building techniques from Takalam English Center Morocco.",
  openGraph: {
    title: "English Learning Blog | Takalam English Center",
    description: "Free English learning tips, speaking strategies, and exam preparation guides from Takalam.",
    type: "website",
  },
  keywords: ["English learning tips", "speaking practice", "IELTS preparation", "English confidence", "Morocco English blog"],
};

// Blog posts data
const blogPosts = [
  {
    slug: "5-tips-to-improve-english-speaking",
    title: "5 Practical Tips to Improve Your English Speaking",
    excerpt: "Discover actionable strategies to boost your spoken English skills, even if you're starting from scratch.",
    date: "January 25, 2026",
    dateISO: "2026-01-25",
    readTime: "5 min read",
    category: "Speaking",
    image: "/blog/speaking-tips.jpg",
  },
  {
    slug: "overcome-fear-of-speaking-english",
    title: "How to Overcome the Fear of Speaking English",
    excerpt: "Learn proven techniques to build confidence and speak English without anxiety or self-doubt.",
    date: "January 20, 2026",
    dateISO: "2026-01-20",
    readTime: "4 min read",
    category: "Confidence",
    image: "/blog/confidence.jpg",
  },
  {
    slug: "ielts-preparation-guide",
    title: "Complete IELTS Preparation Guide for Beginners",
    excerpt: "Everything you need to know about IELTS exam structure, scoring, and preparation strategies.",
    date: "January 15, 2026",
    dateISO: "2026-01-15",
    readTime: "8 min read",
    category: "Exam Prep",
    image: "/blog/ielts.jpg",
  },
];

// Blog Schema for SEO
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Takalam English Learning Blog",
  "description": "Free English learning tips, speaking strategies, and exam preparation guides from Takalam English Center Morocco.",
  "url": "https://takalamenglish.ma/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Takalam English Center",
    "logo": {
      "@type": "ImageObject",
      "url": "https://takalamenglish.ma/logo.png"
    }
  },
  "blogPost": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.dateISO,
    "url": `https://takalamenglish.ma/blog/${post.slug}`,
    "author": {
      "@type": "Person",
      "name": "Said",
      "jobTitle": "English Teacher"
    }
  }))
};

// Breadcrumb Schema
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
      "name": "Blog",
      "item": "https://takalamenglish.ma/blog"
    }
  ]
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Blog and Breadcrumb Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="TAKALAM"
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

      {/* Breadcrumb Navigation */}
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="text-gray-900 font-medium">Blog</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            English Learning Tips
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The TAKALAM <span className="text-green-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free resources, tips, and strategies to help you improve your English speaking skills.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <span className="text-green-600 font-medium text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Speaking?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Reading tips is great, but nothing beats real practice. Book a session and start speaking English today.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            Book Your First Session
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} TAKALAM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
