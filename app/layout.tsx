import './globals.css'
import 'plyr/dist/plyr.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Mili - Software/Web Developer - Portfolio',
  description: 'A portfolio showcasing my software and web development work',
  keywords: 'web development, portfolio, software, coding, programming',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_UK',
    url: 'https://yourwebsite.com',
    title: 'Mili - Software/Web Developer - Portfolio',
    description: 'A portfolio showcasing my software and web development work',
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/iez0mnq.css" />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
