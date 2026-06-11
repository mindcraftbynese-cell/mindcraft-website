import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'MindCrAfT gizlilik politikası ve kişisel verilerin korunmasına ilişkin bilgiler.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.mindcraftbynese.com/gizlilik' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
