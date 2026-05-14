"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Power } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-black text-foreground tracking-tight">TEFÉ</span>
            <span className="text-xl md:text-2xl font-black text-primary tracking-tight flex items-center">
              INF
              <Power className="w-5 h-5 md:w-6 md:h-6 inline-block -ml-0.5" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("diferenciais")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
