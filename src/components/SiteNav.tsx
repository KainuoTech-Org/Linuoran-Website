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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${scrolled ? "bg-[#F4F4F0]/95 backdrop-blur-md border-b border-[#E8E8E3] py-2" : "bg-transparent py-6"}`}>
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
             <button key={l} onClick={() => setLocale(l)} className={`text-[10px] font-sans tracking-[0.1em] uppercase transition-colors ${locale === l ? 'text-[#1C1C1A] font-semibold' : 'text-[#A3907A] hover:text-[#1C1C1A]'}`}>
               {localeNames[l]}
             </button>
           ))}
        </div>
      </div>
    </nav>
  );
}