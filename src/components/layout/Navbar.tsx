"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Layanan", href: "services" },
  { label: "Portofolio", href: "portfolio" },
  { label: "Kontak", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map((l) => l.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <span className="text-gray-900 font-bold text-lg tracking-tight">
              Techno<span className="text-primary">preneur</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-500"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:block px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Hubungi Kami
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-gray-900/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 md:hidden flex flex-col pt-20 px-6 pb-8 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-left text-lg font-medium transition-colors ${
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
        
        <div className="mt-auto pt-8 border-t border-gray-100">
          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </>
  );
}
