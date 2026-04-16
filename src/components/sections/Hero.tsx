"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Volume2 } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                Divisi Technopreneur - Departemen Keprofesian HMIF
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6"
            >
              KAMI BANGUN<br />
              Produk Digital<br />
              <span className="text-primary italic font-serif tracking-normal">yang Bekerja</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg font-medium"
            >
              Solusi pengembangan website dan aplikasi mobile yang dirancang dengan presisi akademis dan eksekusi profesional untuk pertumbuhan bisnis Anda.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("services")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Lihat Layanan <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-xl transition-all duration-200"
              >
                <MessageCircle size={18} className="text-gray-500" /> Konsultasi Gratis
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT VISUAL ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:block relative"
          >
            {/* The Image Container - frame kotak (aspect-square) */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 aspect-square w-full max-w-[480px] mx-auto bg-white flex items-center justify-center border-2 border-gray-100">
               {/* Faint subtle grid background for the frame */}
               <div className="absolute inset-0 bg-gray-50 opacity-50" style={{ backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
               
               {/* Decorative structural rings */}
               <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer Ring Path */}
                  <div className="absolute w-[340px] h-[340px] rounded-full border border-gray-200" />
                  {/* Middle Ring Path */}
                  <div className="absolute w-[250px] h-[250px] rounded-full border border-gray-200 border-dashed" />
                  {/* Inner Ring Path */}
                  <div className="absolute w-[160px] h-[160px] rounded-full border border-gray-200" />

                  {/* Center orb (The Sun/Logo) */}
                  <div
                    className="relative w-28 h-28 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: "radial-gradient(circle, rgba(37,103,30,0.15) 0%, transparent 100%)",
                      boxShadow: "0 0 60px rgba(37,103,30,0.15)",
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(37,103,30,0.5)] border-4 border-white">
                      <span className="text-white text-3xl font-extrabold">T</span>
                    </div>
                  </div>

                  {/* ===== PLANETARY ORBITS ===== */}
                  
                  {/* Inner Orbit (Node.js) - 20s */}
                  <div className="absolute w-[160px] h-[160px] pointer-events-none" style={{ animation: "spin 20s linear infinite" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100" style={{ animation: "spin 20s linear infinite reverse" }}>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" className="w-5 h-5 object-contain" />
                    </div>
                  </div>

                  {/* Middle Orbit (React, Next.js, Figma) - 30s */}
                  {[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                  ].map((src, i) => (
                    <div key={i} className="absolute w-[250px] h-[250px] pointer-events-none" style={{ animation: `spin 30s linear infinite -${i * 10}s` }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100" style={{ animation: `spin 30s linear infinite reverse -${i * 10}s` }}>
                        <img src={src} className="w-6 h-6 object-contain" />
                      </div>
                    </div>
                  ))}

                  {/* Outer Orbit (Laravel, Golang, Python) - 45s */}
                  {[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  ].map((src, i) => (
                    <div key={i} className="absolute w-[340px] h-[340px] pointer-events-none" style={{ animation: `spin 45s linear infinite -${i * 15}s` }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100" style={{ animation: `spin 45s linear infinite reverse -${i * 15}s` }}>
                        <img src={src} className="w-8 h-8 object-contain" />
                      </div>
                    </div>
                  ))}
               </div>

              {/* Ready Tag inside the image area (bottom left) */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-3 px-5 py-3 bg-gold shadow-lg shadow-gold/20 rounded-2xl border border-white/50 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                    <Volume2 size={16} className="text-gray-900" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-extrabold text-sm leading-tight">Siap Bekerja</div>
                    <div className="text-gray-800 text-xs font-semibold">Open project baru</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
