import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import gloriaImage from "@/assets/Gloria pic.png";
import morganImage from "@/assets/Morgan.jpeg";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Gloria Khakai",
      role: "Founder, Pancake Parlor.",
      content: "Stanlus delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
      rating: 5,
      avatar: gloriaImage
    },
    {
      name: "Morgan Omondi",
      role: "Founder, DesignSpace",
      content: "Working with Stanlus was a game-changer for our interior design website. He perfectly captured our vision and created a stunning, user-friendly platform that our clients love.",
      rating: 5,
      avatar: morganImage
    },
    {
      name: "Amanda Smith",
      role: "Marketing Director",
      content: "Stanlus's expertise in both frontend and backend development was evident throughout our project. He delivered high-quality code and excellent communication every step of the way.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my clients 
            have to say about working with me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="card-shadow transition-smooth hover:card-shadow-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};