'use client'

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

interface TeamMember {
  name: string;
  role: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Chen",
    role: "Software Developer",
    content: "Pokus has completely transformed my work-from-home productivity. The site blocker keeps me focused during deep coding sessions, and the Pomodoro timer helps me maintain a healthy work rhythm.",
    avatar: "AC"
  },
  {
    name: "Sarah Johnson", 
    role: "Graduate Student",
    content: "As a PhD student, I struggle with distractions while writing my dissertation. Pokus's ambient sounds and website blocking have been game-changers for my focus and concentration.",
    avatar: "SJ"
  },
  {
    name: "Michael Rodriguez",
    role: "Freelance Designer", 
    content: "The combination of focus tools in Pokus is perfect for creative work. I love how I can customize my environment with different ambient sounds while blocking social media distractions.",
    avatar: "MR"
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    content: "Pokus helped me overcome my procrastination habits. The Pomodoro timer with break reminders has improved my productivity by at least 40%. Highly recommended!",
    avatar: "ED"
  },
  {
    name: "David Kim",
    role: "Data Analyst", 
    content: "Simple, effective, and exactly what I needed. Pokus doesn't overwhelm you with features – it just works. The ambient sounds library is surprisingly comprehensive and relaxing.",
    avatar: "DK"
  },
  {
    name: "Lisa Wang",
    role: "UX Designer",
    content: "Love the minimalist interface and how intuitive everything is.",
    avatar: "LW"
  },
  {
    name: "James Miller",
    role: "Content Writer",
    content: "Been using Pokus for 6 months now. Can't imagine working without it. The focus sessions have transformed my writing routine completely.",
    avatar: "JM"
  },
  {
    name: "Anna Foster",
    role: "Project Manager",
    content: "Finally found a productivity tool that actually works for me.",
    avatar: "AF"
  }
];

const teamMembers: TeamMember[] = [
  {
    name: "Damar Galih",
    role: "Product Owner",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBkuun5v1zt1n3aZ2E5N7ho0PSAy8JgOzFuMKi"
  },
  {
    name: "Gilang Nur Hidayat",
    role: "Scrum Master",
    avatarUrl: "https://avatars.githubusercontent.com/u/130344101?v=4"
  },
  {
    name: "Muhammad Rizal Arfiyan",
    role: "Dev",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBGTmIH1iPrfxvoLJ6Za4MBD2jdncE13eUsgtK"
  },
  {
    name: "Ahmad Mufied Nugroho",
    role: "Dev",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBq1eUcy8GhcYv1dAHiCogF9MaWbmslwfz3uKD"
  }
];

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-8 sm:mb-10 lg:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">{title}</h2>
    <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4">{subtitle}</p>
  </div>
);

const TestimonialCard = ({ name, role, content, avatar }: Testimonial) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="break-inside-avoid mb-3 sm:mb-4 flex-shrink-0"
  >
    <Card className="bg-white/5 border border-white/10 backdrop-blur-md text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0">
            {avatar}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-white text-xs sm:text-sm truncate">{name}</p>
            <p className="text-white/60 text-xs">{role}</p>
          </div>
        </div>
        <blockquote className="text-xs sm:text-sm leading-relaxed text-white/90">
          "{content}"
        </blockquote>
      </CardContent>
    </Card>
  </motion.div>
);

