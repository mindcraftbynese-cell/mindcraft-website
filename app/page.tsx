'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { NedenBiz } from '@/components/sections/NedenBiz'
import { NasilCalisiyoruz } from '@/components/sections/NasilCalisiyoruz'

/* ── Bilingual content ──────────────────────────────────── */
const CONTENT = {
  tr: {
    badge: 'Nörobilim  ×  Yapay Zeka  ×  Liderlik  ×  İnsan Kaynakları',
    headLines: [
      'Yapay Zeka Çağında',
      'Beyin Bilimi ile İş Dünyasının',
      'Dönüşüm Mimarisini Tasarlıyoruz.',
    ],
    sub: 'C-level liderler ve İK profesyonelleri için nörobilim temelli danışmanlık, konuşmacılık, kurumsal eğitim ve nörokoçluk.',
    cta1: 'Hizmetleri Keşfet',
    cta2: 'İletişime Geçin',
    scroll: 'Aşağı Kaydırın',
    stats: [
      { num: '15+',  label: 'Yıl Deneyim'          },
      { num: '50+',  label: 'Kurumsal Müşteri'       },
      { num: '10K+', label: 'Eğitilen Profesyonel'  },
    ],
  },
  en: {
    badge: 'Neuroscience  ×  Artificial Intelligence  ×  Leadership  ×  Human Resources',
    headLines: [
      'In the Age of AI',
      'Brain Science & Business',
      'Transformation Architecture.',
    ],
    sub: 'Neuroscience-based consulting, keynote speaking, corporate training and coaching for C-level leaders and HR professionals.',
    cta1: 'Explore Services',
    cta2: 'Get in Touch',
    scroll: 'Scroll Down',
    stats: [
      { num: '15+',  label: 'Years Experience'       },
      { num: '50+',  label: 'Corporate Clients'       },
      { num: '10K+', label: 'Trained Professionals'  },
    ],
  },
} as const

/* ── Framer Motion variants ─────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}


/* ── Page ───────────────────────────────────────────────── */
export default function HeroPage() {
  const { lang } = useLang()
  const c        = CONTENT[lang]
  const heroRef  = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <>
    <main ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">

      {/* Dot-grid texture */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      {/* Gradient layers */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: parallaxY }}>
        <div className="absolute inset-0 opacity-55" style={{ background: 'linear-gradient(135deg, #060E1A 0%, #0A1628 50%, #0D2040 100%)' }} />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-navy-950 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_55%] gap-6 xl:gap-8 items-center min-h-[80vh]">

          {/* LEFT: text */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8 lg:mb-10">
              <span className="inline-flex items-center text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase border border-blue-400/20 rounded-full px-5 py-2.5 bg-blue-500/5 backdrop-blur-sm">
                {c.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-8 lg:mb-10">
              {(c.headLines as readonly string[]).map((line, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className={`block font-display font-bold tracking-tight leading-[1.08]
                    ${i === 2 ? 'italic bg-clip-text text-transparent' : 'text-cream'}`}
                  style={{
                    fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)',
                    ...(i === 2 ? { backgroundImage: 'linear-gradient(135deg, #7FB9D7 0%, #4A7BA7 65%)' } : {}),
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10 lg:mb-12 font-light"
            >
              {c.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14 lg:mb-16">
              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold tracking-[2.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,123,167,0.4)]"
              >
                {c.cta1}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white/75 hover:text-white hover:border-white/40 text-[12px] font-bold tracking-[2.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1"
              >
                {c.cta2}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10"
            >
              {c.stats.map((stat, i) => (
                <div key={i}>
                  <div
                    className="font-display font-bold text-cream mb-1.5"
                    style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-slate-500 text-[11px] font-bold tracking-[2px] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Hero video */}
          <motion.div
            className="hidden lg:block relative self-stretch"
            style={{ marginTop: '-7rem', marginBottom: '-6rem', marginRight: '-4rem' }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full block"
              style={{ objectFit: 'cover' }}
            >
              <source src="/Hero_animasyon.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay — fades video edges into page background */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 75% 78% at 52% 50%, transparent 38%, #0A1628 74%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-slate-600 text-[9px] tracking-[3px] uppercase font-bold">{c.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-slate-600/80 to-transparent"
        />
      </div>
    </main>
    <NedenBiz />
    <NasilCalisiyoruz />
    </>
  )
}
