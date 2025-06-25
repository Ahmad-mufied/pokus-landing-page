"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidGlassButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}

const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ children, className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "px-6 py-3 text-sm",
      md: "px-8 py-4 text-base",
      lg: "px-10 py-5 text-lg"
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl font-medium transition-all duration-300",
          "bg-white/10 backdrop-blur-xl border border-white/20",
          "hover:bg-white/15 hover:border-white/30",
          "focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent",
          sizeClasses[size],
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {/* Continuous focus/blur animation background */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Liquid glass effect overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            filter: [
              "blur(0px)",
              "blur(1px)",
              "blur(0px)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)"
            ],
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-white font-semibold">
          {children}
        </div>
      </motion.button>
    )
  }
)

LiquidGlassButton.displayName = "LiquidGlassButton"

export { LiquidGlassButton } 