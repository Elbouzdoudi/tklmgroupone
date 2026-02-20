import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Policies",
  description: "Read Takalam English Center's terms of service, payment policies, refund rules, and session guidelines. Clear and transparent policies for all learners.",
  alternates: {
    canonical: "https://takalamenglish.ma/rules",
  },
  openGraph: {
    title: "Terms & Policies | Takalam English Center",
    description: "Read Takalam English Center's terms of service, payment policies, refund rules, and session guidelines.",
    type: "website",
  },
};

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
