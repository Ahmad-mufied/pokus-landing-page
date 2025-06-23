"use client"

import React, { useRef } from "react"
import { Accordion, AccordionItem } from "@heroui/react"
import { easeInOut, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"
import BlurText from "../ui/blur-text"

const faqData = [
  {
    question: "Is Pokus free to use?",
    answer:
      "Yes, Pokus is completely free to use. You can install it from the Chrome Web Store and access all features without any cost.",
  },
  {
    question: "What browsers does Pokus support?",
    answer:
      "Pokus is designed for Chromium-based browsers including Google Chrome, Microsoft Edge, Brave, and other Chromium derivatives.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. Pokus operates locally on your browser and doesn't collect or store any personal data on external servers. Your privacy is our top priority.",
  },
  {
    question: "Can I customize the Pomodoro timer duration?",
    answer:
      "Yes, you can fully customize both your focus session and break durations to match your personal productivity preferences.",
  },
  {
    question: "How many ambient sounds are available?",
    answer:
      "Pokus includes a variety of ambient sounds including rain, nature sounds, white noise, and more. You can also mix multiple sounds to create your perfect work atmosphere.",
  },
]

// Custom motionProps for smooth enter/exit animation
const motionProps = {
  initial: { opacity: 0, y: -8, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto" },
  exit: { opacity: 0, y: -8, height: 0 },
  transition: { duration: 0.35, ease: easeInOut },
}

const Faq = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24 bg-background min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12" ref={titleRef}>
          <BlurText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            startAnimation={isInView}
            delay={0}
          />
          <BlurText
            text="Get answers to common questions about Pokus and how it can help you stay focused and productive."
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            startAnimation={isInView}
            delay={0.2}
          />
        </div>

        {/* Accordion Section */}
        <div className="bg-[#18181b]/80 backdrop-blur-lg rounded-2xl border border-[#232334] shadow-2xl p-8 min-h-[300px]">
        <Accordion
            selectionMode="single"
          variant="bordered"
            className="w-full"
            motionProps={motionProps}
            defaultSelectedKeys={["0"]}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index.toString()}
              aria-label={item.question}
                title={
                  <div className="flex items-center w-full pt-3 gap-2 group cursor-pointer">
                    <span className="text-lg font-semibold text-white text-left">
                      {item.question}
                    </span>
                    <span className="flex-1" />
                  </div>
                }
                className={
                  index !== faqData.length - 1
                    ? "border-b border-[#232334]"
                    : ""
                }
                indicator={({ isOpen }) => (
                  <div className="flex items-center justify-end w-full">
                    <ChevronRight
                      className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""} text-white/70 group-hover:text-primary`}
                      size={20}
                    />
                  </div>
                )}
              >
                <div className="pr-8 pb-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;