'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { AnimatedSection, AnimatedStagger, staggerChild } from '@/components/ui/AnimatedSection'

/* ── Framer variants ───────────────────────────────────────── */
const fromUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Clients (alphabetical) ────────────────────────────────── */
const CLIENTS = [
  { name: 'Aareal Bank Group',            src: '/logo-aareal.png' },
  { name: 'ActionCoach',                  src: '/logo-actioncoach.png' },
  { name: 'Akbank Teknoloji',             src: '/logo-akbank.png' },
  { name: 'Alarko Holding',               src: '/logo-alarko.png' },
  { name: 'BAU',                          src: '/logo-bau.png' },
  { name: 'Bilim Virüsü',                 src: '/logo-bilimvirusu.png' },
  { name: 'Bosch Rexroth',               src: '/logo-bosch.jpg' },
  { name: 'BThaber',                      src: '/logo-bthaber.jpg' },
  { name: 'CarrefourSA',                  src: '/logo-carrefour.png' },
  { name: 'Coca-Cola İçecek',             src: '/logo-cocacola.png' },
  { name: 'Çalık Holding',               src: '/logo-calik.jpg' },
  { name: 'ÇEIS',                         src: '/logo-ceis.jpg' },
  { name: 'Derimod',                      src: '/logo-derimod.webp' },
  { name: 'Doğan',                        src: '/logo-dogan.jpg' },
  { name: 'Eczacıbaşı',                  src: '/logo-eczacibasi.png' },
  { name: 'EduPlus',                      src: '/logo-eduplus.jpg' },
  { name: 'Forenzone',                    src: '/logo-forenzone.png' },
  { name: 'Harvard Business Review TR',   src: '/logo-hbr.webp' },
  { name: 'Hewlett Packard Enterprise',   src: '/logo-hpe.png' },
  { name: 'HRdergi',                      src: '/logo-hrdergi.png' },
  { name: 'İSO Akademi',                  src: '/logo-iso.jpg' },
  { name: 'İstanbul Şişli Rotary',       src: '/logo-sislirotary.png' },
  { name: 'JCI Beşiktaş',                src: '/logo-jci.png' },
  { name: 'Join+idea',                    src: '/logo-joinidea.jpg' },
  { name: 'Kordsa',                       src: '/logo-kordsa.png' },
  { name: "L'Oréal Türkiye",             src: '/logo-loreal.png' },
  { name: 'Mercedes-Benz',               src: '/logo-mercedes.png' },
  { name: 'Nurol İnşaat',                src: '/logo-nurolinsat.png' },
  { name: 'Nurol Teknoloji',             src: '/nurolteknoloji.png' },
  { name: 'NurolBank',                   src: '/logo-nurolbank.jpeg' },
  { name: 'NVIDIA',                       src: '/logo-nvidia.png' },
  { name: 'Ray Sigorta',                  src: '/logo-ray.png' },
  { name: 'Sabancı Üniversitesi',         src: '/sabanciun_logo.png' },
  { name: 'Sabancı Üniversitesi EDU',    src: '/sabanci.png' },
  { name: 'TEDx Adana Women',            src: '/TED.png' },
  { name: 'TSKB',                         src: '/logo-tskb.jpg' },
  { name: 'Viennalife',                   src: '/logo-viennalife.png' },
  { name: 'Yapı Kredi',                  src: '/logo-yapikredi.png' },
  { name: 'Yeditepe Üniversitesi',       src: '/logo-yeditepe.png' },
  { name: 'Yenibirlider Derneği',        src: '/logo-yenibirlider.png' },
  { name: 'Zorlu',                        src: '/logo-zorlu.png' },
]

