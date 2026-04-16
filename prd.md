# PRD — Website Portofolio & Layanan Technopreneur HMIF

> **Status:** Draft v1.0 | **Owner:** Andryano & Ahmad Ali | **Tanggal:** April 2026

---

## Metadata

| Field | Detail |
|---|---|
| Produk | Website Portofolio & Layanan Technopreneur HMIF |
| Divisi | Himpunan Mahasiswa Informatika — Technopreneur |
| Target Launch | < 1 bulan dari tanggal dokumen |
| Tech Stack | Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + shadcn/ui |
| Owner | Andryano & Ahmad Ali |
| Target Audiens | Mahasiswa internal, client eksternal (UMKM/startup), rekruiter/perusahaan |

---

## 1. Executive Summary

### 1.1 Problem Statement

Divisi Technopreneur HMIF tidak memiliki identitas digital yang representatif, sehingga potensi klien eksternal, rekruiter, dan mahasiswa internal tidak dapat mengevaluasi kapabilitas teknis maupun layanan yang ditawarkan secara mandiri.

### 1.2 Proposed Solution

Website single-page profesional yang berfungsi sebagai etalase portofolio, katalog layanan, dan titik kontak — dibangun dengan visual identitas HMIF (hijau & emas) dan arsitektur yang scalable untuk ekspansi produk SaaS ke depan.

### 1.3 Success Criteria (KPIs)

| Metric | Target | Cara Ukur |
|---|---|---|
| Lighthouse Performance | ≥ 90 (mobile & desktop) | Lighthouse CI di setiap deploy |
| LCP (Largest Contentful Paint) | ≤ 2.5 detik | Core Web Vitals (Vercel Analytics) |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | Lighthouse / PageSpeed Insights |
| Contact Conversion | ≥ 5% visitor → klik WhatsApp/email | UTM tracking atau Umami Analytics |
| Mobile Usability | 100% section responsif ≥ 320px | Manual QA di 3 device size |

---

## 2. User Experience & Functionality

### 2.1 User Personas

| Persona | Kebutuhan Utama | Sukses Jika... |
|---|---|---|
| Mahasiswa HMIF | Mengenal visi-misi, sejarah, dan cara bergabung | Menemukan kontak dan timeline dalam < 30 detik |
| Client eksternal (UMKM/startup) | Melihat harga dan layanan yang ditawarkan | Menekan CTA "Pesan Sekarang" menuju WhatsApp |
| Rekruiter / Perusahaan | Menilai skill teknis dan portofolio anggota | Menemukan stack teknologi dan link proyek |

### 2.2 Struktur Halaman (Single-Page Scroll)

Navigasi menggunakan anchor link ke section. Tidak ada perpindahan halaman kecuali ke halaman detail proyek (v2.0).

```
/ (root)
├── #home        → Hero, tagline, CTA utama
├── #about       → Deskripsi Techno, Visi-Misi, skill
├── #services    → Paket layanan & harga
├── #portfolio   → Proyek yang pernah dikerjakan
├── #timeline    → Sejarah pembentukan Techno
└── #contact     → Form/CTA kontak Andryano & Ahmad Ali
```

### 2.3 User Stories & Acceptance Criteria

#### Story 1 — Client Eksternal: Melihat Layanan & Harga

> _Sebagai calon klien, saya ingin melihat layanan dan harga yang jelas agar saya bisa memutuskan untuk menghubungi Techno._

**Acceptance Criteria:**
- [ ] Section `#services` menampilkan minimal 3 paket layanan dengan harga atau estimasi harga yang transparan
- [ ] Setiap paket memiliki CTA "Pesan Sekarang" yang mengarah langsung ke WhatsApp atau email
- [ ] Halaman services dapat diakses dari navbar dalam ≤ 1 klik
- [ ] Harga ditampilkan dalam format Rupiah (IDR) dengan satuan yang jelas (per proyek / per bulan)

