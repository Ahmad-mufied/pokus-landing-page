"use client";

import { motion } from "motion/react";
import TrueFocus from "../ui/true-focus";
import CountUp from "../ui/count-up";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useState } from "react";
import { Modal } from "../ui/modal";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Pokus</h1>
      </div>
    </nav>
  );
};

export function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative mx-auto mb-10 flex w-full max-w-screen-2xl flex-col items-center justify-center">
        <Navbar />
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="px-4 py-10 md:py-20 lg:py-24">
          <TrueFocus
            sentence="Stop Procrastinating, Start Focusing"
            className="text-4xl font-bold md:text-6xl lg:text-8xl text-slate-700 dark:text-slate-300"
            borderColor="rgb(107, 114, 128)"
            glowColor="rgb(107, 114, 128)"
          />
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-2xl lg:max-w-4xl pt-8 lg:pt-12 pb-2 text-center text-base md:text-lg lg:text-xl font-light tracking-wide text-neutral-600 dark:text-neutral-400"
          >
            Pokus is a powerful Chrome extension that helps you stay on track,
            block distractions, and get more done with the Pomodoro Technique.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3 lg:px-8 lg:py-4"
            >
              <span className="text-sm md:text-base lg:text-lg font-semibold">
                Get Started - It's Free
              </span>
            </HoverBorderGradient>
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 text-sm md:text-base text-muted-foreground">
              <div className="flex items-baseline gap-1.5">
                <CountUp to={1000} duration={3} />
                <span>+ happy users</span>
              </div>
              <span className="h-4 w-px bg-muted-foreground/50 hidden sm:block" />
              <div className="flex items-baseline gap-1.5">
                <CountUp to={4.8} decimals={1} duration={3} />
                <span>/5 stars</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mb-12 lg:mt-4 flex w-full justify-center px-4"
        >
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl rounded-3xl border border-neutral-200 bg-neutral-100 p-2 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            <button
              onClick={() => setModalOpen(true)}
              className="group w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700"
            >
              <img
                src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                alt="Landing page preview"
                className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                height={1000}
                width={1000}
              />
            </button>
          </div>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <img
          src="https://assets.aceternity.com/pro/aceternity-landing.webp"
          alt="Landing page preview"
          className="max-h-[90vh] w-auto rounded-lg object-contain"
        />
      </Modal>
    </>
  );
}

export default Hero; 