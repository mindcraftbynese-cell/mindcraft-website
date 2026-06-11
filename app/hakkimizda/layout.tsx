import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'Neşe Merdinler ve MindCrAfT ekibi hakkında: nörobilim, liderlik ve yapay zeka alanındaki 15+ yıllık deneyim, vizyon ve misyon.',
  openGraph: {
    title: 'Hakkımızda | MindCrAfT',
    description:
      'Neşe Merdinler ve MindCrAfT ekibi hakkında: nörobilim, liderlik ve yapay zeka alanındaki 15+ yıllık deneyim.',
    url: 'https://www.mindcraftbynese.com/hakkimizda',
  },
  alternates: { canonical: 'https://www.mindcraftbynese.com/hakkimizda' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
