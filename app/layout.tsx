import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'JW Roofing & Construction',
  description: 'Licensed General Contractor serving Lubbock and surrounding communities. Residential roofing, repairs, storm damage, and construction. 20+ years experience. Free estimates.',
  keywords: ['roofing', 'construction', 'roof repair', 'hail damage', 'storm damage', 'residential roofing', 'Lubbock roofing', 'Lubbock contractor'],
}

export const viewport: Viewport = {
  themeColor: '#2d3748',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
