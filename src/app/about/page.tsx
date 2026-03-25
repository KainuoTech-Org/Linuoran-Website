import SiteNav from "@/components/SiteNav";
import SubPageLayout from "@/components/SubPageLayout";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "关于我 — 李诺然 Li Nuoran",
  description: "了解李诺然：独立音乐人、合唱指挥、音乐教育者的故事。",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <SubPageLayout titleKey="about.title" descKey="subpage.about.desc">
          <About />
        </SubPageLayout>
      </main>
      <Footer />
    </>
  );
}
