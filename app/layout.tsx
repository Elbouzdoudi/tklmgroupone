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

// Replace with your Google Analytics Measurement ID (e.g., G-XXXXXXXXXX)
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TAKALAM - Speak English with Confidence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKALAM - Speak English with Confidence",
    description: "Personalized 1-to-1 English coaching for adults. Build your speaking confidence.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
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
