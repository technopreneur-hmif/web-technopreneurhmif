"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Timeline />
        <Contact />
      </main>
      <Footer />

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#25671E] hover:bg-[#2d7d24] text-white flex items-center justify-center shadow-lg shadow-[#25671E]/30 transition-all duration-300 hover:-translate-y-0.5 ${
          showBackTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={16} />
      </button>
    </>
  );
}
