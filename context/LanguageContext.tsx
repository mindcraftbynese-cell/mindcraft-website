'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'tr' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextType>({ lang: 'tr', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('tr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('noro_lang') as Lang | null
    if (saved === 'tr' || saved === 'en') setLangState(saved)
    setMounted(true)
  }, [])

  // Suppress SSR/CSR mismatch: render with 'tr' on server, hydrate silently
  if (!mounted) {
    return (
      <LangContext.Provider value={{ lang: 'tr', setLang: () => {} }}>
        {children}
      </LangContext.Provider>
    )
  }

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('noro_lang', l)
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
