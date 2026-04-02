"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone, Twitter } from "lucide-react"

const navigation = {
  services: [
    { name: "Residential Roofing", href: "#services" },
    { name: "Roof Repairs", href: "#services" },
    { name: "Storm Damage", href: "#services" },
    { name: "General Construction", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Licensing", href: "#" },
  ],
}

const social = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-tight text-primary-foreground">
                  JW
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                  Roofing & Construction
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-4 max-w-sm text-sm md:text-base">
              Lubbock-based roofing and construction. 20+ years in the trade,
              licensed General Contractor.
            </p>
            <a
              href="tel:+18067878316"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold mb-6 text-base"
            >
              <Phone className="w-4 h-4" />
              (806) 787-8316
            </a>
            {/* Social Links */}
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} JW Roofing & Construction. All
            rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Licensed General Contractor &bull; Fully Insured &bull; Lubbock, TX
          </p>
        </div>
      </div>
    </footer>
  )
}
