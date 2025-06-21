import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Medal, Map, Plane, Gift } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Medal />,
    title: "Increase Productivity",
    description:
      "By minimizing distractions and managing your time effectively, you'll get more done in less time.",
  },
  {
    icon: <Map />,
    title: "Reduce Distractions",
    description:
      "The site blocker is your first line of defense against the endless pull of social media and other non-essential sites.",
  },
  {
    icon: <Plane />,
    title: "Avoid Burnout",
    description:
      "The Pomodoro technique's built-in breaks ensure you stay fresh, focused, and free from mental fatigue.",
  },
  {
    icon: <Gift />,
    title: "Build Focus Habits",
    description:
      "With gamification and progress tracking, Pokus helps you build lasting habits for sustained concentration.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 space-y-8 bg-muted/50">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Why You'll{" "}
        <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          Love Pokus
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Benefits; 