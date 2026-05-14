"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5597981153927"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full" />
    </a>
  )
}
