"use client";

// FeaturesSection.tsx
import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, CardHeader, CardFooter, Button } from "@heroui/react";
import {
  Timer,
  ShieldOff,
  Music,
  Paintbrush,
  Trophy,
  Play,
  Pause,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView, AnimatePresence } from "framer-motion";
import BlurText from "../ui/blur-text";

const colorClasses = {
  blue: {
    shadow: "hover:shadow-blue-500/10",
    from: "from-blue-500/10",
    to: "to-cyan-500/10",
    bg: "bg-blue-500/20",
    text300: "text-blue-300",
    text200: "text-blue-200",
    text400: "text-blue-400",
  },
  green: {
    shadow: "hover:shadow-green-500/10",
    from: "from-green-500/10",
    to: "to-emerald-500/10",
    bg: "bg-green-500/20",
    text300: "text-green-300",
    text200: "text-green-200",
    text400: "text-green-400",
  },
  yellow: {
    shadow: "hover:shadow-yellow-500/10",
    from: "from-yellow-500/10",
    to: "to-orange-500/10",
    bg: "bg-yellow-500/20",
    text300: "text-yellow-300",
    text200: "text-yellow-200",
    text400: "text-yellow-400",
  },
};

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const siteBlockerBodyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const POMODORO_MODES = {
  focus: 25 * 60,
  "short break": 5 * 60,
  "long break": 15 * 60,
};
type Mode = keyof typeof POMODORO_MODES;

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hovered, setHovered] = useState<number | null>(null);

  const [currentMode, setCurrentMode] = useState<Mode>("focus");
  const [timeRemaining, setTimeRemaining] = useState(POMODORO_MODES.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const hasAutoStarted = useRef(false);

  const [blockedSites] = useState([
    "facebook.com",
    "instagram",
    "TokTik",
    "twitter.com",
    "youtube.com",
  ]);

  useEffect(() => {
    if (isInView && !hasAutoStarted.current) {
      setIsRunning(true);
      setPulseKey(1);
      hasAutoStarted.current = true;
    }
  }, [isInView]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => {
      if (!prevIsRunning) {
        setPulseKey((prevKey) => prevKey + 1);
      }
      return !prevIsRunning;
    });
  };

  const handleModeChange = (mode: Mode) => {
    setCurrentMode(mode);
    setIsRunning(false);
    setTimeRemaining(POMODORO_MODES[mode]);
    setPulseKey(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const totalDuration = POMODORO_MODES[currentMode];
  const progress = (totalDuration - timeRemaining) / totalDuration;
  const strokeDashoffset = circumference * (1 - progress);

  const otherFeatures = [
    {
      title: "Ambience Sound",
      Icon: Music,
      color: "blue" as keyof typeof colorClasses,
      description: "Build your perfect focus environment",
      items: [
        "Choose from rain, fire, white noise, and more",
        "Play multiple ambience sounds together",
      ],
    },
    {
      title: "Customization",
      Icon: Paintbrush,
      color: "green" as keyof typeof colorClasses,
      description: "Make Pokus feel like your own",
      items: [
        "Switch between color themes and backgrounds",
        "Live preview UI changes",
      ],
    },
    {
      title: "Gamification",
      Icon: Trophy,
      color: "yellow" as keyof typeof colorClasses,
      description: "Turn productivity into a habit",
      items: ["Earn EXP for completed sessions", "Track your focus streaks"],
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <BlurText
            text="Pokus Features"
            className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
            startAnimation={isInView}
            delay={0}
          />
          <BlurText
            text="Everything you need to stay focused and productive"
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            startAnimation={isInView}
            delay={0.2}
          />
        </div>

        <motion.div
          ref={ref}
          variants={gridContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          style={{ perspective: "1000px" }}
        >
          {/* Pomodoro Timer */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.02, rotateY: -4, rotateX: 8 }}
          >
            <Card
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "p-6 md:p-8 border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm transition-all duration-300 h-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:shadow-xl",
                hovered !== null && hovered !== 0 && "blur-sm scale-[0.98]",
              )}
              shadow="lg"
            >
              <motion.div variants={cardItemVariants}>
                <CardHeader className="flex items-center gap-4 p-0 mb-8">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/20">
                    <Timer className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Pomodoro Timer
                    </h3>
                    <p className="text-blue-200">
                      Stay focused with structured sessions
                    </p>
                  </div>
                </CardHeader>
              </motion.div>
              <motion.div variants={cardItemVariants}>
                <CardBody className="flex flex-col items-center justify-center p-4">
                  <div className="flex items-center justify-center gap-2 mb-8">
                    {Object.keys(POMODORO_MODES).map((mode) => (
                      <Button
                        key={mode}
                        onClick={() => handleModeChange(mode as Mode)}
                        size="sm"
                        variant={currentMode === mode ? "solid" : "light"}
                        color="secondary"
                        className="capitalize"
                      >
                        {mode}
                      </Button>
                    ))}
                  </div>

                  <div className="relative w-40 h-40 mb-8">
                    <svg className="w-full h-full" viewBox="0 0 140 140">
                      <circle
                        cx="70"
                        cy="70"
                        r={radius}
                        className="stroke-blue-500/20"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="70"
                        cy="70"
                        r={radius}
                        className="stroke-blue-400 drop-shadow-lg"
                        strokeWidth="8"
                        fill="transparent"
                        strokeLinecap="round"
                        transform="rotate(-90 70 70)"
                        strokeDasharray={circumference}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: "linear" }}
                      />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${currentMode}-${pulseKey}`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0, scale: [1, 1.15, 1] }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="text-4xl font-bold text-white"
                        >
                          {formatTime(timeRemaining)}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={toggleTimer}
                      color="secondary"
                      variant="shadow"
                      size="lg"
                      startContent={isRunning ? <Pause /> : <Play />}
                    >
                      {isRunning ? "Pause" : "Resume"}
                    </Button>
                  </motion.div>
                </CardBody>
              </motion.div>
              <motion.div variants={cardItemVariants}>
                <CardFooter className="p-0 mt-6">
                  <div className="space-y-2 w-full">
                    {[
                      "Customize focus and break durations",
                      "Auto notifications when sessions start and end",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-blue-200"
                      >
                        <Check className="w-4 h-4 text-blue-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardFooter>
              </motion.div>
            </Card>
          </motion.div>

          {/* Site Blocker */}
          <motion.div
            className="lg:col-span-1"
            variants={cardVariants}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.02, rotateY: 4, rotateX: 8 }}
          >
            <Card
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "p-6 md:p-8 border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm transition-all duration-300 h-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:shadow-xl",
                hovered !== null && hovered !== 1 && "blur-sm scale-[0.98]",
              )}
              shadow="lg"
            >
              <motion.div variants={cardItemVariants}>
                <CardHeader className="flex items-center gap-4 p-0 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/20">
                    <ShieldOff className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Site Blocker
                    </h3>
                    <p className="text-blue-200">Eliminate distractions</p>
                  </div>
                </CardHeader>
              </motion.div>
              <motion.div variants={siteBlockerBodyVariants}>
                <CardBody className="p-0">
                  <div className="space-y-2">
                    {blockedSites.map((site, idx) => (
                      <motion.div
                        key={idx}
                        variants={listItemVariants}
                        className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-sm shadow-blue-500/10"
                      >
                        <span className="text-white text-sm">{site}</span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-sm shadow-blue-500/50"></div>
                      </motion.div>
                    ))}
                  </div>
                </CardBody>
              </motion.div>
              <motion.div variants={cardItemVariants}>
                <CardFooter className="p-0 mt-6">
                  <div className="space-y-2 w-full">
                    {["Block during focus time", "Customizable lists"].map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-blue-200"
                        >
                          <Check className="w-4 h-4 text-blue-400" />
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </CardFooter>
              </motion.div>
            </Card>
          </motion.div>

          {/* Other Features */}
          {otherFeatures.map((feature, idx) => {
            const colors = colorClasses[feature.color];
            const cardIndex = idx + 2;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.02, rotateX: 8 }}
              >
                <Card
                  onMouseEnter={() => setHovered(cardIndex)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "p-6 border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-slate-900/40 backdrop-blur-sm transition-all duration-300 h-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:shadow-xl",
                    hovered !== null &&
                      hovered !== cardIndex &&
                      "blur-sm scale-[0.98]",
                  )}
                  shadow="lg"
                >
                  <motion.div variants={cardItemVariants}>
                    <CardHeader className="flex items-center gap-3 p-0 mb-4">
                      <div
                        className={`p-2 rounded-lg ${colors.bg} ${colors.text300}`}
                      >
                        <feature.Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className={`text-sm ${colors.text200}`}>
                          {feature.description}
                        </p>
                      </div>
                    </CardHeader>
                  </motion.div>
                  <motion.div variants={cardItemVariants}>
                    <CardBody className="p-0">
                      <div className="space-y-2">
                        {feature.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className={`flex items-center gap-2 text-xs text-slate-300`}
                          >
                            <Check className={`w-3 h-3 ${colors.text400}`} />
                            {item}
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
