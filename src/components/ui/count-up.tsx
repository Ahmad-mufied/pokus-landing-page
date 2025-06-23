"use client";

import { useEffect, useRef, useState } from "react";
import { animate, AnimationPlaybackControls } from "framer-motion";

const CountUp = ({
  to,
  from = 0,
  duration = 1.5,
  decimals = 0,
  className,
  startAnimation = false,
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  className?: string;
  startAnimation?: boolean;
}) => {
  const [value, setValue] = useState(from);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    if (startAnimation) {
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
      controlsRef.current = animate(from, to, {
            duration,
            onUpdate(latest) {
              setValue(latest);
            },
          });
    }
  }, [startAnimation, from, to, duration]);

  useEffect(() => {
    return () => controlsRef.current?.stop();
  }, []);

  return <span className={className}>{value.toFixed(decimals)}</span>;
};

export default CountUp; 