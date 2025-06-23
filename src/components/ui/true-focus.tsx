import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export const TrueFocus = ({
  sentence = "True Focus",
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 0.3,
  className,
  focusOnWords,
  onAnimationComplete,
}: {
  sentence?: string;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
  focusOnWords?: string[];
  onAnimationComplete?: () => void;
}) => {
  const words = useMemo(() => sentence.split(" "), [sentence]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    opacity: 0,
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
            onAnimationComplete?.();
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
    animationDuration,
    pauseBetweenAnimations,
    onAnimationComplete,
  ]);

  const updateFocusRect = useCallback(() => {
    const parentRect = containerRef.current?.getBoundingClientRect();
    if (!parentRect) {
      setFocusRect((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    // Hover or animation is running
    if (currentIndex !== -1) {
    const activeRect = wordRefs.current[currentIndex]?.getBoundingClientRect();
      if (activeRect) {
      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
          opacity: 1,
      });
    }
      return;
    }

    // Animation complete, no hover, permanent focus
    if (
      animationCompleted &&
      currentIndex === -1 &&
      focusOnWords &&
      focusOnWords.length > 0
    ) {
      const focusIndices: number[] = [];
      words.forEach((word, index) => {
        if (focusOnWords.includes(word.replace(/[,\.!?]/g, ""))) {
          focusIndices.push(index);
        }
      });

      if (focusIndices.length > 0) {
        focusIndices.sort((a, b) => a - b);
        const firstWordRect =
          wordRefs.current[focusIndices[0]]?.getBoundingClientRect();
        const lastWordRect =
          wordRefs.current[
            focusIndices[focusIndices.length - 1]
          ]?.getBoundingClientRect();

        if (firstWordRect && lastWordRect) {
          const areOnSameLine =
            Math.abs(firstWordRect.top - lastWordRect.top) <
            firstWordRect.height / 2;

          if (areOnSameLine) {
            setFocusRect({
              x: firstWordRect.left - parentRect.left,
              y: firstWordRect.top - parentRect.top,
              width: lastWordRect.right - firstWordRect.left,
              height: firstWordRect.height,
              opacity: 1,
            });
          } else {
            // Words wrapped to different lines, hide the highlight
            setFocusRect((prev) => ({ ...prev, opacity: 0 }));
          }
          return;
        }
      }
    }

    // Fallback to hide
    setFocusRect((prev) => ({ ...prev, opacity: 0 }));
  }, [animationCompleted, currentIndex, words, focusOnWords]);

  // Recalculate on state change
  useEffect(() => {
    updateFocusRect();
  }, [updateFocusRect]);

  // Recalculate on resize
  useEffect(() => {
    window.addEventListener("resize", updateFocusRect);
    return () => {
      window.removeEventListener("resize", updateFocusRect);
    };
  }, [updateFocusRect]);

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
        if (word === "<br/>") {
          return <div key={`br-${index}`} className="w-full basis-full h-0" />;
        }
        const isPermanentlyFocused =
          animationCompleted &&
          currentIndex === -1 &&
          focusOnWords?.includes(word.replace(/[,\.!?]/g, ""));

        const isActive = index === currentIndex || isPermanentlyFocused;
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
          opacity: focusRect.opacity,
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