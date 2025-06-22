"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto max-w-screen-xl rounded-full",
        "border border-transparent",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        "transition-all duration-300",
        {
          "mt-4 border-white/10 bg-black/20 backdrop-blur-lg": hidden,
        }
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold">
            Pokus
          </Link>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="#features" className="text-sm font-medium hover:underline">
            Features
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:underline">
            Benefits
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline">
            FAQ
          </Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </motion.header>
  );
}; 