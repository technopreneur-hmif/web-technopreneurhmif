"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, MonitorSmartphone, LayoutTemplate, CopySlash, PenTool, Cpu } from "lucide-react";

const WA_NUMBER = "6281953410222";

const services = [
  {
    id: "landing-page",
    name: "Landing Page",
    icon: LayoutTemplate,
    tagline: "Ditujukan untuk satu halaman spesifik dengan tujuan konversi (penjualan/iklan).",
    price: "500rb",
    features: [
      { title: "Paket Ekonomis (Rp 500rb - 1,5jt)", desc: "Menggunakan template siap pakai (WordPress/Elementor), pengerjaan cepat 1-3 hari." },
      { title: "Standar Profesional (Rp 1,5jt - 4jt)", desc: "Desain lebih rapi, copywriting persuasif, integrasi tracking (Google Ads/FB Pixel), dan responsif." },
      { title: "Custom/Premium (Rp 4jt+)", desc: "Desain unik dari nol (UI/UX custom) dan optimasi kecepatan loading tingkat tinggi." }
    ],
    highlighted: false,
    cta: "Konsultasi Landing Page",
  },
  {
    id: "company-profile",
    name: "Company Profile",
    icon: MonitorSmartphone,
    badge: "PALING TERPOPULER",
    tagline: "Website multi-halaman (Home, About, Services, dll) untuk kredibilitas bisnis.",
    price: "1.5Jt",
    features: [
      { title: "Basic (Rp 1,5jt - 3jt)", desc: "Menggunakan CMS standar seperti WordPress, cocok untuk keperluan UMKM." },
      { title: "Menengah (Rp 4jt - 10jt)", desc: "Desain custom, SEO dasar, integrasi Google Maps, formulir kontak profesional." },
      { title: "Enterprise (Rp 15jt - 50jt+)", desc: "Keamanan tinggi, desain eksklusif, multi-bahasa, dan integrasi sistem internal untuk perusahaan besar." }
    ],
    highlighted: true,
    cta: "Buat Profil Perusahaan",
  },
  {
    id: "web-app",
    name: "Web Application",
    icon: CopySlash,
    tagline: "Sistem kompleks seperti dashboard admin, database besar, dan interaksi pengguna (HRIS, e-learning).",
    price: "10Jt",
    features: [
      { title: "Sederhana (Rp 10jt - 35jt)", desc: "Fitur login, manajemen data dasar (CRUD), dan tampilan dashboard sederhana." },
      { title: "Menengah (Rp 35jt - 150jt)", desc: "Integrasi API (payment, kurir), sistem laporan otomatis, dan multi-user role." },
      { title: "Kompleks/Enterprise (Rp 200jt+)", desc: "Arsitektur microservices, skalabilitas tinggi, keamanan tingkat lanjut dengan MERN/Laravel." }
    ],
    highlighted: false,
    cta: "Bangun Web App",
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    icon: PenTool,
    tagline: "Desain antarmuka mendalam (Figma) dan pengalaman pengguna yang optimal.",
    price: "500rb",
    features: [
      { title: "Basic (Mulai Rp 500rb)", desc: "Wireframe, konsep dasar, dan Low-Fidelity mockup." },
      { title: "Standard (Mulai Rp 2jt)", desc: "High-Fidelity UI, prototipe interaktif, dan panduan gaya lengkap." },
      { title: "Premium (Mulai Rp 5jt+)", desc: "Design System komprehensif, ilustrasi custom, dan Usability Testing." }
    ],
    highlighted: false,
    cta: "Konsultasi Desain",
  },
  {
    id: "iot",
    name: "Pengembangan Hardware",
    icon: Cpu,
    tagline: "Pengembangan perangkat keras cerdas, sistem otomasi terintegrasi, dan solusi IoT.",
    price: "3Jt",
    features: [
      { title: "Basic (Mulai Rp 3jt - 10jt)", desc: "Purwarupa mikrokontroler skala kecil (Arduino/ESP32) untuk otomasi sederhana." },
      { title: "Menengah (Rp 10jt - 50jt)", desc: "Integrasi berbagai sensor industri, aktuator, dan dashboard pemantauan realtime." },
      { title: "Enterprise (Rp 100jt+)", desc: "Desain & manufaktur PCB custom untuk skalabilitas dan produksi massal (IoT tingkat lanjut)." }
    ],
    highlighted: false,
    cta: "Diskusikan Hardware",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = (serviceName: string) => {
    const msg = encodeURIComponent(
      `Halo Technopreneur HMIF! Saya tertarik dengan layanan *${serviceName}*. Bisa minta info lebih lanjut?`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="services" className="py-24 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Solusi pengembangan yang disesuaikan dengan skala dan tujuan bisnis Anda.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-[85rem] mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`relative flex flex-col rounded-2xl p-8 border w-full sm:max-w-md lg:max-w-[400px] flex-1 min-w-[320px] ${
                  service.highlighted
                    ? "bg-[#1A4522] border-[#1A4522] shadow-2xl shadow-primary/20 scale-105 z-10"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-4 py-1.5 bg-gold text-gray-900 text-[10px] sm:text-xs font-black tracking-widest rounded-full uppercase shadow-md">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Top Icon */}
                <div className="mb-6">
                  <Icon size={32} className={service.highlighted ? "text-gold" : "text-primary"} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 ${service.highlighted ? "text-white" : "text-gray-900"}`}>
                    {service.name}
                  </h3>
                  <p className={`text-sm mb-8 leading-relaxed font-medium ${service.highlighted ? "text-white/80" : "text-gray-500"}`}>
                    {service.tagline}
                  </p>

                   {/* Price */}
                  <div className="mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${service.highlighted ? "text-white/70" : "text-gray-400"}`}>
                      Mulai Dari
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-black ${service.highlighted ? "text-white" : "text-gray-900"}`}>
                        Rp {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-5 mb-10">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <Check size={20} className={`shrink-0 mt-0.5 ${service.highlighted ? "text-gold" : "text-primary"}`} />
                        <div className="flex flex-col">
                          <span className={`text-sm font-bold ${service.highlighted ? "text-white" : "text-gray-900"}`}>
                            {feat.title}
                          </span>
                          <span className={`text-xs mt-1.5 leading-relaxed font-medium ${service.highlighted ? "text-white/70" : "text-gray-500"}`}>
                            {feat.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  onClick={() => openWhatsApp(service.name)}
                  className={`w-full py-4 text-sm font-bold rounded-xl transition-transform active:scale-95 ${
                    service.highlighted
                      ? "bg-accent/20 border-2 border-accent text-white hover:bg-accent"
                      : "bg-white border-2 border-gray-100 text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {service.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