const InfiniteScrollColumn = ({ 
  testimonials, 
  direction = 'up', 
  speed = 50, 
  startOffset = 0,
  isPaused = false,
  columnIndex = 0
}: {
  testimonials: Testimonial[];
  direction?: 'up' | 'down';
  speed?: number;
  startOffset?: number;
  isPaused?: boolean;
  columnIndex?: number;
}) => {
  // Buat testimonials yang berbeda untuk setiap kolom
  const getColumnTestimonials = () => {
    const shuffled = [...testimonials];
    // Rotate testimonials berdasarkan column index untuk variasi
    for (let i = 0; i < columnIndex; i++) {
      shuffled.push(shuffled.shift()!);
    }
    return shuffled;
  };

  const columnTestimonials = getColumnTestimonials();
  
  // Gandakan 4x untuk memastikan loop yang benar-benar seamless
  const infiniteTestimonials = [
    ...columnTestimonials,
    ...columnTestimonials,
    ...columnTestimonials,
    ...columnTestimonials
  ];

  // Estimasi tinggi per testimonial (termasuk margin)
  const estimatedCardHeight = 180; // Sesuaikan dengan tinggi card actual
  const totalHeight = columnTestimonials.length * estimatedCardHeight;

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-3 sm:gap-4"
        initial={{ 
          y: direction === 'up' ? startOffset : startOffset 
        }}
        animate={!isPaused ? {
          y: direction === 'up' 
            ? [startOffset, startOffset - totalHeight]
            : [startOffset, startOffset + totalHeight]
        } : {
          y: startOffset
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`${columnIndex}-${direction}-${index}`} 
            {...testimonial} 
          />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsWall = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 max-h-[600px] sm:max-h-[650px] lg:max-h-[720px] overflow-hidden flex flex-col justify-start">
        <SectionHeader
          title="Loved by productive people everywhere"
          subtitle="See what others are saying about Pokus"
        />

        {/* Mobile: Single column */}
        <div 
          className="block sm:hidden h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <InfiniteScrollColumn
            testimonials={testimonials}
            direction="up"
            speed={60}
            startOffset={0}
            isPaused={isPaused}
            columnIndex={0}
          />
        </div>

        {/* Small Tablet: Two columns */}
        <div 
          className="hidden sm:block md:hidden h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-2 gap-3 h-full">
            <InfiniteScrollColumn
              testimonials={testimonials}
              direction="up"
              speed={60}
              startOffset={0}
              isPaused={isPaused}
              columnIndex={0}
            />
            <InfiniteScrollColumn
              testimonials={testimonials}
              direction="down"
              speed={65}
              startOffset={-100}
              isPaused={isPaused}
              columnIndex={1}
            />
          </div>
        </div>

        {/* Medium Tablet: Two columns */}
        <div 
          className="hidden md:block lg:hidden h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-2 gap-4 h-full max-w-4xl mx-auto">
            <InfiniteScrollColumn
              testimonials={testimonials}
              direction="up"
              speed={70}
              startOffset={0}
              isPaused={isPaused}
              columnIndex={0}
            />
            <InfiniteScrollColumn
              testimonials={testimonials}
              direction="down"
              speed={75}
              startOffset={-150}
              isPaused={isPaused}
              columnIndex={1}
            />
          </div>
        </div>

        {/* Desktop: Three columns */}
        <div 
          className="hidden lg:block h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-3 gap-4 xl:gap-6 h-full max-w-7xl mx-auto">
            <InfiniteScrollColumn
              testimonials={testimonials}
              direction="up"
              speed={80}
              startOffset={0}
              isPaused={isPaused}
              columnIndex={0}
            />
            <InfiniteScrollColumn
              testimonials={testimonials}
              direction="down"
              speed={85}
              startOffset={-100}
              isPaused={isPaused}
              columnIndex={1}
            />
            <InfiniteScrollColumn
              testimonials={testimonials}
              direction="up"
              speed={90}
              startOffset={-200}
              isPaused={isPaused}
              columnIndex={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ name, role, avatarUrl }: TeamMember) => (
  <div className="flex flex-col items-center bg-white/5 border border-white/10 backdrop-blur-md text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10 rounded-xl p-6 w-full max-w-xs mx-auto">
    <img
      src={avatarUrl}
      alt={name}
      className="w-12 h-12 rounded-full object-cover mb-3 border-2 border-white/20 shadow"
      width={48}
      height={48}
      loading="lazy"
    />
    <div className="text-center">
      <p className="font-semibold text-white text-base truncate">{name}</p>
      <p className="text-white/60 text-sm">{role}</p>
    </div>
  </div>
);

const TeamSection = () => (
  <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden">
    <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">Meet the Team</h2>
        <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4">
          The people behind Pokus
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;