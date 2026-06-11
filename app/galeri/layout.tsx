import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Galeri',
  description:
    'Konferanslar, kurumsal eğitimler, TEDx ve medya çalışmalarından fotoğraflar. MindCrAfT sahneden kareler.',
  openGraph: {
    title: 'Galeri | MindCrAfT',
    description:
      'Konferanslar, kurumsal eğitimler, TEDx ve medya çalışmalarından fotoğraflar.',
    url: 'https://www.mindcraftbynese.com/galeri',
  },
  alternates: { canonical: 'https://www.mindcraftbynese.com/galeri' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
