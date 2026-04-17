import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bus Service Fee Calculator',
  description: 'Find the right plan for your children\'s commute.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 relative z-0`}>
        {children}
      </body>
    </html>
  )
}
