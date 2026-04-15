import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ArthAdventSection from "@/components/ArthAdventSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CareersSection from "@/components/CareersSection";
import MobileBottomNav from "@/components/MobileBottomNav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ArthAdventSection />
      <MenuSection />
      <ExperienceSection />
      <GallerySection />
      <TestimonialsSection />
      {/* <CareersSection /> */}
      <ContactSection />
      <Footer />
      <MobileBottomNav />
    </main>
  );
};

export default Index;
