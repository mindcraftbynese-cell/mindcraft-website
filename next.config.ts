import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/hizmetlerimiz', destination: '/hizmetler', permanent: true },
      { source: '/gorsel-galeri', destination: '/galeri', permanent: true },
      { source: '/bizden-haberler', destination: '/', permanent: true },
      { source: '/f/jill-bolte-taylor-tutkun-tutkunu', destination: '/referanslar', permanent: true },
      { source: '/f/noro-liderlikte-karar-alma-ve-problem-cozme-surecleri', destination: '/referanslar', permanent: true },
      { source: '/f/noro-liderlik-nedir-sizi-neden-daha-iyi-bir-lider-yapar', destination: '/referanslar', permanent: true },
    ];
  },
};

export default
