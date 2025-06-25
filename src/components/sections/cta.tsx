"use client"

import React, { useState } from "react"
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button"
import { motion, easeOut } from "framer-motion"

interface CtaProps {
  visible?: boolean
}

const Cta = ({ visible = true }: CtaProps) => {
  const [titleInView, setTitleInView] = useState(false)
  const [buttonInView, setButtonInView] = useState(false)
  const [backgroundInView, setBackgroundInView] = useState(false)

  if (!visible) return null

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        staggerChildren: 0.1
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easeOut,
        delay: 0.2
      }
    }
  }

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: easeOut
      }
    }
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: easeOut
      }
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative mt-16 py-12 md:py-24 bg-gradient-to-b from-background/60 to-background/60 backdrop-blur-xl overflow-hidden shadow-[inset_0_30px_60px_-10px_rgba(0,0,0,0.3)]"
    >
      {/* Enhanced glowing background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        variants={backgroundVariants}
        animate={backgroundInView ? 'visible' : 'hidden'}
        onViewportEnter={() => setBackgroundInView(true)}
        onViewportLeave={() => setBackgroundInView(false)}
        viewport={{ amount: 0.3, once: true }}
      >
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[540px] h-[540px] bg-blue-500/30 rounded-full blur-3xl"
          variants={glowVariants}
          animate={backgroundInView ? 'visible' : 'hidden'}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        {/* Additional subtle glow layers */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-cyan-500/20 rounded-full blur-2xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={itemVariants}
          animate={titleInView ? 'visible' : 'hidden'}
          onViewportEnter={() => setTitleInView(true)}
          onViewportLeave={() => setTitleInView(false)}
          viewport={{ amount: 0.5, once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            variants={textVariants}
          >
            Ready to Boost Your Productivity?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Join thousands of users who have already transformed their focus and productivity with Pokus.
            Start your journey towards better concentration today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-col gap-4 justify-center items-center"
            variants={buttonVariants}
            animate={buttonInView ? 'visible' : 'hidden'}
            onViewportEnter={() => setButtonInView(true)}
            onViewportLeave={() => setButtonInView(false)}
            viewport={{ amount: 0.5, once: true }}
          >
            <LiquidGlassButton
              size="lg"
              className="w-full max-w-md transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
            >
              🚀 Get Pokus for Chrome & Firefox Now
            </LiquidGlassButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Cta
