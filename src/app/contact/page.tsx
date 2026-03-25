import SiteNav from "@/components/SiteNav";
import SubPageLayout from "@/components/SubPageLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "联系方式 — 李诺然 Li Nuoran",
  description: "联系李诺然：音乐合作、演出邀约、教学咨询。",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main>
        <SubPageLayout titleKey="contact.title" descKey="subpage.contact.desc">
          <Contact />
        </SubPageLayout>
      </main>
      <Footer />
    </>
  );
}
