import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@fontsource/noto-serif-sc/400.css";
import "@fontsource/noto-serif-sc/600.css";
import "@fontsource/noto-serif-tc/400.css";
import "@fontsource/noto-serif-tc/600.css";
import "./globals.css";
import { I18nProvider } from "@/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Li Nuoran — Music Creator & Choral Conductor",
  description:
    "Li Nuoran, independent musician, choral conductor, and music educator. Original music portfolio and performance archive.",
  keywords: "Li Nuoran, musician, indie music, choir, CHUNNI CHOIR, NetEase Cloud Music",
  openGraph: {
    title: "Li Nuoran — Music Portfolio",
    description: "Independent Musician \u00B7 Choral Conductor \u00B7 Creator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={poppins.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Dancing+Script:wght@400;500;600;700&family=ZCOOL+KuaiLe&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8F7F1] text-[#0D2F3F] font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
