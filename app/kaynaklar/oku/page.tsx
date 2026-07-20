"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

const BELGELER = [
  {
    slug: "surec-ve-davranis-tasarimi-cagi",
    pdf: "/kaynaklar/Surec-ve-Davranis-Tasarimi-Cagi-9f3k7x2p.pdf",
    kapak: "/kaynaklar/kapaklar_surec-ve-davranis-tasarimi-cagi-kapak.jpg",
    baslik: {
      tr: "Süreç ve Davranış Tasarımı Çağı",
      en: "Corporate Process, System and Behavior Design Era",
    },
  },
] as const;

const CONTENT = {
  tr: {
    notFound: "Belge bulunamadı ya da link geçersiz.",
    download: "PDF Olarak İndir",
  },
  en: {
    notFound: "Document not found or the link is invalid.",
    download: "Download as PDF",
  },
} as const;

export default function OkuPage() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSlug(params.get("belge"));
  }, []);

  const belge = BELGELER.find((b) => b.slug === slug);

  if (slug === null) {
    return null;
  }

  if (!belge) {
    return (
      <main className="relative z-10 max-w-xl mx-auto px-4 pt-40 pb-24 text-center">
        <p className="text-gray-300">{c.notFound}</p>
      </main>
    );
  }

  return (
    <main className="relative z-10 max-w-3xl mx-auto px-4 pt-32 pb-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={belge.kapak}
        alt={belge.baslik[lang]}
        className="w-full max-w-sm mx-auto rounded-lg shadow-2xl mb-10"
      />
      <h1 className="font-display text-2xl font-bold text-white text-center mb-8">
        {belge.baslik[lang]}
      </h1>
      <div
        className="rounded-lg overflow-hidden border border-white/10 mb-8"
        style={{ height: "80vh" }}
      >
        <iframe src={belge.pdf} className="w-full h-full" title={belge.baslik[lang]} />
      </div>
      <div className="text-center">
        
          href={belge.pdf}
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold"
        >
          {c.download}
        </a>
      </div>
    </main>
  );
}