#### Story 2 — Rekruiter: Menilai Portofolio & Skill

> _Sebagai rekruiter, saya ingin melihat portofolio proyek nyata agar saya bisa menilai kualitas teknis Techno._

**Acceptance Criteria:**
- [ ] Section `#portfolio` menampilkan ≥ 3 proyek dengan thumbnail, deskripsi singkat, dan stack teknologi
- [ ] Setiap item portofolio memiliki link ke live demo atau repo (jika publik)
- [ ] Section About/Skill menampilkan bahasa pemrograman dan framework dalam format visual (icon grid atau progress bar)
- [ ] Skill mencakup: bahasa pemrograman, framework frontend, backend, dan tools desain (UI/UX)

#### Story 3 — Mahasiswa: Mengenal Techno & Bergabung

> _Sebagai mahasiswa HMIF, saya ingin mengenal visi-misi dan sejarah Techno agar saya tertarik bergabung._

**Acceptance Criteria:**
- [ ] Section `#about` memuat deskripsi singkat Technopreneur, visi-misi, dan nilai-nilai divisi
- [ ] Section `#timeline` menampilkan sejarah pembentukan Techno secara kronologis (minimal 3 milestone)
- [ ] Terdapat CTA "Bergabung" atau link ke kontak di akhir section About

#### Story 4 — Semua Pengguna: Navigasi Mudah

> _Sebagai pengunjung, saya ingin navigasi yang mudah agar saya bisa berpindah section tanpa kebingungan._

**Acceptance Criteria:**
- [ ] Navbar sticky dengan link aktif (highlight saat scroll ke section tersebut)
- [ ] Smooth scroll antar section dengan durasi animasi 400–600ms
- [ ] Di mobile, navbar berubah menjadi hamburger menu dengan overlay
- [ ] Terdapat tombol "Back to top" yang muncul setelah scroll ≥ 300px

### 2.4 Non-Goals (Tidak Dibangun di MVP)

Berikut adalah fitur yang secara eksplisit **tidak** menjadi bagian dari scope MVP ini:

- ❌ Sistem pembayaran online / e-commerce untuk produk SaaS (placeholder UI saja)
- ❌ Dashboard admin untuk update konten (konten dikelola langsung lewat kode / MDX)
- ❌ Fitur login atau autentikasi pengguna
- ❌ Blog atau artikel (direncanakan untuk v2.0)
- ❌ Multilingual (EN/ID) — cukup Bahasa Indonesia untuk MVP

---

## 3. Technical Specifications

### 3.1 Tech Stack & Dependencies

| Layer | Teknologi | Alasan |
|---|---|---|
| Framework | `Next.js 14 (App Router)` | SSG/ISR untuk SEO optimal, file-based routing scalable |
| Language | `TypeScript (TSX)` | Type safety, maintainability jangka panjang |
| Styling | `Tailwind CSS v3` | Utility-first, konsisten dengan design system |
| Animation | `Framer Motion` | Scroll-triggered animation, page transition smooth |
| UI Components | `shadcn/ui` | Headless, accessible, mudah dikustomisasi |
| Icons | `lucide-react` | Konsisten, tree-shakeable |
| Form validation | `zod + react-hook-form` | Validasi client-side yang type-safe |
| Form submission | `Formspree` atau `EmailJS` | Tanpa backend, gratis untuk volume kecil |
| Analytics | `Umami` atau `Vercel Analytics` | Privacy-friendly, mudah dipasang |
| Deployment | `Vercel` | Zero-config, preview deployments, analytics gratis |
| Domain | TBD | Rekomendasi: `technopreneur.hmif.ac.id` |

### 3.2 Brand Identity & Color Palette

Warna diambil dari palette resmi HMIF yang diberikan:

