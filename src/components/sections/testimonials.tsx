import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Software Developer",
      content: "Pokus has completely transformed my work-from-home productivity. The site blocker keeps me focused during deep coding sessions, and the Pomodoro timer helps me maintain a healthy work rhythm.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Graduate Student",
      content: "As a PhD student, I struggle with distractions while writing my dissertation. Pokus's ambient sounds and website blocking have been game-changers for my focus and concentration.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Freelance Designer",
      content: "The combination of focus tools in Pokus is perfect for creative work. I love how I can customize my environment with different ambient sounds while blocking social media distractions.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Manager",
      content: "Pokus helped me overcome my procrastination habits. The Pomodoro timer with break reminders has improved my productivity by at least 40%. Highly recommended!",
      rating: 5,
    },
    {
      id: 5,
      name: "David Kim",
      role: "Data Analyst",
      content: "Simple, effective, and exactly what I needed. Pokus doesn't overwhelm you with features – it just works. The ambient sounds library is surprisingly comprehensive and relaxing.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their productivity with Pokus
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-6">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground/80 mb-4 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-foreground/60 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            Ready to join our community of focused professionals?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            Read more testimonials
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 