import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'MindCrAfT web sitesi kullanım koşulları ve hizmet şartları.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.mindcraftbynese.com/kullanim-kosullari' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
