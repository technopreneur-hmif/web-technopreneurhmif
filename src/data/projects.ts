export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  category: "web" | "app" | "design";
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Management Data Anggota HMIF",
    description:
      "Sistem manajemen data anggota himpunan: pendataan, pengelolaan profil, dan administrasi keanggotaan HMIF dalam satu platform terpusat.",
    stack: ["Laravel", "React", "Tailwind CSS"],
    category: "web",
    liveUrl: "https://hmif.girimulyo.com/",
    image: "/projects/data-anggota-hmif.webp",
    featured: true,
  },
  {
    id: 2,
    title: "Sistem Inventaris HMIF",
    description:
      "Platform inventaris dan peminjaman barang himpunan: katalog aset, pengajuan yang termonitor real-time, tracking penanggung jawab, serta pengembalian dengan verifikasi kondisi barang.",
    stack: ["Laravel", "Vite", "Tailwind CSS"],
    category: "web",
    liveUrl: "https://smi.jeremi.my.id/",
    image: "/projects/inventaris-hmif.webp",
    featured: true,
  },
  {
    id: 3,
    title: "Website Official HMIF ITERA",
    description:
      "Website resmi himpunan: profil organisasi, berita dan artikel teknologi, serta panel admin untuk pengelolaan konten himpunan.",
    stack: ["Laravel", "Inertia.js", "Bootstrap"],
    category: "web",
    liveUrl: "https://hmif.if.itera.ac.id/",
    featured: true,
  },
  {
    id: 4,
    title: "Website Resmi Desa Batang Hari Ogan",
    description:
      "Website resmi desa: profil dan peta wilayah, artikel berita kegiatan, galeri, layanan mandiri warga, serta panel admin untuk pengelolaan konten desa.",
    stack: ["OpenSID", "PHP", "Tailwind CSS"],
    category: "web",
    liveUrl: "https://batanghariogan.com/",
    image: "/projects/batang-hari-ogan.webp",
    featured: true,
  },
];
