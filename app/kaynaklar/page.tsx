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
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">İşiniz İçin Fark Yaratan İçerikler</h1>
      <p className="text-gray-600 mb-10">
        Aşağıdaki içerikler kurumsal okuyucular için hazırlanmıştır. Erişim
        talebiniz değerlendirildikten sonra tarafınıza iletilecektir.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {kaynaklar.map((k) => (
          <div key={k.slug} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{k.baslik}</h2>
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
