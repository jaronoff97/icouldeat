import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ehicouldeat',
  description: 'my fun food blog ;)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div
          id="page-top-spacer"
          className="h-12 from-transparent to-neutral-800"
        ></div>
        {children}
        <div id="page-bottom-spacer" className="h-16"></div>
      </body>
    </html>
  )
}
