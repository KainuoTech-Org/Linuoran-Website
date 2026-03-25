"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-32 md:py-48 bg-[#F4F4F0]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">
        <div className="md:col-span-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-serif text-[#1C1C1A] mb-12">
            {t("about.title")}
          </motion.h2>
        </div>
        
        <div className="md:col-span-5 relative h-full min-h-[400px]">
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="w-full h-full border border-[#DCDCD0] p-4">
              <div className="w-full h-full bg-[#EAEAEA] relative overflow-hidden flex items-center justify-center text-[#A3907A] font-serif text-sm tracking-widest italic">
                 {/* Placeholder graphic block for editorial layout */}
                 "Music is the space between the notes."
              </div>
           </motion.div>
        </div>

        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-lg md:text-2xl font-serif text-[#4A4A45] leading-[2.2] mb-8">{t("about.p1")}</p>
            <p className="text-lg md:text-2xl font-serif text-[#4A4A45] leading-[2.2]">{t("about.p2")}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12 pt-12 border-t border-[#DCDCD0]">
            {[
              { num: "6+", key: "about.stat.works" },
              { num: "4+", key: "about.stat.performances" },
              { num: "3+", key: "about.stat.years" }
            ].map((s, i) => (
              <motion.div key={s.key} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}>
                <div className="text-5xl md:text-6xl font-serif text-[#1C1C1A] mb-4">{s.num}</div>
                <div className="text-[10px] text-[#888880] tracking-[0.2em] font-sans uppercase">{t(s.key as any)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}