| Token CSS | Hex | RGB | Penggunaan |
|---|---|---|---|
| `--color-primary` | `#25671E` | rgb(37, 103, 30) | Navbar, heading utama, CTA primary |
| `--color-accent` | `#48A111` | rgb(72, 161, 17) | Button hover, highlight, badge aktif |
| `--color-gold` | `#F2B50B` | rgb(242, 181, 11) | Aksen, timeline dot, tag aktif |
| `--color-surface` | `#F7F0F0` | rgb(247, 240, 240) | Background card, section alternating |

> **Catatan desain:** Portofolio menggunakan tema hitam & putih sebagai base, dengan aksen warna HMIF pada elemen interaktif (button, badge, timeline) untuk menjaga kesan profesional dan minimalis.

### 3.3 Arsitektur & Data Flow

```
Browser
  └─→ Vercel CDN (Edge Network)
        └─→ Next.js SSG Output (HTML statis)
              └─→ React Hydration
                    └─→ Framer Motion (scroll animation)
                          └─→ User Interaction
                                ├─→ WhatsApp deep-link (wa.me/...)
                                └─→ Formspree / EmailJS (form kontak)
```

### 3.4 Struktur Komponen (Rencana)

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata global
│   ├── page.tsx            # Single-page entry point
│   └── globals.css         # Tailwind base + custom tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Timeline.tsx
│       └── Contact.tsx
├── data/
│   ├── projects.ts         # Data portofolio
│   ├── services.ts         # Data paket layanan & harga
│   └── timeline.ts         # Data milestone sejarah Techno
└── lib/
    └── utils.ts
