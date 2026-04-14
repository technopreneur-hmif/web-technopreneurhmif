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
                AKADEMIS &amp; INOVATIF - HMIF
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
            {/* The Image Container mimicking the Figma reference */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/3] w-full max-w-lg mx-auto bg-gray-900 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
               
               {/* Decorative inner elements symbolizing technology */}
               <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-64 h-64 border border-gray-600 rounded-full animate-spin-slow absolute" />
                  <div className="w-48 h-48 border border-gray-500 rounded-full absolute" />
                  <div className="w-32 h-32 border border-gray-400 rounded-full absolute" />
                  <div className="w-16 h-16 bg-gray-300 rounded-full absolute blur-xl animate-pulse" />
               </div>

              {/* Ready Tag inside the image area (bottom left) */}
              <div className="absolute bottom-6 left-0">
                <div className="flex items-center gap-3 px-5 py-3 bg-gold shadow-lg shadow-gold/30">
                  <Volume2 size={18} className="text-gray-900" />
                  <div>
                    <div className="text-gray-900 font-bold text-sm leading-tight">Siap Bekerja</div>
                    <div className="text-gray-800 text-xs">Open untuk project baru</div>
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
