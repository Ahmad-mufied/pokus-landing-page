"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

const CountUp = ({
  to,
  from = 0,
  duration = 1.5,
  decimals = 0,
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  className?: string;
}) => {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inViewRef.current) {
          inViewRef.current = true; // Mark as in view so it only runs once
          const controls = animate(from, to, {
            duration,
            onUpdate(latest) {
              setValue(latest);
            },
          });
          return () => controls.stop();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals)}
    </span>
  );
};

export default CountUp; 