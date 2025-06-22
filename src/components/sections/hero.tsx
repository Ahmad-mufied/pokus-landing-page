"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleAddToChrome = () => {
    // In a real implementation, this would link to the actual Chrome Web Store page
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">Regain Your Focus,</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text">
                    Master Your Time
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The all-in-one Chromium extension to block distractions, manage your time with the Pomodoro technique, and create a focused work environment.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Button 
                className="w-full sm:w-auto text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95" 
                size="lg"
                onClick={handleAddToChrome}
              >
                Add to Chrome for Free
              </Button>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>4.8/5</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>1,000+ users</span>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>Free forever</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Visual Container */}
              <div className="aspect-square lg:aspect-auto lg:h-96 xl:h-[500px] rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6 lg:p-8 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-4">
                  {/* Extension Icon Placeholder */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      Pokus Extension
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground max-w-xs mx-auto">
                      Visual demonstration and UI preview will be shown here
                    </p>
                  </div>

                  {/* Feature Icons */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 