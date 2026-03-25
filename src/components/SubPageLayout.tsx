"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import type { TranslationKey } from "@/i18n/locales";

interface SubPageLayoutProps {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  children: React.ReactNode;
}

export default function SubPageLayout({ titleKey, descKey, children }: SubPageLayoutProps) {
  const { t } = useI18n();

  return (
    <div className="bg-[#F4F4F0]">
      {/* Hero banner — editorial style */}
      <div className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] font-sans text-[#A3907A] uppercase hover:text-[#1C1C1A] transition-colors mb-10 group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:-translate-x-1">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
              </svg>
              {t("subpage.back")}
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}>
            <h1 className="text-5xl md:text-8xl font-serif text-[#1C1C1A] tracking-wide">{t(titleKey)}</h1>
            <div className="w-16 h-px bg-[#A3907A] mt-8 mb-6" />
            <p className="text-base md:text-lg font-serif text-[#888880] tracking-wider max-w-xl">{t(descKey)}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
