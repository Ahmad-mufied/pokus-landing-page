'use client'

import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import BlurText from '../ui/blur-text'

interface TeamMember {
  name: string
  position: string
  role: string
  avatarUrl: string
  social?: {
    twitter?: string
    instagram?: string
    linkedin?: string
  }
  idx?: number
}

const teamMembers: TeamMember[] = [
  {
    name: "Damar Galih",
    position: "Product Owner",
    role: "Leading the vision and strategy for Pokus, ensuring all features align with user needs and business objectives. Responsible for product roadmap and stakeholder communication.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBkuun5v1zt1n3aZ2E5N7ho0PSAy8JgOzFuMKi",
    social: {
      twitter: "https://twitter.com/damargalih",
      instagram: "https://instagram.com/damargalih",
      linkedin: "https://linkedin.com/in/damargalih"
    }
  },
  {
    name: "Gilang Nur Hidayat",
    position: "Scrum Master",
    role: "Facilitating agile development process, ensuring smooth collaboration between team members. Managing sprint planning, daily standups, and removing development blockers.",
    avatarUrl: "https://avatars.githubusercontent.com/u/130344101?v=4",
    social: {
      twitter: "https://twitter.com/gilangnh",
      instagram: "https://instagram.com/gilangnh",
      linkedin: "https://linkedin.com/in/gilangnh"
    }
  },
  {
    name: "Muhamad Rizal Arfiyan",
    position: "Developer",
    role: "Full-stack developer responsible for building the entire Pokus application including site blocker, Pomodoro timer, ambient sounds, UI customization, and gamification features.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBGTmIH1iPrfxvoLJ6Za4MBD2jdncE13eUsgtK",
    social: {
      twitter: "https://twitter.com/rizalarfiyan",
      instagram: "https://instagram.com/rizalarfiyan",
      linkedin: "https://linkedin.com/in/rizalarfiyan"
    }
  },
  {
    name: "Ahmad Mufied Nugroho",
    position: "Developer",
    role: "Frontend developer focused on creating the landing page and user interface components. Implementing responsive design and ensuring optimal user experience across all devices.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBq1eUcy8GhcYv1dAHiCogF9MaWbmslwfz3uKD",
    social: {
      twitter: "https://twitter.com/ahmadmufied",
      instagram: "https://instagram.com/ahmadmufied",
      linkedin: "https://linkedin.com/in/ahmadmufied"
    }
  }
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.85, filter: 'blur(4px)', boxShadow: '0 0 0 0 rgba(59,130,246,0)', ring: '0' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    boxShadow: '0 0 16px 0 rgba(59,130,246,0.15)',
    transition: {
      duration: 0.8,
      type: 'spring' as const,
      bounce: 0.45,
      damping: 8,
      delay: i * 0.06
    }
  })
}

const TeamCard = ({ name, position, role, avatarUrl, social, idx = 0 }: TeamMember) => {
  const [isInView, setIsInView] = useState(false)
  return (
    <motion.div
      variants={cardVariants}
      custom={idx}
      animate={isInView ? 'show' : 'hidden'}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.35 }}
      whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)', borderColor: '#60a5fa' }}
      whileFocus={{ scale: 1.045, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)', borderColor: '#60a5fa' }}
      tabIndex={0}
      aria-label={`Team member: ${name}, ${position}`}
      className="relative mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 sm:px-4 pt-12 sm:pt-14 pb-4 sm:pb-6 shadow-md text-white text-center transition-all duration-300 flex flex-col items-center min-h-[240px] sm:min-h-[260px] md:min-h-[280px] outline-none focus:ring-2 focus:ring-blue-400"
      style={{ outline: 'none' }}
    >
      <div className="absolute -top-6 sm:-top-8 md:-top-10 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full rounded-full border-4 border-white/30 shadow-md object-cover bg-white transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col w-full flex-1">
        <h3 className="mt-4 sm:mt-5 md:mt-6 font-semibold text-sm sm:text-base md:text-lg break-words w-full max-w-full" title={name}>
          {name}
        </h3>
        <p className="italic text-xs sm:text-sm text-blue-200 mb-1 sm:mb-2 leading-tight" title={position}>
          {position}
        </p>
        <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 px-1 leading-relaxed flex-1" title={role}>
          {role}
        </p>
      </div>
      <div className="flex justify-center gap-3 sm:gap-4 mt-auto">
        {social?.twitter ? (
          <motion.a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s Twitter profile`}
            whileHover={{ scale: 1.3, rotate: -10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="hover:text-blue-300 transition-colors"
          >
            <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-white/80 hover:text-white transition-transform" />
          </motion.a>
        ) : (
          <span className="opacity-40 cursor-not-allowed relative group" tabIndex={0} aria-label="Twitter not available">
            <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">Not available</span>
          </span>
        )}
        {social?.instagram ? (
          <motion.a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s Instagram profile`}
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-white/80 hover:text-white transition-transform" />
          </motion.a>
        ) : (
          <span className="opacity-40 cursor-not-allowed relative group" tabIndex={0} aria-label="Instagram not available">
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">Not available</span>
          </span>
        )}
        {social?.linkedin ? (
          <motion.a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s LinkedIn profile`}
            whileHover={{ scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-white/80 hover:text-white transition-transform" />
          </motion.a>
        ) : (
          <span className="opacity-40 cursor-not-allowed relative group" tabIndex={0} aria-label="LinkedIn not available">
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">Not available</span>
          </span>
        )}
      </div>
    </motion.div>
  )
}

const TeamSection = () => {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: false, amount: 0.5 })
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          ref={titleRef}
        >
          <BlurText
            text="Welcome our talented team"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            startAnimation={isInView}
            delay={0}
          />
          <BlurText
            text="We are thrilled to introduce the newest members of our team. Each individual brings a wealth of experience, creativity, and passion to our organization."
            className="text-white/70 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            startAnimation={isInView}
            delay={0.2}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-10 md:mt-16 lg:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} {...member} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection