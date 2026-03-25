"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

export default function Contact() {
   const { t } = useI18n();
   return (
      <section id="contact" className="py-32 md:py-64 bg-[#F4F4F0] flex items-center justify-center">
         <div className="max-w-5xl mx-auto px-6 text-center">
             <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-5xl md:text-8xl font-serif text-[#1C1C1A] mb-24 cursor-default">
                {t("contact.title")}
             </motion.h2>
             
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-12 font-serif text-xl md:text-3xl">
                <a href="mailto:859271843@qq.com" className="text-[#1C1C1A] hover:italic hover:text-[#A3907A] transition-all">
                   859271843@qq.com
                </a>
                <a href="https://music.163.com/#/artist?id=49300887" target="_blank" className="text-[#1C1C1A] hover:italic hover:text-[#A3907A] transition-all">
                   Netease Music / Li Nuoran
                </a>
             </motion.div>
             
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-48">
                 <p className="text-[10px] font-sans tracking-[0.4em] text-[#A3907A] uppercase mb-8">Chunni Choir</p>
                 <p className="text-xl md:text-3xl font-serif text-[#4A4A45] max-w-3xl leading-[2] mx-auto italic">
                    "{t("contact.chunni.quote")}"
                 </p>
             </motion.div>
         </div>
      </section>
   );
}