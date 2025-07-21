import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/bg.png";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div 
    className="absolute inset-0" 
    style={{ 
      backgroundColor: '#808080', 
      opacity: 0.5 
    }}
  ></div>
</div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Stanlus Owino
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-blue-100">
            Web Developer
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Turning ideas into reality with clean, modern code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-white text-primary hover:bg-blue-50 transition-smooth px-8 py-4 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white text-white hover:bg-white hover:text-primary transition-smooth px-8 py-4 text-lg font-semibold"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};