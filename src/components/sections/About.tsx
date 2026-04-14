"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Terminal } from "lucide-react";

const techStack = [
  { name: "REACT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "NEXT.JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "FIGMA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "NODE.JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "LARAVEL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "GOLANG", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
  { name: "PYTHON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className="py-24 bg-surface-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="mb-8">
               <span className="inline-block text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
                TENTANG KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                Akademis &amp; Inovatif
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-lg font-medium">
                Technopreneur HMIF adalah divisi pengembang perangkat lunak di bawah Himpunan Mahasiswa Informatika. Kami menggabungkan ketelitian akademis dengan kelincahan startup untuk menghasilkan produk digital berkualitas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Visi */}
              <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-l-primary border-t border-b border-r border-gray-100 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-gray-900 font-bold mb-2">Visi</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Menjadi pusat inovasi teknologi mahasiswa yang diakui secara profesional di kancah nasional.
                </p>
              </div>

              {/* Misi */}
              <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-l-primary border-t border-b border-r border-gray-100 relative group overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-gray-900 font-bold mb-2">Misi</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Memberikan layanan pengembangan produk dari sumber tinggi sekaligus menjadi wadah akademik serta skill anggota.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-10 lg:pt-0"
          >
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6 text-center lg:text-left">
              CORE TECH STACK
            </p>

            {/* Tech Stack Grid */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-10">
              {techStack.map(({ name, src }) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-colors gap-3 w-[120px] sm:w-[140px]"
                >
                  <img src={src} alt={name} className="w-8 h-8 object-contain" />
                  <span className="text-gray-600 text-xs font-bold tracking-widest">{name}</span>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="relative bg-[#1A4522] rounded-2xl p-8 overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-primary/20">
               {/* Decorative background element inside banner */}
               <Terminal className="absolute -right-4 -bottom-4 text-white/5" size={120} />
               
              <div className="relative z-10 text-center sm:text-left">
                <h3 className="text-white font-bold text-xl mb-2">Butuh Konsultasi Teknis?</h3>
                <p className="text-white/80 text-sm max-w-sm">
                  Diskusikan ide proyek Anda dengan dedikasi tim expert kami. Konsultasi gratis.
                </p>
              </div>
              
              <button
                onClick={() => scrollTo("contact")}
                className="relative z-10 shrink-0 px-6 py-3 bg-gold hover:bg-gold-light text-gray-900 font-bold rounded-lg transition-colors text-sm shadow-md"
              >
                Mulai Sekarang
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
