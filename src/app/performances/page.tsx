import SiteNav from "@/components/SiteNav";
import SubPageLayout from "@/components/SubPageLayout";
import Performances from "@/components/Performances";
import Footer from "@/components/Footer";

export const metadata = {
  title: "舞台足迹 — 李诺然 Li Nuoran",
  description: "李诺然的演出经历：保利剧院音乐会、大湾区展演、户外音乐演出。",
};

export default function PerformancesPage() {
  return (
    <>
      <SiteNav />
      <main>
        <SubPageLayout titleKey="perf.title" descKey="subpage.perf.desc">
          <Performances />
        </SubPageLayout>
      </main>
      <Footer />
    </>
  );
}
