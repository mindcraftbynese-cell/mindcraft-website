"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

const BELGELER = [
  {
    slug: "surec-ve-davranis-tasarimi-cagi",
    pdf: "/kaynaklar/Surec-ve-Davranis-Tasarimi-Cagi-9f3k7x2p.pdf",
    baslik: {
      tr: "Süreç ve Davranış Tasarımı Çağı",
      en: "Corporate Process, System and Behavior Design Era",
    },
  },
] as const;

const CONTENT = {
  tr: { notFound: "Belge bulunamadı ya da link geçersiz." },
  en: { notFound: "Document not found or the link is invalid." },
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
    <main
      className="relative z-10 max-w-5xl mx-auto px-4 pt-32 pb-24"
      onContextMenu={(e) => e.preventDefault()}
    >
      <h1 className="font-display text-2xl font-bold text-white text-center mb-8">
        {belge.baslik[lang]}
      </h1>
      <div
        className="mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl"
        style={{ height: "85vh", aspectRatio: "210 / 297" }}
      >
        <iframe
          src={`${belge.pdf}#toolbar=1&navpanes=0`}
          className="w-full h-full"
          title={belge.baslik[lang]}
        />
      </div>
    </main>
  );
}
