'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'

const CONTENT = {
  tr: {
    tag: 'Süreç',
    heading: 'Nasıl Çalışırız?',
    steps: [
      {
        num: '01',
        title: 'Keşif',
        desc: 'Kurumun görünmeyen insan dinamiklerini, karar mekanizmalarını ve dönüşüm engellerini ortaya çıkarıyoruz.',
      },
      {
        num: '02',
        title: 'Nöro Strateji Tasarımı',
        desc: 'Beyin bilimi ve yapay zekâ içgörüleriyle kuruma özel dönüşüm mimarisini tasarlıyoruz.',
      },
      {
        num: '03',
        title: 'Uygulama',
        desc: 'Stratejiyi davranışa, süreçlere ve iş sonuçlarına dönüştürüyoruz.',
      },
      {
        num: '04',
        title: 'Takip',
        desc: 'Etkiyi ölçüyor, öğreniyor ve dönüşümü kalıcı hale getiriyoruz.',
      },
    ],
  },
  en: {
    tag: 'Process',
    heading: 'How We Work',
    steps: [
      {
        num: '01',
        title: 'Discovery',
        desc: "We uncover the organization's hidden human dynamics, decision mechanisms, and transformation barriers.",
      },
      {
        num: '02',
        title: 'Neuro Strategy Design',
        desc: 'We design a custom transformation architecture using brain science and AI insights.',
      },
      {
        num: '03',
        title: 'Implementation',
        desc: 'We transform strategy into behaviors, processes, and business outcomes.',
      },
      {
        num: '04',
        title: 'Follow-Up',
        desc: 'We measure impact, learn, and make transformation permanent.',
      },
    ],
  },
} as const

const NUM_GRADIENT = {
  background: 'linear-gradient(135deg, #4A7BA7 0%, #7C3AED 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export function NasilCalisiyoruz() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'rgba(8,14,28,0.72)' }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20"
        >
          <span className="text-blue-400 text-[11px] font-bold tracking-[4px] uppercase block mb-5">
            — {c.tag}
          </span>
          <h2
            className="font-display font-bold text-cream"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)' }}
          >
            {c.heading}
          </h2>
        </motion.div>

        {/* Animated timeline track (desktop) */}
        <div className="hidden lg:block relative h-[2px] mb-14">
          {/* Background track */}
          <div className="absolute inset-0 bg-white/5 rounded-full" />
          {/* Animated fill */}
          <motion.div
            className="absolute inset-y-0 left-0 w-full rounded-full origin-left"
            style={{ background: 'linear-gradient(90deg, #4A7BA7 0%, #7C3AED 50%, #4A7BA7 100%)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
          />
          {/* Animated glow pulse on fill */}
          <motion.div
            className="absolute inset-y-0 left-0 w-full rounded-full origin-left"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)', filter: 'blur(4px)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
          />
          {/* Step dots */}
          <div className="absolute inset-0 flex items-center justify-between">
            {c.steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="w-4 h-4 rounded-full border-2 border-blue-400 bg-navy-900"
                style={{ boxShadow: '0 0 12px rgba(74,123,167,0.8)' }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.3, type: 'spring', stiffness: 280, damping: 18 }}
              />
            ))}
          </div>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {c.steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.18,
                ease: 'easeOut',
              }}
              className="flex flex-col"
            >
              {/* Mobile connector */}
              <div className="lg:hidden flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full border-2 border-blue-400 bg-navy-900 shrink-0"
                     style={{ boxShadow: '0 0 8px rgba(74,123,167,0.7)' }} />
                {i < c.steps.length - 1 && (
                  <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, #4A7BA7, #7C3AED)' }} />
                )}
              </div>

              {/* Number */}
              <span
                className="font-display font-bold leading-none block mb-5 select-none"
                style={{
                  fontSize: 'clamp(3.2rem, 5vw, 5rem)',
                  ...NUM_GRADIENT,
                }}
              >
                {step.num}
              </span>

              {/* Divider */}
              <div className="w-8 h-[2px] mb-5 rounded-full"
                   style={{ background: 'linear-gradient(90deg, #4A7BA7, #7C3AED)' }} />

              <h3 className="text-cream font-bold text-lg mb-3 leading-snug">{step.title}</h3>
              <p className="text-cream/55 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
