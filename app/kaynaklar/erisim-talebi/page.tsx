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
