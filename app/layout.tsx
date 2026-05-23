import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DJ Samu Academy | Tecnificación de Voleibol",
  description:
    "5 días de tecnificación avanzada de voleibol por posiciones. Del 27 al 31 de julio. Jugadores y jugadoras +16 años.",
  openGraph: {
    title: "DJ Samu Academy | Tecnificación de Voleibol",
    description:
      "5 días de tecnificación avanzada por posiciones. 27-31 Julio.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-white bg-[#0a0a0a] antialiased">
        {children}
      </body>
    </html>
  )
}
