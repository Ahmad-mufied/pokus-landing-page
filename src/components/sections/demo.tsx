import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Demo = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Pokus in Action
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Watch how our features work together to create the perfect focused work environment
          </p>
        </div>

        {/* Feature Video Loops */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Site Blocker Demo */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                Site Blocker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground/60">
                    Video: Blocking Distracting Sites
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 text-center">
                Watch how easy it is to block distracting websites and stay focused
              </p>
            </CardContent>
          </Card>

          {/* Pomodoro Timer Demo */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                Pomodoro Timer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground/60">
                    Video: Managing Focus Sessions
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 text-center">
                See the customizable timer in action with start, pause, and reset controls
              </p>
            </CardContent>
          </Card>

          {/* Ambient Sounds Demo */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                Ambient Sounds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground/60">
                    Video: Mixing Background Sounds
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 text-center">
                Discover the library of ambient sounds and how to create your perfect mix
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Demonstration Video */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Complete Workflow Demo
            </h3>
            <p className="text-foreground/70">
              Watch a full demonstration of how all features work together (60-90 seconds)
            </p>
          </div>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0V10z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0V10z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <p className="text-lg text-foreground/60 mb-2">
                    Main Demonstration Video
                  </p>
                  <p className="text-sm text-foreground/50">
                    Complete user workflow showcase
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo; 