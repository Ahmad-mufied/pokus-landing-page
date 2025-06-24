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
  idx?: number
}

const teamMembers: TeamMember[] = [
  {
    name: "Damar Galih",
    position: "Product Owner",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBkuun5v1zt1n3aZ2E5N7ho0PSAy8JgOzFuMKi"
  },
  {
    name: "Gilang Nur Hidayat",
    position: "Scrum Master",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://avatars.githubusercontent.com/u/130344101?v=4"
  },
  {
    name: "Muhammad Rizal Arfiyan",
    position: "Frontend Developer",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBGTmIH1iPrfxvoLJ6Za4MBD2jdncE13eUsgtK"
  },
  {
    name: "Ahmad Mufied Nugroho",
    position: "Backend Developer",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBq1eUcy8GhcYv1dAHiCogF9MaWbmslwfz3uKD"
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
      duration: 0.5,
      type: 'spring' as const,
      bounce: 0.25,
      damping: 8,
      delay: i * 0.06
    }
  })
}

const TeamCard = ({ name, position, role, avatarUrl, idx = 0, animateState = 'hidden' }: TeamMember & { animateState: 'show' | 'hidden' }) => {
  return (
    <motion.div
      variants={cardVariants}
      custom={idx}
      animate={animateState}
      viewport={{ amount: 0.1 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
      className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 pt-14 mt-12 pb-6 shadow-md text-white text-center transition-all duration-300 flex flex-col items-center min-h-[280px] "
      style={{ outline: 'none' }}
    >
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full rounded-full border-4 border-white/30 shadow-md object-cover bg-white"
        />
      </div>
      <h3 className="mt-6 sm:mt-8 font-semibold text-lg md:text-xl break-words w-full">{name}</h3>
      <p className="italic text-xs sm:text-sm text-blue-200 mb-1">{position}</p>
      <p className="text-xs sm:text-sm text-white/80 mt-1 mb-4 px-2 md:px-0">{role}</p>
      <div className="flex justify-center gap-4 mt-auto">
        <motion.span whileHover={{ scale: 1.3, rotate: -10 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <FaXTwitter className="w-5 h-5 cursor-pointer text-white/80 hover:text-white transition-transform" />
        </motion.span>
        <motion.span whileHover={{ scale: 1.3, rotate: 10 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <FaInstagram className="w-5 h-5 cursor-pointer text-white/80 hover:text-white transition-transform" />
        </motion.span>
        <motion.span whileHover={{ scale: 1.3, rotate: 0 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <FaLinkedin className="w-5 h-5 cursor-pointer text-white/80 hover:text-white transition-transform" />
        </motion.span>
      </div>
    </motion.div>
  )
}

const TeamSection = () => {
  const titleRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(titleRef, { once: false, amount: 0.5 })
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.2 })
  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8  text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
          ref={titleRef}
        >
          <BlurText
            text="Welcome our talented team"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            startAnimation={isInView}
            delay={0}
          />
          <BlurText
            text="We are thrilled to introduce the newest members of our team. Each individual brings a wealth of experience, creativity, and passion to our organization."
            className="text-white/70 mt-4 max-w-2xl mx-auto text-sm sm:text-base"
            startAnimation={isInView}
            delay={0.2}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isSectionInView ? 'show' : 'hidden'}
          viewport={{ once: false, amount: 0.1 }}
        >
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} {...member} idx={idx} animateState={isSectionInView ? 'show' : 'hidden'} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection