"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessagesSquare, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    label: "Langkah 1",
    title: "Diskusi & Analisis",
    description:
      "Kami mendengarkan kebutuhan dan tujuan Anda, lalu menyusun rencana proyek yang jelas.",
  },
  {
    icon: Code,
    label: "Langkah 2",
    title: "Desain & Pengembangan",
    description:
      "Solusi dibangun dengan teknologi yang paling sesuai dengan kebutuhan proyek Anda.",
  },
  {
    icon: Rocket,
    label: "Langkah 3",
    title: "Pengujian & Peluncuran",
    description:
      "Demo berkala, masukan dari Anda, dan peluncuran proyek tepat waktu.",
  },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
            Cara Kami Bekerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Membangun Bersama, Langkah demi Langkah
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Kami membuat proses pengembangan proyek menjadi transparan dan efisien — pekerjaan rumit kami pecah menjadi langkah-langkah sederhana yang mudah dipantau.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Garis penghubung (desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-primary/20 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:-translate-y-1">
                    <Icon size={26} />
                  </div>
                  <span className="mt-6 text-primary text-xs font-black tracking-widest uppercase">
                    {step.label}
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold text-gray-900 transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed font-medium max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
