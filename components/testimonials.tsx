"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Robert & Linda P.",
    role: "Homeowners",
    location: "Lubbock",
    rating: 5,
    text: "We had three roofers come out after the hailstorm. JW was the only one who actually got on the roof, showed us photos, and walked us through the insurance process. No pressure, just honest work. Our new roof looks great.",
  },
  {
    id: 2,
    name: "Tommy G.",
    role: "Ranch Owner",
    location: "Levelland",
    rating: 5,
    text: "Needed a metal roof on the barn and shop. They gave me a fair price and got it done right. Even came back to check on it after some bad weather. That kind of service is hard to find.",
  },
  {
    id: 3,
    name: "Maria G.",
    role: "Homeowner",
    location: "Wolfforth",
    rating: 5,
    text: "A friend recommended JW for a roof repair. They fixed the leak, didn't try to sell me a whole new roof I didn't need, and the price was exactly what they quoted. Good people.",
  },
  {
    id: 4,
    name: "Jim W.",
    role: "Property Owner",
    location: "Slaton",
    rating: 5,
    text: "They worked around our schedule so we didn't have to close down. Showed up when they said they would and cleaned up every day. Already recommended them to family.",
  },
  {
    id: 5,
    name: "Sandra W.",
    role: "Homeowner",
    location: "Shallowater",
    rating: 5,
    text: "Professional from start to finish. They coordinated with my insurance adjuster, used quality materials, and their crew was respectful of our property. Refreshing to work with contractors who do what they say.",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-primary"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <p
            className="reveal opacity-0 text-accent text-sm uppercase tracking-[0.2em] mb-4"
            style={{ animationDelay: "100ms" }}
          >
            Testimonials
          </p>
          <h2
            className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-16"
            style={{ animationDelay: "200ms" }}
          >
            What Our Clients Say
          </h2>

          {/* Testimonial Card */}
          <div
            className="reveal opacity-0 relative"
            style={{ animationDelay: "300ms" }}
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 md:w-16 md:h-16 text-primary-foreground/10 mx-auto mb-6 md:mb-8" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 md:mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent"
                />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-primary-foreground text-lg md:text-2xl leading-relaxed mb-8 md:mb-10 transition-opacity duration-500 px-2">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            {/* Author */}
            <div className="transition-opacity duration-500">
              <p className="font-semibold text-primary-foreground text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-primary-foreground/70">
                {testimonials[currentIndex].role} &bull;{" "}
                {testimonials[currentIndex].location}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-accent"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
