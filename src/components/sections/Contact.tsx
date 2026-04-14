"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, User } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo Technopreneur HMIF,\n\nNama: ${form.name}\nEmail: ${form.email}\nLayanan: ${form.service}\n\nPesan:\n${form.message}`
    );
    window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-surface-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* L E F T */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Mulai Kolaborasi
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md font-medium">
              Punya ide proyek atau pertanyaan teknis? Tim kami siap mendengarkan dan menemukan solusi optimal.
            </p>

            <div className="flex flex-col gap-4">
              {/* Contact Card 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-200 shadow-sm shrink-0">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm">Andryano</h4>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Project Manager</div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs font-semibold">
                    <Phone size={12} /> +62 812 3456 7890
                  </div>
                </div>
              </div>

               {/* Contact Card 2 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-200 shadow-sm shrink-0">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm">Ahmad Ali</h4>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Technical Lead</div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs font-semibold">
                    <Mail size={12} /> technopreneur@hmif.ac.id
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* R I G H T (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-wider mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#FAF7F7] border border-gray-200 text-gray-900 text-sm rounded-lg px-4 py-3.5 outline-none focus:border-primary transition-colors"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                 </div>
                 <div>
                    <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-wider mb-2">Alamat Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#FAF7F7] border border-gray-200 text-gray-900 text-sm rounded-lg px-4 py-3.5 outline-none focus:border-primary transition-colors"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                 </div>
              </div>

              <div>
                <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-wider mb-2">Tipe Layanan</label>
                <select
                  required
                  className="w-full bg-[#FAF7F7] border border-gray-200 text-gray-900 text-sm rounded-lg px-4 py-3.5 outline-none focus:border-primary transition-colors appearance-none"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="" disabled hidden>Pilih layanan yang Anda butuhkan...</option>
                  <option value="Landing Page">Landing Page (- Rp 2.5 Jt)</option>
                  <option value="Company Profile">Company Profile (- Rp 5 Jt)</option>
                  <option value="Web App">Web Application Custom</option>
                  <option value="Lainnya">Lainnya / Konsultasi Dulu</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-wider mb-2">Pesan</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ceritakan detail proyek Anda..."
                  className="w-full bg-[#FAF7F7] border border-gray-200 text-gray-900 text-sm rounded-lg px-4 py-3.5 outline-none focus:border-primary transition-colors resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white font-bold text-sm tracking-wide py-4 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl active:scale-95"
              >
                KIRIM PESAN
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
