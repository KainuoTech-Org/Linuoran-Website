"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/i18n";
import type { TranslationKey } from "@/i18n/locales";

const songs = [
  { key: "renjian", id: "1869819082", cover: "/images/songs/人间四月天.jpg" },
  { key: "yeshen", id: "1884889358", cover: "/images/songs/夜深花睡.jpg" },
  { key: "hua", id: "1920212647", cover: "/images/songs/花要送给你.jpg" },
  { key: "youyuan", id: "1956754635", cover: "/images/songs/有缘再见.jpg" },
  { key: "haoba", id: "1876551021", cover: "/images/songs/好吧.jpg" },
  { key: "ji", id: "1956744564", cover: "/images/songs/记.jpg" },
] as const;

export default function MusicSection() {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<string | null>(null);

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
            const isActive = activeId === song.id;
            return (
              <motion.div
                key={song.id}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border-b border-[#333330]"
              >
                {/* Song row — click to toggle player */}
                <button
                  onClick={() => setActiveId(isActive ? null : song.id)}
                  className="w-full group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-14 hover:bg-[#20201D] transition-colors px-4 -mx-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                    <span className="text-xl md:text-3xl font-serif text-[#555550]">0{i + 1}</span>
                    <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 overflow-hidden ring-0 group-hover:ring-2 ring-[#A3907A] transition-all duration-500">
                      <Image src={song.cover} alt="Cover" fill className="object-cover transition-all duration-500 group-hover:scale-105" sizes="(max-width: 768px) 80px, 112px" />
                    </div>
                    <div className="max-w-md">
                      <h3 className="text-3xl md:text-4xl font-serif group-hover:italic transition-all">{t(titleKey)}</h3>
                      <p className="text-[#888880] mt-3 tracking-wider font-serif text-sm leading-loose">{t(metaKey)}</p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 self-end md:self-auto shrink-0">
                    {isActive ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#F4F4F0] opacity-60">
                        <rect x="4" y="4" width="4" height="12" fill="currentColor" />
                        <rect x="12" y="4" width="4" height="12" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#F4F4F0] opacity-40 group-hover:opacity-80 transition-opacity">
                        <polygon points="5,3 17,10 5,17" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Inline embed player */}
                {isActive && (
                  <div className="pb-6 bg-[#1A1A18] -mx-4 px-4 flex items-center gap-6">
                    <iframe
                      title={t(titleKey)}
                      frameBorder="no"
                      width="330"
                      height="86"
                      allow="autoplay"
                      src={`https://music.163.com/outchain/player?type=2&id=${song.id}&auto=1&height=66`}
                      style={{ display: "block", flexShrink: 0 }}
                    />
                    <a
                      href={`https://music.163.com/#/song?id=${song.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.25em] text-[#555550] hover:text-[#A3907A] transition-colors whitespace-nowrap"
                    >
                      在网易云音乐中打开 →
                    </a>
                  </div>
                )}
              </motion.div>
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