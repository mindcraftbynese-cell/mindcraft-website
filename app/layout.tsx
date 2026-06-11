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

export const metadata: Metadata = {
  title: 'NöroLider | Nörobilim Temelli Danışmanlık',
  description:
    'C-level liderler ve İK profesyonelleri için nörobilim temelli danışmanlık, konuşmacılık, kurumsal eğitim ve nörokoçluk.',
  keywords: 'nörobilim, liderlik, koçluk, kurumsal eğitim, danışmanlık',
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
