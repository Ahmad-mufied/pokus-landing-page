import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldBan, Timer, Waves } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <ShieldBan className="h-6 w-6 text-primary" />,
    title: "Site Blocker",
    description: "Create custom blacklists to block distracting sites and whitelists for exceptions, keeping you focused.",
  },
  {
    icon: <Timer className="h-6 w-6 text-primary" />,
    title: "Pomodoro Timer",
    description: "Manage your work and break sessions with a customizable timer to boost productivity and prevent burnout.",
  },
  {
    icon: <Waves className="h-6 w-6 text-primary" />,
    title: "Ambient Sounds",
    description: "Create the perfect work atmosphere by mixing background sounds like rain, nature, or white noise.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container py-12 md:py-20 space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Key{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Features
          </span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Discover the powerful tools that will transform your productivity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card 
            key={title} 
            className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 hover:border-primary/50 cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
            tabIndex={0}
          >
            <CardHeader className="text-center space-y-4 p-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                {icon}
              </div>
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                {title}
              </CardTitle>
              <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features; 