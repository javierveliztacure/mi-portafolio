import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ClipsCarousel from "../components/CarouselSections/ClipsCarousel";
import EdicionCarousel from "../components/CarouselSections/EdicionCarousel";
import AnimacionesCarousel from "../components/CarouselSections/AnimacionesCarousel";
import FotografiaCarousel from "../components/CarouselSections/FotografiaCarousel";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#faf9f6] text-[#1a1c1a] font-body antialiased selection:bg-[#ccff00] selection:text-black">
      <Header />
      <main className="w-full pt-20">
        <HeroSection />
        <ClipsCarousel />
        <EdicionCarousel />
        <AnimacionesCarousel />
        <FotografiaCarousel />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
