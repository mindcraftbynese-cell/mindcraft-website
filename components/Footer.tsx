'use client'

import React from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'

const LINKS = [
  { href: '/',           tr: 'Ana Sayfa',  en: 'Home'        },
  { href: '/hakkimizda', tr: 'Hakkımızda', en: 'About'      },
  { href: '/hizmetler',  tr: 'Hizmetler',  en: 'Services'   },
  { href: '/referanslar',tr: 'Referanslar', en: 'References' },
  { href: '/galeri',     tr: 'Galeri',      en: 'Gallery'    },
  { href: '/iletisim',   tr: 'İletişim',    en: 'Contact'    },
]

const SERVICES = [
  { tr: 'Nörobilim Temelli Danışmanlık & Nöro Strateji Tasarımı', en: 'Neuroscience-Based Consulting & Neuro Strategy Design' },
  { tr: 'Konuşmacılık',           en: 'Keynote Speaking'        },
  { tr: 'Kurumsal Eğitim',         en: 'Corporate Training'      },
  { tr: 'Nöro Koçluk',             en: 'Neuro Coaching'          },
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
    </svg>
  )
}

type Social =
  | { label: 'LinkedIn' | 'YouTube'; href: string; Icon: () => React.ReactElement; hoverColor: string }
  | { label: 'Instagram'; href: string; Icon: () => React.ReactElement }

const SOCIALS: Social[] = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ne%C5%9Fe-merdinler-0641ab241/', Icon: LinkedInIcon,  hoverColor: '#0A66C2' },
  { label: 'Instagram', href: 'https://www.instagram.com/nesemerdinler?igsh=ZmRiNjg3MTl0ZnE3&utm_source=qr', Icon: InstagramIcon },
  { label: 'YouTube',   href: 'https://www.youtube.com/@NeseMerdinler', Icon: YouTubeIcon,   hoverColor: '#FF0000' },
]

export function Footer() {
  const { lang } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="text-cream" style={{ backgroundColor: 'rgba(6,8,14,0.65)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-xl font-bold tracking-wide">
              MindCr<span className="text-blue-400">AfT</span>
              <span className="block text-slate-500 font-sans font-light text-xs tracking-[2px] uppercase mt-1">
                by Neşe Merdinler
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mt-4 max-w-sm">
              {lang === 'tr'
                ? 'Nörobilim araştırmalarını iş dünyasına taşıyarak organizasyonel dönüşümü bilimsel temellere oturtuyoruz.'
                : 'Building organizational transformation on scientific foundations by integrating neuroscience into business.'}
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => {
                if (s.label === 'Instagram') {
                  return (
                    <a
                      key="Instagram"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="group relative w-10 h-10 border border-slate-700 rounded-sm flex items-center justify-center text-white overflow-hidden transition-all duration-300 hover:border-transparent"
                    >
                      <span
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
                      />
                      <span className="relative z-10"><s.Icon /></span>
                    </a>
                  )
                }
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group w-10 h-10 border border-slate-700 rounded-sm flex items-center justify-center text-white transition-all duration-300"
                    style={{ ['--hover-color' as string]: s.hoverColor }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = s.hoverColor; (e.currentTarget as HTMLElement).style.borderColor = s.hoverColor + '80' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = ''; (e.currentTarget as HTMLElement).style.borderColor = '' }}
                  >
                    <s.Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[3px] uppercase text-slate-500 mb-6">
              {lang === 'tr' ? 'Sayfalar' : 'Pages'}
            </h4>
            <ul className="space-y-3">
              {LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {lang === 'tr' ? l.tr : l.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[3px] uppercase text-slate-500 mb-6">
              {lang === 'tr' ? 'Hizmetler' : 'Services'}
            </h4>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.tr}>
                  <Link href="/hizmetler" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {lang === 'tr' ? s.tr : s.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs tracking-wide">
            © {year} MindCrAfT by Neşe Merdinler.{' '}
            {lang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-6">
            <Link href="/gizlilik" className="text-slate-600 hover:text-slate-400 text-xs tracking-wide transition-colors">
              {lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </Link>
            <Link href="/kullanim-kosullari" className="text-slate-600 hover:text-slate-400 text-xs tracking-wide transition-colors">
              {lang === 'tr' ? 'Kullanım Koşulları' : 'Terms of Use'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
