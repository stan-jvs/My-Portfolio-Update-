import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:owinostanlus@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message prepared!",
      description: "Your email client should open with the message ready to send.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/stan-jvs",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/stanlus-owino",
      color: "hover:text-blue-600"
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: "https://twitter.com/stanlus_dev",
      color: "hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:owinostanlus@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-alternate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer 
                wanting to collaborate, I'd love to connect.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-primary mr-4" />
                <span className="text-foreground">owinostanlus@gmail.com</span>
              </div>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4 text-foreground">Follow me on social media</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card rounded-full card-shadow transition-smooth hover:card-shadow-hover hover:-translate-y-1 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="card-shadow transition-smooth hover:card-shadow-hover">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};