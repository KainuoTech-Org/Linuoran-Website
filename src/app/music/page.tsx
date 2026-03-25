import SiteNav from "@/components/SiteNav";
import SubPageLayout from "@/components/SubPageLayout";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "原创音乐 — 李诺然 Li Nuoran",
  description: "李诺然的原创音乐作品集，网易云音乐独立音乐人。",
};

export default function MusicPage() {
  return (
    <>
      <SiteNav />
      <main>
        <SubPageLayout titleKey="music.title" descKey="subpage.music.desc">
          <MusicSection />
        </SubPageLayout>
      </main>
      <Footer />
    </>
  );
}
