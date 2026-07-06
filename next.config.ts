import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/hizmetlerimiz', destination: '/hizmetler', permanent: true },
      { source: '/gorsel-galeri', destination: '/galeri', permanent: true },
      { source: '/bizden-haberler', destination: '/', permanent: true },
      { source: '/f/:slug*', destination: '/referanslar', permanent: true },
    ];
  },
};

export default nextConfig;
