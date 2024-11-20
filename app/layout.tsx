import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Nav/Navbar'
import { QueryProvider } from '@/providers/QueryProvider'
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Meal planner',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <QueryProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] bg-slate-100 text-neutral-900`}
          >
            <Navbar />
            {children}
          </body>
        </QueryProvider>
      </ClerkProvider>
    </html>
  )
}
