import { useEffect } from "react";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to the entire document
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
