"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

const CONTENT = {
  tr: {
    title: "Erişim Talebi",
    adSoyad: "Ad Soyad",
    sirket: "Şirket",
    email: "İş E-postası",
    pozisyon: "Pozisyon",
    telefon: "Telefon Numarası",
    submit: "Gönder",
    error: "Bir sorun oluştu, lütfen tekrar deneyin.",
    successTitle: "Talebiniz Alındı",
    successBody:
      "Başvurunuz değerlendirildikten sonra belirttiğiniz e-posta adresine dönüş yapılacaktır.",
  },
  en: {
    title: "Access Request",
    adSoyad: "Full Name",
    sirket: "Company",
    email: "Business Email",
    pozisyon: "Position",
    telefon: "Phone Number",
    submit: "Submit",
    error: "Something went wrong, please try again.",
    successTitle: "Request Received",
    successBody:
      "Your request will be reviewed and we will get back to you at the email address you provided.",
  },
} as const;

export default function ErisimTalebiPage() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const [icerik, setIcerik] = useState("belirtilmedi");
  const [gonderildi, setGonderildi] = useState(false);
  const [hata, setHata] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIcerik(params.get("icerik") ?? "belirtilmedi");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xwvjweal", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setGonderildi(true);
      else setHata(true);
    } catch {
      setHata(true);
    }
  }

  if (gonderildi) {
    return (
      <main className="relative z-10 max-w-xl mx-auto px-4 pt-40 pb-24 text-center">
        <h1 className="font-display text-2xl font-bold mb-4 text-white">{c.successTitle}</h1>
        <p className="text-gray-300">{c.successBody}</p>
      </main>
    );
  }

  return (
    <main className="relative z-10 max-w-xl mx-auto px-4 pt-40 pb-24">
      <h1 className="font-display text-2xl font-bold mb-6 text-white">{c.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
type="hidden" name="_subject" value="Yeni İçerik Erişim Talebi" />
        <input type="hidden" name="form_type" value="icerik_talebi" />
        <input type="hidden" name="talep_edilen_icerik" value={icerik} />

        <div>
          <label className="block text-sm font-medium mb-1 text-white">{c.adSoyad}</label>
          <input name="ad_soyad" required className="w-full border rounded-md px-3 py-2 bg-white text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">{c.sirket}</label>
          <input name="sirket" required className="w-full border rounded-md px-3 py-2 bg-white text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">{c.email}</label>
          <input type="email" name="email" required className="w-full border rounded-md px-3 py-2 bg-white text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">{c.telefon}</label>
          <input type="tel" name="telefon" required className="w-full border rounded-md px-3 py-2 bg-white text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">{c.pozisyon}</label>
          <input name="pozisyon" required className="w-full border rounded-md px-3 py-2 bg-white text-black" />
        </div>

        {hata && <p className="text-red-400 text-sm">{c.error}</p>}

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
          {c.submit}
        </button>
      </form>
    </main>
  );
}