/* ── Bilingual content ─────────────────────────────────────── */
const CONTENT = {
  tr: {
    hero: {
      badge: 'Referanslar',
      h1: 'Birlikte Yarattığımız Etki',
      sub: 'Farklı sektörlerden lider kurumlarla yürüttüğümüz çalışmalar, nörobilim temelli dönüşümün iş dünyasındaki izlerini taşıyor.',
    },
    clients: {
      tag: 'Birlikte Çalıştığımız Kurumlar',
      title: 'Birlikte Çalıştığımız Kurumlar',
    },
    media: {
      tag: 'Medya & Basın',
      title: 'Medya & Basın',
      cards: [
        {
          icon: 'hbr',
          title: 'Harvard Business Review Türkiye',
          text: 'Liderlik, nörobilim ve yapay zeka üzerine düzenli yazılar',
          cta: 'Yazıları İncele →',
          href: 'https://hbrturkiye.com/yazar/nese-merdinler',
        },
        {
          icon: 'hr',
          title: 'HRdergi',
          text: 'İnsan kaynakları ve organizasyonel dönüşüm üzerine düzenli yazılar',
          cta: 'Yazıları İncele →',
          href: 'https://hrdergi.com/yazar-nese-merdinler',
        },
        {
          icon: 'bloomberg',
          title: 'Bloomberg HT — İşte Ezber Bozanlar',
          text: "Neşe Merdinler'in KOBİ'lerde liderlik üzerine nörobilimsel perspektiften değerlendirmeleri.",
          cta: 'İzle →',
          href: 'https://www.youtube.com/watch?v=jE9Eh61LAVc&t=18s',
        },
        {
          icon: 'bloomberg',
          title: 'Bloomberg HT — Yapay Zeka Merkezi',
          text: 'Neşe Merdinler ile Nörobilim Perspektifinden Yapay Zeka Üzerine Röportaj.',
          cta: 'İzle →',
          href: 'https://www.youtube.com/watch?v=srBBFdf1FVE&t=264s',
        },
        {
          icon: 'youtube',
          title: 'YouTube Kanalı',
          text: 'Nörobilim, liderlik ve yapay zeka üzerine içerikler.',
          cta: 'Kanala Git →',
          href: 'https://www.youtube.com/@NeseMerdinler',
        },
      ],
    },
    awards: {
      tag: 'Ödüllerimiz',
      title: 'Ödüllerimiz',
      items: [
        {
          img: '/odul1.jpg',
          title: 'Leadership Awards, 2025',
          desc: "EduPlus Consulting'in 22. yılını kutladığı Davos Leadership Network & Awards organizasyonunda, kurucumuz Neşe Merdinler'in keynote konuşmasının ardından MindCrAfT ekibine Leadership Awards ödülü takdim edildi. Bu ödül, insan ve teknoloji etkileşimini geleceğe taşıyan liderlik tasarımı hizmetlerimizle elde ettiğimiz değerli bir takdir niteliğindedir.",
        },
        {
          img: '/odul2.jpg',
          title: 'Toplum Liderleri Geliyor Ödülü, 2022',
          desc: '2021-2023 yılları arasında Yeditepe Üniversitesi Eğitim Fakültesi öğrencilerine yönelik düzenlenen ve Şişli Rotary Kulübü tarafından organize edilen Toplum Gönüllüleri Geliyor projesinin hem program içerik koordinasyonu hem de gönüllü eğitmen organizasyonu hizmetimiz nedeniyle aldığımız ödül.',
        },
        {
          img: '/odul3.jpg',
          title: '40. Yıl Hizmet Ödülü, 2021',
          desc: "Şişli Rotary Kulübü'nün kuruluşunun 40. yılı vesilesiyle birlikte yaptığımız projeler için MindCrAfT ekibine verilen teşekkür ödülü.",
        },
      ],
    },
    cta: {
      title: 'Siz de Bu Dönüşümün Parçası Olun',
      sub: 'Kurumunuza özel nöro strateji tasarımı için görüşelim.',
      btn: 'Görüşme Planla →',
    },
  },
  en: {
    hero: {
      badge: 'References',
      h1: 'The Impact We Created Together',
      sub: 'The work we have carried out with leading organizations from different sectors bears the marks of neuroscience-based transformation in the business world.',
    },
    clients: {
      tag: 'Organizations We Work With',
      title: 'Organizations We Work With',
    },
    media: {
      tag: 'Media & Press',
      title: 'Media & Press',
      cards: [
        {
          icon: 'hbr',
          title: 'Harvard Business Review Türkiye',
          text: 'Regular articles on leadership, neuroscience and artificial intelligence',
          cta: 'Read Articles →',
          href: 'https://hbrturkiye.com/yazar/nese-merdinler',
        },
        {
          icon: 'hr',
          title: 'HRdergi',
          text: 'Regular articles on human resources and organizational transformation',
          cta: 'Read Articles →',
          href: 'https://hrdergi.com/yazar-nese-merdinler',
        },
        {
          icon: 'bloomberg',
          title: 'Bloomberg HT — Breaking the Mold',
          text: "Neşe Merdinler's neuroscientific perspective on leadership in SMEs.",
          cta: 'Watch →',
          href: 'https://www.youtube.com/watch?v=jE9Eh61LAVc&t=18s',
        },
        {
          icon: 'bloomberg',
          title: 'Bloomberg HT — AI Center',
          text: 'An interview with Neşe Merdinler on Artificial Intelligence from a Neuroscience Perspective.',
          cta: 'Watch →',
          href: 'https://www.youtube.com/watch?v=srBBFdf1FVE&t=264s',
        },
        {
          icon: 'youtube',
          title: 'YouTube Channel',
          text: 'Content on neuroscience, leadership and artificial intelligence.',
          cta: 'Visit Channel →',
          href: 'https://www.youtube.com/@NeseMerdinler',
        },
      ],
    },
    awards: {
      tag: 'Our Awards',
      title: 'Our Awards',
      items: [
        {
          img: '/odul1.jpg',
          title: 'Leadership Awards, 2025',
          desc: "At the Davos Leadership Network & Awards event celebrating EduPlus Consulting's 22nd anniversary, the MindCrAfT team was presented with the Leadership Awards following founder Neşe Merdinler's keynote speech. This award represents a valuable recognition achieved through our leadership design services that carry the human-technology interaction into the future.",
        },
        {
          img: '/odul2.jpg',
          title: 'Community Leaders Are Coming Award, 2022',
          desc: 'An award received for both the program content coordination and volunteer trainer organization services of the Community Volunteers Are Coming project organized by Şişli Rotary Club for Yeditepe University Faculty of Education students between 2021 and 2023.',
        },
        {
          img: '/odul3.jpg',
          title: '40th Anniversary Service Award, 2021',
          desc: "A certificate of appreciation presented to the MindCrAfT team for projects carried out together on the occasion of the 40th anniversary of the founding of Şişli Rotary Club.",
        },
      ],
    },
    cta: {
      title: 'Be Part of This Transformation',
      sub: 'Let us meet to design a neuro strategy tailored to your organization.',
      btn: 'Schedule a Meeting →',
    },
  },
} as const

