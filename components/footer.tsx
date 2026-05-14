import { Power } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Brands */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-xs md:text-sm">Atendemos Notebooks e Desktops</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="text-muted-foreground text-xs md:text-sm font-medium">Windows</span>
            <span className="text-muted-foreground text-xs md:text-sm font-medium">Intel</span>
            <span className="text-muted-foreground text-xs md:text-sm font-medium">AMD</span>
            <span className="text-muted-foreground text-xs md:text-sm font-medium">Apple</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6 md:my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-lg md:text-xl font-black text-foreground tracking-tight">TEFÉ</span>
            <span className="text-lg md:text-xl font-black text-primary tracking-tight flex items-center">
              INF
              <Power className="w-4 h-4 md:w-5 md:h-5 inline-block -ml-0.5" />
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} TEFÉ INFO. Todos os direitos reservados.
          </p>

          {/* Slogan */}
          <p className="text-xs md:text-sm text-muted-foreground italic">
            Seu problema, <span className="text-primary">nossa solução!</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
