"use client";

import { Button } from "@/components/ui/button";
import ShineBorder from "../ui/shine-border";

export const Hero = () => {
  const handleAddToChrome = () => {
    // In a real implementation, this would link to the actual Chrome Web Store page
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-screen-xl grid-cols-1 items-center gap-8 px-4 pt-24 md:grid-cols-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 -z-10"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold md:text-6xl">
          Stop Procrastinating, Start Focusing
        </h1>
        <p className="text-lg text-muted-foreground">
          Pokus is a powerful Chrome extension that helps you stay on track,
          block distractions, and get more done with the Pomodoro Technique.
        </p>
        <div className="flex flex-col items-start gap-4">
          <ShineBorder>
            <Button size="lg">Get Started - It's Free</Button>
          </ShineBorder>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>1,000+ happy users</span>
            <span className="h-4 w-px bg-muted-foreground/50" />
            <span>4.8/5 stars</span>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        {/* Placeholder for the visual element */}
        <div className="h-[400px] w-full rounded-xl bg-muted/50"></div>
      </div>
    </section>
  );
};

export default Hero; 