"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";

type FilterCategory = "all" | Project["category"];

const filters: { label: string; value: FilterCategory }[] = [
  { label: "SEMUA", value: "all" },
  { label: "WEB", value: "web" },
  { label: "APP", value: "app" },
];

// Placeholder SVG for Github to avoid dependency issues
const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#EBEAEF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Karya Terpilih
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Lebih dari sekedar desain, kami mewujudkan ide hingga menjadi nyata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2 p-1 bg-white rounded-full shadow-sm max-w-fit"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${
                  activeFilter === f.value
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-shadow"
            >
              {/* Image Area - placeholder */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group-hover:opacity-90 transition-opacity">
                <img 
                  src={`https://placehold.co/800x600/111827/ffffff?text=${encodeURIComponent(project.title)}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black tracking-widest rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 font-medium line-clamp-2">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-gray-600 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-gray-400 text-xs font-semibold">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary text-sm font-bold hover:underline"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 text-sm font-semibold hover:text-gray-900 transition-colors"
                    >
                      <IconGithub /> Repository
                    </a>
                  )}
                  {!project.liveUrl && !project.repoUrl && (
                    <span className="text-gray-400 text-sm font-semibold">Proyek Privat</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
