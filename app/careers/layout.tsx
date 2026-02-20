import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teach with Takalam | Online English Tutor Jobs in Morocco",
  description: "Join Takalam English Center as an online English tutor. Flexible hours, competitive pay, work from home. Help Moroccans speak English with confidence. Apply now!",
  keywords: [
    "English teaching jobs Morocco",
    "online English tutor jobs",
    "teach English online Morocco",
    "English teacher vacancy",
    "ESL teaching jobs",
    "remote English teacher",
    "Takalam careers",
    "tutoring jobs Morocco",
    "وظائف تدريس اللغة الإنجليزية",
    "emploi professeur anglais"
  ],
  openGraph: {
    title: "Teach with Takalam | Join Our Growing Team",
    description: "Passionate about teaching English? Work from anywhere, flexible hours, competitive pay. Apply now to join Takalam.",
    type: "website",
    url: "https://takalamenglish.ma/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teach with Takalam | Online English Tutor Jobs",
    description: "Join Takalam as an online English tutor. Flexible hours, competitive pay, meaningful impact.",
  },
  alternates: {
    canonical: "https://takalamenglish.ma/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
