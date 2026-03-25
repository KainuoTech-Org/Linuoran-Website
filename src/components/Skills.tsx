"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const groups = [
  { titleKey: "skills.vocal", tagsKey: "skills.vocal.tags" },
  { titleKey: "skills.choral", tagsKey: "skills.choral.tags" },
  { titleKey: "skills.composing", tagsKey: "skills.composing.tags" },
  { titleKey: "skills.education", tagsKey: "skills.education.tags" },
] as const;

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="py-32 md:py-48 bg-[#EFEFED]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-serif text-[#1C1C1A] mb-24 md:mb-32">
          {t("skills.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {groups.map((g, i) => (
             <motion.div key={g.titleKey} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-t border-[#DCDCD0] pt-8">
                <h3 className="text-2xl md:text-3xl font-serif text-[#1C1C1A] mb-8">{t(g.titleKey)}</h3>
                <p className="text-base md:text-lg text-[#666660] font-serif leading-[2.2] tracking-wide">
                  {t(g.tagsKey).split(',').join('  /  ')}
                </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}