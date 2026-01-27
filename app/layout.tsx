import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import LanguageWrapper from "./components/LanguageWrapper";

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

export const metadata: Metadata = {
  title: "TAKALAM - Speak English with Confidence",
  description: "Personalized 1-to-1 English coaching for adults. Build your speaking confidence with a Moroccan-rooted, globally-minded approach.",
  keywords: ["English tutoring", "English lessons", "speaking confidence", "English coaching", "Morocco", "online English"],
  authors: [{ name: "TAKALAM" }],
  openGraph: {
    title: "TAKALAM - Speak English with Confidence",
    description: "Personalized 1-to-1 English coaching for adults. Build your speaking confidence with a Moroccan-rooted, globally-minded approach.",
    type: "website",
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
        <LanguageWrapper>
          {children}
        </LanguageWrapper>
      </body>
    </html>
  );
}
