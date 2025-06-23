"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/section-header";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer", 
    photo: "/api/placeholder/150/150",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    accent: "from-blue-400 to-cyan-400",
    description: "Full-stack wizard crafting seamless experiences"
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    photo: "/api/placeholder/150/150", 
    linkedin: "https://linkedin.com/in/sarahchen",
    github: "https://github.com/sarahchen",
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    accent: "from-purple-400 to-pink-400",
    description: "Pixel-perfect designs that users love"
  },
  {
    name: "Mike Rodriguez",
    role: "Frontend Developer",
    photo: "/api/placeholder/150/150",
    linkedin: "https://linkedin.com/in/mikerodriguez", 
    github: "https://github.com/mikerodriguez",
    gradient: "from-green-500 via-emerald-500 to-green-600",
    accent: "from-green-400 to-emerald-400",
    description: "Performance enthusiast and code craftsman"
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    photo: "/api/placeholder/150/150",
    linkedin: "https://linkedin.com/in/emilydavis",
    github: "https://github.com/emilydavis",
    gradient: "from-orange-500 via-red-500 to-orange-600",
    accent: "from-orange-400 to-red-400",
    description: "Strategic thinker turning ideas into reality"
  }
];

const Team = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/5 via-transparent to-primary/5" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            title="Meet Our Team"
            subtitle="The passionate individuals behind Pokus, dedicated to helping you achieve your productivity goals with innovative solutions and cutting-edge technology."
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }
                },
              }}
              className="group relative"
            >
              {/* Chroma Grid Card with enhanced styling */}
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                
                {/* Main card content */}
                <div className="relative bg-background/90 backdrop-blur-xl rounded-3xl p-6 h-full border border-border/30 group-hover:border-border/50 transition-all duration-500">
                  {/* Avatar section with enhanced effects */}
                  <div className="relative mb-6">
                    {/* Main avatar with gradient border */}
                    <div className={`relative w-28 h-28 mx-auto rounded-full p-[2px] bg-gradient-to-br ${member.gradient} group-hover:scale-110 transition-all duration-500`}>
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
                        <span className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent z-10 relative">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                        {/* Inner glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      </div>
                    </div>
                    
                    {/* Floating gradient orbs with enhanced animation */}
                    <motion.div 
                      className={`absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br ${member.accent} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    />
                    <motion.div 
                      className={`absolute -bottom-3 -right-3 w-4 h-4 bg-gradient-to-br ${member.accent} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        delay: index * 0.5 + 0.5 
                      }}
                    />
                    
                    {/* Additional floating elements */}
                    <div className={`absolute top-1/2 -right-2 w-2 h-2 bg-gradient-to-br ${member.accent} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 delay-300`} />
                    <div className={`absolute top-1/2 -left-2 w-2 h-2 bg-gradient-to-br ${member.accent} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 delay-400`} />
                  </div>

                  {/* Content section */}
                  <div className="text-center space-y-3">
                    <motion.h3 
                      className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-primary/80 text-sm font-medium tracking-wide"
                      whileHover={{ scale: 1.02 }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.p 
                      className="text-muted-foreground text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                    >
                      {member.description}
                    </motion.p>
                </div>

                  {/* Enhanced social links */}
                  <div className="flex justify-center space-x-3 mt-6 pt-4 border-t border-border/20">
                    <motion.a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-br ${member.accent}/10 hover:${member.accent}/20 text-muted-foreground hover:text-primary transition-all duration-300 group/link`}
                    aria-label={`${member.name}'s LinkedIn profile`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                  >
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    </motion.a>
                    <motion.a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-br ${member.accent}/10 hover:${member.accent}/20 text-muted-foreground hover:text-primary transition-all duration-300 group/link`}
                    aria-label={`${member.name}'s GitHub profile`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                  >
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    </motion.a>
                  </div>

                  {/* Enhanced gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.accent}/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.accent}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 