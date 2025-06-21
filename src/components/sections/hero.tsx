"use client";

import {Button} from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Regain Your Focus,
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Master Your Time
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The all-in-one Chromium extension to block distractions, manage your time with the Pomodoro technique, and create a focused work environment.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" size="lg">Add to Chrome</Button>
        </div>
      </div>

      {/* Placeholder for visuals */}
      <div className="z-10">
        <div className="hidden lg:flex h-full w-full rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-lg font-medium">Visual/Demo Placeholder</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero; 