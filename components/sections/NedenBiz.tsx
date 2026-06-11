'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { AnimatedSection, AnimatedStagger, staggerChild } from '@/components/ui/AnimatedSection'

/* ── Icons ──────────────────────────────────────────────── */
function IconAcademic() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      <path d="M2 8v7" />
      <path d="M6 10.5v5A6 6 0 0018 15.5v-5" />
    </svg>
  )
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-3 3-4.5 5.7-4.5 9s1.5 6 4.5 9c3-3 4.5-5.7 4.5-9s-1.5-6-4.5-9z" />
      <path d="M3.6 9h16.8M3.6 15h16.8" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconMic() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="9" y="3" width="6" height="10" rx="3" />
      <path d="M5 11a7 7 0 0014 0" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  )
}

/* ── Content ─────────────────────────────────────────────── */
const CONTENT = {
  tr: {
    tag: 'Neden Biz?',
    h2a: 'Bilimi Pratiğe,',
    h2b: 'Pratiği Sonuca Dönüştürüyoruz.',
    cards: [
      {
        icon: 'academic' as const,
        title: 'Akademik Temel',
        desc: 'Cambridge Üniversitesi Kognitif Nörobilim ve Nöropsikoloji eğitimi, Neuroscience Institute for Business Brain Based Coaching sertifikası.',
        accent: 'blue',
      },
      {
        icon: 'globe' as const,
        title: 'Dünya Standartlarında Uzmanlık',
        desc: 'Joe Dispenza ve Gabor Maté metodolojileriyle zenginleştirilmiş, dünya liderlerinin güvendiği nörobilim yaklaşımları.',
        accent: 'indigo',
      },
      {
        icon: 'shield' as const,
        title: '10+ Yıl Kanıtlanmış Deneyim',
        desc: 'C-level liderler ve İK profesyonelleriyle onlarca kurumda uygulanmış, sonuç odaklı danışmanlık deneyimi.',
        accent: 'blue',
      },
      {
        icon: 'target' as const,
        title: 'Ölçülebilir Metodoloji',
        desc: 'Nörobilim temelli, kolay uygulanabilir ve somut olarak ölçülebilir dönüşüm metodolojileri.',
        accent: 'violet',
      },
      {
        icon: 'mic' as const,
        title: 'Kurumsal Dünyadan Gelen Ses',
        desc: '20 yıl kurumsal hayatta üst düzey yöneticilik yapan bir isim olarak teoriyi değil, bizzat yaşananı aktarıyoruz.',
        accent: 'indigo',
      },
    ],
    quote: 'MindCrAfT, 20 yıllık kurumsal liderlik deneyimi ile nörobilim uzmanlığını bir araya getiriyor. Çünkü gerçek dönüşüm, salonun her iki tarafını da yaşamış biri tarafından tasarlanır.',
    quoteAttr: 'Neşe Merdinler — Kurucu',
  },
  en: {
    tag: 'Why Us?',
    h2a: 'Turning Science into Practice,',
    h2b: 'Practice into Results.',
    cards: [
      {
        icon: 'academic' as const,
        title: 'Academic Foundation',
        desc: 'Cambridge University Cognitive Neuroscience and Neuropsychology education, Neuroscience Institute for Business Brain Based Coaching certification.',
        accent: 'blue',
      },
      {
        icon: 'globe' as const,
        title: 'World-Class Expertise',
        desc: 'Enriched with Joe Dispenza and Gabor Maté methodologies — neuroscience approaches trusted by global leaders.',
        accent: 'indigo',
      },
      {
        icon: 'shield' as const,
        title: '10+ Years Proven Experience',
        desc: 'Results-driven consulting experience applied across dozens of organizations with C-level leaders and HR professionals.',
        accent: 'blue',
      },
      {
        icon: 'target' as const,
        title: 'Measurable Methodology',
        desc: 'Neuroscience-based transformation methodologies that are easy to apply and concretely measurable.',
        accent: 'violet',
      },
      {
        icon: 'mic' as const,
        title: 'A Voice from the Corporate World',
        desc: 'As a senior executive in the corporate world for 20 years, we share lived experience — not theory.',
        accent: 'indigo',
      },
    ],
    quote: 'MindCrAfT brings together 20 years of corporate leadership experience and neuroscience expertise. Because real transformation is designed by someone who has lived both sides of the room.',
    quoteAttr: 'Neşe Merdinler — Founder',
  },
} as const

type Accent = 'blue' | 'indigo' | 'violet'
type IconKey = 'academic' | 'globe' | 'shield' | 'target' | 'mic'

const ICON_MAP: Record<IconKey, React.ReactNode> = {
  academic: <IconAcademic />,
  globe:    <IconGlobe />,
  shield:   <IconShield />,
  target:   <IconTarget />,
  mic:      <IconMic />,
}

const ACCENT_STYLES: Record<Accent, { bg: string; text: string; border: string }> = {
  blue:   { bg: 'bg-blue-600/15',   text: 'text-blue-400',   border: 'hover:border-blue-500/50'   },
  indigo: { bg: 'bg-indigo-600/15', text: 'text-indigo-400', border: 'hover:border-indigo-500/50' },
  violet: { bg: 'bg-violet-600/15', text: 'text-violet-400', border: 'hover:border-violet-500/50' },
}

/* ── Component ───────────────────────────────────────────── */
export function NedenBiz() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section>
      {/* ── Cards area ─────────────────────────────── */}
      <div className="pt-24 lg:pt-32 pb-14 lg:pb-16" style={{ backgroundColor: 'rgba(10,22,40,0.65)' }}>
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">

          {/* Header */}
          <AnimatedSection className="mb-16 lg:mb-20">
            <span className="text-blue-400 text-[11px] font-bold tracking-[4px] uppercase block mb-5">
              — {c.tag}
            </span>
            <h2
              className="font-display font-bold tracking-tight leading-[1.08] text-cream"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)' }}
            >
              {c.h2a}<br />
              <span className="italic" style={{ backgroundImage: 'linear-gradient(135deg,#7FB9D7 0%,#4A7BA7 65%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {c.h2b}
              </span>
            </h2>
          </AnimatedSection>

          {/* 5 Cards */}
          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {c.cards.map((card, i) => {
              const ac = ACCENT_STYLES[card.accent as Accent]
              return (
                <motion.div
                  key={i}
                  variants={staggerChild}
                  className={`group rounded-sm border border-navy-700/60 p-7 flex flex-col gap-5 transition-all duration-300 ${ac.border} hover:shadow-[0_0_40px_rgba(74,123,167,0.08)] hover:-translate-y-1`}
                  style={{ backgroundColor: 'rgba(13,32,64,0.55)' }}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center shrink-0 ${ac.bg} ${ac.text}`}>
                    {ICON_MAP[card.icon as IconKey]}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-cream font-semibold text-sm leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedStagger>

          {/* Quote */}
          <AnimatedSection className="mt-8 pt-6 border-t border-white/5 max-w-3xl mx-auto text-center">
            <p
              className="font-display italic mb-5"
              style={{ fontSize: 'clamp(0.8rem,1.1vw,1rem)', lineHeight: 1.6, color: 'rgba(237,232,220,0.75)' }}
            >
              {c.quote}
            </p>
            <div className="w-6 h-px mx-auto mb-3" style={{ backgroundColor: 'rgba(74,123,167,0.35)' }} />
            <p
              className="font-sans font-light tracking-[1.5px]"
              style={{ fontSize: '0.65rem', color: 'rgba(100,116,139,0.85)' }}
            >
              {c.quoteAttr}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
