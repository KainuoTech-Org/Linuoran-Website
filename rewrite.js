const fs = require('fs');
const path = require('path');

const dir = '/Users/johnson/Desktop/开发/Web/Li Nuoran/portfolio/src/components';

const nav = `
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useI18n, localeNames, type Locale } from "@/i18n";

const navKeys = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.skills", href: "/skills" },
  { key: "nav.music", href: "/music" },
  { key: "nav.performances", href: "/performances" },
  { key: "nav.gallery", href: "/gallery" },
  { key: "nav.contact", href: "/contact" },
] as const;

export default function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const locales: Locale[] = ["zh-CN", "zh-TW", "en"];
  
  const getHref = (item: any) => {
    if (isHome) {
      const map: Record<string, string> = {
         "/": "#hero", "/about": "#about", "/skills": "#skills", "/music": "#music",
         "/performances": "#performances", "/gallery": "#gallery", "/contact": "#contact",
      };
      return map[item.href] || item.href;
    }
    return item.href;
  };

  return (
    <nav className={\`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out \${scrolled ? "bg-[#F4F4F0]/95 backdrop-blur-md border-b border-[#E8E8E3] py-2" : "bg-transparent py-6"}\`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-widest text-[#1C1C1A]">Li Nuoran<span className="text-[#A3907A]">.</span></Link>
        <div className="hidden lg:flex items-center gap-10">
           {navKeys.map(k => {
             const href = getHref(k);
             const inner = <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#777770] hover:text-[#1C1C1A] transition-colors">{t(k.key as any)}</span>;
             return isHome && href.startsWith("#") ? <a key={href} href={href}>{inner}</a> : <Link key={href} href={href}>{inner}</Link>;
           })}
        </div>
        <div className="flex gap-4">
           {locales.map(l => (
             <button key={l} onClick={() => setLocale(l)} className={\`text-[10px] font-sans tracking-[0.1em] uppercase transition-colors \${locale === l ? 'text-[#1C1C1A] font-semibold' : 'text-[#A3907A] hover:text-[#1C1C1A]'}\`}>
               {localeNames[l]}
             </button>
           ))}
        </div>
      </div>
    </nav>
  );
}
`;

const hero = `
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
        <Image src="/images/netease-profile.png" alt="Li Nuoran" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 500px" />
      </motion.div>
    </section>
  );
}
`;

const about = `
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
`;

const skills = `
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
`;

const music = `
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/i18n";
import type { TranslationKey } from "@/i18n/locales";

const songs = [
  { key: "renjian", id: "2161051657", cover: "/images/songs/renjian-siyuetian.png" },
  { key: "yeshen", id: "2161158489", cover: "/images/songs/yeshen-huashui.png" },
  { key: "hua", id: "2157982547", cover: "/images/songs/hua-yao-song-gei-ni.png" },
  { key: "youyuan", id: "2155282788", cover: "/images/songs/youyuan-zaijian.png" },
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
            const titleKey = \`song.\${song.key}.title\` as TranslationKey;
            const metaKey = \`song.\${song.key}.meta\` as TranslationKey;
            return (
              <motion.a
                key={song.id} href={\`https://music.163.com/#/song?id=\${song.id}\`} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-[#333330] hover:bg-[#20201D] transition-colors px-4 -mx-4"
              >
                 <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                    <span className="text-xl md:text-3xl font-serif text-[#555550]">0{i+1}</span>
                    <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0">
                       <Image src={song.cover} alt="Cover" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
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
`;

const perf = `
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

        <div className="md:col-span-8 flex flex-col gap-24 md:gap-48 mt-12 md:mt-32">
          {performances.map((p, i) => (
            <motion.div key={p.titleKey} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="group">
              <div className="aspect-[16/10] relative overflow-hidden mb-10 w-full bg-[#EAEAEA]">
                <Image src={p.image} alt="Performance" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pb-8 border-b border-[#DCDCD0]">
                 <h3 className="text-3xl md:text-4xl font-serif text-[#1C1C1A] leading-tight max-w-xl">{t(p.titleKey as TranslationKey)}</h3>
                 <p className="text-[10px] tracking-[0.3em] font-sans text-[#A3907A] uppercase shrink-0">{t(p.tagKey as TranslationKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const gallery = `
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/concerts/nye-concert-group.jpg",
  "/images/concerts/national-day-1.jpg",
  "/images/concerts/national-day-2.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#EFEFED] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
           {images.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.2 }} className="aspect-square relative group">
                 <Image src={src} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Gallery memory" />
              </motion.div>
           ))}
        </div>
    </section>
  );
}
`;

const philosophy = `
"use client";
import { useI18n } from "@/i18n";
export default function Philosophy() {
  return null; // Removing this block as part of editorial decluttering
}
`;

const contact = `
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
`;

const footer = `
"use client";
import { useI18n } from "@/i18n";
export default function Footer() {
   const { t } = useI18n();
   return (
      <footer className="py-16 bg-[#181816] text-[#666660] text-center px-6">
         <p className="font-serif text-[11px] tracking-[0.4em] uppercase mb-6 text-[#A3907A]">{t("footer.tagline")}</p>
         <p className="text-[10px] font-sans tracking-[0.2em] uppercase">&copy; {new Date().getFullYear()} {t("footer.copyright")}</p>
      </footer>
   );
}
`;

const page = `
import Hero from "@/components/Hero";
import SiteNav from "@/components/SiteNav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import MusicSection from "@/components/MusicSection";
import Performances from "@/components/Performances";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#F4F4F0]">
        <Hero />
        <About />
        <Skills />
        <MusicSection />
        <Performances />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
`;

const globalsCss = `@import "tailwindcss";

@theme inline {
  --font-sans: 'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

html, body {
  background: #F4F4F0;
  color: #1C1C1A;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection { background: #A3907A; color: white; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #DCDCD0; }

@layer base {
  html, body, h1, h2, h3, h4, h5, h6, p, span, a, div {
    font-family: var(--font-poppins), "Noto Serif SC", "Noto Serif TC", serif;
  }
}
`;

fs.writeFileSync('/Users/johnson/Desktop/开发/Web/Li Nuoran/portfolio/src/app/globals.css', globalsCss.trim() + '\\n');
fs.writeFileSync('/Users/johnson/Desktop/开发/Web/Li Nuoran/portfolio/src/app/page.tsx', page.trim() + '\\n');

const files = [
  { name: 'SiteNav.tsx', file: nav },
  { name: 'Hero.tsx', file: hero },
  { name: 'About.tsx', file: about },
  { name: 'Skills.tsx', file: skills },
  { name: 'MusicSection.tsx', file: music },
  { name: 'Performances.tsx', file: perf },
  { name: 'Gallery.tsx', file: gallery },
  { name: 'Philosophy.tsx', file: philosophy },
  { name: 'Contact.tsx', file: contact },
  { name: 'Footer.tsx', file: footer }
];

files.forEach(f => {
   fs.writeFileSync(path.join(dir, f.name), f.file.trim() + '\\n');
});
console.log("SUCCESS!");
