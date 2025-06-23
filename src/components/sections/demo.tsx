'use client'

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Clock, Play, Bell, TrendingUp, Shield, Music } from 'lucide-react';
import BlurText from '../ui/blur-text';
import { useInView } from 'framer-motion';
import SectionHeader from '../ui/section-header';

const steps = [
  {
    title: "Set Your Timer",
    description: "Choose your focus and break durations that work best for you.",
    icon: Clock,
  },
  {
    title: "Block Distractions",
    description: "Automatically block distracting websites during your focus sessions to stay on track.",
    icon: Shield,
  },
  {
    title: "Add Ambience (Optional)",
    description: "Enhance your focus with relaxing background sounds like rain, nature, or white noise.",
    icon: Music,
    isOptional: true,
  },
  {
    title: "Start Focusing",
    description: "Begin your session with a single click and stay in the zone.",
    icon: Play,
  },
  {
    title: "Take Breaks",
    description: "Get notified when it's time to rest and recharge your mind.",
    icon: Bell,
  },
  {
    title: "Track Progress",
    description: "Monitor your productivity and build consistent habits.",
    icon: TrendingUp,
  },
];

const StepCard = ({
  step,
  index,
  isActive,
  isBlurred,
  onClick,
}: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  isBlurred: boolean;
  onClick: () => void;
}) => {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.15, delay: index * 0.03 }}
      className="group relative cursor-pointer"
      onClick={onClick}
      animate={isActive ? { scale: 1.03 } : isBlurred ? { scale: 0.98, filter: 'blur(1px)' } : { scale: 1, filter: 'none' }}
      style={{ zIndex: isActive ? 10 : 1 }}
    >
      <div className={`
        relative p-8 rounded-2xl border transition-all duration-300
        ${isActive
          ? 'border-blue-500 bg-white dark:bg-gray-900'
          : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-gray-600'
        }
      `}>
        <div className="flex items-start gap-6">
          <div className={`
            flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
            transition-colors duration-300
            ${isActive
              ? step.isOptional 
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200'
                : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
              : step.isOptional
                ? 'bg-purple-100 text-purple-600 group-hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:group-hover:bg-purple-800'
                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600'
            }
          `}>
            <Icon size={20} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <span className={`
                px-2 py-1 text-sm font-medium rounded-md
                ${step.isOptional
                  ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200'
                  : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300'
                }
              `}>
                {step.isOptional ? 'Optional' : index + 1}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LiquidGlassGuide = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  // For animated title/subtitle
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.2 });

  // Scroll-based focus effect (per card)
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRefs.current.length) return;
      const viewportHeight = window.innerHeight;
      const zoneTop = viewportHeight * 0.3;
      const zoneBottom = viewportHeight * 0.7;
      let found = false;
      let closestIdx = 0;
      let minDistance = Infinity;
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        // Check if card center is in the central zone
        if (cardCenter >= zoneTop && cardCenter <= zoneBottom) {
          setActiveStep(idx);
          found = true;
        }
        // Track closest card to center for fallback
        const distance = Math.abs(cardCenter - viewportHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });
      if (!found) {
        setActiveStep(closestIdx);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef}>
          <SectionHeader
            title="How it works"
            subtitle="Get started with our simple workflow and boost your productivity today."
          />
        </div>
        {/* Main Steps */}
        <div ref={containerRef} className="relative">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { cardRefs.current[index] = el; }}
              >
                <StepCard
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  isBlurred={activeStep !== index}
                  onClick={() => setActiveStep(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidGlassGuide;