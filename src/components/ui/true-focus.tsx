import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const TrueFocus = ({
  sentence = "True Focus",
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 0.3,
  className,
}: {
  sentence?: string;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (animationCompleted) return;

    const timeouts = words.map((_, index) => {
      return setTimeout(() => {
        setCurrentIndex(index);

        if (index === words.length - 1) {
          setTimeout(() => {
            setAnimationCompleted(true);
            setCurrentIndex(-1);
          }, (animationDuration + pauseBetweenAnimations) * 1000);
        }
      }, index * (animationDuration + pauseBetweenAnimations) * 1000);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [
    animationCompleted,
    words,
    words.length,
    animationDuration,
    pauseBetweenAnimations,
  ]);

  useEffect(() => {
    if (currentIndex === -1 || !wordRefs.current[currentIndex]) {
      // Optionally hide or reset the focus rectangle when no word is active
      setFocusRect({ x: 0, y: 0, width: 0, height: 0 });
      return;
    }

    const parentRect = containerRef.current?.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]?.getBoundingClientRect();

    if (parentRect && activeRect) {
      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
      });
    }
  }, [currentIndex]);

  const handleMouseEnter = (index: number) => {
    if (animationCompleted) {
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (animationCompleted) {
      setCurrentIndex(-1);
    }
  };

  return (
    <div
      className={cn(
        "relative flex gap-4 justify-center items-center flex-wrap",
        className,
      )}
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el: HTMLSpanElement | null) => {
              if (el) {
                wordRefs.current[index] = el;
              }
            }}
            className={cn("relative font-black cursor-pointer", className)}
            style={
              {
                filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
                "--border-color": borderColor,
                "--glow-color": glowColor,
                transition: `filter ${animationDuration}s ease`,
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        initial={{ opacity: 0 }}
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex !== -1 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={
          {
            "--border-color": borderColor,
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus; 