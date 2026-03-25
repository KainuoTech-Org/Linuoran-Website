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