import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Referanslar',
  description:
    'Akbank, CarrefourSA, Mercedes-Benz, NVIDIA, Sabancı Üniversitesi ve 50+ kurumla gerçekleştirilen nörobilim temelli dönüşüm projeleri.',
  openGraph: {
    title: 'Referanslar | MindCrAfT',
    description:
      '50+ lider kurumla gerçekleştirilen nörobilim temelli danışmanlık ve eğitim projeleri.',
    url: 'https://www.mindcraftbynese.com/referanslar',
  },
  alternates: { canonical: 'https://www.mindcraftbynese.com/referanslar' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
