import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Medal, Map, Plane, Gift } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Medal className="h-6 w-6 text-primary" />,
                title: "Increase Productivity",
            description:
              "By minimizing distractions and managing your time effectively, you&apos;ll get more done in less time.",
  },
  {
    icon: <Map className="h-6 w-6 text-primary" />,
    title: "Reduce Distractions",
    description:
      "The site blocker is your first line of defense against the endless pull of social media and other non-essential sites.",
  },
  {
    icon: <Plane className="h-6 w-6 text-primary" />,
    title: "Avoid Burnout",
    description:
      "The Pomodoro technique&apos;s built-in breaks ensure you stay fresh, focused, and free from mental fatigue.",
  },
  {
    icon: <Gift className="h-6 w-6 text-primary" />,
    title: "Build Focus Habits",
    description:
      "With gamification and progress tracking, Pokus helps you build lasting habits for sustained concentration.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why You&apos;ll{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Love Pokus
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience the benefits that thousands of users have already discovered
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {features.map(({ icon, title, description }: FeatureProps) => (
            <Card 
              key={title}
              className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 hover:border-primary/50 cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              tabIndex={0}
            >
              <CardHeader className="text-center pb-3">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                  {icon}
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 