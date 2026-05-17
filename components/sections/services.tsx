"use client";

import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Brain, Code2, Cpu } from "lucide-react";

const services = [
  {
    id: "01",
    title: "AI Integration",
    description: "Embedding large language models, computer vision, and predictive logic into modern product architectures.",
    icon: Brain
  },
  {
    id: "02",
    title: "Scalable Architecture",
    description: "Designing resilient backend systems and microservices capable of handling high-throughput production loads.",
    icon: Cpu
  },
  {
    id: "03",
    title: "Full-Stack Dev",
    description: "Crafting polished, performant user interfaces paired with robust, server-rendered React applications.",
    icon: Code2
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 w-full max-w-7xl mx-auto px-4 md:px-10 relative mt-20">
      <div className="mb-12">
        <h2 className="text-3xl font-black tracking-tighter uppercase text-white">Capabilities</h2>
        <p className="mt-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">What we do best</p>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={fadeIn} className="p-8 bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/5 group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-mono text-blue-500 font-bold tracking-widest">{service.id}.</span>
              <service.icon className="w-6 h-6 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{service.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
