'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useLang } from '@/context/LanguageContext'

const CONTENT = {
  tr: {
    tag: 'İletişim',
    h1: 'Dönüşümünüze\nBugün Başlayın',
    sub: 'Keşif görüşmesi için bize ulaşın.',
    fields: { name: 'Ad Soyad', company: 'Şirket', email: 'E-Posta', service: 'Hizmet', message: 'Mesajınız', phone: 'Telefon', address: 'Adres', social: 'Sosyal Medya' },
    services: ['Nörobilim Temelli Danışmanlık & Nöro Strateji Tasarımı', 'Konuşmacılık', 'Kurumsal Eğitim', 'Nöro Koçluk'],
    placeholder: { name: 'Ad Soyad', company: 'Şirket Adı', email: 'ornek@sirket.com', message: 'Projeniz hakkında bilgi verin...' },
    submit: 'Mesaj Gönder',
    submitted: 'Mesajınız Alındı ✓',
    info: {
      email: 'info@mindcraftbynese.com',
      phone: '+90 (212) 318 01 07',
      address: 'Gayrettepe Mahallesi, Yıldız Posta Caddesi, Akın Sitesi 2.Blok N:8/13 Beşiktaş, İstanbul',
    },
  },
  en: {
    tag: 'Contact',
    h1: 'Start Your\nTransformation Today',
    sub: 'Reach out for a discovery call.',
    fields: { name: 'Full Name', company: 'Company', email: 'Email', service: 'Service', message: 'Message', phone: 'Phone', address: 'Address', social: 'Social Media' },
    services: ['Neuroscience-Based Consulting & Neuro Strategy Design', 'Keynote Speaking', 'Corporate Training', 'Neuro Coaching'],
    placeholder: { name: 'Full Name', company: 'Company Name', email: 'hello@company.com', message: 'Tell us about your project...' },
    submit: 'Send Message',
    submitted: 'Message Received ✓',
    info: {
      email: 'info@mindcraftbynese.com',
      phone: '+90 (212) 318 01 07',
      address: 'Gayrettepe Mahallesi, Yıldız Posta Caddesi, Akın Sitesi 2.Blok N:8/13 Beşiktaş, İstanbul',
    },
  },
} as const

const fromUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
} as const

export default function IletisimPage() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const lines = c.h1.split('\n')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
   const formData = new FormData(e.target as HTMLFormElement)
    await fetch('https://formspree.io/f/xjgdpbre', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <main className="relative">

      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section
        className="relative z-[1] flex items-center overflow-hidden"
        style={{
          minHeight: '44vh',
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
                — {c.tag}
              </span>
            </motion.div>

            <motion.h1
              variants={fromUp}
              className="font-display font-bold text-cream tracking-tight leading-[1.08] mb-7"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)' }}
            >
              {lines.map((l, i) => <span key={i} className="block">{l}</span>)}
            </motion.h1>

            <motion.p variants={fromUp} className="text-slate-300 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              {c.sub}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTENT ══════════════════════════════════════════ */}
      <section
        className="py-20 relative z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(6,14,26,0.82) 0%, rgba(10,22,40,0.88) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-25" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(74,123,167,0.4), transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">

            {/* ── Contact info ── */}
            <AnimatedSection direction="left" className="space-y-8 pt-2">

              {[
                {
                  label: c.fields.email,
                  value: c.info.email,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden>
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  ),
                },
                {
                  label: c.fields.phone,
                  value: c.info.phone,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                },
                {
                  label: c.fields.address,
                  value: c.info.address,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden>
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-300/80 shrink-0"
                    style={{ background: 'rgba(74,123,167,0.12)', border: '1px solid rgba(74,123,167,0.25)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[2px] uppercase text-blue-300/50 mb-1">{item.label}</div>
                    <div className="text-slate-200 text-sm font-medium leading-relaxed">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="pt-6" style={{ borderTop: '1px solid rgba(74,123,167,0.15)' }}>
                <div className="text-[10px] font-bold tracking-[2px] uppercase text-blue-300/50 mb-4">{c.fields.social}</div>
                <div className="flex gap-3">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/ne%C5%9Fe-merdinler-0641ab241/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                     className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-[#0A66C2]"
                     style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#0A66C260' }}
                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/nesemerdinler?igsh=ZmRiNjg3MTl0ZnE3&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                     className="group relative w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 overflow-hidden transition-all duration-300 hover:text-white"
                     style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }} />
                    <span className="relative z-10">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                      </svg>
                    </span>
                  </a>

                  {/* YouTube */}
                  <a href="https://www.youtube.com/@NeseMerdinler" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                     className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-[#FF0000]"
                     style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#FF000050' }}
                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/905333650800" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                     className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-[#25D366]"
                     style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#25D36650' }}
                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  </a>

                </div>
              </div>
            </AnimatedSection>

            {/* ── Form ── */}
            <AnimatedSection direction="right">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={c.fields.name}    name="name"    placeholder={c.placeholder.name}    required />
                  <Field label={c.fields.company} name="company" placeholder={c.placeholder.company} />
                </div>
                <Field label={c.fields.email} name="email" type="email" placeholder={c.placeholder.email} required />

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[2px] uppercase text-blue-300/50">{c.fields.service}</label>
                  <select
                    name="service"
                    className="w-full rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74,123,167,0.2)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(74,123,167,0.6)')}
                    onBlur={e =>  (e.currentTarget.style.borderColor = 'rgba(74,123,167,0.2)')}
                  >
                    <option value="" style={{ background: '#0A1628' }}>—</option>
                    {c.services.map(s => <option key={s} value={s} style={{ background: '#0A1628' }}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-[2px] uppercase text-blue-300/50">{c.fields.message}</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={c.placeholder.message}
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74,123,167,0.2)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(74,123,167,0.6)')}
                    onBlur={e =>  (e.currentTarget.style.borderColor = 'rgba(74,123,167,0.2)')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || submitted}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 text-[11px] font-bold tracking-[2.5px] uppercase rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-500 text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(74,123,167,0.4)]'
                  }`}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    submitted ? c.submitted : c.submit
                  )}
                </motion.button>
              </form>
            </AnimatedSection>

          </div>
        </div>
      </section>

    </main>
  )
}

function Field({
  label, name, type = 'text', placeholder, required = false,
}: {
  label: string; name: string; type?: string; placeholder: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold tracking-[2px] uppercase text-blue-300/50">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74,123,167,0.2)' }}
        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(74,123,167,0.6)')}
        onBlur={e =>  (e.currentTarget.style.borderColor = 'rgba(74,123,167,0.2)')}
      />
    </div>
  )
}
