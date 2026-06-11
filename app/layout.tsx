import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { StarField } from '@/components/StarField'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const SITE_URL = 'https://www.mindcraftbynese.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MindCrAfT | Nörobilim Temelli Danışmanlık & Nöro Strateji Tasarımı',
    template: '%s | MindCrAfT',
  },
  description:
    'Beyin bilimi ve yapay zeka ile iş dünyasının dönüşüm mimarisini tasarlıyoruz. Liderlik, İK ve AI dönüşümü için nörobilim temelli danışmanlık.',
  keywords: [
    'nörobilim', 'liderlik', 'nöro koçluk', 'kurumsal eğitim', 'danışmanlık',
    'yapay zeka', 'nöro strateji', 'organizasyonel dönüşüm', 'Neşe Merdinler',
  ],
  authors: [{ name: 'Neşe Merdinler', url: SITE_URL }],
  creator: 'MindCrAfT by Neşe Merdinler',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'MindCrAfT',
    title: 'MindCrAfT | Nörobilim Temelli Danışmanlık & Nöro Strateji Tasarımı',
    description:
      'Beyin bilimi ve yapay zeka ile iş dünyasının dönüşüm mimarisini tasarlıyoruz. Liderlik, İK ve AI dönüşümü için nörobilim temelli danışmanlık.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MindCrAfT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindCrAfT | Nörobilim Temelli Danışmanlık & Nöro Strateji Tasarımı',
    description:
      'Beyin bilimi ve yapay zeka ile iş dünyasının dönüşüm mimarisini tasarlıyoruz.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <StarField />
          <div className="relative z-[1] flex flex-col flex-1">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
