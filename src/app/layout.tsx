import { Inter } from "next/font/google"
import type { ReactNode } from 'react'

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout ({ children, }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Crack Me Up</title>
        <meta name="description" content="Laugh out loud, read jokes" />
      </head>
      <body className={`bg-gray-100 dark:bg-gray-900 dark:text-white antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
