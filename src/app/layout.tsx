import type { Metadata } from 'next'
import { Assistant, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lawgorithm | משפט × בינה מלאכותית',
    template: '%s | Lawgorithm',
  },
  description:
    'Lawgorithm – ייעוץ משפטי-טכנולוגי בבינה מלאכותית לסטודנטים, מתמחים ויזמים בישראל.',
  keywords: [
    'legal tech',
    'AI',
    'law',
    'Hebrew',
    'ייעוץ משפטי',
    'בינה מלאכותית',
    'לגלטק',
    'ישראל',
  ],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'Lawgorithm',
  },
  metadataBase: new URL('https://lawgorithm.co.il'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${playfair.variable} ${assistant.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
