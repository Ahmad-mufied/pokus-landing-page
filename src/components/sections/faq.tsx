"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqData = [
  {
    question: "Is Pokus free to use?",
    answer: "Yes, Pokus is completely free to use. You can install it from the Chrome Web Store and access all features without any cost."
  },
  {
    question: "What browsers does Pokus support?",
    answer: "Pokus is designed for Chromium-based browsers including Google Chrome, Microsoft Edge, Brave, and other Chromium derivatives."
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. Pokus operates locally on your browser and doesn't collect or store any personal data on external servers. Your privacy is our top priority."
  },
  {
    question: "Can I customize the Pomodoro timer duration?",
    answer: "Yes, you can fully customize both your focus session and break durations to match your personal productivity preferences."
  },
  {
    question: "How many ambient sounds are available?",
    answer: "Pokus includes a variety of ambient sounds including rain, nature sounds, white noise, and more. You can also mix multiple sounds to create your perfect work atmosphere."
  }
]

const Faq = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Pokus and how it can help you stay focused and productive.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <Card key={index} className="transition-all duration-200 hover:shadow-md">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <span>{item.question}</span>
                  <span className={`transition-transform duration-200 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </CardTitle>
              </CardHeader>
              {openItems.has(index) && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq; 