"use client"

import React from "react"
import {Button} from "@/components/ui/button"

const Cta = () => {
  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their focus and productivity with Pokus. 
            Start your journey towards better concentration today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
            >
              Add to Chrome for Free
            </Button>
            <p className="text-sm text-muted-foreground">
              ⭐ Rated 4.8/5 by 1,000+ users
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta