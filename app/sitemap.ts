import type { MetadataRoute } from 'next'

const BASE = 'https://www.mindcraftbynese.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                           lastModified: new Date(), changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${BASE}/hakkimizda`,           lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE}/hizmetler`,            lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE}/referanslar`,          lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE}/galeri`,               lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.6 },
    { url: `${BASE}/iletisim`,             lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.5 },
    { url: `${BASE}/gizlilik`,             lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.2 },
    { url: `${BASE}/kullanim-kosullari`,   lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.2 },
  ]
}
