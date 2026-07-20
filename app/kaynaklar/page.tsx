import Link from "next/link";

const kategoriler = [
  { slug: "beyin-bilgisi-ile-liderlik", baslik: "Beyin Bilgisi ile Liderlik" },
  { slug: "beyin-bilgisi-ile-insan-kaynaklari-yonetimi", baslik: "Beyin Bilgisi ile İnsan Kaynakları Yönetimi" },
  { slug: "yapay-zeka-insan-is-birligi-entegrasyonu", baslik: "Yapay Zeka-İnsan İş Birliği Entegrasyonu" },
  { slug: "stratejik-donusum-ve-beyin-odakli-organizasyon-tasarimi", baslik: "Stratejik Dönüşüm ve Beyin Odaklı Organizasyon Tasarımı" },
];

export default function KaynaklarPage() {
  return (
    <main className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 pt-28 pb-24">
      <h1 className="mb-6">
        <span
          className="block font-display font-bold tracking-tight leading-[1.08] text-cream"
          style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)' }}
        >
          İşiniz İçin Fark Yaratan
        </span>
        <span
          className="block font-display font-bold tracking-tight leading-[1.08] italic bg-clip-text text-transparent"
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)',
            backgroundImage: 'linear-gradient(135deg, #7FB9D7 0%, #4A7BA7 65%)',
          }}
        >
          İçerikler
        </span>
      </h1>

      <p className="text-gray-400 mb-16 max-w-2xl">
        Aşağıdaki içerik kategorilerinden birine tıklayarak erişim talep
        edebilirsiniz. Talebiniz değerlendirildikten sonra tarafınıza
        iletilecektir.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {kategoriler.map((k) => (
          <Link
            key={k.slug}
            href={`/kaynaklar/erisim-talebi?icerik=${k.slug}`}
            className="group block border border-white/10 rounded-xl p-8 bg-blue-950/10 hover:border-blue-400/40 hover:bg-blue-950/20 transition-all duration-300"
          >
            <span className="inline-flex items-center gap-2 text-blue-300/70 text-[11px] font-bold tracking-[2px] uppercase mb-4">
              ✓ Erişim Talep Et
            </span>
            <h2 className="font-display text-xl font-bold text-cream group-hover:text-white transition-colors">
              {k.baslik}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
