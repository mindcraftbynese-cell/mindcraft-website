import Link from "next/link";

const kaynaklar = [
  {
    slug: "surec-ve-davranis-tasarimi-cagi",
    baslik: "Süreç ve Davranış Tasarımı Çağı",
    aciklama: "Nörobilim temelli yaklaşımlarla organizasyonların dönüşüm mimarisini ele alan kapsamlı white paper.",
  },
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
     <p className="text-gray-600 mb-10 max-w-2xl">
        Aşağıdaki içerikler kurumsal okuyucular için hazırlanmıştır. Erişim
        talebiniz değerlendirildikten sonra tarafınıza iletilecektir.
              </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {kaynaklar.map((k) => (
          <div key={k.slug} className="border rounded-lg p-6 shadow-sm">
         <h2 className="font-display text-xl font-semibold mb-2 text-white">{k.baslik}</h2>
            <p className="text-gray-600 mb-4">{k.aciklama}</p>
            <Link
              href={`/kaynaklar/erisim-talebi?icerik=${k.slug}`}
              className="inline-block bg-black text-white px-4 py-2 rounded-md text-sm"
            >
              Erişim Talep Et
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
