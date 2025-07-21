import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/stanlus"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/stanlus-owino-a2ab04249/"
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: "https://x.com/stanlus_dev"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-center md:text-left flex items-center">
              © {currentYear} Stanlus Owino. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};