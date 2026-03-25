import SiteNav from "@/components/SiteNav";
import SubPageLayout from "@/components/SubPageLayout";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: "光影记忆 — 李诺然 Li Nuoran",
  description: "李诺然演出与生活的影像记录。",
};

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main>
        <SubPageLayout titleKey="gallery.title" descKey="subpage.gallery.desc">
          <Gallery />
        </SubPageLayout>
      </main>
      <Footer />
    </>
  );
}
