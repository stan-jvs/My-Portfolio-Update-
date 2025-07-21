import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group h-full card-shadow transition-smooth hover:card-shadow-hover hover:-translate-y-2">
      <CardContent className="p-8 text-center">
        <div className="relative inline-block mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};