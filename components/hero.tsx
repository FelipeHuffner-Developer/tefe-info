"use client"

import { useState } from "react"
import { Power, ArrowRight, Home, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVideoLoading, setIsVideoLoading] = useState(true)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Logo Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="text-foreground">TEFÉ</span>
                  <span className="text-primary inline-flex items-center">
                    INF
                    <Power className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 inline-block -ml-1" />
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground italic">
                Seu problema, <span className="text-primary font-medium">nossa solução!</span>
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight text-pretty">
                Soluções completas para seu computador!
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                Assistência técnica especializada com qualidade, agilidade e confiança que você pode contar.
              </p>
            </div>

            {/* Service Types */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Manutenção Física</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Buscamos seu equipamento a domicílio para diagnóstico e execução do serviço
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Suporte Remoto</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Problemas de sistema e software resolvemos via acesso remoto sem sair de casa
                  </p>
                </div>
              </div>
            </div>

           

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 md:pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Atendimento a Domicílio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm text-muted-foreground">Acesso Remoto</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm text-muted-foreground">Notebooks & Desktops</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 bg-card aspect-video">
              {/* Loading State - Power Icon Inspired */}
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-card z-20">
                  <div className="relative">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 w-20 h-20 border-4 border-primary/20 rounded-full" />
                    <div className="w-20 h-20 border-4 border-transparent border-t-primary rounded-full animate-spin" />
                    {/* Power icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Power className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp-Video-2026-05-13-at-18.38.38-R3Wm663aEFL5HbmAxypes1wdhZmCx3.webm"
                autoPlay
                loop
                muted
                playsInline
                onCanPlay={() => setIsVideoLoading(false)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoading ? "opacity-0" : "opacity-100"}`}
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
