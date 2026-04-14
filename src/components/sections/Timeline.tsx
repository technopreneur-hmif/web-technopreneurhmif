"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { milestones } from "@/data/timeline";

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Perjalanan Kami
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200" />

          <div className="flex flex-col gap-16">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
                >
                  {/* Left Content */}
                  <div className={`md:w-1/2 ${isEven ? "md:text-right md:pr-12" : "md:order-2 md:text-left md:pl-12"} w-full pl-12 md:pl-0`}>
                     <div className="flex flex-col gap-2">
                        <span className="text-5xl font-black text-gray-100 uppercase tracking-tighter">
                          {milestone.year}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            {milestone.description}
                          </p>
                        </div>
                     </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 border-surface z-10 -translate-x-1/2 md:translate-x-0">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-md">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                  
                  {/* Empty Right Content for layout balancing natively handled by flex/order-2 */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
