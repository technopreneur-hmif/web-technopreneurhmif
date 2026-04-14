import Link from "next/link";
import { Mail } from "lucide-react";

// Inline SVG brand icons for light theme
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const navGroups = [
  {
    title: "Navigasi",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Kami", href: "#about" },
      { label: "Layanan", href: "#services" },
      { label: "Portofolio", href: "#portfolio" },
      { label: "Galeri", href: "#gallery" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "Landing Page", href: "#services" },
      { label: "Company Profile", href: "#services" },
      { label: "Web App Custom", href: "#services" },
      { label: "Mobile App", href: "#services" },
      { label: "Desain UI/UX", href: "#services" },
    ],
  },
  {
    title: "Kontak",
    links: [
      { label: "Andryano (WA)", href: "https://wa.me/6281234567890" },
      { label: "Ahmad Ali (WA)", href: "https://wa.me/6289876543210" },
      { label: "Email Divisi", href: "mailto:technopreneur@hmif.ac.id" },
      { label: "Mulai Proyek", href: "#contact" },
    ],
  },
];

const socials = [
  { Icon: IconInstagram, href: "https://instagram.com/technopreneur_hmif", label: "Instagram" },
  { Icon: IconGithub, href: "https://github.com/technopreneur-hmif", label: "GitHub" },
  { Icon: IconLinkedin, href: "#", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:technopreneur@hmif.ac.id", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-100 pb-12 mb-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-gray-900 font-bold text-lg tracking-tight">technopreneur</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Divisi Technopreneur HMIF — membangun produk digital yang bekerja untuk bisnis nyata.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-50 hover:bg-primary/10 hover:text-primary text-gray-500 flex items-center justify-center transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-gray-900 text-sm font-bold uppercase tracking-widest mb-6">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-primary text-sm font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} Technopreneur HMIF. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-medium">
            Himpunan Mahasiswa Informatika
          </p>
        </div>
      </div>
    </footer>
  );
}
