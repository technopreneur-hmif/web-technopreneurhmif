export type Milestone = {
  id: number;
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export const milestones: Milestone[] = [
  {
    id: 1,
    year: "2019",
    title: "Pembentukan Divisi Technopreneur",
    description:
      "Technopreneur HMIF resmi dibentuk sebagai divisi yang berfokus pada pengembangan produk digital dan kewirausahaan teknologi di lingkungan Informatika.",
    highlight: false,
  },
  {
    id: 2,
    year: "2020",
    title: "Proyek Komersial Pertama",
    description:
      "Berhasil menyelesaikan proyek website pertama untuk klien eksternal — sebuah sistem manajemen inventaris untuk UMKM lokal di Bandung.",
    highlight: false,
  },
  {
    id: 3,
    year: "2021",
    title: "Ekspansi Layanan & Tim",
    description:
      "Tim bertumbuh menjadi 12 anggota aktif. Layanan diperluas ke pengembangan mobile app dan desain UI/UX. Total 5 proyek selesai di tahun ini.",
    highlight: true,
  },
  {
    id: 4,
    year: "2022",
    title: "Kolaborasi Kampus & Industri",
    description:
      "Technopreneur mendapat pengakuan resmi dari fakultas sebagai unit bisnis mahasiswa. Mulai kolaborasi dengan komunitas startup Bandung.",
    highlight: false,
  },
  {
    id: 5,
    year: "2023",
    title: "10+ Proyek & Portofolio Solid",
    description:
      "Melewati milestone 10 proyek selesai. Membangun portofolio yang solid dengan klien dari berbagai sektor: pendidikan, F&B, retail, dan kesehatan.",
    highlight: false,
  },
  {
    id: 6,
    year: "2024–2026",
    title: "Menuju Platform SaaS",
    description:
      "Fase transformasi: dari tim jasa ke pengembang produk SaaS sendiri. Technopreneur mulai membangun produk digital yang scalable untuk pasar UMKM Indonesia.",
    highlight: true,
  },
];
