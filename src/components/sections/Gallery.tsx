"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  {
    id: 1,
    url: "https://placehold.co/800x600/e2e8f0/475569?text=Tim+Technopreneur",
    alt: "Tim Technopreneur HMIF",
    title: "Sesi Diskusi Internal",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    url: "https://placehold.co/600x600/e2e8f0/475569?text=Klien+Meeting",
    alt: "Meeting Klien",
    title: "Presentasi Bersama Klien UMKM",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    url: "https://placehold.co/600x600/e2e8f0/475569?text=Developer+Day",
    alt: "Developer Day",
    title: "Hackathon & R&D",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    url: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Handover",
    alt: "Handover",
    title: "Serah Terima Proyek",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 5,
    url: "https://placehold.co/600x800/e2e8f0/475569?text=Award",
    alt: "Award",
    title: "Penghargaan Inovasi",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Galeri
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Potret kebersamaan tim kami dan momen kolaborasi sukses dengan para klien.
          </p>
        </motion.div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${photo.span}`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg tracking-wide">
                  {photo.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
