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
    comingSoon: "Yakında eklenecek.",
    kategoriler: [
      { slug: "beyin-bilgisi-ile-liderlik", baslik: "Beyin Bilgisi ile Liderlik", belgeler: [] },
      { slug: "beyin-bilgisi-ile-insan-kaynaklari-yonetimi", baslik: "Beyin Bilgisi ile İnsan Kaynakları Yönetimi", belgeler: [] },
      { slug: "yapay-zeka-insan-is-birligi-entegrasyonu", baslik: "Yapay Zeka-İnsan İş Birliği Entegrasyonu", belgeler: [] },
      {
        slug: "stratejik-donusum-ve-beyin-odakli-organizasyon-tasarimi",
        baslik: "Stratejik Dönüşüm ve Beyin Odaklı Organizasyon Tasarımı",
        belgeler: [
          {
            slug: "surec-ve-davranis-tasarimi-cagi",
            alt: "Süreç ve Davranış Tasarımı Çağı",
            kapak: "/kaynaklar/kapaklar_surec-ve-davranis-tasarimi-cagi-kapak.jpg",
          },
        ],
      },
    ],
  },
  en: {
    headline1: "Content That Makes",
    headline2: "A Difference",
    intro:
      "Click on one of the content categories below to request access. Your request will be reviewed and we will get back to you.",
    ctaLabel: "Request Access",
    comingSoon: "Coming soon.",
    kategoriler: [
      { slug: "beyin-bilgisi-ile-liderlik", baslik: "Leadership Through Brain Science", belgeler: [] },
      { slug: "beyin-bilgisi-ile-insan-kaynaklari-yonetimi", baslik: "Brain Science in Human Resources Management", belgeler: [] },
      { slug: "yapay-zeka-insan-is-birligi-entegrasyonu", baslik: "AI-Human Collaboration Integration", belgeler: [] },
      {
        slug: "stratejik-donusum-ve-beyin-odakli-organizasyon-tasarimi",
        baslik: "Strategic Transformation & Brain-Centered Organizational Design",
        belgeler: [
          {
            slug: "surec-ve-davranis-tasarimi-cagi",
            alt: "Corporate Process, System and Behavior Design Era",
            kapak: "/kaynaklar/kapaklar_surec-ve-davranis-tasarimi-cagi-kapak-en.jpg",
          },
        ],
      },
    ],
  },
} as const;

export default function KaynaklarPage() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  return (
    <main className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 pt-28 pb-24">
      <div className="relative mb-16" style={{ minHeight: '280px' }}>
        <div className="relative z-10 max-w-xl">
          <h1 className="mb-6">
            <span
              className="block font-display font-bold tracking-tight leading-[0.95] text-cream"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)' }}
            >
              {c.headline1}
            </span>
            <span
              className="block font-display font-bold tracking-tight leading-[0.95] italic bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)',
                backgroundImage: 'linear-gradient(135deg, #7FB9D7 0%, #4A7BA7 65%)',
              }}
            >
              {c.headline2}
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl">{c.intro}</p>
        </div>

        {/* Sağ taraf: hareketli görsel — mutlak konumlu, altındaki içeriği etkilemez */}
        <div
          className="hidden lg:block absolute top-0 right-0"
          style={{ width: '85%', height: '380px', marginRight: '-4rem' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full block"
            style={{
              objectFit: 'cover',
              maskImage: 'radial-gradient(circle at 50% 50%, black 25%, transparent 60%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 25%, transparent 60%)',
            }}
          >
            <source src="/kaynaklar/kaynaklar-hero-animasyon.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="space-y-16 max-w-5xl">
        {c.kategoriler.map((kategori) => (
          <section key={kategori.slug}>
            <h2 className="font-display text-xl font-bold text-cream mb-6 border-b border-white/10 pb-3">
              {kategori.baslik}
            </h2>

            {kategori.belgeler.length === 0 ? (
              <p className="text-gray-500 italic">{c.comingSoon}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {kategori.belgeler.map((belge) => (
                  <Link
                    key={belge.slug}
                    href={`/kaynaklar/erisim-talebi?icerik=${belge.slug}`}
                    className="group block rounded-lg overflow-hidden border border-white/10 bg-blue-950/10 hover:border-blue-400/40 transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={belge.kapak} alt={belge.alt} className="w-full h-auto" />
                    <div className="p-4 flex items-center justify-between">
                      <span className="text-blue-300/70 text-[11px] font-bold tracking-[2px] uppercase">
                        {c.ctaLabel}
                      </span>
                      <span className="text-blue-300 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
