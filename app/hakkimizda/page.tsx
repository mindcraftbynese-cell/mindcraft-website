'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedStagger, staggerChild } from '@/components/ui/AnimatedSection'
import { useLang } from '@/context/LanguageContext'
import { StarField } from '@/components/StarField'

/* ── Bilingual content ─────────────────────────────────────── */
const CONTENT = {
  tr: {
    hero: {
      badge: 'Hakkımızda',
      h1: 'Sürdürülebilir Kurumsal Zekâlar ve Bilinçli Liderlik İnşası',
      sub: 'Nörobilim temelli yaklaşımlarla organizasyonların zihinsel, duygusal ve kültürel sermayesini güçlendiriyoruz.',
    },
    story: {
      tag: 'Biz Kimiz',
      paras: [
        'Kognitif nörobilim ve nöropsikoloji uzmanı Neşe Merdinler; yaklaşık 10 yıldır yönetim danışmanlığı, konuşmacılık, kurumsal eğitmenlik ve nöro koçluk alanlarında çalışmaktadır. İnsan zihni, organizasyonel sistemler ve teknoloji arasındaki etkileşimi odağına alarak kurumlara insan beynini merkeze alan nöro stratejiler geliştirmektedir.',
        'Yıldız Teknik Üniversitesi Matematik Mühendisliği mezunu olan Neşe Merdinler, kariyerinin ilk 20 yılında gayrimenkul sektöründe ulusal ve uluslararası yatırım şirketlerinde üst düzey yöneticilik yapmıştır. Bu dönem, performansın yalnızca stratejiyle değil, insan beyninin çalışma biçimiyle de doğrudan ilişkili olduğunu fark etmesini sağlamıştır.',
        'Babasının Alzheimer teşhisiyle başlayan ve on yıl süren bakım süreci bu farkındalığı derinleştirmiştir. Beynin hem kırılganlığını hem de dönüşebilirliğini yakından deneyimlediği bu süreç, onu düşünce, duygu ve davranış arasındaki nörobiyolojik mekanizmaları anlamaya yöneltmiştir. 2016 yılında kurumsal kariyerini bırakarak nörobilim, nöroplastisite ve nöropsikoloji alanlarına odaklanmıştır. Cambridge Üniversitesi Kognitif Nörobilim ve Nöropsikoloji programını, NIB Brain-Based Coaching eğitimini tamamlamış; Dr. Gabor Maté ve Dr. Joe Dispenza ile çalışmış ve bu çalışmalarda geliştirdiği metodolojilerini iş dünyasına uygulamaktadır.',
        'Çalışmaları özellikle liderlik, insan kaynakları yönetimi ve yapay zekâ entegrasyonu ekseninde yoğunlaşmaktadır. Şirket kültürü tasarımı, değişim yönetimi ve davranış tasarımı alanlarında farklı sektörlerden birçok kurumla liderlik gelişimi, kültür dönüşümü, teknoloji entegrasyonunda bilişsel adaptasyon ve dijital yetenek geliştirme süreçlerinde iş birlikleri yürütmüştür.',
        'Bugün iş dünyasının en büyük kırılımlarından biri teknolojinin insan zihninden çok daha hızlı gelişmesidir. Neşe Merdinler\'in çalışma alanı tam da bu noktada başlamaktadır: Şirketlerin geleceğini artık yalnızca stratejiler değil, insanların düşünme biçimi, karar mekanizmaları ve zihinsel esnekliği belirlemektedir. Bu nedenle MindCrAfT, kurumlara yalnızca ne yapmaları gerektiğini değil; sürdürülebilir organizasyonlar olabilmeleri için insan beynini merkeze alarak nasıl düşünmeleri gerektiğini göstermektedir.',
      ],
      bookLink: {
        before: 'Neşe Merdinler, Sabancı Üniversitesi EDU Yönetici Geliştirme Birimi eğitim ortağı olarak kurumlara gelişim programları sunmaktadır. Harvard Business Review Türkiye ve HRdergi\'de düzenli yazıları yayımlanmaktadır. Liderlik alanındaki çalışmaları Edu Plus tarafından Leadership Network Awards ile ödüllendirilmiştir. Amazon üzerinden global çapta satışta olan ',
        book:   'The Symbio-Tech Algorithm: HI & AI',
        after:  ' kitabının yazarı ve bir TEDx konuşmacısıdır.',
        linkText: 'Amazon →',
        href:   'https://a.co/d/hwpA4W8',
      },
    },
    vm: {
      tag: 'Vizyon & Misyon',
      vision: {
        label: 'Vizyon',
        text: 'İnsan beyni ve yapay zekâ arasındaki iş birliğini temel alan yeni iş dünyasının dönüşüm mimarisini şekillendirmek.',
      },
      mission: {
        label: 'Misyon',
        text: 'Nörobilim ve yapay zekâdan elde edilen içgörüleri iş dünyasına aktararak; liderlik, insan kaynakları, müşteri deneyimi ve organizasyonel dönüşüm süreçlerini insan beyninin çalışma prensipleriyle yeniden tasarlamak.',
      },
    },
    ecosystem: {
      tag: 'Ekosistemimiz',
      board: {
        tag: 'Danışma Kurulumuz',
        members: [
          {
            img: '/danisman4.jpg',
            name: 'Dr. Justin James Kennedy',
            title: 'TEDx Konuşmacısı | Davranışsal Nörobilim Profesörü | Harvard Nörobilim | Organizasyonel Nörobilim | Doktora Danışmanı | Yönetici Koçu | Yazar | Usta Nöroplastisyen (M.npn)',
          },
          {
            img: '/danisman1.jpg',
            name: 'İnci Abay Cansabuncu',
            title: 'Karar Zekası & İnsan-YZ Uzmanlığı | Değer Önerisi & Platform Stratejisi | Küresel Teknoloji ↔ Organizasyonlar Köprüsü | Liderlik Güçlendirme | Forenzone CEO',
            pos: 'center top',
          },
          {
            img: '/danisman6.jpeg',
            name: 'Arda Öztaşkın',
            title: 'Yapı Kredi Kurumsal İletişim ve Sürdürülebilirlik Direktörü',
          },
          {
            img: '/danisman2.jpg',
            name: 'Metin Usta',
            title: 'İnsan ve Kültür Direktörü | Kapsayıcı ve Dönüşümcü İnsan Stratejisi | Derimod',
            pos: 'center top',
          },
          {
            img: '/danisman3.PNG',
            name: 'Samed Gökçe',
            title: 'Alafaz Kurucusu | TEDx Adana Küratörü | Kültür İnşası, Deneyim Tasarımı, İletişim Güçlendirme',
          },
          {
            img: '/danisman5.jpg',
            name: 'Doğa Deniz Güçlü',
            title: 'Yönetici Ortak, Yapay Zeka Dönüşüm Danışmanlığı - HimerAgile',
          },
        ],
        note: '* Danışma Kurulu üyelerimiz kendi kurumlarında aktif profesyoneller olarak görev yapmaktadır. Bu iş birliği herhangi bir ticari ilişki içermemekte olup; metodolojilerimiz, süreçlerimiz ve yaklaşımlarımız hakkında bağımsız görüş ve geri bildirim sağlamaktadırlar.',
      },
      collab: {
        tag: 'İş Birliği Ekosistemimiz',
        partners: [
          'Sabancı Üniversitesi EDU Yönetici Geliştirme Birimi',
          'Forenzone',
          'HimerAgile AI Transformation Consulting',
          'Alafaz',
          'ActionCoach',
          'Vega Speaker Agency',
          'npnhun – Uniting Experts in Applied Neuroscience',
        ],
      },
    },
    value: {
      tag: 'Değer Teklifimiz',
      cards: [
        {
          title: 'Bilimsel Temel',
          desc:  'Nörobilim, yapay zekâ ve organizasyonel nöropsikolojiyi bir araya getirerek liderlik ve ekiplerin bilişsel yetkinliklerini artıran çözümler.',
        },
        {
          title: 'İnsan Merkezli Strateji',
          desc:  'Bilişsel süreçleri güçlendiren, adaptasyon becerilerini artıran ve dijital yetkinlikleri geliştiren kuruma özel çözümler.',
        },
        {
          title: 'Ölçülebilir Dönüşüm',
          desc:  'Veriye dayalı analizler ve nörobilim tabanlı içgörülerle sürdürülebilir iş modelleri ve sağlıklı çalışma ortamları.',
        },
      ],
    },
  },
  en: {
    hero: {
      badge: 'About Us',
      h1: 'Building Sustainable Corporate Intelligence and Conscious Leadership',
      sub: 'We strengthen the mental, emotional and cultural capital of organizations through neuroscience-based approaches.',
    },
    story: {
      tag: 'Who We Are',
      paras: [
        'Neşe Merdinler, a specialist in cognitive neuroscience and neuropsychology, has been working in management consulting, keynote speaking, corporate training and neuro coaching for approximately 10 years. Focusing on the interaction between the human mind, organizational systems and technology, she develops brain-centered neuro strategies for organizations.',
        'A graduate of Yıldız Technical University in Mathematics Engineering, Neşe Merdinler spent the first 20 years of her career in senior management roles at national and international investment companies in the real estate sector. This period led her to realize that performance is directly related not only to strategy but also to how the human brain works.',
        "Her father's Alzheimer's diagnosis and the ensuing decade of caregiving deepened this awareness. Closely witnessing both the brain's vulnerability and its capacity for transformation directed her to understand the neurobiological mechanisms between thought, emotion and behaviour. In 2016, she left her corporate career to focus on neuroscience, neuroplasticity and neuropsychology. She completed the Cambridge University Cognitive Neuroscience and Neuropsychology programme and NIB Brain-Based Coaching training; worked with Dr. Gabor Maté and Dr. Joe Dispenza, and applies the methodologies she developed through this work to the business world.",
        'Her work focuses particularly on leadership, human resources management and artificial intelligence integration. She has collaborated with many organizations across different sectors in company culture design, change management and behavioural design — covering leadership development, cultural transformation, cognitive adaptation in technology integration and digital talent development.',
        "One of the biggest disruptions in today's business world is technology advancing far faster than the human mind. Neşe Merdinler's field of work begins precisely at this point: the future of companies is no longer determined solely by strategies, but by how people think, their decision mechanisms and mental agility. For this reason, MindCrAfT shows organizations not only what to do, but how to think — placing the human brain at the centre — in order to become sustainable organizations.",
      ],
      bookLink: {
        before: 'Neşe Merdinler is a training partner of Sabancı University EDU Executive Development Unit, offering development programmes to organizations. She publishes regular articles in Harvard Business Review Turkey and HRdergi. Her leadership work has been recognized with the Leadership Network Awards by Edu Plus. She is the author of ',
        book:   'The Symbio-Tech Algorithm: HI & AI',
        after:  ', available globally on Amazon, and a TEDx speaker.',
        linkText: 'Amazon →',
        href:   'https://a.co/d/hwpA4W8',
      },
    },
    vm: {
      tag: 'Vision & Mission',
      vision: {
        label: 'Vision',
        text: 'To shape the transformation architecture of the new business world based on collaboration between the human brain and artificial intelligence.',
      },
      mission: {
        label: 'Mission',
        text: 'To transfer insights from neuroscience and artificial intelligence to the business world; to redesign leadership, human resources, customer experience and organizational transformation processes with the working principles of the human brain.',
      },
    },
    ecosystem: {
      tag: 'Our Ecosystem',
      board: {
        tag: 'Advisory Board',
        members: [
          {
            img: '/danisman4.jpg',
            name: 'Dr. Justin James Kennedy',
            title: 'TEDx Speaker | Professor of Behavioral Neuroscience | Harvard Neuroscience | Organizational Neuroscience | Ph.D. Pracademic Supervisor | Exec. Coach | Author | Master Neuroplastician (M.npn)',
          },
          {
            img: '/danisman1.jpg',
            name: 'İnci Abay Cansabuncu',
            title: 'Decision Intelligence & Human–AI Mastery | Value Proposition & Platform Strategy | Bridge Builder (Global Tech ↔ Organizations) | Leadership Empowerment | Forenzone CEO',
            pos: 'center top',
          },
          {
            img: '/danisman6.jpeg',
            name: 'Arda Öztaşkın',
            title: 'Yapı Kredi Corporate Communications and Sustainability Director',
          },
          {
            img: '/danisman2.jpg',
            name: 'Metin Usta',
            title: 'People and Culture Director | Driving Inclusive and Transformative People Strategy | Derimod',
            pos: 'center top',
          },
          {
            img: '/danisman3.PNG',
            name: 'Samed Gökçe',
            title: 'Founder of Alafaz | TEDx Adana Curator | Building Cultures, Designing Experiences, Empowering Communication',
          },
          {
            img: '/danisman5.jpg',
            name: 'Doğa Deniz Güçlü',
            title: 'Managing Partner, AI Transformation Consulting - HimerAgile',
          },
        ],
        note: '* Our Advisory Board members serve as active professionals within their respective organizations. This collaboration does not involve any commercial relationship; they provide independent opinions and feedback on our methodologies, processes, and approaches.',
      },
      collab: {
        tag: 'Our Collaboration Ecosystem',
        partners: [
          'Sabancı Üniversitesi EDU Yönetici Geliştirme Birimi',
          'Forenzone',
          'HimerAgile AI Transformation Consulting',
          'Alafaz',
          'ActionCoach',
          'Vega Speaker Agency',
          'npnhun – Uniting Experts in Applied Neuroscience',
        ],
      },
    },
    value: {
      tag: 'Our Value Proposition',
      cards: [
        {
          title: 'Scientific Foundation',
          desc:  'Solutions that combine neuroscience, artificial intelligence and organizational neuropsychology to enhance the cognitive competencies of leaders and teams.',
        },
        {
          title: 'Human-Centered Strategy',
          desc:  'Organization-specific solutions that strengthen cognitive processes, enhance adaptability and develop digital competencies.',
        },
        {
          title: 'Measurable Transformation',
          desc:  'Sustainable business models and healthy working environments through data-driven analyses and neuroscience-based insights.',
        },
      ],
    },
  },
} as const

