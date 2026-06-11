'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { AnimatedSection, AnimatedStagger, staggerChild } from '@/components/ui/AnimatedSection'
import { StarField } from '@/components/StarField'

/* ── Icons ──────────────────────────────────────────────── */
function IconBriefcase({ cls = 'w-6 h-6' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  )
}
function IconMic({ cls = 'w-6 h-6' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0014 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  )
}
function IconBook({ cls = 'w-6 h-6' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  )
}
function IconCompass({ cls = 'w-6 h-6' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}
function IconBrain({ cls = 'w-7 h-7' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M9.5 2A5.5 5.5 0 004 7.5v.5a5 5 0 002 4 5 5 0 002 4v2h8v-2a5 5 0 002-4 5 5 0 002-4v-.5A5.5 5.5 0 0014.5 2h-5z" />
      <line x1="12" y1="2" x2="12" y2="18" />
    </svg>
  )
}
function IconZap({ cls = 'w-7 h-7' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
function IconCpu({ cls = 'w-7 h-7' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  )
}
function IconShield({ cls = 'w-7 h-7' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
function IconFeather({ cls = 'w-7 h-7' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  )
}
function IconRefresh({ cls = 'w-7 h-7' }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
function IconYouTube() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

/* ── Static maps ────────────────────────────────────────── */
const CARD_ICONS = [
  <IconBriefcase key="b"  cls="w-5 h-5" />,
  <IconMic       key="m"  cls="w-5 h-5" />,
  <IconBook      key="bk" cls="w-5 h-5" />,
  <IconCompass   key="c"  cls="w-5 h-5" />,
]

const OUTCOME_ICONS = [
  <IconBrain   key="brain"   />,
  <IconZap     key="zap"     />,
  <IconCpu     key="cpu"     />,
  <IconShield  key="shield"  />,
  <IconFeather key="feather" />,
  <IconRefresh key="refresh" />,
]

const TAB_YOUTUBE_URLS = [
  'https://www.youtube.com/watch?v=wdyTPqqFDj0',
  'https://www.youtube.com/watch?v=QOM-YHAc5eA&t=10s',
  'https://www.youtube.com/watch?v=zmJN9EXL_Yc&t=945s',
  'https://www.youtube.com/@ActNeuro',
] as const

/* ── Bilingual content ───────────────────────────────────── */
const CONTENT = {
  tr: {
    /* S1 — Hero */
    heroTitle: 'Organizasyonları optimize etmiyoruz.',
    heroSub:   'İnsan beyni, yapay zeka ve kültürü birlikte çalışan bir kurumsal sinir sistemi olarak yeniden tasarlıyoruz.',
    heroBody:  'NÖRO yaklaşımı; AI, İK, liderlik ve sürdürülebilirlik alanlarını ayrı ayrı geliştirmez. Bu alanların birlikte nasıl düşündüğünü, karar verdiğini ve davrandığını yeniden kurgular.',
    cta1: "Kurumsal Nöro Sistem Mimarisi'ni Keşfet",
    cta2: 'Danışmanlık Görüşmesi Planla',

    /* Modal */
    modalTitle: 'Kurumsal Nöro Sistem Mimarisi',
    modalP1:    'Çoğu organizasyon teknoloji çağının hızına uyumlanmak ve dönüşmek istiyor. Ama dönüşüm genellikle yanlış yerden başlıyor. Yeni bir strateji, yeni bir teknoloji, yeni bir eğitim programı döngüsü ile ilerleniyor. Ancak bu döngüde sadece parçalar güncellenip değişiyor, sistem ve organizasyonel davranış aynı kalıyor.',
    modalP2:    'Oysa gerçek dönüşüm süreçlerde değil, organizasyonun nasıl düşündüğünü ve nasıl davrandığını tasarlamakla başlıyor.',
    modalP3:    'Nöro Sistem Mimarisi yaklaşımımız tam da burada devreye giriyor.',
    modalP4:    'Bu yaklaşımda biz, insan beyninin karar verme, öğrenme, adaptasyon ve davranış üretme mekanizmalarını temel alarak; AI, İK, liderlik ve sürdürülebilirliği ayrı disiplinler olarak değil, birlikte çalışan bir kurumsal sinir sistemi olarak tasarlıyoruz. Yani sürdürülebilir kurumsal zekalar inşa ediyor ve organizasyonunuz için yeni bir işletim sistemi oluşturuyoruz.',
    modalP5:    'İnsan beyninin nörobiyolojik sınırları, kapasitesi ve işleyiş dinamiklerini dikkate almadığımız bir dünyada liderlik, insan kaynakları ve yeteneğin geleceğinden, dolayısıyla kurumsal sürdürülebilirlikten bahsetmemiz artık çok zor. Gelin sizi de insan beynini merkeze alan bir geleceğe taşıyalım.',
    modalCta:   'Tanışalım',

    /* S2 — Problem */
    problemTitle:  'Bugün kurumların çoğu aynı paradoksu yaşıyor',
    problems: [
      'Teknoloji yatırımı artıyor ama adaptasyon düşüyor',
      'Veri çoğalıyor ama karar kalitesi bozuluyor',
      'Eğitimler artıyor ama davranış değişmiyor',
      'Strateji var ama kültür onu taşımıyor',
    ],
    problemBottom: 'Sorun teknoloji değil. Sorun insan davranışıyla sistem tasarımının aynı dili konuşmaması.',

    /* S3 — Paradigm */
    paradigmTitle:  'İki Farklı Yaklaşım',
    tradTitle:  'Geleneksel Yaklaşım',
    tradSteps:  'Süreçleri iyileştir → İnsanları eğit → Teknolojiyi ekle',
    neuroTitle: 'NÖRO Yaklaşım',
    neuroSteps: 'İnsan beynini anla → Davranış sistemini tasarla → Teknoloji ve kültürü birlikte hizala',
    paradigmBottom: 'Bu nedenle dönüşüm artık bir proje değil, bir organizasyon sinir sistemi tasarımıdır.',

    /* S4 — Tabs */
    systemsTitle: '4 Temel Nöro Sistem',
    tabs:        ['NÖRO-AI', 'NÖRO-İK', 'NÖRO-LİDERLİK', 'NÖRO-SÜRDÜRÜLEBİLİRLİK'],
    cardLabels:  ['Danışmanlık', 'Konuşmacılık', 'Eğitim', 'Nöro Koçluk'],
    ytLabel:     "YouTube'da İzle",
    systems: [
      /* NÖRO-AI */
      [
        'Yapay zeka dönüşümünü yalnızca teknoloji perspektifinden değil; insan beyninin öğrenme, karar verme ve adaptasyon mekanizmaları açısından ele alıyoruz. AI dönüşümünün insan stratejisini tasarlıyor, beyin uyumlu teknoloji mimarileri geliştiriyoruz.',
        'Kurumsal etkinliklerde ve liderlik zirvelerinde; insan beyninin karar verme, güven oluşturma ve değişime adaptasyon mekanizmalarına odaklanıyoruz. Her konuşma bilimsel temelli, ilham verici ve uygulanabilir içgörüler sunacak şekilde tasarlanır.',
        'Çalışanların ve liderlerin yapay zekayla daha verimli, bilinçli ve sürdürülebilir şekilde çalışabilmeleri için tasarlanmış programlar. Amaç yalnızca AI kullanabilen çalışanlar değil, AI ile düşünebilen kurumsal zekalar inşa etmektir.',
        'Liderlerin ve profesyonellerin değişen iş dünyasında güçlü kalabilmeleri için nörobilim temelli bireysel gelişim süreçleri. Öğrenme çevikliği, zihinsel esneklik, karar kalitesi ve adaptasyon becerilerini güçlendiriyoruz.',
      ],
      /* NÖRO-İK */
      [
        'İnsan kaynakları süreçlerini yeniden tasarlamaktan çok, organizasyonun kültürel ve bilişsel mimarisini yeniden kurgulamaya odaklanıyoruz. Kültür bir değerler listesi değil; beynin ödül, güven, tehdit algısı ve öğrenme mekanizmaları üzerinden üretilen bir davranış sistemidir.',
        "İK'yı bir destek fonksiyonu olmaktan çıkarıp organizasyonun davranış mimarisini tasarlayan stratejik bir merkez haline getiren konuşmalar. Katılımcılar kültürün görünmez mekanizmalarını keşfeder.",
        'İK ekipleri, liderler ve yöneticiler; süreçleri yönetmekten çok insan davranışını etkileyen görünmez mekanizmaları anlamaya yönlendirilir. Amaç daha fazla süreç öğretmek değil, daha bilinçli organizasyon tasarımcıları yetiştirmektir.',
        'Liderler ve İK profesyonelleri için kültür tasarımı, değişim yönetimi ve organizasyonel karar mimarisi etrafında şekillenen bireysel gelişim süreci. Organizasyonları tasarlayan zihniyetin kendisini dönüştürüyoruz.',
      ],
      /* NÖRO-LİDERLİK */
      [
        'Liderlik gelişimini bireysel beceri setlerinden çıkararak organizasyonun karar alma, kültür üretme ve adaptasyon kapasitesini şekillendiren bir sistem tasarımına dönüştürüyoruz. Yapay zeka çağında liderlik artık yalnızca insanları yönetmek değil; insan davranışı, kültür ve algoritmik karar sistemleri arasında denge kurabilmektir.',
        'Liderliği motivasyon anlatısından çıkararak insan beyninin çalışma prensipleri, yapay zeka etkisi ve organizasyonel davranış mimarisi üzerinden yeniden çerçeveleyen konuşmalar. Liderlik bir pozisyon değil, sistem zekasıdır.',
        'Klasik liderlik programlarından farklı olarak bilgi aktarımına değil, düşünme, algı ve karar verme sistemlerinin dönüşümüne odaklanıyoruz. Daha fazla model bilen değil, daha iyi sistem düşünebilen liderler yetiştiriyoruz.',
        'Liderlerin düşünme biçimlerini, karar alma modellerini ve sistem algılarını dönüştürmeye odaklanan koçluk süreci. Stres altında karar verme, bilişsel yük yönetimi ve zihinsel esneklik alanlarında derinleşiyoruz.',
      ],
      /* NÖRO-SÜRDÜRÜLEBİLİRLİK */
      [
        'Sürdürülebilirliği yalnızca çevresel hedefler değil, organizasyonun karar verme, davranış üretme ve alışkanlık oluşturma kapasitesi olarak ele alıyoruz. Amaç, sürdürülebilirliği bir hedef değil, organizasyon sisteminin doğal çalışma biçimi haline getirmektir.',
        'Sürdürülebilirliği teknik raporlamadan çıkararak insan davranışı ve karar verme mekanizmalarının nörobilimi üzerinden yeniden anlamlandıran konuşmalar. Sürdürülebilirlik bir teknoloji değil, zihin ve kültür tasarımı meselesidir.',
        'Kurumların sürdürülebilirlik stratejilerini prosedür olarak değil, insan davranışına entegre edilebilir sistemler olarak tasarlamalarına odaklanıyoruz. Sürdürülebilir davranış üretme kapasitesini geliştiriyoruz.',
        'Liderler için karar alma kalitesi, uzun vadeli düşünme kapasitesi ve kısa vadeli ödül yanlılığıyla mücadele etme becerisi üzerine koçluk. Sürdürülebilir düşünebilen liderler ve organizasyonlar tasarlıyoruz.',
      ],
    ],

    /* S5 — Outcomes */
    outcomesTitle: 'Bu Sistem Uygulandığında',
    outcomes: [
      'Karar verme kalitesi artar',
      'Adaptasyon hızı yükselir',
      'AI projeleri benimsenir',
      'Kültür tutarlılığı güçlenir',
      'Liderlik yükü azalır',
      'Organizasyon reaktif değil öğrenen hale gelir',
    ],

    /* S6 — Difference */
    dontLabel: 'Biz bunları YAPMIYORUZ',
    dontItems: ['AI implementasyonu', 'İK sistemi kurma', 'Eğitim satma', 'Liderlik koçluğu'],
    doLabel:   'Biz bunu YAPIYORUZ',
    doText:    'Organizasyonun nasıl düşündüğünü yeniden tasarlıyoruz.',

    /* S7 — CTA */
    ctaTitle:   'Kurumsal Nöro Sistem tasarımını başlatın.',
    ctaButtons: ['Görüşme Planla', 'Organizasyon Analizi Talep Et', 'Nöro-AI & Nöro-İK Modelini İncele'],
    modal2Tabs: ['NÖRO-AI™ Modeli', 'NÖRO-İK™ Modeli'],
    neuroAiModel: {
      title: 'NÖRO-AI™ Modeli',
      sub: 'Yapay zekâ projeleri neden beklenen etkiyi yaratmıyor?',
      p1: 'Çünkü organizasyonların büyük bölümü yapay zekâyı bir teknoloji dönüşümü olarak yönetirken, dönüşümün asıl belirleyicisi olan insan davranışını göz ardı ediyor.',
      p2: 'NÖRO-AI™, yapay zekâ entegrasyonunu yalnızca teknolojik bir uygulama süreci olarak değil; insan beyninin öğrenme, adaptasyon, karar verme ve iş birliği mekanizmalarıyla birlikte ele alan bütüncül bir dönüşüm modelidir.',
      p3: 'Yapay zekâ yatırımlarının önündeki en büyük engeller çoğu zaman teknik değil davranışsaldır. Değişime direnç, güven eksikliği, karar yorgunluğu, bilişsel aşırı yük ve adaptasyon problemleri; dönüşüm projelerinin görünmeyen maliyetlerini oluşturur.',
      p4: 'NÖRO-AI™ modeli, organizasyonların insan ve yapay zekâ arasında sürdürülebilir bir çalışma sistemi kurmasına yardımcı olur. Böylece teknoloji yatırımları yalnızca uygulanmaz, organizasyonun doğal çalışma biçiminin bir parçası haline gelir.',
      listTitle: 'Bu model kurumlara:',
      list: [
        'Yapay zekâ dönüşümünde insan kaynaklı dirençleri azaltma',
        'Teknoloji adaptasyonunu hızlandırma',
        'İnsan-AI iş birliği kapasitesini geliştirme',
        'Karar kalitesini ve operasyonel çevikliği artırma',
        'Yapay zekâ yatırımlarının iş sonuçlarına dönüşme olasılığını güçlendirme',
      ],
      closing: 'Yapay zekâ dönüşümünün başarısı yalnızca sistemlerin ne kadar akıllı olduğuna değil, insanların bu sistemlerle nasıl çalıştığına bağlıdır.',
      cta: 'Görüşme Planla',
    },
    neuroHrModel: {
      title: 'NÖRO-İK™ Modeli',
      sub: 'İnsan kaynakları uygulamaları neden kalıcı davranış değişimi yaratmakta zorlanıyor?',
      p1: 'Çünkü birçok sistem insanı süreçlerle yönetmeye çalışırken, insan davranışını üreten biyolojik ve bilişsel mekanizmaları yeterince dikkate almıyor.',
      p2: 'NÖRO-İK™, insan kaynaklarını bir yönetim fonksiyonu olarak değil; organizasyonun davranışsal, kültürel ve performans mimarisini şekillendiren stratejik bir sistem olarak ele alır.',
      p3: 'Bağlılık, performans, öğrenme, iş birliği, liderlik ve kültür gibi kavramlar yalnızca İK süreçlerinin çıktıları değildir. Bunlar aynı zamanda insan beyninin güven, ödül, motivasyon, aidiyet ve öğrenme mekanizmalarının organizasyon içindeki yansımalarıdır.',
      p4: 'NÖRO-İK™ modeli, insan kaynakları uygulamalarını nörobilim temelli içgörülerle yeniden tasarlayarak daha sürdürülebilir performans, daha güçlü bağlılık ve daha sağlıklı organizasyonel kültürler oluşturmayı hedefler.',
      listTitle: 'Bu model kurumlara:',
      list: [
        'Çalışan bağlılığını ve aidiyet duygusunu güçlendirme',
        'Organizasyonel öğrenme kapasitesini artırma',
        'Yetenek kazanımı ve elde tutma süreçlerini geliştirme',
        'Performans ve gelişim sistemlerini daha etkili hale getirme',
        'İnsan odaklı ve sürdürülebilir kurum kültürleri oluşturma',
      ],
      closing: 'Organizasyonların gelecekteki rekabet avantajı, yalnızca yetenekleri işe almakla değil; insan davranışını anlayan sistemler tasarlamakla mümkün olacaktır.',
      cta: 'Görüşme Planla',
    },
  },

  en: {
    /* S1 — Hero */
    heroTitle: "We don't optimize organizations.",
    heroSub:   'We redesign the human brain, artificial intelligence, and culture as a corporate nervous system working together.',
    heroBody:  "The NEURO approach doesn't develop AI, HR, leadership, and sustainability separately. It restructures how these domains think, decide, and behave together.",
    cta1: 'Explore Corporate Neuro System Architecture',
    cta2: 'Schedule a Consulting Session',

    /* Modal */
    modalTitle: 'Corporate Neuro System Architecture',
    modalP1:    'Most organizations want to adapt to the pace of the technological age and transform. But transformation usually starts from the wrong place. Progress is made through cycles of new strategies, new technologies, and new training programs. Yet in this cycle, only parts are updated and changed — the system and organizational behavior remain the same.',
    modalP2:    "Yet real transformation doesn't start in processes — it starts with designing how the organization thinks and behaves.",
    modalP3:    'This is exactly where our Neuro System Architecture approach comes in.',
    modalP4:    "In this approach, drawing on the mechanisms of the human brain's decision-making, learning, adaptation, and behavioral production; we design AI, HR, leadership, and sustainability not as separate disciplines, but as a corporate nervous system working together. In other words, we build sustainable corporate intelligences and create a new operating system for your organization.",
    modalP5:    "In a world where we don't account for the neurobiological limits, capacity, and operating dynamics of the human brain, talking about the future of leadership, human resources, and talent — and therefore institutional sustainability — is increasingly difficult. Let us take you to a future centered on the human brain.",
    modalCta:   "Let's Connect",

    /* S2 — Problem */
    problemTitle: 'Most organizations today face the same paradox',
    problems: [
      'Technology investment rises but adaptation drops',
      'Data multiplies but decision quality deteriorates',
      "Training increases but behavior doesn't change",
      "Strategy exists but culture doesn't carry it",
    ],
    problemBottom: "The problem isn't technology. The problem is that human behavior and system design don't speak the same language.",

    /* S3 — Paradigm */
    paradigmTitle: 'Two Different Approaches',
    tradTitle:  'Traditional Approach',
    tradSteps:  'Improve processes → Train people → Add technology',
    neuroTitle: 'NEURO Approach',
    neuroSteps: 'Understand the human brain → Design the behavioral system → Align technology and culture together',
    paradigmBottom: 'That is why transformation is no longer a project, but an organizational nervous system design.',

    /* S4 — Tabs */
    systemsTitle: '4 Core Neuro Systems',
    tabs:        ['NEURO-AI', 'NEURO-HR', 'NEURO-LEADERSHIP', 'NEURO-SUSTAINABILITY'],
    cardLabels:  ['Consulting', 'Speaking', 'Training', 'Neuro Coaching'],
    ytLabel:     'Watch on YouTube',
    systems: [
      [
        "We approach AI transformation not only from a technology perspective, but from the mechanisms of the human brain's learning, decision-making and adaptation. We design the human strategy of AI transformation and develop brain-compatible technology architectures.",
        "At corporate events and leadership summits, we focus on the mechanisms of the human brain's decision-making, trust-building and adaptation to change. Each talk is designed to deliver scientifically grounded, inspiring and actionable insights.",
        "Programs designed for employees and leaders to work with AI more efficiently, consciously and sustainably. The goal is not just to build employees who can use AI, but institutional intelligence that can think with AI.",
        "Neuroscience-based individual development processes for leaders and professionals to remain strong in the changing business world. We enhance learning agility, mental flexibility, decision quality and adaptation skills.",
      ],
      [
        "Rather than redesigning HR processes, we focus on restructuring the cultural and cognitive architecture of the organization. Culture is not a list of values; it is a behavioral system produced through the brain's mechanisms of reward, trust, threat perception and learning.",
        'Talks that transform HR from a support function into a strategic center that designs the behavioral architecture of the organization. Participants discover the invisible mechanisms of culture.',
        'HR teams, leaders and managers are guided to understand the invisible mechanisms that influence human behavior rather than managing processes. The goal is not to teach more processes, but to develop more conscious organization designers.',
        'Individual development process for leaders and HR professionals shaped around culture design, change management and organizational decision architecture. We transform the mindset that designs organizations.',
      ],
      [
        "We transform leadership development from individual skill sets to a system design that shapes the organization's decision-making, culture-building and adaptation capacity. In the age of AI, leadership is no longer just managing people; it's being able to balance human behavior, culture and algorithmic decision systems.",
        "Talks that reframe leadership from motivational narrative through the working principles of the human brain, the impact of AI and organizational behavioral architecture. Leadership is not a position, it is system intelligence.",
        'Unlike classical leadership programs, we focus not on knowledge transfer but on the transformation of thinking, perception and decision-making systems. We develop leaders who can think better in systems, not more models.',
        "Coaching process focused on transforming leaders' thinking patterns, decision-making models and system perceptions. We deepen in decision-making under stress, cognitive load management and mental flexibility.",
      ],
      [
        "We approach sustainability not only as environmental goals, but as the organization's capacity to make decisions, produce behavior and form habits. The goal is to make sustainability not a target but the natural way the organizational system works.",
        'Talks that reinterpret sustainability from technical reporting through the neuroscience of human behavior and decision-making mechanisms. Sustainability is not a technology, it is a matter of mind and culture design.',
        'We focus on helping institutions design their sustainability strategies not as procedures, but as systems that can be integrated into human behavior. We develop the capacity to produce sustainable behavior.',
        'Coaching for leaders on decision-making quality, long-term thinking capacity and the ability to fight short-term reward bias. We design leaders and organizations that can think sustainably.',
      ],
    ],

    /* S5 — Outcomes */
    outcomesTitle: 'When This System Is Applied',
    outcomes: [
      'Decision-making quality improves',
      'Adaptation speed increases',
      'AI projects are adopted',
      'Cultural consistency strengthens',
      'Leadership burden decreases',
      'Organization becomes learning, not reactive',
    ],

    /* S6 — Difference */
    dontLabel: "WHAT WE DON'T DO",
    dontItems: ['AI implementation', 'HR system setup', 'Selling training', 'Leadership coaching'],
    doLabel:   'WHAT WE DO',
    doText:    'We redesign how the organization thinks.',

    /* S7 — CTA */
    ctaTitle:   'Start your Corporate Neuro System design.',
    ctaButtons: ['Schedule a Meeting', 'Request Organization Analysis', 'Explore Neuro-AI & Neuro-HR Model'],
    modal2Tabs: ['NEURO-AI™ Model', 'NEURO-HR™ Model'],
    neuroAiModel: {
      title: 'NEURO-AI™ Model',
      sub: 'Why do AI projects fail to create the expected impact?',
      p1: 'Because most organizations manage AI as a technology transformation while overlooking human behavior — the actual driver of transformation.',
      p2: 'NEURO-AI™ is a holistic transformation model that approaches AI integration not merely as a technological implementation process, but together with the mechanisms of the human brain\'s learning, adaptation, decision-making and collaboration.',
      p3: 'The biggest obstacles to AI investments are often behavioral, not technical. Resistance to change, lack of trust, decision fatigue, cognitive overload and adaptation problems make up the hidden costs of transformation projects.',
      p4: 'The NEURO-AI™ model helps organizations build a sustainable working system between humans and AI. This way, technology investments are not merely implemented — they become part of the organization\'s natural way of working.',
      listTitle: 'This model helps institutions:',
      list: [
        'Reduce human-driven resistance in AI transformation',
        'Accelerate technology adoption',
        'Develop human-AI collaboration capacity',
        'Improve decision quality and operational agility',
        'Strengthen the likelihood of AI investments translating into business outcomes',
      ],
      closing: 'The success of AI transformation depends not only on how intelligent the systems are, but on how people work with those systems.',
      cta: 'Schedule a Meeting',
    },
    neuroHrModel: {
      title: 'NEURO-HR™ Model',
      sub: 'Why do HR practices struggle to create lasting behavioral change?',
      p1: 'Because many systems try to manage people through processes while failing to sufficiently consider the biological and cognitive mechanisms that produce human behavior.',
      p2: 'NEURO-HR™ approaches human resources not as a management function, but as a strategic system that shapes the behavioral, cultural and performance architecture of the organization.',
      p3: 'Concepts such as engagement, performance, learning, collaboration, leadership and culture are not merely outputs of HR processes. They are also reflections within the organization of the brain\'s mechanisms of trust, reward, motivation, belonging and learning.',
      p4: 'The NEURO-HR™ model aims to create more sustainable performance, stronger engagement and healthier organizational cultures by redesigning HR practices with neuroscience-based insights.',
      listTitle: 'This model helps institutions:',
      list: [
        'Strengthen employee engagement and sense of belonging',
        'Increase organizational learning capacity',
        'Improve talent acquisition and retention processes',
        'Make performance and development systems more effective',
        'Build human-centered and sustainable organizational cultures',
      ],
      closing: 'The future competitive advantage of organizations will be possible not only by hiring talent, but by designing systems that understand human behavior.',
      cta: 'Schedule a Meeting',
    },
  },
} as const

/* ── Motion variants ────────────────────────────────────── */
const fromUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Sub-components ─────────────────────────────────────── */
function ProblemCard({ text, delay }: { text: string; delay: number }) {
  return (
    <AnimatedSection direction="left" delay={delay}>
      <div
        className="relative overflow-hidden rounded-sm border border-blue-500/20 p-7 flex items-start gap-5 group transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(74,123,167,0.18)]"
        style={{ backgroundColor: 'rgba(10,22,40,0.72)' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0 mt-1.5 group-hover:bg-blue-300 transition-colors" />
        <p className="text-slate-200 leading-relaxed font-light text-sm">{text}</p>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(74,123,167,0.08) 0%, transparent 70%)' }} />
      </div>
    </AnimatedSection>
  )
}

function ServiceCard({ label, icon, desc }: { label: string; icon: React.ReactNode; desc: string }) {
  return (
    <motion.div
      variants={staggerChild}
      className="group relative overflow-hidden rounded-sm border border-navy-700/60 p-6 flex flex-col gap-4 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(74,123,167,0.15)]"
      style={{ backgroundColor: 'rgba(13,32,64,0.65)' }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-blue-600/20 text-blue-300 group-hover:bg-blue-600/30 transition-colors shrink-0">
          {icon}
        </div>
        <h4 className="text-cream font-semibold text-base leading-snug tracking-tight">{label}</h4>
      </div>
      <p className="text-slate-300 text-xs leading-relaxed font-light flex-1">{desc}</p>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(74,123,167,0.08) 0%, transparent 70%)' }} />
    </motion.div>
  )
}

/* ── Page ───────────────────────────────────────────────── */
export default function HizmetlerPage() {
  const { lang }      = useLang()
  const c             = CONTENT[lang]
  const [tab, setTab] = useState(0)
  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal2Tab, setModal2Tab] = useState(0)
  const [videoMuted, setVideoMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoPaused, setVideoPaused] = useState(false)
  const [videoVolume, setVideoVolume] = useState(1)
  const [videoProgress, setVideoProgress] = useState(0)
  const [videoSubtitle, setVideoSubtitle] = useState<'tr' | 'en' | 'off'>('tr')

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const apply = () => {
      const tracks = video.textTracks
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = (videoSubtitle !== 'off' && tracks[i].language === videoSubtitle) ? 'showing' : 'hidden'
      }
    }
    if (video.readyState >= 1) { apply() }
    else { video.addEventListener('loadedmetadata', apply, { once: true }) }
  }, [videoSubtitle])

  const handlePlayPause = () => {
    if (!videoRef.current) return
    if (videoPaused) { videoRef.current.play() } else { videoRef.current.pause() }
  }
  const handleSkip = (sec: number) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + sec))
  }
  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return
    setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
  }
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    setVideoVolume(v)
    if (videoRef.current) {
      videoRef.current.volume = v
      const m = v === 0
      setVideoMuted(m)
      videoRef.current.muted = m
    }
  }

  const activeCards = (c.systems as readonly (readonly string[])[])[tab]

  return (
    <main className="relative">
      {/* StarField — position: fixed, z-index: 0 */}
      <StarField />

      {/* ═══════════════════════════════════════════════════
          S1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg,rgba(6,14,26,0.88) 0%,rgba(10,22,40,0.82) 55%,rgba(13,31,60,0.85) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(74,123,167,0.09) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 py-20 lg:py-28 w-full"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'stretch' }}
        >
          {/* Sol kolon — içerik */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
          >
            <motion.div variants={fromUp} className="mb-10">
              <span className="inline-flex items-center text-blue-300/70 text-[11px] font-bold tracking-[4px] uppercase border border-blue-400/20 rounded-full px-5 py-2.5 bg-blue-500/5 backdrop-blur-sm">
                {lang === 'tr' ? 'Hizmetler' : 'Services'}
              </span>
            </motion.div>

            <motion.h1
              variants={fromUp}
              className="font-display font-bold text-cream tracking-tight leading-[1.15] mb-10"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
            >
              {c.heroTitle}
            </motion.h1>

            <motion.p
              variants={fromUp}
              className="font-display font-bold italic mb-8 bg-clip-text text-transparent leading-snug"
              style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)',
                backgroundImage: 'linear-gradient(135deg,#7FB9D7 0%,#4A7BA7 65%,#8B5CF6 100%)',
              }}
            >
              {c.heroSub}
            </motion.p>

            <motion.p
              variants={fromUp}
              className="text-slate-300 text-sm leading-relaxed font-light mb-16"
            >
              {c.heroBody}
            </motion.p>

            <motion.div variants={fromUp} className="flex flex-wrap gap-4">
              <button
                onClick={() => setModal(true)}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold tracking-[2.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,123,167,0.4)]"
              >
                {c.cta1} <IconArrow />
              </button>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white/75 hover:text-white hover:border-white/40 text-[11px] font-bold tracking-[2.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1"
              >
                {c.cta2}
              </Link>
            </motion.div>
          </motion.div>

          {/* Sağ kolon — video */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', flex: 1, minHeight: 0, borderRadius: '8px 8px 0 0' }}>
              <video
                ref={videoRef}
                autoPlay
                muted={videoMuted}
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setVideoPaused(false)}
                onPause={() => setVideoPaused(true)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                }}
              >
                <source src="/Web_Sayfası_Hizmetler.mp4" type="video/mp4" />
                <track kind="subtitles" src="/subtitles-tr.vtt" srcLang="tr" label="Türkçe" default />
                <track kind="subtitles" src="/subtitles-en.vtt" srcLang="en" label="English" />
              </video>
            </div>

            {/* Kontrol Paneli */}
            <div style={{
              padding: '10px 16px 12px',
              background: 'rgba(6,14,26,0.92)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(74,123,167,0.18)',
              borderTop: 'none',
              borderRadius: '0 0 8px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {/* İlerleme çubuğu */}
              <div
                style={{ padding: '5px 0', cursor: 'pointer' }}
                onClick={(e) => {
                  if (!videoRef.current) return
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                  const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
                  videoRef.current.currentTime = (pct / 100) * (videoRef.current.duration || 0)
                  setVideoProgress(pct)
                }}
              >
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${videoProgress}%`, background: 'linear-gradient(90deg,#4A7BA7,#7FB9D7)', transition: 'width 0.1s linear', borderRadius: '2px' }} />
                </div>
              </div>

              {/* Kontroller satırı */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Sol: oynatma kontrolleri */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <button
                    onClick={() => handleSkip(-10)}
                    title="10 saniye geri"
                    style={{ width:'30px',height:'30px',borderRadius:'50%',background:'transparent',border:'none',color:'rgba(255,255,255,0.55)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'color 0.2s',padding:0 }}
                    onMouseEnter={e=>(e.currentTarget.style.color='rgba(255,255,255,0.9)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.55)')}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg>
                  </button>
                  <button
                    onClick={handlePlayPause}
                    title={videoPaused ? 'Oynat' : 'Durdur'}
                    style={{ width:'34px',height:'34px',borderRadius:'50%',background:'rgba(74,123,167,0.22)',border:'1px solid rgba(74,123,167,0.35)',color:'rgba(255,255,255,0.9)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'background 0.2s,border-color 0.2s',padding:0 }}
                    onMouseEnter={e=>{ e.currentTarget.style.background='rgba(74,123,167,0.42)'; e.currentTarget.style.borderColor='rgba(74,123,167,0.65)' }}
                    onMouseLeave={e=>{ e.currentTarget.style.background='rgba(74,123,167,0.22)'; e.currentTarget.style.borderColor='rgba(74,123,167,0.35)' }}
                  >
                    {videoPaused
                      ? <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                    }
                  </button>
                  <button
                    onClick={() => handleSkip(10)}
                    title="10 saniye ileri"
                    style={{ width:'30px',height:'30px',borderRadius:'50%',background:'transparent',border:'none',color:'rgba(255,255,255,0.55)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'color 0.2s',padding:0 }}
                    onMouseEnter={e=>(e.currentTarget.style.color='rgba(255,255,255,0.9)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.55)')}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
                  </button>
                </div>

                {/* Sağ: altyazı + ses kontrolleri */}
                <div style={{ display:'flex',alignItems:'center',gap:'8px' }}>
                  {/* Altyazı seçici */}
                  <button
                    onClick={() => setVideoSubtitle(s => s === 'tr' ? 'en' : s === 'en' ? 'off' : 'tr')}
                    title={videoSubtitle === 'tr' ? 'Türkçe altyazı' : videoSubtitle === 'en' ? 'English subtitle' : 'Altyazı kapalı'}
                    style={{
                      height: '22px',
                      minWidth: '30px',
                      padding: '0 6px',
                      borderRadius: '4px',
                      background: videoSubtitle !== 'off' ? 'rgba(74,123,167,0.35)' : 'transparent',
                      border: `1px solid ${videoSubtitle !== 'off' ? 'rgba(74,123,167,0.6)' : 'rgba(255,255,255,0.15)'}`,
                      color: videoSubtitle !== 'off' ? '#7FB9D7' : 'rgba(255,255,255,0.4)',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                    }}
                  >
                    {videoSubtitle === 'off' ? 'CC' : videoSubtitle.toUpperCase()}
                  </button>
                  <div style={{ width:'1px', height:'14px', background:'rgba(255,255,255,0.1)' }} />
                  <button
                    onClick={() => {
                      const next = !videoMuted
                      setVideoMuted(next)
                      if (videoRef.current) {
                        videoRef.current.muted = next
                        if (!next && videoVolume === 0) { setVideoVolume(0.8); videoRef.current.volume = 0.8 }
                      }
                    }}
                    style={{ width:'28px',height:'28px',borderRadius:'50%',background:'transparent',border:'none',color:'rgba(255,255,255,0.55)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'color 0.2s',padding:0 }}
                    onMouseEnter={e=>(e.currentTarget.style.color='rgba(255,255,255,0.9)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.55)')}
                  >
                    {videoMuted || videoVolume === 0
                      ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                      : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    }
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.02"
                    value={videoMuted ? 0 : videoVolume}
                    onChange={handleVolume}
                    className="video-slider"
                    style={{
                      width: '70px',
                      background: `linear-gradient(to right,#4A7BA7 ${(videoMuted ? 0 : videoVolume) * 100}%,rgba(255,255,255,0.1) ${(videoMuted ? 0 : videoVolume) * 100}%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-slate-500/80 to-transparent"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MODAL — Nöro Sistem Mimarisi
      ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setModal(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 backdrop-blur-md" style={{ backgroundColor: 'rgba(6,14,26,0.88)' }} />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 48, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-3xl rounded-sm border border-blue-500/30 overflow-y-auto max-h-[90vh]"
              style={{
                backgroundColor: 'rgba(8,18,34,0.98)',
                boxShadow: '0 0 80px rgba(74,123,167,0.18)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow top */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(74,123,167,0.15) 0%, transparent 70%)' }} />

              <div className="relative z-10 p-8 md:p-12">
                {/* Close */}
                <button
                  onClick={() => setModal(false)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors rounded-sm hover:bg-white/5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Badge */}
                <span className="text-blue-400 text-[10px] font-bold tracking-[4px] uppercase block mb-6">
                  — {lang === 'tr' ? 'Sistem Mimarisi' : 'System Architecture'}
                </span>

                {/* Title */}
                <h2
                  className="font-display font-bold text-cream leading-tight mb-8"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
                >
                  {c.modalTitle}
                </h2>

                {/* P1 */}
                <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">{c.modalP1}</p>

                {/* P2 — big emphasis */}
                <div className="border-l-2 border-blue-500/60 pl-6 mb-8">
                  <p
                    className="font-display font-bold italic bg-clip-text text-transparent"
                    style={{
                      fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                      backgroundImage: 'linear-gradient(135deg,#EDE8DC 0%,#7FB9D7 65%,#8B5CF6 100%)',
                      lineHeight: 1.35,
                    }}
                  >
                    {c.modalP2}
                  </p>
                </div>

                {/* P3 */}
                <p className="text-slate-200 text-sm leading-relaxed font-normal mb-5">{c.modalP3}</p>

                {/* P4 */}
                <p className="text-slate-300 text-sm leading-relaxed font-light mb-5">{c.modalP4}</p>

                {/* P5 */}
                <p className="text-slate-300 text-sm leading-relaxed font-light mb-10">{c.modalP5}</p>

                {/* CTA */}
                <Link
                  href="/iletisim"
                  onClick={() => setModal(false)}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold tracking-[2.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,123,167,0.4)]"
                >
                  {c.modalCta} <IconArrow />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════
          MODAL2 — Nöro-AI & Nöro-İK Modeli
      ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {modal2 && (() => {
          const m = modal2Tab === 0 ? c.neuroAiModel : c.neuroHrModel
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
              onClick={() => setModal2(false)}
            >
              <div className="absolute inset-0 backdrop-blur-md" style={{ backgroundColor: 'rgba(6,14,26,0.88)' }} />
              <motion.div
                initial={{ opacity: 0, y: 48, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-3xl rounded-sm border border-blue-500/30 overflow-y-auto max-h-[90vh]"
                style={{ backgroundColor: 'rgba(8,18,34,0.98)', boxShadow: '0 0 80px rgba(74,123,167,0.18)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(74,123,167,0.15) 0%, transparent 70%)' }} />

                <div className="relative z-10 p-8 md:p-12">
                  {/* Close */}
                  <button
                    onClick={() => setModal2(false)}
                    className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors rounded-sm hover:bg-white/5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Inner tab buttons */}
                  <div className="flex gap-2 mb-8">
                    {(c.modal2Tabs as readonly string[]).map((label, i) => (
                      <button
                        key={i}
                        onClick={() => setModal2Tab(i)}
                        className={`px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase rounded-sm transition-all duration-200 ${
                          modal2Tab === i
                            ? 'bg-blue-600 text-white shadow-[0_0_16px_rgba(74,123,167,0.4)]'
                            : 'border border-white/15 text-slate-400 hover:border-blue-400/40 hover:text-slate-200'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={modal2Tab}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Title */}
                      <h2
                        className="font-display font-bold text-cream leading-tight mb-3"
                        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
                      >
                        {m.title}
                      </h2>

                      {/* Sub */}
                      <p className="text-blue-300/80 text-xs font-light italic mb-6">{m.sub}</p>

                      {/* P1 */}
                      <p className="text-slate-300 text-sm leading-relaxed font-light mb-5">{m.p1}</p>

                      {/* P2 — emphasis */}
                      <div className="border-l-2 border-blue-500/60 pl-6 mb-6">
                        <p
                          className="font-display font-bold italic bg-clip-text text-transparent"
                          style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            backgroundImage: 'linear-gradient(135deg,#EDE8DC 0%,#7FB9D7 65%,#8B5CF6 100%)',
                            lineHeight: 1.4,
                          }}
                        >
                          {m.p2}
                        </p>
                      </div>

                      {/* P3 */}
                      <p className="text-slate-300 text-sm leading-relaxed font-light mb-5">{m.p3}</p>

                      {/* P4 */}
                      <p className="text-slate-300 text-sm leading-relaxed font-light mb-7">{m.p4}</p>

                      {/* List */}
                      <p className="text-cream font-semibold text-[14px] mb-4">{m.listTitle}</p>
                      <ul className="flex flex-col gap-2.5 mb-8">
                        {(m.list as readonly string[]).map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 text-xs leading-relaxed font-light">
                            <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Closing */}
                      <p
                        className="font-display italic mb-8"
                        style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(237,232,220,0.75)' }}
                      >
                        {m.closing}
                      </p>

                      {/* CTA */}
                      <Link
                        href="/iletisim"
                        onClick={() => setModal2(false)}
                        className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold tracking-[2.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,123,167,0.4)]"
                      >
                        {m.cta} <IconArrow />
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════
          S2 — PROBLEM FRAMING
      ═══════════════════════════════════════════════════ */}
      <section className="py-[60px]" style={{ backgroundColor: 'rgba(10,22,40,0.78)' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <AnimatedSection className="text-center mb-12">
            <h2
              className="font-display font-bold text-cream tracking-tight leading-tight max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
            >
              {c.problemTitle}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {(c.problems as readonly string[]).map((text, i) => (
              <ProblemCard key={i} text={text} delay={i * 0.1} />
            ))}
          </div>

          <AnimatedSection className="text-center">
            <p
              className="font-display font-bold italic max-w-3xl mx-auto bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                backgroundImage: 'linear-gradient(135deg,#EDE8DC 0%,#7FB9D7 100%)',
                lineHeight: 1.5,
              }}
            >
              {c.problemBottom}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          S3 — NEW PARADIGM
      ═══════════════════════════════════════════════════ */}
      <section
        className="py-[60px] relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg,rgba(6,14,26,0.85) 0%,rgba(10,22,40,0.8) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-35" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">

          <AnimatedSection className="text-center mb-12">
            <h2
              className="font-display font-bold text-cream tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
            >
              {c.paradigmTitle}
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Traditional — faded */}
            <AnimatedSection direction="left" delay={0.1}>
              <div
                className="rounded-sm border border-white/10 p-10 flex flex-col gap-5 h-full"
                style={{ backgroundColor: 'rgba(10,22,40,0.45)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-base line-through decoration-slate-600" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {c.tradTitle}
                  </h3>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {c.tradSteps}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-[11px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {lang === 'tr' ? 'Ayrı ayrı. Parçalı. Geçici.' : 'Separate. Fragmented. Temporary.'}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* NÖRO — glowing */}
            <AnimatedSection direction="right" delay={0.2}>
              <div
                className="rounded-sm border border-blue-500/40 p-10 flex flex-col gap-5 h-full relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(13,32,64,0.78)',
                  boxShadow: '0 0 60px rgba(74,123,167,0.14)',
                }}
              >
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(74,123,167,0.12) 0%, transparent 65%)' }} />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-cream text-base">{c.neuroTitle}</h3>
                </div>
                <p
                  className="relative z-10 text-sm font-light leading-relaxed bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg,#EDE8DC 0%,#7FB9D7 100%)' }}
                >
                  {c.neuroSteps}
                </p>
                <div className="relative z-10 mt-auto pt-6 border-t border-blue-500/20">
                  <p className="text-blue-400/80 text-[11px] tracking-widest uppercase">
                    {lang === 'tr' ? 'Bütünleşik. Sistemik. Kalıcı.' : 'Integrated. Systemic. Lasting.'}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center">
            <p className="text-slate-300 text-sm font-light max-w-2xl mx-auto leading-relaxed">
              {c.paradigmBottom}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          S4 — TABBED 4-SYSTEM
      ═══════════════════════════════════════════════════ */}
      <section className="py-[60px]" style={{ backgroundColor: 'rgba(6,14,26,0.82)' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <AnimatedSection className="text-center mb-10">
            <span className="text-blue-400 text-[11px] font-bold tracking-[4px] uppercase block mb-5">
              — {lang === 'tr' ? 'Hizmet Mimarisi' : 'Service Architecture'}
            </span>
            <h2
              className="font-display font-bold text-cream tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
            >
              {c.systemsTitle}
            </h2>
          </AnimatedSection>

          {/* Tab Buttons */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {(c.tabs as readonly string[]).map((label, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setTab(i)}
                    className={`relative px-5 py-3 text-[11px] font-bold tracking-[2px] uppercase rounded-sm transition-all duration-300 ${
                      tab === i
                        ? 'bg-blue-600 text-white shadow-[0_0_24px_rgba(74,123,167,0.45)]'
                        : 'border border-white/15 text-slate-400 hover:border-blue-400/40 hover:text-slate-200'
                    }`}
                  >
                    {label}
                    {tab === i && (
                      <motion.span
                        layoutId="tab-indicator"
                        className="absolute inset-0 rounded-sm"
                        style={{ background: 'rgba(74,123,167,0.15)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                  <a
                    href={TAB_YOUTUBE_URLS[i as 0 | 1 | 2 | 3]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-500/30 text-red-400/90 hover:text-red-300 hover:border-red-400/55 text-[9px] font-bold tracking-[1.5px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(239,68,68,0.12)]"
                  >
                    <IconYouTube />
                    {c.ytLabel}
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedStagger className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {(c.cardLabels as readonly string[]).map((label, i) => (
                  <ServiceCard
                    key={`${tab}-${i}`}
                    label={label}
                    icon={CARD_ICONS[i]}
                    desc={activeCards[i] as string}
                  />
                ))}
              </AnimatedStagger>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          S5 — OUTCOMES
      ═══════════════════════════════════════════════════ */}
      <section className="py-[60px]" style={{ backgroundColor: 'rgba(10,22,40,0.75)' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-400 text-[11px] font-bold tracking-[4px] uppercase block mb-5">
              — {lang === 'tr' ? 'Sonuçlar' : 'Outcomes'}
            </span>
            <h2
              className="font-display font-bold text-cream tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
            >
              {c.outcomesTitle}
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(c.outcomes as readonly string[]).map((text, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="group relative overflow-hidden rounded-sm border border-navy-700/60 p-8 flex items-start gap-5 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(74,123,167,0.12)]"
                style={{ backgroundColor: 'rgba(13,32,64,0.6)' }}
              >
                <div className="text-blue-400/70 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5">
                  {OUTCOME_ICONS[i]}
                </div>
                <p className="text-cream font-semibold text-sm leading-snug">{text}</p>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(74,123,167,0.07) 0%, transparent 70%)' }} />
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          S6 — WHAT WE DO / DON'T
      ═══════════════════════════════════════════════════ */}
      <section
        className="py-[60px] relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg,rgba(6,14,26,0.88) 0%,rgba(13,26,48,0.85) 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(74,123,167,0.08) 0%, transparent 60%)' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-6 mb-12">

            {/* LEFT: don't — faded card */}
            <AnimatedSection direction="left" delay={0.1}>
              <div
                className="rounded-sm border border-white/10 p-10 flex flex-col gap-5 h-full"
                style={{ backgroundColor: 'rgba(10,22,40,0.45)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-base line-through decoration-slate-600" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {c.dontLabel}
                  </h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {(c.dontItems as readonly string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm font-light line-through" style={{ color: 'rgba(255,255,255,0.45)', textDecorationColor: 'rgba(255,255,255,0.2)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* RIGHT: do — glowing card */}
            <AnimatedSection direction="right" delay={0.2}>
              <div
                className="rounded-sm border border-blue-500/40 p-10 flex flex-col gap-5 h-full relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(13,32,64,0.78)',
                  boxShadow: '0 0 60px rgba(74,123,167,0.14)',
                }}
              >
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(74,123,167,0.12) 0%, transparent 65%)' }} />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-cream text-base">{c.doLabel}</h3>
                </div>
                <p
                  className="relative z-10 font-display font-bold italic leading-tight bg-clip-text text-transparent"
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
                    backgroundImage: 'linear-gradient(135deg,#EDE8DC 0%,#7FB9D7 55%,#8B5CF6 100%)',
                    lineHeight: 1.35,
                  }}
                >
                  {c.doText}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          S7 — CTA
      ═══════════════════════════════════════════════════ */}
      <section
        className="py-[60px] relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg,rgba(10,22,40,0.9) 0%,rgba(6,14,26,0.92) 60%,rgba(13,22,48,0.9) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(74,123,167,0.12) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-45" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <AnimatedSection>
            <h2
              className="font-display font-bold text-cream tracking-tight mb-12"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
            >
              {c.ctaTitle}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {(c.ctaButtons as readonly string[]).map((btn, i) =>
                i === 2 ? (
                  <button
                    key={i}
                    onClick={() => { setModal2(true); setModal2Tab(0) }}
                    className="inline-flex items-center gap-2 px-7 py-4 text-[11px] font-bold tracking-[2px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 border border-white/20 text-white/75 hover:text-white hover:border-white/40"
                  >
                    {btn}
                  </button>
                ) : (
                  <Link
                    key={i}
                    href="/iletisim"
                    className={`inline-flex items-center gap-2 px-7 py-4 text-[11px] font-bold tracking-[2px] uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 ${
                      i === 0
                        ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_10px_30px_rgba(74,123,167,0.4)]'
                        : 'border border-white/20 text-white/75 hover:text-white hover:border-white/40'
                    }`}
                  >
                    {btn}
                    {i === 0 && <IconArrow />}
                  </Link>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
