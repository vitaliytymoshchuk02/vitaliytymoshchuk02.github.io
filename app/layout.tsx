import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Casino Zonder Cruks | Beste Crypto Casino's Nederland 2025",
  description:
    "Ontdek de beste crypto casino's zonder Cruks registratie. Speel anoniem met Bitcoin, Ethereum en andere cryptocurrencies. Snelle uitbetalingen en eerlijke spellen.",
  keywords: "casino zonder cruks, crypto casino, bitcoin casino, casino zonder registratie, online casino nederland",
  openGraph: {
    title: "Casino Zonder Cruks | Beste Crypto Casino's Nederland 2025",
    description:
      "Ontdek de beste crypto casino's zonder Cruks registratie. Speel anoniem met Bitcoin, Ethereum en andere cryptocurrencies.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
