export type ServiceFeature = {
  text: string;
  included: boolean;
};

export type Service = {
  id: number;
  name: string;
  tagline: string;
  priceFrom: string;
  priceLabel: string;
  features: ServiceFeature[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
};

export const services: Service[] = [
  {
    id: 1,
    name: "Landing Page",
    tagline: "Wajah digital pertama bisnismu",
    priceFrom: "2.5",
    priceLabel: "Mulai dari Rp 2.5 Jt",
    features: [
      { text: "1 halaman responsif", included: true },
      { text: "Desain custom sesuai brand", included: true },
      { text: "SEO on-page dasar", included: true },
      { text: "Form kontak / CTA WhatsApp", included: true },
      { text: "Revisi hingga 2x", included: true },
      { text: "Integrasi CMS", included: false },
      { text: "E-commerce fitur", included: false },
    ],
    cta: "Pesan Sekarang",
  },
  {
    id: 2,
    name: "Company Profile",
    tagline: "Representasi profesional bisnis Anda",
    priceFrom: "5",
    priceLabel: "Mulai dari Rp 5 Jt",
    features: [
      { text: "Multi-halaman (3–7 halaman)", included: true },
      { text: "Desain premium & animasi", included: true },
      { text: "SEO lengkap + sitemap", included: true },
      { text: "Blog / artikel terintegrasi", included: true },
      { text: "Panel admin konten", included: true },
      { text: "Revisi hingga 3x", included: true },
      { text: "E-commerce fitur", included: false },
    ],
    cta: "Pesan Sekarang",
    highlighted: true,
    badge: "Paling Populer",
  },
  {
    id: 3,
    name: "Web App",
    tagline: "Solusi digital yang benar-benar bekerja",
    priceFrom: "9",
    priceLabel: "Mulai dari Rp 9 Jt",
    features: [
      { text: "Aplikasi web full-stack", included: true },
      { text: "Autentikasi & manajemen user", included: true },
      { text: "Database & API custom", included: true },
      { text: "Dashboard & laporan", included: true },
      { text: "Deployment & CI/CD", included: true },
      { text: "Maintenance 3 bulan", included: true },
      { text: "Revisi unlimited", included: true },
    ],
    cta: "Diskusi Dulu",
  },
];
