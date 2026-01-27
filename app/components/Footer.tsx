"use client";

import Image from "next/image";
import { useTranslation } from "../i18n/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="h-16 flex items-center mb-3">
              <Image
                src="/logo.png"
                alt="TAKALAM - The Moroccan English Center"
                width={1200}
                height={300}
                className="h-72 w-auto mx-auto md:mx-0 brightness-0 invert object-contain -my-24"
              />
            </div>
            <p className="text-sm max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#intro-video" className="hover:text-green-400 transition-colors">
              {t("footer.about")}
            </a>
            <a href="#why-takalam" className="hover:text-green-400 transition-colors">
              {t("footer.whoItsFor")}
            </a>
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">
              {t("footer.howItWorks")}
            </a>
            <a href="#contact" className="hover:text-green-400 transition-colors">
              {t("footer.contact")}
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:takalamenglishcenter@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              aria-label="Register"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© {currentYear} {t("footer.copyright")}</p>
          <p className="mt-2 text-gray-500">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
