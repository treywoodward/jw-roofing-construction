"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-roof.jpg"
          alt="Professional roofing work by JW Roofing"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-40 md:pt-32 md:pb-48">
        <div className="max-w-3xl">
          <p
            className="reveal opacity-0 text-primary-foreground/80 text-sm uppercase tracking-[0.25em] mb-6"
            style={{ animationDelay: "100ms" }}
          >
            Roofing &amp; Construction &bull; Lubbock, TX
          </p>
          <h1
            className="reveal opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 text-balance"
            style={{ animationDelay: "200ms" }}
          >
            Quality Work.
            <br />
            <span className="text-accent">Fair Prices.</span>
          </h1>
          <p
            className="reveal opacity-0 text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ animationDelay: "300ms" }}
          >
            Licensed General Contractor with 20+ years of experience. 
            We handle residential roofing, repairs, and construction 
            for homeowners in Lubbock and surrounding communities.
          </p>
          <div
            className="reveal opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={{ animationDelay: "400ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base"
            >
              <a href="#contact">Get a Free Estimate</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary text-base"
            >
              <a href="tel:+18067878316">(806) 787-8316</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="reveal opacity-0 absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border"
        style={{ animationDelay: "500ms" }}
      >
        <div className="container mx-auto px-4 md:px-6 py-5 md:py-8">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            <div className="text-center group">
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                20+
              </p>
              <p className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1 uppercase tracking-wide">
                Years Experience
              </p>
            </div>
            <div className="text-center group">
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                Licensed
              </p>
              <p className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1 uppercase tracking-wide">
                General Contractor
              </p>
            </div>
            <div className="text-center group">
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                Fully
              </p>
              <p className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1 uppercase tracking-wide">
                Insured
              </p>
            </div>
            <div className="text-center group">
              <p className="font-serif text-2xl md:text-3xl font-bold text-accent">
                Free
              </p>
              <p className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1 uppercase tracking-wide">
                Estimates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a
          href="#services"
          className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
