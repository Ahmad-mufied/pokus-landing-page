import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldBan, Timer, Waves } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <ShieldBan />,
    title: "Site Blocker",
    description: "Create custom blacklists to block distracting sites and whitelists for exceptions, keeping you focused.",
  },
  {
    icon: <Timer />,
    title: "Pomodoro Timer",
    description: "Manage your work and break sessions with a customizable timer to boost productivity and prevent burnout.",
  },
  {
    icon: <Waves />,
    title: "Ambient Sounds",
    description: "Create the perfect work atmosphere by mixing background sounds like rain, nature, or white noise.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Key{" "}
        <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          Features
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <div className="flex items-center gap-4">
                {icon}
                <CardTitle>{title}</CardTitle>
              </div>
              <CardDescription className="pt-2">{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features; 