```

### 3.5 SEO & Performance Requirements

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 (mobile & desktop) |
| LCP (Largest Contentful Paint) | ≤ 2.5 detik |
| CLS (Cumulative Layout Shift) | ≤ 0.1 |
| FID / INP | ≤ 200ms |
| Meta tags | `title`, `description`, `og:image` wajib ada |
| Sitemap | Auto-generated via `next-sitemap` |
| Robots.txt | Disallow staging, allow semua di production |
| Aksesibilitas | Semua gambar memiliki `alt`, kontras WCAG AA minimum |

### 3.6 Security & Privacy

- Tidak ada data sensitif yang disimpan di frontend
- Form kontak tidak menyimpan data ke database — langsung diteruskan ke email via Formspree
- Tidak ada autentikasi atau sesi pengguna di MVP
- HTTPS wajib (otomatis di Vercel)
- Environment variables (API keys Formspree/EmailJS) disimpan di Vercel Environment Variables, tidak di-commit ke repo

---

## 4. Risks & Roadmap

### 4.1 Phased Rollout

#### MVP — Core Website (Minggu 1–3)

Fokus: semua section live, konten nyata, deploy ke Vercel.

- [ ] Hero section + Navbar sticky + smooth scroll
- [ ] Section About: deskripsi Techno, visi-misi, nilai divisi
- [ ] Section Skills: bahasa pemrograman & framework (icon grid)
- [ ] Section Portfolio: ≥ 3 proyek dengan thumbnail & stack
- [ ] Section Services: ≥ 3 paket layanan + harga + CTA WhatsApp
- [ ] Section Timeline: ≥ 3 milestone sejarah Techno
- [ ] Section Contact: nama, WhatsApp, email Andryano & Ahmad Ali
- [ ] Responsive mobile (≥ 320px) + hamburger menu
- [ ] Deploy ke Vercel + custom domain (jika tersedia)

#### v1.1 — Polish & SaaS Placeholder (Minggu 4–6)

Fokus: animasi, SEO lengkap, dan fondasi SaaS.

- [ ] Animasi scroll Framer Motion pada semua section
- [ ] SaaS product section dengan status "Coming Soon" + waitlist form
- [ ] Form kontak dengan validasi (zod) + submission ke Formspree
- [ ] OG image dinamis + meta SEO lengkap
- [ ] Google Analytics / Umami
- [ ] Dark mode (opsional, jika waktu memungkinkan)
- [ ] Lighthouse score ≥ 90 di semua kategori

#### v2.0 — SaaS & Growth (Bulan 2–3)

Fokus: monetisasi dan skalabilitas konten.

- [ ] SaaS product section live (setelah produk siap)
- [ ] Halaman detail per proyek (`/portfolio/[slug]`)
- [ ] Blog / artikel Techno (MDX atau Contentlayer)
- [ ] CMS headless (Sanity atau Contentlayer) untuk update konten tanpa coding
- [ ] Integrasi pembayaran (Midtrans) untuk layanan / produk SaaS
- [ ] Section testimonial client
- [ ] Multilingual EN/ID (opsional)

### 4.2 Technical Risks

| Level | Risiko | Mitigasi |
|---|---|---|
| 🔴 Tinggi | Deadline < 1 bulan dengan fitur lengkap | Prioritaskan MVP. SaaS section cukup UI statis. Gunakan template shadcn/ui sebagai base untuk mempercepat. |
| 🟡 Sedang | Konten portofolio belum dikumpulkan (screenshot, deskripsi proyek) | Buat content spec sheet, minta Andryano & Ahmad Ali mengisi dalam 3 hari pertama sebelum coding dimulai. |
| 🟡 Sedang | Produk SaaS belum siap dijual saat launch | Tampilkan section SaaS dengan status "Coming Soon" + form waitlist (Formspree). |
| 🟢 Rendah | Framer Motion memperlambat LCP di mobile | Gunakan `lazy` loading pada animasi, `will-change` hanya pada elemen animasi. Test Lighthouse tiap sprint. |
| 🟢 Rendah | Domain tidak tersedia atau belum terkonfigurasi | Siapkan subdomain alternatif sejak awal. Deploy ke `*.vercel.app` sebagai fallback sementara. |

---

## 5. Content Requirements

Konten berikut **wajib disiapkan sebelum development dimulai**. Owner: Andryano & Ahmad Ali.

### Checklist Konten yang Dibutuhkan

- [ ] **Logo Technopreneur HMIF** — format SVG atau PNG transparan, minimal 512×512px
- [ ] **Deskripsi singkat Technopreneur** — 2–3 kalimat, Bahasa Indonesia
- [ ] **Visi & Misi** — masing-masing 1–3 poin
- [ ] **Daftar skill / teknologi** — bahasa pemrograman, framework, tools desain yang dikuasai tim
- [ ] **Minimal 3 data proyek portofolio** — nama proyek, deskripsi singkat, stack, thumbnail, link (jika ada)
- [ ] **Paket layanan & estimasi harga** — minimal 3 paket (contoh: landing page, company profile, web app)
- [ ] **Minimal 3 milestone timeline** — tahun + deskripsi singkat kejadian penting Techno
- [ ] **Data kontak** — nomor WhatsApp Andryano, nomor WhatsApp Ahmad Ali, email divisi (jika ada)
- [ ] **Foto/avatar** — foto profil Andryano & Ahmad Ali untuk section Contact (opsional tapi disarankan)

---

## 6. Definition of Done (DoD)

Sebuah fitur atau section dianggap **selesai** jika memenuhi semua kriteria berikut:

- [ ] Tampil dengan benar di Chrome, Firefox, dan Safari (versi terbaru)
- [ ] Responsif di mobile (320px), tablet (768px), dan desktop (1280px+)
- [ ] Tidak ada console error di browser
- [ ] Lighthouse Performance ≥ 90 di mobile
- [ ] Semua teks menggunakan konten nyata (tidak ada placeholder "Lorem ipsum" di production)
- [ ] Semua link dan CTA berfungsi dan mengarah ke tujuan yang benar
- [ ] Kode di-commit ke repository dengan pesan commit yang deskriptif
- [ ] Sudah di-review oleh minimal satu anggota tim lain

---

*PRD Technopreneur HMIF — Draft v1.0 — April 2026*  
*Owner: Andryano & Ahmad Ali — Divisi Technopreneur HMIF*