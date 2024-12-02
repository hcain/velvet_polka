import type { Metadata } from 'next'
import { Cinzel, Tangerine } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  weight: '400',
  subsets: ['latin'],
})

export const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Velvet & Polka Dots',
  description: 'A holiday party',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cinzel.className}>{children}</body>
    </html>
  )
}
