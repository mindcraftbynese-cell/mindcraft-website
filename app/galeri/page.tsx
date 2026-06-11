'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

/* ── Photo data ────────────────────────────────────────────── */
type Cat = 'konusmalar' | 'kurumsal' | 'basin'

const PHOTOS: { src: string; label: { tr: string; en: string }; cat: Cat }[] = [
  // Konuşmalar
  { src: '/galeri/konusmalar/akbank1.jpeg',           label: { tr: 'Akbank',                       en: 'Akbank'                      }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/akbank2.jpeg',           label: { tr: 'Akbank',                       en: 'Akbank'                      }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/Denizbank.jpg',          label: { tr: 'Denizbank',                    en: 'Denizbank'                   }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/HRDergi.jpeg',           label: { tr: 'HRdergi',                      en: 'HRdergi'                     }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/Joint Idea.jpg',         label: { tr: 'Join+idea',                    en: 'Join+idea'                   }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/Sürdürülebilirlik.jpg',  label: { tr: 'Sürdürülebilirlik Konferansı', en: 'Sustainability Conference'   }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/TED.jpeg',               label: { tr: 'TEDx Adana Women',             en: 'TEDx Adana Women'            }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/TLG.JPG',                label: { tr: 'TLG',                          en: 'TLG'                         }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/YTÜ.jpg',                label: { tr: 'Yıldız Teknik Üniversitesi',   en: 'Yıldız Technical University' }, cat: 'konusmalar' },
  { src: '/galeri/konusmalar/YZ Zirvesi.jpeg',        label: { tr: 'Yapay Zeka Zirvesi',           en: 'AI Summit'                   }, cat: 'konusmalar' },
  // Kurumsal
  { src: '/galeri/kurumsal/Carrefour 1.jpg',          label: { tr: 'CarrefourSA',                  en: 'CarrefourSA'                 }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/Carrefour 2.jpg',          label: { tr: 'CarrefourSA',                  en: 'CarrefourSA'                 }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/Carrefour 3.jpg',          label: { tr: 'CarrefourSA',                  en: 'CarrefourSA'                 }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/Derimod.jpeg',             label: { tr: 'Derimod',                      en: 'Derimod'                     }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/HPE 1.jpg',                label: { tr: 'Hewlett Packard Enterprise',   en: 'Hewlett Packard Enterprise'  }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/Mercedes.jpg',             label: { tr: 'Mercedes-Benz',                en: 'Mercedes-Benz'               }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/Nurol Teknoloji.jpg',      label: { tr: 'Nurol Teknoloji',              en: 'Nurol Teknoloji'             }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/Nurol İnşaat.jpeg',         label: { tr: 'Nurol İnşaat',                 en: 'Nurol İnşaat'                }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/NurolBank.jpg',            label: { tr: 'NurolBank',                    en: 'NurolBank'                   }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/TSKB.jpeg',                label: { tr: 'TSKB',                         en: 'TSKB'                        }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/Çalık.jpeg',               label: { tr: 'Çalık Holding',                en: 'Çalık Holding'               }, cat: 'kurumsal' },
  { src: '/galeri/kurumsal/ÇEİS.jpeg',                label: { tr: 'ÇEİS',                         en: 'ÇEİS'                        }, cat: 'kurumsal' },
  // Basın
  { src: '/galeri/basin/Bloomberg 1.jpg',             label: { tr: 'Bloomberg HT',                 en: 'Bloomberg HT'                }, cat: 'basin' },
  { src: '/galeri/basin/Bloomberg 2.jpg',             label: { tr: 'Bloomberg HT',                 en: 'Bloomberg HT'                }, cat: 'basin' },
]

type Filter = 'all' | Cat

const FILTERS: { key: Filter; tr: string; en: string }[] = [
  { key: 'all',        tr: 'Tümü',       en: 'All'       },
  { key: 'konusmalar', tr: 'Konuşmalar', en: 'Speeches'  },
  { key: 'kurumsal',   tr: 'Kurumsal',   en: 'Corporate' },
  { key: 'basin',      tr: 'Basın',      en: 'Press'     },
]

const fromUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Page ──────────────────────────────────────────────────── */
export default function GaleriPage() {
  const { lang } = useLang()
  const [active, setActive]   = useState<Filter>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'all' ? PHOTOS : PHOTOS.filter(p => p.cat === active)

  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length])
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next])

  /* close lightbox when filter changes */
  useEffect(() => { setLightbox(null) }, [active])

  return (
    <main className="relative">

      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section
        className="relative z-[1] flex items-center overflow-hidden"
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(160deg,rgba(6,14,26,0.72) 0%,rgba(10,22,40,0.68) 55%,rgba(13,31,60,0.72) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-50" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(74,123,167,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 py-28 w-full text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
          >
            <motion.div variants={fromUp} className="mb-8">
              <span className="inline-flex items-center text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase border border-blue-400/20 rounded-full px-5 py-2.5 bg-blue-500/5 backdrop-blur-sm">
                — {lang === 'tr' ? 'Galeri' : 'Gallery'}
              </span>
            </motion.div>

            <motion.h1
              variants={fromUp}
              className="font-display font-bold text-cream tracking-tight leading-[1.08] mb-7"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)' }}
            >
              {lang === 'tr' ? 'Sahneden Kareler' : 'Moments from the Stage'}
            </motion.h1>

            <motion.p variants={fromUp} className="text-slate-300 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              {lang === 'tr'
                ? 'Konferanslar, kurumsal eğitimler ve medya çalışmalarından seçkiler.'
                : 'Highlights from conferences, corporate training and media work.'}
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-slate-500/80 to-transparent"
          />
        </div>
      </section>

      {/* ══ GRID ═════════════════════════════════════════════ */}
      <section
        className="py-16 relative z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(6,14,26,0.78) 0%, rgba(10,22,40,0.82) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">

          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {FILTERS.map(f => {
              const count = f.key === 'all' ? PHOTOS.length : PHOTOS.filter(p => p.cat === f.key).length
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`px-5 py-2.5 text-[11px] font-bold tracking-[2px] uppercase rounded-full border transition-all duration-300 ${
                    active === f.key
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_4px_20px_rgba(74,123,167,0.4)]'
                      : 'border-blue-400/20 text-blue-300/60 hover:border-blue-400/50 hover:text-blue-300/90 bg-transparent'
                  }`}
                >
                  {lang === 'tr' ? f.tr : f.en}
                  <span className="ml-1.5 opacity-50">({count})</span>
                </button>
              )
            })}
          </AnimatedSection>

          {/* Photo grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightbox(i)}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                  style={{ border: '1px solid rgba(74,123,167,0.15)' }}
                >
                  <Image
                    src={encodeURI(photo.src)}
                    alt={photo.label[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-semibold leading-tight">{photo.label[lang]}</p>
                    <p className="text-blue-300/70 text-[10px] font-bold tracking-[2px] uppercase mt-0.5">
                      {FILTERS.find(f => f.key === photo.cat)?.[lang] ?? photo.cat}
                    </p>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══ LIGHTBOX ═════════════════════════════════════════ */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={encodeURI(filtered[lightbox].src)}
                  alt={filtered[lightbox].label[lang]}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-cream font-semibold text-base">{filtered[lightbox].label[lang]}</p>
                <p className="text-blue-300/60 text-[10px] font-bold tracking-[2px] uppercase mt-1">
                  {FILTERS.find(f => f.key === filtered[lightbox].cat)?.[lang]}
                </p>
                <p className="text-slate-600 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
              </div>

              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                aria-label="Kapat"
                className="absolute -top-3 -right-3 w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white text-xl leading-none transition-colors"
              >
                ×
              </button>

              {/* Prev */}
              {filtered.length > 1 && (
                <button
                  onClick={prev}
                  aria-label="Önceki"
                  className="absolute left-2 top-[calc(50%-2.5rem)] -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white text-2xl leading-none transition-colors"
                >
                  ‹
                </button>
              )}

              {/* Next */}
              {filtered.length > 1 && (
                <button
                  onClick={next}
                  aria-label="Sonraki"
                  className="absolute right-2 top-[calc(50%-2.5rem)] -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white text-2xl leading-none transition-colors"
                >
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
