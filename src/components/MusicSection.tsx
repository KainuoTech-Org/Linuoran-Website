"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/i18n";
import type { TranslationKey } from "@/i18n/locales";

const songs = [
  { key: "renjian", id: "2161051657", cover: "/images/songs/人间四月天.jpg" },
  { key: "yeshen", id: "2161158489", cover: "/images/songs/夜深花睡.jpg" },
  { key: "hua", id: "2157982547", cover: "/images/songs/花要送给你.jpg" },
  { key: "youyuan", id: "2155282788", cover: "/images/songs/有缘再见.jpg" },
  { key: "haoba", id: "2160622404", cover: "/images/songs/好吧.jpg" },
  { key: "ji", id: "2160622403", cover: "/images/songs/记.jpg" },
] as const;

export default function MusicSection() {
  const { t } = useI18n();
  return (
    <section id="music" className="py-32 md:py-48 bg-[#181816] text-[#F4F4F0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
          <p className="text-[10px] uppercase font-sans tracking-[0.4em] text-[#888880] mb-6">Originals</p>
          <h2 className="text-5xl md:text-7xl font-serif">{t("music.title")}</h2>
        </motion.div>
        
        <div className="flex flex-col border-t border-[#333330]">
          {songs.map((song, i) => {
            const titleKey = `song.${song.key}.title` as TranslationKey;
            const metaKey = `song.${song.key}.meta` as TranslationKey;
            return (
              <motion.a
                key={song.id} href={`https://music.163.com/#/song?id=${song.id}`} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-[#333330] hover:bg-[#20201D] transition-colors px-4 -mx-4"
              >
                 <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                    <span className="text-xl md:text-3xl font-serif text-[#555550]">0{i+1}</span>
                    <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0 overflow-hidden ring-0 group-hover:ring-2 ring-[#A3907A] transition-all duration-500">
                       <Image src={song.cover} alt="Cover" fill className="object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" sizes="(max-width: 768px) 80px, 128px" />
                    </div>
                    <div className="max-w-md">
                       <h3 className="text-3xl md:text-5xl font-serif group-hover:italic transition-all">{t(titleKey)}</h3>
                       <p className="text-[#888880] mt-4 tracking-wider font-serif text-sm md:text-base leading-loose">{t(metaKey)}</p>
                    </div>
                 </div>
                 <div className="mt-8 md:mt-0 flex items-center gap-4 text-[#A3907A] opacity-0 group-hover:opacity-100 transition-opacity self-end md:self-auto">
                    <span className="text-[11px] font-sans tracking-[0.2em] uppercase">Play</span>
                    <span className="block w-8 h-px bg-[#A3907A]"></span>
                 </div>
              </motion.a>
            );
          })}
        </div>
        
        <div className="mt-32 text-center">
          <a href="https://music.163.com/#/artist?id=49300887" target="_blank" rel="noopener noreferrer" className="inline-block text-[11px] uppercase tracking-[0.4em] text-[#A3907A] pb-2 border-b border-[#A3907A] hover:text-[#F4F4F0] hover:border-[#F4F4F0] transition-colors">
            {t("music.listenMore")}
          </a>
        </div>
      </div>
    </section>
  );
}