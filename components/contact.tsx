"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Lubbock, TX"],
  },
  {
    icon: Phone,
    title: "Call or Text",
    details: ["(806) 787-8316"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@jwroofinglubbock.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 7am - 6pm", "Sat: By Appointment"],
  },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Thank you! We'll be in touch within 24 hours.")
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <p
              className="reveal opacity-0 text-accent text-sm uppercase tracking-[0.2em] mb-4"
              style={{ animationDelay: "100ms" }}
            >
              Get in Touch
            </p>
            <h2
              className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ animationDelay: "200ms" }}
            >
              Let&apos;s Discuss
              <br />
              Your Project
            </h2>
            <p
              className="reveal opacity-0 text-muted-foreground text-lg leading-relaxed mb-12"
              style={{ animationDelay: "300ms" }}
            >
              We serve Lubbock and the surrounding area. Give us a call or 
              fill out the form for a free estimate&mdash;no pressure, no obligation.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal opacity-0 flex gap-3"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground text-sm mb-0.5">
                      {item.title}
                    </h4>
                    {item.details.map((detail) =>
                      item.title === "Call or Text" ? (
                        <a
                          key={detail}
                          href="tel:+18067878316"
                          className="text-xs text-accent hover:text-accent/80 font-semibold transition-colors truncate block"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p
                          key={detail}
                          className="text-xs text-muted-foreground truncate"
                        >
                          {detail}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="reveal opacity-0 bg-card border border-border rounded-lg p-8 lg:p-10"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Smith"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Service Needed
                </label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">
                      New Roof / Re-Roof
                    </SelectItem>
                    <SelectItem value="repair">Roof Repair</SelectItem>
                    <SelectItem value="storm">Storm / Hail Damage</SelectItem>
                    <SelectItem value="construction">
                      General Construction
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Request
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