/* ── Member avatar with fallback ──────────────────────────── */
function MemberAvatar({ src, name, pos }: { src: string; name: string; pos?: string }) {
  const [err, setErr] = React.useState(false)
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('')
  if (err) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-blue-900/40 text-blue-300 font-display font-bold text-xl select-none">
        {initials}
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={name}
      fill
      style={{ objectFit: 'cover', objectPosition: pos ?? 'center center' }}
      onError={() => setErr(true)}
    />
  )
}

/* ── Value card icons ──────────────────────────────────────── */
const valueIcons = [
  /* microscope-ish */
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M6 3v10M6 17v4M18 7a6 6 0 0 1-6 6H6M18 7H6M6 13h2a4 4 0 0 0 4-4"/>
    <line x1="8" y1="21" x2="4" y2="21"/>
  </svg>,
  /* user-heart */
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <path d="M16.5 2.5c1.1 0 2 .9 2 2 0 2.2-2.5 4-4.5 5.5-2-1.5-4.5-3.3-4.5-5.5 0-1.1.9-2 2-2 .8 0 1.5.4 2 1 .5-.6 1.2-1 2-1Z"/>
  </svg>,
  /* trending-up */
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>,
]

/* ── Framer variants ───────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
} as const
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
} as const

/* ── Page ──────────────────────────────────────────────────── */
export default function HakkimizdaPage() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <main className="relative">
      <StarField />

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 pb-10"
        style={{ background: 'linear-gradient(135deg, rgba(6,14,26,0.65) 0%, rgba(10,22,40,0.65) 55%, rgba(13,32,64,0.65) 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-50" />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(74,123,167,0.12) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div variants={heroContainer} initial="hidden" animate="show">
            <motion.span variants={fadeUp}
              className="inline-flex items-center text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase border border-blue-400/20 rounded-full px-5 py-2.5 bg-blue-500/5 backdrop-blur-sm mb-10 block w-fit mx-auto"
            >
              — {c.hero.badge}
            </motion.span>

            <motion.h1 variants={fadeUp}
              className="font-display font-bold text-cream mb-7 leading-[1.1]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              {c.hero.h1}
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-slate-400 text-xl leading-relaxed font-light max-w-2xl mx-auto"
            >
              {c.hero.sub}
            </motion.p>

            <motion.div variants={fadeUp} style={{ marginTop: '32px' }}>
              <span className="text-blue-300/60 text-[11px] font-bold tracking-[4px] uppercase block text-center">
                — {c.story.tag} —
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. HİKAYE ════════════════════════════════════════ */}
      <section className="pb-12 pt-0 relative"
        style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.65) 0%, rgba(13,32,64,0.65) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>

            {/* Left: Photo */}
            <AnimatedSection direction="left" className="h-full">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(74,123,167,0.2)',
                  height: '100%',
                  minHeight: '500px',
                }}
              >
                <Image
                  src="/nese.JPG"
                  alt="Neşe Merdinler"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>
            </AnimatedSection>

            {/* Right: Bio */}
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                {c.story.paras.map((para, i) => (
                  <p
                    key={i}
                    className={i === 0 ? 'text-slate-200 font-light' : 'text-slate-400 font-light'}
                    style={{ fontSize: '13.5px', lineHeight: 1.7, marginBottom: '10px' }}
                  >
                    {para}
                  </p>
                ))}
                <p
                  className="text-slate-400 font-light"
                  style={{ fontSize: '13.5px', lineHeight: 1.7, marginBottom: 0 }}
                >
                  {c.story.bookLink.before}
                  <span className="text-cream font-medium italic">{c.story.bookLink.book}</span>
                  <a
                    href={c.story.bookLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 ml-2 px-3 py-0.5 text-[10px] font-bold tracking-[2px] uppercase text-blue-300 border border-blue-400/40 rounded-full hover:bg-blue-400/10 transition-colors duration-200 align-middle"
                  >
                    {c.story.bookLink.linkText}
                  </a>
                  {c.story.bookLink.after}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ 3. VİZYON & MİSYON ══════════════════════════════ */}
      <section className="py-12 relative"
        style={{ background: 'linear-gradient(180deg, rgba(13,32,64,0.65) 0%, rgba(6,14,26,0.65) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-8">
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-4">
              — {c.vm.tag}
            </span>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div variants={staggerChild}
              className="relative rounded-xl p-8 xl:p-10 overflow-hidden group transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(74,123,167,0.12) 0%, rgba(10,22,40,0.8) 100%)',
                border: '1px solid rgba(74,123,167,0.25)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(74,123,167,0.6), transparent)' }}
              />
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                style={{ background: 'rgba(74,123,167,0.2)', border: '1px solid rgba(74,123,167,0.3)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 text-blue-300"
                >
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-cream text-2xl mb-4">{c.vm.vision.label}</h3>
              <p className="text-slate-300 leading-relaxed font-light text-[15px]">{c.vm.vision.text}</p>
            </motion.div>

            {/* Mission */}
            <motion.div variants={staggerChild}
              className="relative rounded-xl p-8 xl:p-10 overflow-hidden group transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(100,60,200,0.08) 0%, rgba(10,22,40,0.8) 100%)',
                border: '1px solid rgba(120,80,220,0.2)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(120,80,220,0.5), transparent)' }}
              />
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                style={{ background: 'rgba(100,60,200,0.15)', border: '1px solid rgba(120,80,220,0.25)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 text-violet-300"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-cream text-2xl mb-4">{c.vm.mission.label}</h3>
              <p className="text-slate-300 leading-relaxed font-light text-[15px]">{c.vm.mission.text}</p>
            </motion.div>
          </AnimatedStagger>
        </div>
      </section>

      {/* ══ 4. EKOSİSTEM ═════════════════════════════════════ */}
      <section className="py-16 relative"
        style={{ background: 'linear-gradient(180deg, rgba(6,14,26,0.65) 0%, rgba(10,22,40,0.65) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(74,123,167,0.09) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">

          {/* -- Danışma Kurulumuz -- */}
          <AnimatedSection className="text-center mb-10">
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-4">
              — {c.ecosystem.board.tag}
            </span>
            <h2 className="font-display font-bold text-cream"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              {c.ecosystem.board.tag}
            </h2>
          </AnimatedSection>

          <AnimatedStagger
            style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', marginBottom: '80px' }}
            staggerDelay={0.1}
          >
            {c.ecosystem.board.members.map((member) => (
              <motion.div key={member.name} variants={staggerChild}
                className="relative flex flex-col items-center text-center rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 group"
                style={{
                  padding: '20px 12px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(10,22,40,0.6) 100%)',
                  border: '1px solid rgba(74,123,167,0.2)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top, rgba(74,123,167,0.12), transparent 65%)' }}
                />
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(74,123,167,0.5), transparent)' }}
                />
                <div
                  className="relative rounded-full overflow-hidden mb-4 flex-shrink-0 mx-auto"
                  style={{
                    width: '80px',
                    height: '80px',
                    border: '2px solid rgba(74,123,167,0.35)',
                    boxShadow: '0 0 20px rgba(74,123,167,0.18)',
                  }}
                >
                  <MemberAvatar
                    src={member.img}
                    name={member.name}
                    pos={'pos' in member ? member.pos as string : undefined}
                  />
                </div>
                <h3 className="relative font-display font-semibold text-cream text-sm mb-2 leading-tight">{member.name}</h3>
                <div className="relative flex flex-col gap-1">
                  {member.title.split(' | ').map((part, i) => (
                    <span key={i} className="text-slate-400 leading-relaxed" style={{ fontSize: '10px' }}>{part}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatedStagger>

          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '760px',
            margin: '-52px auto 80px',
            lineHeight: '1.7',
          }}>
            {c.ecosystem.board.note}
          </p>

          {/* -- İş Birliği Ekosistemimiz -- */}
          <AnimatedSection className="text-center mb-8">
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-4">
              — {c.ecosystem.collab.tag}
            </span>
            <h2 className="font-display font-bold text-cream mb-8"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
            >
              {c.ecosystem.collab.tag}
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {c.ecosystem.collab.partners.map((partner) => (
                <span
                  key={partner}
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-blue-200 transition-all duration-300 hover:text-cream hover:border-blue-400/50 hover:bg-blue-400/10 cursor-default"
                  style={{
                    background: 'rgba(74,123,167,0.08)',
                    border: '1px solid rgba(74,123,167,0.25)',
                  }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ══ 5. DEĞER TEKLİFİ ═════════════════════════════════ */}
      <section className="py-12 relative"
        style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.65) 0%, rgba(13,32,64,0.65) 50%, rgba(6,14,26,0.65) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-8">
            <span className="text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase block mb-4">
              — {c.value.tag}
            </span>
            <h2 className="font-display font-bold text-cream"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              {c.value.tag}
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-3 gap-8">
            {c.value.cards.map((card, i) => (
              <motion.div key={i} variants={staggerChild}
                className="relative rounded-xl p-8 overflow-hidden group transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(10,22,40,0.6) 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(74,123,167,0.5), transparent)' }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{ background: 'radial-gradient(ellipse at top, rgba(74,123,167,0.08), transparent 60%)' }}
                />

                <div
                  className="relative w-11 h-11 rounded-lg flex items-center justify-center mb-6 text-blue-300"
                  style={{
                    background: 'rgba(74,123,167,0.15)',
                    border: '1px solid rgba(74,123,167,0.25)',
                  }}
                >
                  {valueIcons[i]}
                </div>

                <h3 className="relative font-display font-semibold text-cream text-xl mb-4">{card.title}</h3>
                <p className="relative text-slate-400 text-sm leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

    </main>
  )
}
