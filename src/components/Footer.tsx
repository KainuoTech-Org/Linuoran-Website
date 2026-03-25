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