/* ── Logo card — 3D hover ──────────────────────────────────── */
function LogoCard({ name, src }: { name: string; src: string }) {
  const [imgFailed, setImgFailed] = useState(false)
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      variants={staggerChild}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: '#ffffff',
        borderRadius: '8px',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.2)'}`,
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        minHeight: '110px',
        cursor: 'default',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 8px 16px rgba(0,0,0,0.15), 0 16px 40px rgba(0,0,0,0.2), 6px 6px 0px rgba(201,168,76,0.45)'
          : '0 4px 6px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.15), 4px 4px 0px rgba(201,168,76,0.3)',
        transform: hovered ? 'translateY(-4px) scale(1.03)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s ease',
      }}
    >
      {!imgFailed && (
        <img
          src={src}
          alt={name}
          onError={() => setImgFailed(true)}
          style={{ maxWidth: '100%', maxHeight: '80px', minHeight: '50px', objectFit: 'contain' }}
        />
      )}
      <span style={{
        color: 'rgba(20,40,70,0.65)',
        fontSize: '10px',
        fontWeight: 600,
        textAlign: 'center',
        letterSpacing: '0.03em',
        lineHeight: 1.35,
      }}>
        {name}
      </span>
    </motion.div>
  )
}

/* ── Media icon ────────────────────────────────────────────── */
function MediaIcon({ icon }: { icon: string }) {
  const base: React.CSSProperties = {
    width: '52px', height: '52px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }
  if (icon === 'youtube') return (
    <div style={{ ...base, background: 'rgba(255,0,0,0.12)', border: '1px solid rgba(255,0,0,0.3)' }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </div>
  )
  if (icon === 'bloomberg') return (
    <div style={{ ...base, background: 'rgba(255,102,0,0.12)', border: '1px solid rgba(255,102,0,0.3)' }}>
      <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF6600', letterSpacing: '0.04em' }}>BHT</span>
    </div>
  )
  if (icon === 'hbr') return (
    <div style={{ ...base, background: 'rgba(185,28,28,0.12)', border: '1px solid rgba(185,28,28,0.3)' }}>
      <span style={{ fontSize: '12px', fontWeight: 800, color: '#ef4444', letterSpacing: '0.04em' }}>HBR</span>
    </div>
  )
  return (
    <div style={{ ...base, background: 'linear-gradient(135deg, rgba(74,123,167,0.25) 0%, rgba(139,92,246,0.2) 100%)', border: '1px solid rgba(74,123,167,0.3)' }}>
      <span style={{ fontSize: '12px', fontWeight: 800, color: '#7FB9D7', letterSpacing: '0.05em' }}>HR</span>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────── */
export default function ReferanslarPage() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <main className="relative">
      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section
        className="relative z-[1] flex items-center overflow-hidden"
        style={{
          minHeight: '60vh',
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
                — {c.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fromUp}
              className="font-display font-bold text-cream tracking-tight leading-[1.08] mb-7"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)' }}
            >
              {c.hero.h1}
            </motion.h1>

            <motion.p
              variants={fromUp}
              className="text-slate-300 text-lg leading-relaxed font-light max-w-2xl mx-auto"
            >
              {c.hero.sub}
            </motion.p>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-slate-500/80 to-transparent"
          />
        </div>
      </section>

      {/* ══ 2. KURUMLAR ══════════════════════════════════════ */}
      <section
        className="py-20 relative z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(6,14,26,0.78) 0%, rgba(10,22,40,0.78) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-4">
              — {c.clients.tag}
            </span>
            <h2
              className="font-display font-bold text-cream"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              {c.clients.title}
            </h2>
          </AnimatedSection>

          <AnimatedStagger
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))',
              gap: '14px',
              perspective: '1000px',
            }}
            staggerDelay={0.04}
          >
            {CLIENTS.map((client) => (
              <LogoCard key={client.name} name={client.name} src={client.src} />
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ══ 3. MEDYA & BASIN ═════════════════════════════════ */}
      <section
        className="py-20 relative z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.78) 0%, rgba(13,32,64,0.78) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-25" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(74,123,167,0.07) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-4">
              — {c.media.tag}
            </span>
            <h2
              className="font-display font-bold text-cream"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              {c.media.title}
            </h2>
          </AnimatedSection>

          <AnimatedStagger
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
            staggerDelay={0.1}
          >
            {c.media.cards.map((card) => (
              <motion.div
                key={card.title}
                variants={staggerChild}
                className="relative rounded-xl overflow-hidden group transition-all duration-500 hover:-translate-y-1"
                style={{
                  padding: '32px',
                  background: 'linear-gradient(145deg, rgba(74,123,167,0.1) 0%, rgba(10,22,40,0.8) 100%)',
                  border: '1px solid rgba(74,123,167,0.22)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(74,123,167,0.6), transparent)' }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top, rgba(74,123,167,0.1), transparent 65%)' }}
                />

                <div className="relative flex items-start gap-4 mb-5">
                  <MediaIcon icon={card.icon} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-cream text-base leading-snug">{card.title}</h3>
                  </div>
                </div>

                <p className="relative text-slate-300 text-sm leading-relaxed font-light mb-6 flex-1">{card.text}</p>

                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 text-blue-300 text-[11px] font-bold tracking-[2px] uppercase hover:text-blue-200 transition-colors duration-200"
                >
                  {card.cta}
                </a>
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ══ 4. ÖDÜLLER ═══════════════════════════════════════ */}
      <section
        className="py-20 relative z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(13,32,64,0.78) 0%, rgba(6,14,26,0.78) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-25" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-4">
              — {c.awards.tag}
            </span>
            <h2
              className="font-display font-bold text-cream"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              {c.awards.title}
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-8">
            {c.awards.items.map((award, i) => (
              <AnimatedSection key={award.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <div
                  className="relative rounded-xl overflow-hidden group transition-all duration-500 hover:-translate-y-1"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '280px 1fr',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(10,22,40,0.7) 100%)',
                    border: '1px solid rgba(74,123,167,0.2)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(74,123,167,0.5), transparent)' }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at left, rgba(74,123,167,0.08), transparent 65%)' }}
                  />

                  {/* Fotoğraf */}
                  <div className="relative" style={{ minHeight: '220px' }}>
                    <Image
                      src={award.img}
                      alt={award.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* İçerik */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <span className="text-blue-400 text-[10px] font-bold tracking-[3px] uppercase block mb-3">
                      — {c.awards.tag}
                    </span>
                    <h3
                      className="font-display font-bold text-cream mb-4 leading-tight"
                      style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
                    >
                      {award.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {award.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. CTA ═══════════════════════════════════════════ */}
      <section
        className="py-24 relative z-[1] overflow-hidden"
        style={{ background: 'linear-gradient(160deg, rgba(6,14,26,0.82) 0%, rgba(13,31,60,0.82) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(74,123,167,0.1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(74,123,167,0.4), transparent)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <AnimatedSection>
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-8">
              — MindCrAfT
            </span>
            <h2
              className="font-display font-bold text-cream leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {c.cta.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light mb-10 max-w-xl mx-auto">
              {c.cta.sub}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2.5 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold tracking-[2.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,123,167,0.4)]"
            >
              {c.cta.btn}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
