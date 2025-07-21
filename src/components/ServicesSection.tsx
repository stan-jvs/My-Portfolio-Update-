import { ServiceCard } from "@/components/ServiceCard";
import { Code, Server, Zap, Wrench } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and best practices.",
      features: [
        "React & JavaScript Development",
        "Responsive Web Design",
        "HTML5 & CSS3",
        "UI/UX Implementation"
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications and databases for scalable web solutions.",
      features: [
        "Node.js Development",
        "Database Design (MongoDB)",
        "RESTful API Development",
        "Server Configuration"
      ]
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamlessly connecting your applications with third-party services and external APIs.",
      features: [
        "REST API Integration",
        "Payment Gateway Setup",
        "Social Media APIs",
        "Data Synchronization"
      ]
    },
    {
      icon: Wrench,
      title: "Website Maintenance & Support",
      description: "Ongoing support, updates, and optimization to keep your website running smoothly.",
      features: [
        "Regular Updates & Security",
        "Performance Optimization",
        "Bug Fixes & Troubleshooting",
        "Content Management"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-alternate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I provide comprehensive web development services to help bring your 
            digital vision to life with modern technologies and best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};