"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Phone, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span
                className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                JW
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}
              >
                Roofing & Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:opacity-100 ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+18067878316"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(806) 787-8316</span>
            </a>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contact">Free Estimate</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={
                  isScrolled
                    ? "text-foreground"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-card p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation links and contact information</SheetDescription>
              <div className="flex flex-col h-full">
                {/* Logo in mobile menu */}
                <div className="mb-8 pt-2">
                  <span className="font-serif text-xl font-bold text-foreground">JW</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-2">
                    Roofing
                  </span>
                </div>
                
                <div className="flex flex-col gap-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-auto pb-4 flex flex-col gap-4">
                  <a
                    href="tel:+18067878316"
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(806) 787-8316</span>
                  </a>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="#contact" onClick={() => setIsOpen(false)}>Free Estimate</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
