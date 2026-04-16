"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, MonitorSmartphone, LayoutTemplate, CopySlash } from "lucide-react";

const WA_NUMBER = "6281234567890";

const services = [
  {
    id: "landing-page",
    name: "Landing Page",
    icon: LayoutTemplate,
    tagline: "Website satu halaman fokus pada konversi dan visual yang menarik.",
    price: "2.5Jt",
    features: [
      "Responsive Design",
      "SEO Foundation",
      "UI Guideline",
    ],
    highlighted: false,
    cta: "Pilih Paket",
  },
  {
    id: "company-profile",
    name: "Company Profile",
    icon: MonitorSmartphone,
    badge: "PALING POPULER",
    tagline: "Situs valid digital profesional untuk membangun kepercayaan brand Anda.",
    price: "5Jt",
    features: [
      "Up to 5 Pages",
      "CMS (Admin Panel)",
      "1 Year Support",
    ],
    highlighted: true,
    cta: "Pilih Paket",
  },
  {
    id: "web-app",
    name: "Web Application",
    icon: CopySlash,
    tagline: "Sistem kompleks dengan basis data dan function khusus kebutuhan.",
    price: "10Jt",
    features: [
      "Custom Logic",
      "API Integration",
      "Scalable Arch",
    ],
    highlighted: false,
    cta: "Konsultasi",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`relative flex flex-col rounded-2xl p-8 border ${
                  service.highlighted
                    ? "bg-[#155724] border-[#155724] shadow-2xl shadow-primary/20 scale-105 z-10"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 bg-gold text-gray-900 text-[10px] font-black tracking-widest rounded-full uppercase shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Top Icon */}
                <div className="mb-6">
                  <Icon size={28} className={service.highlighted ? "text-white" : "text-gold"} />
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
                      Mulai
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-black ${service.highlighted ? "text-white" : "text-gray-900"}`}>
                        {service.price}
                      </span>
                      <span className={`text-sm font-bold ${service.highlighted ? "text-white/60" : "text-gray-400"}`}>
                        /proyek
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-4 mb-10">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <Check size={18} className={service.highlighted ? "text-gold" : "text-primary"} />
                        <span className={`text-sm font-semibold ${service.highlighted ? "text-white" : "text-gray-600"}`}>
                          {feat}
                        </span>
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
