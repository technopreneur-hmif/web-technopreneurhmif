"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Terminal } from "lucide-react";

// Inline SVGs for brand logos to avoid lucide-react limitations
const IconReact = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="text-[#61DAFB]">
    <path d="M11.954 4.545c-2.43 0-4.8.272-7.067.798C3.12 5.766 1.838 6.474 1.05 7.41c-.818.972-.94 2.12-.345 3.124.64 1.084 1.84 1.867 3.42 2.378 1.57.507 3.415.772 5.378.772 2.228 0 4.398-.248 6.48-.727 1.82-.416 3.19-1.077 3.99-1.93.818-.87.94-1.92.345-2.823-.64-1.085-1.84-1.868-3.42-2.378-1.57-.507-3.414-.772-5.378-.772a.669.669 0 010-1.338c2.274 0 4.417.31 6.27.89 1.874.586 3.328 1.516 4.148 2.802.775 1.218.665 2.65-.24 3.864-.897 1.205-2.483 2.115-4.57 2.686-2.072.568-4.542.855-7.168.855-2.485 0-4.88-.266-7.14-.78-2.222-.505-3.83-1.39-4.717-2.585-.888-1.198-1.004-2.628-.235-3.845.815-1.285 2.26-2.215 4.126-2.812 1.843-.59 3.97-.9 6.223-.9a.669.669 0 010 1.338zm.052 2.117c-2.054 0-4.045.248-5.94.735-1.742.447-3.05 1.134-3.818 1.99-.773.858-.89 1.914-.325 2.82.606 1.034 1.745 1.782 3.254 2.27 1.5.485 3.265.74 5.15.74a.669.669 0 010 1.339c-2.176 0-4.22-.31-6.002-.887C2.52 14.288 1.13 13.398.347 12.167c-.742-1.164-.636-2.532.23-3.693.858-1.152 2.374-2.02 4.368-2.568 1.98-.544 4.337-.818 6.84-.818 2.372 0 4.655.253 6.808.742 2.118.48 3.652 1.326 4.498 2.464.845 1.14.957 2.502.224 3.66-.78 1.226-2.155 2.113-3.926 2.658-1.76.54-3.815.813-5.938.813a.669.669 0 010-1.338c1.884 0 3.642-.257 5.137-.743 1.493-.487 2.613-1.233 3.21-2.267.55-.904.436-1.954-.32-2.805-.75-.845-2.03-1.52-3.742-1.963-1.87-.48-3.834-.72-5.86-.72zM12 10.33a1.67 1.67 0 100 3.34 1.67 1.67 0 000-3.34z"/>
  </svg>
);
const IconNext = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="text-gray-900">
     <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.99 13.916L7.493 8.353h1.8L12.446 14v1.916h-1.436zm4.195-2.483l-3.337-4.473h1.565l2.6 3.518V8.353h1.436v7.563H15.205z"/>
  </svg>
);
const IconFigma = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="text-[#F24E1E]">
     <path d="M12 2a3.333 3.333 0 000 6.667H8.667A3.333 3.333 0 0112 2zm0 6.667a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm-3.333 0A3.333 3.333 0 005.333 12a3.333 3.333 0 003.334 3.333h3.333V8.667H8.667zm0 6.666a3.333 3.333 0 100 6.667 3.333 3.333 0 000-6.667z"/>
  </svg>
);
const IconNode = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="text-[#48A111]">
     <path d="M12 2.336l-8.627 4.966v9.914L12 22.18l8.627-4.964V7.302L12 2.336zm4.847 13.315H15.34l-3.32-6.177v6.177H10.51V8.406h1.503l3.325 6.182V8.406h1.51v7.245z"/>
  </svg>
);

const techStack = [
  { name: "REACT", Icon: IconReact },
  { name: "NEXT.JS", Icon: IconNext },
  { name: "FIGMA", Icon: IconFigma },
  { name: "NODE.JS", Icon: IconNode },
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {techStack.map(({ name, Icon }, i) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-colors gap-3"
                >
                  <Icon />
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
