import SiteNav from "@/components/SiteNav";
import SubPageLayout from "@/components/SubPageLayout";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export const metadata = {
  title: "专业技能 — 李诺然 Li Nuoran",
  description: "李诺然的专业音乐技能：声乐、合唱指挥、创作、钢琴、教育。",
};

export default function SkillsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <SubPageLayout titleKey="skills.title" descKey="subpage.skills.desc">
          <Skills />
        </SubPageLayout>
      </main>
      <Footer />
    </>
  );
}
