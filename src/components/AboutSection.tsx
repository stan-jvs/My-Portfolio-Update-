import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/My Pic 1.jpg";

const skills = [
  { name: "Java", class: "skill-java", level: 95 },
  { name: "HTML", class: "skill-html", level: 98 },
  { name: "CSS", class: "skill-css", level: 95 },
  { name: "React", class: "skill-react", level: 85 },
  { name: "Node.js", class: "skill-node", level: 80 },
  { name: "MongoDB", class: "skill-mongo", level: 75 },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-alternate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img
                src={profilePhoto}
                alt="Stanlus Owino"
                className="w-64 h-64 rounded-full object-cover mx-auto lg:mx-0 card-shadow animate-float"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">3+</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Passionate Web Developer
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate web developer with{" "}
              <span className="font-semibold text-primary">3 years of experience</span>{" "}
              in Java, HTML, and CSS, and{" "}
              <span className="font-semibold text-primary">1 year of experience</span>{" "}
              with React, Node.js, and MongoDB.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I love creating clean, efficient, and user-friendly web applications. 
              My journey in web development has taught me the importance of writing 
              maintainable code and delivering exceptional user experiences.
            </p>
          </div>
          
          {/* Skills Section */}
          <div>
            <Card className="card-shadow transition-smooth hover:card-shadow-hover">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-foreground">
                  Technical Skills
                </h4>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium ${skill.class}`}>
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            background: `hsl(var(--skill-${skill.name.toLowerCase().replace('.', '')}))`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Other tools:</span> Git, GitHub, VS Code, 
                    Figma, Responsive Design, REST APIs
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};