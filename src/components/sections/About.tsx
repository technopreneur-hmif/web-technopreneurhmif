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
  { name: "MYSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
  { name: "POSTGRESQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MONGODB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "GIT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GITHUB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
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
                Technopreneur HMIF
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

          </motion.div>
        </div>

        {/* CTA Banner (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-r from-[#1A4522] to-primary rounded-3xl p-10 sm:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/30">
            {/* Decorative background elements inside banner */}
            <Terminal className="absolute -right-10 -bottom-10 text-white/10 rotate-12" size={180} />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10 text-center lg:text-left max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-4 border border-gold/30">
                Langkah Pertama Menuju Kesuksesan
              </span>
              <h3 className="text-white font-extrabold text-2xl sm:text-3xl mb-4 leading-tight">
                Punya Ide Brilian Tapi Bingung Cara Mewujudkannya?
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Jangan biarkan gagasan inovatif Anda hanya menjadi wacana. Bersama tim expert Technopreneur HMIF, mari ubah visi Anda menjadi produk digital mutakhir yang berdampak nyata. Kami siap mendengar, merancang, dan mengeksekusi idemu dengan standar profesional!
              </p>
            </div>
            
            <button
              onClick={() => scrollTo("contact")}
              className="relative z-10 shrink-0 px-8 py-4 bg-gold hover:bg-[#FACC15] text-gray-900 font-extrabold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-base shadow-xl flex items-center justify-center gap-3 group"
            >
              Mari Berdiskusi
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
