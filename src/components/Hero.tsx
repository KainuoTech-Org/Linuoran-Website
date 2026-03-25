"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-[#F4F4F0] pt-28 px-6 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} className="text-center z-10 w-full max-w-5xl">
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif text-[#1C1C1A] tracking-widest mb-6 leading-tight">
          {t("hero.name").replace('。','')}
        </h1>
        <div className="w-px h-16 bg-[#A3907A] mx-auto opacity-50 my-6"></div>
        <p className="text-[11px] sm:text-xs md:text-sm font-sans tracking-[0.4em] text-[#666660] uppercase mt-4">
           {t("hero.rolePrefix")} / {t("hero.roleSuffix")}
        </p>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mt-24 w-full max-w-[500px] aspect-[4/5] relative z-10">
        <Image src="/images/avatar.jpg" alt="Li Nuoran" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 500px" />
      </motion.div>
    </section>
  );
}