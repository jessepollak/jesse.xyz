import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import SidebarNav from "./SidebarNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jesse Pollak",
  description: "This is the website of Jesse Pollak.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col md:flex-row w-full px-4 py-6 md:py-12 min-h-screen">
          <SidebarNav />
          <main className="flex-1 flex flex-col items-center justify-start">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
