import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'TEFÉ INFO | Assistência Técnica de Computadores Online',
  description: 'Assistência técnica especializada para notebooks e desktops. Atendimento remoto via AnyDesk. Limpeza interna, formatação, remoção de vírus, upgrade de SSD e RAM, e muito mais. Seu problema, nossa solução!',
  generator: 'v0.app',
  keywords: ['assistência técnica', 'computadores', 'notebooks', 'desktops', 'manutenção', 'Tefé', 'Amazonas', 'remoto', 'AnyDesk'],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${_geist.variable} ${_geistMono.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
