"use client";

import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Neural Synthesis",
    category: "AI SaaS Platform",
    image: "https://picsum.photos/seed/neural/800/600",
    stats: { performance: "100", size: "~80KB" }
  },
  {
    title: "Data Vault UI",
    category: "Enterprise Dashboard",
    image: "https://picsum.photos/seed/vault/800/600",
    stats: { performance: "98", size: "~140KB" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 w-full max-w-7xl mx-auto px-4 md:px-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-200 pb-6">
        <div>
          <h2 className="text-3xl font-black tracking-tighter uppercase text-zinc-900">Featured Work</h2>
          <p className="mt-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">Production Deployments</p>
        </div>
        <a href="#" className="mt-4 md:mt-0 text-xs font-mono text-blue-600 hover:text-blue-700 uppercase tracking-widest flex items-center gap-1 group">
          View All Archive 
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
        </a>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={fadeIn} className="group cursor-pointer">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-zinc-200 shadow-sm bg-zinc-100 group-hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply group-hover:bg-transparent transition-all z-10" />
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-white/95 via-white/80 to-transparent z-20 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="font-mono text-[10px] uppercase">
                  <span className="text-zinc-500">Lighthouse</span>
                  <p className="font-bold text-emerald-600">{project.stats.performance}</p>
                </div>
                <div className="font-mono text-[10px] uppercase text-right">
                  <span className="text-zinc-500">Bundle</span>
                  <p className="font-bold text-blue-600">{project.stats.size}</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-1 flex items-center justify-between">
              {project.title}
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h3>
            <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase">{project.category}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
