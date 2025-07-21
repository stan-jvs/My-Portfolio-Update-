import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden card-shadow transition-smooth hover:card-shadow-hover hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-3">
        {liveLink && (
          <Button
            size="sm"
            onClick={() => window.open(liveLink, '_blank')}
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        )}
        {githubLink && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(githubLink, '_blank')}
            className="flex-1"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};