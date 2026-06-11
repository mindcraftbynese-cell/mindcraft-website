'use client'

import { useLang } from '@/context/LanguageContext'

export default function KullanimKosullariPage() {
  const { lang } = useLang()

  return (
    <main className="max-w-3xl mx-auto px-6 py-28 lg:py-36">
      <h1 className="font-display font-bold text-cream mb-10" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
        {lang === 'tr' ? 'Kullanım Koşulları' : 'Terms of Use'}
      </h1>

      {lang === 'tr' ? (
        <div className="text-cream/70 leading-relaxed space-y-8 text-sm">
          <p className="text-cream/50 text-xs tracking-wide">Son güncelleme: Haziran 2026</p>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">1. Kabul</h2>
            <p>Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız siteyi kullanmayı bırakınız. Bu koşullar MindCrAfT (kurucu: Neşe Merdinler) tarafından yürütülen hizmetler için geçerlidir.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">2. Hizmetlerin Kapsamı</h2>
            <p>MindCrAfT, nörobilim temelli danışmanlık, konuşmacılık, kurumsal eğitim ve nörokoçluk hizmetleri sunmaktadır. Web sitesindeki içerikler yalnızca bilgilendirme amaçlıdır ve profesyonel danışmanlık hizmetinin yerini tutmaz.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">3. Fikri Mülkiyet</h2>
            <p>Bu web sitesindeki tüm içerikler (metin, görsel, logo, tasarım vb.) MindCrAfT'a aittir ve telif hukuku kapsamında korunmaktadır. İzinsiz çoğaltılması, dağıtılması veya değiştirilmesi yasaktır.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">4. Kullanıcı Yükümlülükleri</h2>
            <p>Web sitesini yasalara uygun şekilde kullanmayı, üçüncü şahıslara zarar verecek ya da sistemi olumsuz etkileyecek faaliyetlerden kaçınmayı kabul edersiniz.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">5. Sorumluluk Sınırlaması</h2>
            <p>MindCrAfT, web sitesinin kesintisiz veya hatasız çalışacağını garanti etmez. Sitenin kullanımından doğabilecek doğrudan veya dolaylı zararlar için sorumluluk kabul edilmez.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">6. Bağlantılı Siteler</h2>
            <p>Web sitemiz üçüncü taraf sitelere bağlantılar içerebilir. Bu sitelerin içerikleri ve gizlilik uygulamaları üzerinde kontrolümüz bulunmamaktadır.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">7. Değişiklikler</h2>
            <p>MindCrAfT bu kullanım koşullarını önceden bildirmeksizin güncelleme hakkını saklı tutar. Güncel koşullar her zaman bu sayfada yayımlanmaktadır.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">8. Uygulanacak Hukuk</h2>
            <p>Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Olası uyuşmazlıklarda İstanbul mahkemeleri yetkilidir.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">9. İletişim</h2>
            <p>Kullanım koşullarına ilişkin soru ve talepleriniz için:</p>
            <p className="mt-2 font-medium text-cream">MindCrAfT by Neşe Merdinler<br />info@mindcraftbynese.com</p>
          </section>
        </div>
      ) : (
        <div className="text-cream/70 leading-relaxed space-y-8 text-sm">
          <p className="text-cream/50 text-xs tracking-wide">Last updated: June 2026</p>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">1. Acceptance</h2>
            <p>By using this website, you agree to the following terms of use. If you do not accept these terms, please discontinue use of the site. These terms apply to all services operated by MindCrAfT (founder: Neşe Merdinler).</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">2. Scope of Services</h2>
            <p>MindCrAfT provides neuroscience-based consulting, keynote speaking, corporate training, and neuro-coaching services. Content on this website is for informational purposes only and does not substitute for professional consulting services.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">3. Intellectual Property</h2>
            <p>All content on this website (text, images, logos, design, etc.) is the property of MindCrAfT and is protected by copyright law. Reproduction, distribution, or modification without prior written consent is prohibited.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">4. User Obligations</h2>
            <p>You agree to use the website in compliance with applicable law and to refrain from any activities that may harm third parties or negatively affect the system.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">5. Limitation of Liability</h2>
            <p>MindCrAfT does not warrant that the website will operate without interruption or errors. No liability is accepted for any direct or indirect damages arising from the use of the site.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">6. Third-Party Links</h2>
            <p>Our website may contain links to third-party sites. We have no control over the content or privacy practices of those sites.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">7. Changes</h2>
            <p>MindCrAfT reserves the right to update these terms of use without prior notice. The current terms are always published on this page.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">8. Governing Law</h2>
            <p>These terms are governed by the laws of the Republic of Turkey. Istanbul courts shall have jurisdiction over any disputes.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">9. Contact</h2>
            <p>For questions and requests regarding these terms:</p>
            <p className="mt-2 font-medium text-cream">MindCrAfT by Neşe Merdinler<br />info@mindcraftbynese.com</p>
          </section>
        </div>
      )}
    </main>
  )
}
