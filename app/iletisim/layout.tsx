import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'MindCrAfT ile iletişime geçin. Keşif görüşmesi için form doldurun veya info@mindcraftbynese.com adresine e-posta gönderin.',
  openGraph: {
    title: 'İletişim | MindCrAfT',
    description:
      'Keşif görüşmesi için iletişime geçin. info@mindcraftbynese.com',
    url: 'https://www.mindcraftbynese.com/iletisim',
  },
  alternates: { canonical: 'https://www.mindcraftbynese.com/iletisim' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
