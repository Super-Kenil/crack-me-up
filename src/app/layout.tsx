import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import type { ReactNode } from 'react'

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata  = {
  title: 'Crack Me Up',
  description: 'Laugh out loud, read jokes online',
  authors: {
    url: 'https://superkenil.com/',
    name: 'Super-Kenil'
  }
}

export default function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-gray-200 dark:bg-gray-800 dark:text-white antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
