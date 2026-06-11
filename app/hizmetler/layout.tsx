import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Nörobilim temelli danışmanlık, nöro strateji tasarımı, konuşmacılık, kurumsal eğitim ve nöro koçluk hizmetleri. C-level liderler ve İK profesyonelleri için.',
  openGraph: {
    title: 'Hizmetler | MindCrAfT',
    description:
      'Nörobilim temelli danışmanlık, nöro strateji tasarımı, konuşmacılık, kurumsal eğitim ve nöro koçluk hizmetleri.',
    url: 'https://www.mindcraftbynese.com/hizmetler',
  },
  alternates: { canonical: 'https://www.mindcraftbynese.com/hizmetler' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
