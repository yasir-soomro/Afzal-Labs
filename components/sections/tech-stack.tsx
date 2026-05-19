"use client";

import { motion } from "motion/react";

const techList = [
  "Next.js", "TypeScript", "React", "Node.js", "Python", 
  "TensorFlow", "PyTorch", "AWS", "GCP", "PostgreSQL", 
  "Redis", "Docker", "Kubernetes", "GraphQL"
];

// Duplicate list to create a seamless loop
const duplicatedTechList = [...techList, ...techList, ...techList];

export function TechStack() {
  return (
    <section className="py-10 w-full overflow-hidden border-y border-zinc-200 bg-white shadow-[0_4px_40px_-20px_rgba(0,0,0,0.05)] relative">
      <div className="absolute inset-0 bg-blue-50/30 opacity-50 pointer-events-none" />
      <div className="max-w-[100vw] mx-auto flex flex-col items-center">
        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6 relative z-10">Powered by Industry Standards</p>
        <div className="w-full relative flex overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex gap-12 sm:gap-20 items-center px-6 whitespace-nowrap min-w-max"
          >
            {duplicatedTechList.map((tech, i) => (
              <span key={i} className="text-xl md:text-2xl font-black tracking-tight text-zinc-300 hover:text-blue-600 transition-colors uppercase cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
