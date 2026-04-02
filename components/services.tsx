"use client"

import { useEffect, useRef } from "react"
import {
  Home,
  Wrench,
  Shield,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    description:
      "New roofs, re-roofs, and full replacements. We use quality materials including impact-resistant shingles and standing seam metal.",
    features: ["Shingle Roofing", "Metal Roofing", "Tile Roofing", "Re-Roofs"],
  },
  {
    icon: Wrench,
    title: "Repairs & Storm Damage",
    description:
      "Leaks, hail damage, wind damage—we respond quickly, assess honestly, and help you navigate the insurance process if needed.",
    features: ["Leak Repairs", "Hail Damage", "Wind Damage", "Insurance Assistance"],
  },
  {
    icon: Shield,
    title: "General Construction",
    description:
      "As a licensed General Contractor, we also handle additions, renovations, siding, gutters, and exterior work.",
    features: ["Home Additions", "Renovations", "Siding & Fascia", "Gutters & Drainage"],
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/40"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p
            className="reveal opacity-0 text-accent text-sm uppercase tracking-[0.2em] mb-4"
            style={{ animationDelay: "100ms" }}
          >
            Our Services
          </p>
          <h2
            className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
            style={{ animationDelay: "200ms" }}
          >
            What We Do
          </h2>
          <p
            className="reveal opacity-0 text-muted-foreground text-lg leading-relaxed"
            style={{ animationDelay: "300ms" }}
          >
            Roofing, repairs, and construction for homeowners. 
            Honest work at fair prices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal opacity-0 group relative bg-card border border-border rounded-lg p-6 md:p-8 lg:p-10 hover:shadow-xl hover:border-accent/40 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-foreground/70 bg-secondary px-3 py-1.5 rounded-full"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors group/link"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
