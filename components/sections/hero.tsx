"use client";

import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full max-w-7xl mx-auto px-4 md:px-10">
      {/* Background glow effects */}
      <div className="absolute top-0 right-[-100px] w-96 h-96 md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-96 h-96 md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-zinc-500" />
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">System Ready • v2.0.0</span>
        </motion.div>
        
        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">
          Building <br/> <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Intelligent</span> Web Systems
        </motion.h1>
        
        <motion.p variants={fadeIn} className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Afzal Labs architects scalable, AI-powered applications and premium digital experiences. We bridge the gap between complex engineering and elegant design.
        </motion.p>
        
        <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-full hover:bg-zinc-200 transition-colors">
            Explore Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#github" className="flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-white/10 transition-colors">
            View Source
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
