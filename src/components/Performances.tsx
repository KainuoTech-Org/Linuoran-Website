"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/i18n";
import type { TranslationKey } from "@/i18n/locales";

const performances = [
  { tagKey: "perf.nye.tag", titleKey: "perf.nye.title", image: "/images/concerts/nye-concert-stage.jpg" },
  { tagKey: "perf.arts.tag", titleKey: "perf.arts.title", image: "/images/concerts/creative-arts.jpg" },
  { tagKey: "perf.summer.tag", titleKey: "perf.summer.title", image: "/images/concerts/summer-concert.jpg" },
] as const;

export default function Performances() {
  const { t } = useI18n();
  return (
    <section id="performances" className="py-32 md:py-48 bg-[#F4F4F0]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <div className="md:col-span-4 md:sticky md:top-32 h-fit">
          <h2 className="text-5xl md:text-7xl font-serif text-[#1C1C1A]">{t("perf.title")}</h2>
          <div className="w-12 h-[1px] bg-[#A3907A] mt-8 mb-12" />
        </div>

        <div className="md:col-span-8 mt-12 md:mt-16 relative">
          {/* Timeline Vertical Line */}
          <div className="absolute top-8 bottom-0 left-4 md:left-8 w-px bg-[#A3907A]/30"></div>

          <div className="flex flex-col gap-24 md:gap-40">
            {performances.map((p, i) => (
              <motion.div key={p.titleKey} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className="group relative pl-12 md:pl-24">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 rounded-full bg-[#A3907A] left-4 md:left-8 -translate-x-[7px] top-[1.15rem] md:top-[1.4rem] z-10 transition-transform duration-500 group-hover:scale-150 ring-4 ring-[#F4F4F0]"></div>
                
                <div className="flex flex-col gap-4 md:gap-6">
                  {/* Timeline Date / Tag */}
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <span className="text-sm tracking-[0.3em] font-sans text-[#A3907A] uppercase">{t(p.tagKey as TranslationKey)}</span>
                    <div className="h-px bg-[#A3907A]/20 flex-1 hidden md:block"></div>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-serif text-[#1C1C1A] leading-tight max-w-2xl">{t(p.titleKey as TranslationKey)}</h3>
                  
                  <div className="aspect-[16/10] relative overflow-hidden mt-4 w-full bg-[#EAEAEA] shadow-sm">
                    <Image src={p.image} alt="Performance" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}