"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const values = [
  {
    title: "Licensed & Insured",
    description:
      "General Contractor license. Full liability and workers comp coverage.",
  },
  {
    title: "Quality Materials",
    description:
      "We use materials rated for hail, wind, and heat. No shortcuts.",
  },
  {
    title: "Honest Pricing",
    description:
      "Free estimates, no pressure. We honor our quotes.",
  },
  {
    title: "Local",
    description:
      "We live here. Our reputation matters to us.",
  },
]

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-6 origin-top-right pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className="reveal opacity-0 relative"
            style={{ animationDelay: "100ms" }}
          >
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="JW Roofing & Construction Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent Card */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-accent text-accent-foreground p-4 md:p-6 rounded-lg shadow-xl">
              <p className="font-serif text-2xl md:text-3xl font-bold">20+</p>
              <p className="text-xs md:text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="reveal opacity-0 text-accent text-sm uppercase tracking-[0.2em] mb-4"
              style={{ animationDelay: "200ms" }}
            >
              About Us
            </p>
            <h2
              className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ animationDelay: "300ms" }}
            >
              A New Company,
              <br />
              Decades of Experience
            </h2>
            <p
              className="reveal opacity-0 text-muted-foreground text-lg leading-relaxed mb-8"
              style={{ animationDelay: "400ms" }}
            >
              JW Roofing & Construction is a new company, but we&apos;re not new to the 
              trade. With over 20 years of hands-on experience in roofing and construction 
              across Texas, we decided it was time to build something of our own here in 
              Lubbock. We&apos;re a licensed General Contractor, fully insured, and ready 
              to earn your trust one roof at a time.
            </p>
            <p
              className="reveal opacity-0 text-muted-foreground leading-relaxed mb-10"
              style={{ animationDelay: "500ms" }}
            >
              We know what the weather here throws at a roof&mdash;hail, wind, 
              heat, and everything in between. That&apos;s why we only use materials and 
              methods that hold up. When you work with us, you&apos;re working with folks 
              who live here and stake our reputation on every job.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="reveal opacity-0 flex gap-4"
                  style={{ animationDelay: `${(index + 6) * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
