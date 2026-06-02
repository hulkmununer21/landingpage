import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blue Horizon - B2B Global Raw Materials Platform',
  description: 'Connect with global suppliers and buyers for raw materials. B2B platform linking Africa, Asia, and South America. Expert consultancy services.',
  keywords: ['B2B', 'raw materials', 'global trade', 'supply chain', 'consultancy', 'Africa', 'Asia', 'South America'],
  authors: [{ name: 'Blue Horizon' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bluehorizonco.com',
    title: 'Blue Horizon - B2B Global Raw Materials Platform',
    description: 'B2B platform connecting global suppliers and buyers for raw materials',
    images: [
      {
        url: 'https://bluehorizonco.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
