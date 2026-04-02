"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Roof Replacement",
    location: "South Lubbock",
    description: "Full shingle replacement after hail damage. Insurance claim coordinated from start to finish.",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Metal Roof Installation",
    location: "Levelland",
    description: "Standing seam metal roof on a ranch property. Built for durability.",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "New Construction",
    location: "Wolfforth",
    description: "Tile roof on a custom home build. Coordinated with the builder for a seamless timeline.",
    image: "/images/project-3.jpg",
  },
]

export function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 bg-primary"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="reveal opacity-0 text-accent text-sm uppercase tracking-[0.2em] mb-4"
            style={{ animationDelay: "100ms" }}
          >
            Completed Projects
          </p>
          <h2
            className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight"
            style={{ animationDelay: "200ms" }}
          >
            Recent Work
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal opacity-0 group"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                    {project.title}
                  </h3>
                  <span className="text-primary-foreground/50">—</span>
                  <span className="text-sm text-primary-foreground/70">
                    {project.location}
                  </span>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
