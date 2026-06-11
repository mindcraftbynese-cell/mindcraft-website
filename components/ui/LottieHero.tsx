'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false, loading: () => null })

const ANIM_URL = 'https://assets2.lottiefiles.com/packages/lf20_uw1wv8mi.json'

export function LottieHero() {
  const [data, setData] = useState<object | null>(null)

  useEffect(() => {
    fetch(ANIM_URL)
      .then(r => r.json())
      .then(d => setData(d))
      .catch(() => {})
  }, [])

  if (!data) return <div className="w-full h-full" />

  return (
    <Lottie
      animationData={data}
      loop
      autoplay
      style={{ width: '100%', height: '100%' }}
    />
  )
}
