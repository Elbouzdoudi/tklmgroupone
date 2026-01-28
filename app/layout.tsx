import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LanguageWrapper from "./components/LanguageWrapper";
import CookieConsent from "./components/CookieConsent";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://takalam.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TAKALAM - Speak English with Confidence",
    template: "%s | TAKALAM",
  },
  description: "Personalized 1-to-1 English coaching for adults. Build your speaking confidence with a Moroccan-rooted, globally-minded approach.",
  keywords: ["English tutoring", "English lessons", "speaking confidence", "English coaching", "Morocco", "online English", "IELTS preparation", "business English", "Moroccan English teacher"],
  authors: [{ name: "TAKALAM" }],
  creator: "TAKALAM",
  publisher: "TAKALAM",
  openGraph: {
    title: "TAKALAM - Speak English with Confidence",
    description: "Personalized 1-to-1 English coaching for adults. Build your speaking confidence with a Moroccan-rooted, globally-minded approach.",
    url: siteUrl,
    siteName: "TAKALAM",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKALAM - Speak English with Confidence",
    description: "Personalized 1-to-1 English coaching for adults. Build your speaking confidence.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
        </LanguageWrapper>
      </body>
    </html>
  );
}
