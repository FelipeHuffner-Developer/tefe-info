"use client"

import { Phone, Instagram, MapPin, Power } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato!</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar você. Escolha a melhor forma de contato.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex justify-center gap-6 md:gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
          {/* WhatsApp 1 */}
          <a
            href="https://wa.me/5597984502894"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-green-500/20 transition-colors">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-2xl md:text-3xl font-bold text-primary">(97) 98450-2894</p>
              <Button className="mt-4 md:mt-6 bg-green-500 hover:bg-green-600 text-white">
                Chamar no WhatsApp
              </Button>
            </div>
          </a>
        </div>

        {/* Social & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <a
            href="https://instagram.com/Tefe.Info"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">@Tefe.Info</span>
          </a>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">Tefé - AM (Atendimento 100% Online)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
