export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  category: "web" | "app" | "design";
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SiKasir — Sistem Kasir UMKM",
    description:
      "Aplikasi kasir berbasis web untuk UMKM lokal. Dilengkapi manajemen produk, laporan penjualan harian, dan export PDF.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    category: "web",
    liveUrl: "https://sikasir.demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "PortalMahasiswa HMIF",
    description:
      "Platform internal mahasiswa HMIF untuk manajemen kegiatan, absensi, dan informasi himpunan secara terpusat.",
    stack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    category: "web",
    featured: true,
  },
  {
    id: 3,
    title: "TrackerVita — Health Monitoring App",
    description:
      "Aplikasi mobile pemantau kesehatan harian yang terintegrasi dengan wearable device via Bluetooth BLE.",
    stack: ["Flutter", "Dart", "Firebase", "BLE SDK"],
    category: "app",
    featured: true,
  },
  {
    id: 4,
    title: "Brand Identity — WarungKu",
    description:
      "Desain identitas visual lengkap untuk startup F&B lokal: logo, color palette, typography, dan panduan brand.",
    stack: ["Figma", "Adobe Illustrator"],
    category: "design",
  },
  {
    id: 5,
    title: "EduPath — LMS Sederhana",
    description:
      "Learning Management System ringan untuk institusi pendidikan kecil dengan fitur kelas, tugas, dan nilai.",
    stack: ["Vue.js", "Node.js", "Express", "MongoDB"],
    category: "web",
  },
  {
    id: 6,
    title: "AgriScan — Plant Disease Detector",
    description:
      "Aplikasi deteksi penyakit tanaman menggunakan kamera smartphone berbasis model ML TensorFlow Lite.",
    stack: ["React Native", "Python", "TensorFlow Lite", "FastAPI"],
    category: "app",
  },
];
