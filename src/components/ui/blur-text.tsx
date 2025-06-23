"use client";

import { motion } from "framer-motion";

const BlurText = ({
  text,
  className,
  startAnimation = false,
  delay = 0,
}: {
  text: string;
  className?: string;
  startAnimation?: boolean;
  delay?: number;
}) => {
  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <motion.p
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"}
      transition={{ duration: 1, delay }}
      variants={variants}
      className={className}
    >
      {text}
    </motion.p>
  );
};

export default BlurText; 