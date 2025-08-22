import { ProjectCard } from "@/components/ProjectCard";
import cigarProjectImage from "@/assets/Robusto.PNG";
import interiorDesignImage from "@/assets/elegant spaces.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Premium Cigar Store",
      description: "A full-featured e-commerce platform for premium cigars with shopping cart, payment integration, and user authentication. Built with modern technologies for optimal performance.",
      image: cigarProjectImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "CSS"],
      liveLink: "https://example.com/cigar-store",
      githubLink: "https://github.com/stanlus/cigar-ecommerce"
    },
    {
      title: "Elegant Spaces",
      description: "Elegant and responsive website for an interior design company featuring portfolio showcase, service pages, and contact forms. Focuses on visual appeal and user experience.",
      image: interiorDesignImage,
      technologies: ["React", "Node.Js", "Tailwind CSS", "Express.js"],
      liveLink: "https://elegant-spaces.vercel.app/",
      githubLink: "https://github.com/stan-jvs/elegant-spaces-react.git"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built for productivity and team coordination.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      githubLink: "https://github.com/stanlus/task-manager"
    },
    {
      title: "Weather API",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features clean UI and responsive design.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS Grid", "HTML5"],
      liveLink: "https://example.com/weather-app",
      githubLink: "https://github.com/stan-jvs/Weather-Api.git"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in 
            web development, from e-commerce platforms to interactive applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
