"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const CONTENT = {
  tr: {
    headline1: "İşiniz İçin Fark Yaratan",
    headline2: "İçerikler",
    intro:
      "Aşağıdaki içerik kategorilerinden birine tıklayarak erişim talep edebilirsiniz. Talebiniz değerlendirildikten sonra tarafınıza iletilecektir.",
    ctaLabel: "Erişim Talep Et",
    kategoriler: [
      { slug: "beyin-bilgisi-ile-liderlik", baslik: "Beyin Bilgisi ile Liderlik" },
      { slug: "beyin-bilgisi-ile-insan-kaynaklari-yonetimi", baslik: "Beyin Bilgisi ile İnsan Kaynakları Yönetimi" },
      { slug: "yapay-zeka-insan-is-birligi-entegrasyonu", baslik: "Yapay Zeka-İnsan İş Birliği Entegrasyonu" },
      { slug: "stratejik-donusum-ve-beyin-odakli-organizasyon-tasarimi", baslik: "Stratejik Dönüşüm ve Beyin Odaklı Organizasyon Tasarımı" },
    ],
  },
  en: {
    headline1: "Content That Makes",
    headline2: "A Difference",
    intro:
      "Click on one of the content categories below to request access. Your request will be reviewed and we will get back to you.",
    ctaLabel: "Request Access",
    kategoriler: [
      { slug: "beyin-bilgisi-ile-liderlik", baslik: "Leadership Through Brain Science" },
      { slug: "beyin-bilgisi-ile-insan-kaynaklari-yonetimi", baslik: "Brain Science in Human Resources Management" },
      { slug: "yapay-zeka-insan-is-birligi-entegrasyonu", baslik: "AI-Human Collaboration Integration" },
      { slug: "stratejik-donusum-ve-beyin-odakli-organizasyon-tasarimi", baslik: "Strategic Transformation & Brain-Centered Organizational Design" },
    ],
  },
} as const;

export default function KaynaklarPage() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <main className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 pt-28 pb-24">
      <h1 className="mb-6">
        <span
          className="block font-display font-bold tracking-tight leading-[1.08] text-cream"
          style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)' }}
        >
          {c.headline1}
        </span>
        <span
          className="block font-display font-bold tracking-tight leading-[1.08] italic bg-clip-text text-transparent"
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)',
            backgroundImage: 'linear-gradient(135deg, #7FB9D7 0%, #4A7BA7 65%)',
          }}
        >
          {c.headline2}
        </span>
      </h1>

      <p className="text-gray-400 mb-16 max-w-2xl">{c.intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {c.kategoriler.map((k) => (
          <Link
            key={k.slug}
            href={`/kaynaklar/erisim-talebi?icerik=${k.slug}`}
            className="group block border border-blue-400/20 rounded-xl p-8 bg-blue-950/10 hover:border-blue-400/40 hover:bg-blue-950/20 transition-all duration-300"
          >
            <span className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-400/40 text-blue-300 text-sm">
                ✓
              </span>
              <span className="text-blue-300/70 text-[11px] font-bold tracking-[2px] uppercase">
                {c.ctaLabel}
              </span>
            </span>
            <h2
              className="font-display italic text-2xl font-bold leading-snug bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #E8F1F8 0%, #7FB9D7 55%, #4A7BA7 100%)',
              }}
            >
              {k.baslik}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
