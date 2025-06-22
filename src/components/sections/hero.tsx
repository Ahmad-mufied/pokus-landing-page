"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrueFocus } from "../ui/true-focus";
import CountUp from "../ui/count-up";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useState } from "react";
import { Modal } from "../ui/modal";
import Image from "next/image";
import BlurText from "../ui/blur-text";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, X } from "lucide-react";
import { AnimatedModal } from "../ui/animated-modal";
import GithubIcon from "../ui/github-icon";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-1 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Image
          src="/logo-pokus-light.png"
          alt="Pokus Logo"
          width={48}
          height={48}
          className="size-16"
        />
        <h1 className="text-base font-bold md:text-2xl">Pokus</h1>
      </div>
    </nav>
  );
};

export function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [startContentAnimation, setStartContentAnimation] = useState(false);

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
        <div className="px-4 py-[clamp(2.5rem,10vh,6rem)] lg:pb-10 md:pb-8 sm:pb-4">
          <TrueFocus
            sentence="Stop Procrastinating, <br/> Start Focusing"
            className="text-center font-bold text-slate-700 dark:text-slate-300 text-[clamp(1.75rem,4vw+1rem,6rem)] leading-tight gap-2 md:gap-4"
            borderColor="rgb(107, 114, 128)"
            glowColor="rgb(107, 114, 128)"
            focusOnWords={["Start", "Focusing"]}
            onAnimationComplete={() => setStartContentAnimation(true)}
          />
          <BlurText
            text="Pokus is a powerful Chrome extension that helps you stay on track, block distractions, and get more done with the Pomodoro Technique."
            className="relative z-10 mx-auto block max-w-2xl lg:max-w-4xl pt-[clamp(1.5rem,4vh,2.5rem)] pb-2 text-center font-light tracking-wide text-neutral-600 dark:text-neutral-400 text-[clamp(0.9rem,2vw,1.25rem)]"
            startAnimation={startContentAnimation}
            delay={0.5}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={startContentAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              size="lg"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-6 py-4 text-base font-semibold tracking-wide bg-white text-black shadow-lg shadow-white/20 hover:bg-white/90 transition-all duration-300"
            >
              <GithubIcon className="mr-2 h-5 w-5 text-black" />
              Install via GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-full sm:w-auto px-6 py-4 text-base font-medium shadow-[0_0_0_2px_var(--border)_inset] hover:shadow-[0_0_0_2px_var(--foreground)_inset] transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
          className="relative z-10 mb-12 lg:mt-4 flex w-full justify-center lg:px-12 md:px-6 sm:px-4"
        >
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl rounded-3xl border border-neutral-200 bg-neutral-100 p-2 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            <button
              onClick={() => setModalOpen(true)}
              className="group w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700"
            >
              <Image
                src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                alt="Landing page preview"
                className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                height={1000}
                width={1000}
                priority
              />
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
            Installation
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            Follow these steps to install the Pokus Chrome extension from the
            latest GitHub release.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-foreground/80 mb-6">
            <li>Download the latest `pokus-extension.zip` file.</li>
            <li>Unzip the downloaded file to a permanent location.</li>
            <li>Open Chrome and navigate to `chrome://extensions`.</li>
            <li>Enable "Developer mode" in the top right corner.</li>
            <li>Click "Load unpacked" and select the unzipped folder.</li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="mr-2 h-4 w-4" />
                Download from GitHub
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={() => setModalOpen(false)}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      </AnimatedModal>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Image
          src="https://assets.aceternity.com/pro/aceternity-landing.webp"
          alt="Landing page preview"
          className="max-h-[90vh] w-auto rounded-lg object-contain"
          height={1080}
          width={1920}
        />
      </Modal>
    </>
  );
}

export default Hero; 