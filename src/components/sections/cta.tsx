"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Cta = () => {
  const [titleInView, setTitleInView] = useState(false)
  const [descriptionInView, setDescriptionInView] = useState(false)
  const [buttonInView, setButtonInView] = useState(false)
  const [backgroundInView, setBackgroundInView] = useState(false)

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    }
  }

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2
      }
    }
  }

  return (
    <section className="relative mt-16 py-12 md:py-24 bg-gradient-to-b from-background/60 to-background/60 backdrop-blur-xl overflow-hidden shadow-[inset_0_30px_60px_-10px_rgba(0,0,0,0.3)]">
      {/* Smooth glowing background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        variants={backgroundVariants}
        animate={backgroundInView ? 'visible' : 'hidden'}
        onViewportEnter={() => setBackgroundInView(true)}
        onViewportLeave={() => setBackgroundInView(false)}
        viewport={{ amount: 0.3 }}
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[540px] h-[540px] bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            variants={itemVariants}
            animate={titleInView ? 'visible' : 'hidden'}
            onViewportEnter={() => setTitleInView(true)}
            onViewportLeave={() => setTitleInView(false)}
            viewport={{ amount: 0.5 }}
          >
            Ready to Boost Your Productivity?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
            animate={descriptionInView ? 'visible' : 'hidden'}
            onViewportEnter={() => setDescriptionInView(true)}
            onViewportLeave={() => setDescriptionInView(false)}
            viewport={{ amount: 0.5 }}
          >
            Join thousands of users who have already transformed their focus and productivity with Pokus.
            Start your journey towards better concentration today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-col gap-4 justify-center items-center"
            variants={itemVariants}
            animate={buttonInView ? 'visible' : 'hidden'}
            onViewportEnter={() => setButtonInView(true)}
            onViewportLeave={() => setButtonInView(false)}
            viewport={{ amount: 0.5 }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
            >
              <Button
                size="lg"
                className="text-lg w-full px-8 py-4 h-auto relative z-10 shadow-lg shadow-purple-500/20"
                onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
              >
                Add to Chrome for Free
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Cta
