'use client'

import { useLang } from '@/context/LanguageContext'

export default function GizlilikPage() {
  const { lang } = useLang()

  return (
    <main className="max-w-3xl mx-auto px-6 py-28 lg:py-36">
      <h1 className="font-display font-bold text-cream mb-10" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
        {lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
      </h1>

      {lang === 'tr' ? (
        <div className="text-cream/70 leading-relaxed space-y-8 text-sm">
          <p className="text-cream/50 text-xs tracking-wide">Son güncelleme: Haziran 2026</p>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">1. Giriş</h2>
            <p>MindCrAfT (kurucu: Neşe Merdinler) olarak kişisel verilerinizin gizliliğine büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde hangi verileri topladığımızı, bu verileri nasıl kullandığımızı ve haklarınızı açıklamaktadır.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">2. Toplanan Veriler</h2>
            <p>İletişim formunu doldurduğunuzda aşağıdaki kişisel veriler toplanmaktadır:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Ad ve soyad</li>
              <li>Şirket adı</li>
              <li>E-posta adresi</li>
              <li>İletmek istediğiniz mesaj</li>
            </ul>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">3. Verilerin Kullanım Amacı</h2>
            <p>Toplanan kişisel veriler; tarafınızla iletişime geçmek, hizmetlerimizi sunmak ve kalitesini geliştirmek amacıyla kullanılmakta olup herhangi bir üçüncü tarafla paylaşılmamaktadır.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">4. Çerezler</h2>
            <p>Web sitemiz, temel işlevselliği sağlamak amacıyla yalnızca zorunlu teknik çerezler kullanabilir. Reklam, izleme veya üçüncü taraf analitik çerezleri kullanılmamaktadır.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">5. Veri Güvenliği</h2>
            <p>Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı teknik ve idari önlemler uygulanmaktadır. Verileriniz yalnızca hizmetin gerektirdiği süre boyunca saklanmaktadır.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">6. Haklarınız (KVKK)</h2>
            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenen verilere erişim talep etme</li>
              <li>Hatalı verilerin düzeltilmesini isteme</li>
              <li>Verilerin silinmesini veya yok edilmesini talep etme</li>
              <li>Verilerin işlenmesine itiraz etme</li>
            </ul>
            <p className="mt-3">Bu haklarınızı kullanmak için aşağıdaki iletişim adresine başvurabilirsiniz.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">7. İletişim</h2>
            <p>Gizlilik politikamıza ilişkin soru ve talepleriniz için:</p>
            <p className="mt-2 font-medium text-cream">MindCrAfT by Neşe Merdinler<br />info@mindcraftbynese.com</p>
          </section>
        </div>
      ) : (
        <div className="text-cream/70 leading-relaxed space-y-8 text-sm">
          <p className="text-cream/50 text-xs tracking-wide">Last updated: June 2026</p>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">1. Introduction</h2>
            <p>MindCrAfT (founder: Neşe Merdinler) is committed to protecting your personal data. This Privacy Policy explains what data we collect when you visit our website, how we use it, and your rights.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">2. Data Collected</h2>
            <p>When you submit our contact form, the following personal data is collected:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Full name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">3. Use of Data</h2>
            <p>Collected personal data is used solely to communicate with you, provide our services, and improve their quality. Your data is never shared with third parties.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">4. Cookies</h2>
            <p>Our website may use strictly necessary technical cookies to ensure basic functionality. No advertising, tracking, or third-party analytics cookies are used.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">5. Data Security</h2>
            <p>Industry-standard technical and administrative measures are in place to protect your personal data. Data is retained only for as long as the service requires.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Learn whether your personal data is being processed</li>
              <li>Request access to your processed data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion or destruction of your data</li>
              <li>Object to the processing of your data</li>
            </ul>
            <p className="mt-3">To exercise these rights, please use the contact information below.</p>
          </section>

          <section>
            <h2 className="text-cream font-bold text-lg mb-3">7. Contact</h2>
            <p>For questions and requests regarding our privacy policy:</p>
            <p className="mt-2 font-medium text-cream">MindCrAfT by Neşe Merdinler<br />info@mindcraftbynese.com</p>
          </section>
        </div>
      )}
    </main>
  )
}
