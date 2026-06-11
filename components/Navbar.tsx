'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang, Lang } from '@/context/LanguageContext'

const NAV_LINKS = [
  { href: '/',           tr: 'Ana Sayfa',  en: 'Home'        },
  { href: '/hakkimizda', tr: 'Hakkımızda', en: 'About'      },
  { href: '/hizmetler',  tr: 'Hizmetler',  en: 'Services'   },
  { href: '/referanslar',tr: 'Referanslar', en: 'References' },
  { href: '/galeri',     tr: 'Galeri',      en: 'Gallery'    },
  { href: '/iletisim',   tr: 'İletişim',    en: 'Contact'    },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()
  const pathname = usePathname()

  const isHeroPage = pathname === '/'
  const isDark     = isHeroPage && !scrolled   // white text on dark hero

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 55)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-[1600px] mx-auto px-8 lg:px-16 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Logo" style={{ height: 48, width: 'auto' }} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[11px] font-bold tracking-[2px] uppercase transition-colors duration-300
                    ${active
                      ? 'text-blue-600'
                      : isDark
                        ? 'text-cream/70 hover:text-cream'
                        : 'text-slate-500 hover:text-navy-900'
                    }`}
                >
                  {lang === 'tr' ? link.tr : link.en}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="h-px bg-blue-600 mt-0.5"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3 lg:gap-4">

          {/* Language toggle */}
          <div
            className={`flex rounded-sm overflow-hidden border transition-colors duration-300
              ${isDark ? 'border-white/20' : 'border-slate-200'}`}
          >
            {(['tr', 'en'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-[10px] font-bold tracking-[2px] uppercase transition-all duration-300
                  ${lang === l
                    ? 'bg-blue-600 text-white'
                    : isDark
                      ? 'text-white/50 hover:text-white/80'
                      : 'text-slate-400 hover:text-navy-900'
                  }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA (desktop) */}
          <Link
            href="/iletisim"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold tracking-[2px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {lang === 'tr' ? 'İletişim' : 'Contact'}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className={`lg:hidden flex flex-col gap-[5px] p-2 transition-colors
              ${isDark ? 'text-cream' : 'text-navy-900'}`}
          >
            <span className={`block w-[22px] h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl"
          >
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-6 py-4 text-sm font-semibold tracking-wide border-b border-slate-50 transition-colors
                  ${pathname === link.href ? 'text-blue-600' : 'text-slate-600 hover:text-navy-900'}`}
              >
                {lang === 'tr' ? link.tr : link.en}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Link
                href="/iletisim"
                className="flex items-center justify-center w-full py-3 bg-blue-600 text-white text-sm font-bold tracking-wider rounded-sm"
              >
                {lang === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
