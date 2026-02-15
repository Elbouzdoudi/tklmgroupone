import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LanguageWrapper from "./components/LanguageWrapper";
import CookieConsent from "./components/CookieConsent";
import AIChatBot from "./components/AIChatBot";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://takalamenglish.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Takalam - Learn English Online | #1 English Classes in Morocco",
    template: "%s | Takalam English Center Morocco",
  },
  description: "Learn English online with Morocco's top-rated English center. Private 1-on-1 lessons & group classes. IELTS prep, business English, speaking confidence. Start today!",
  keywords: [
    // Primary English keywords
    "English classes Morocco",
    "learn English online Morocco",
    "English courses Morocco",
    "online English lessons Morocco",
    "English tutoring Morocco",
    "private English lessons",
    "group English classes",
    "English speaking practice",
    // IELTS/Exam keywords
    "IELTS preparation Morocco",
    "TOEFL preparation Morocco",
    "English exam prep",
    // Business keywords
    "business English Morocco",
    "professional English courses",
    "English for work",
    // Location keywords
    "English classes Casablanca",
    "English courses Rabat",
    "English lessons Marrakech",
    "online English Morocco",
    // Arabic keywords
    "تعلم الإنجليزية في المغرب",
    "دروس انجليزية اون لاين",
    "كورسات انجليزي المغرب",
    "مركز تكلم للانجليزية",
    // French keywords
    "cours d'anglais Maroc",
    "apprendre anglais en ligne Maroc",
    "cours anglais Casablanca",
    // Brand keywords
    "Takalam English",
    "Takalam Morocco",
    "affordable English courses Morocco"
  ],
  authors: [{ name: "Takalam English Center" }],
  creator: "Takalam English Center",
  publisher: "Takalam English Center",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Takalam English Center | Online English Courses in Morocco",
    description: "Affordable online English courses in Morocco. Structured levels, live communication sessions, and certified teachers.",
    url: siteUrl,
    siteName: "Takalam English Center",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_MA"],
    type: "website",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Takalam English Center - Learn English Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takalam English Center | Online English Courses in Morocco",
    description: "Affordable online English courses in Morocco. Structured levels, live sessions & certified teachers.",
    images: ["/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console - Add your verification code here after getting it from GSC
    // Steps: Go to Google Search Console > Add Property > Choose URL prefix method
    // Then select "HTML tag" verification and paste the content value here
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    // Optional: Yandex, Bing verification
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en": siteUrl,
      "fr": `${siteUrl}?lang=fr`,
      "ar": `${siteUrl}?lang=ar`,
    },
  },
  category: "Education",
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Takalam English Center",
  "alternateName": ["Takalam", "مركز تكلم للانجليزية", "Centre Takalam"],
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "image": `${siteUrl}/logo.png`,
  "description": "Morocco's leading online English center. Private 1-on-1 lessons and group classes for all levels. IELTS prep, business English, speaking confidence.",
  "email": "takalamenglishcenter@gmail.com",
  "telephone": "+212722774753",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MA",
    "addressRegion": "Morocco"
  },
  "sameAs": [
    "https://www.instagram.com/takalamenglishcenter/",
    "https://web.facebook.com/takalamenglishcenter/",
    "https://www.tiktok.com/@takalamenglishcenter"
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "Morocco"
    },
    {
      "@type": "City",
      "name": "Casablanca"
    },
    {
      "@type": "City",
      "name": "Rabat"
    },
    {
      "@type": "City", 
      "name": "Marrakech"
    }
  ],
  "knowsLanguage": ["en", "fr", "ar"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "English Courses",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private English Lessons"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Group English Classes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IELTS Preparation"
        }
      }
    ]
  }
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Learn English Online - Private & Group Classes",
  "description": "Personalized English courses for all levels. Private 1-on-1 sessions and group classes. IELTS prep, business English, speaking confidence training.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Takalam English Center",
    "url": siteUrl
  },
  "courseMode": "online",
  "educationalLevel": "Beginner to Advanced",
  "inLanguage": "en",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT50M",
      "name": "Private 1-on-1 English Session"
    },
    {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT60M",
      "name": "Group English Class"
    }
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Single Session",
      "price": "200",
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Monthly Package",
      "price": "2200",
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Group Session (10 learners)",
      "price": "200",
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock"
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Takalam English Center",
  "url": siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteUrl}/?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

// Service schema for better service visibility
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "English Language Education",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Takalam English Center"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Morocco"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "English Courses",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Private English Lessons",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "1-on-1 English Sessions",
              "description": "Personalized private English lessons online"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog", 
        "name": "Group English Classes",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group English Sessions",
              "description": "Small group English classes online"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Exam Preparation",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IELTS Preparation",
              "description": "IELTS exam preparation courses"
            }
          }
        ]
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {GA_MEASUREMENT_ID && (
          <link rel="preconnect" href="https://www.googletagmanager.com" />
        )}
        {/* DNS prefetch for faster lookups */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Favicon - multiple sizes */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="fr" href={`${siteUrl}?lang=fr`} />
        <link rel="alternate" hrefLang="ar" href={`${siteUrl}?lang=ar`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </head>
      <body className={`${inter.variable} ${notoSansArabic.variable} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-green-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <LanguageWrapper>
          {children}
          <CookieConsent />
          <AIChatBot />
        </LanguageWrapper>
      </body>
    </html>
  );
}
