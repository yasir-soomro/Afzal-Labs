"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/animations/variants";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 w-full max-w-7xl mx-auto px-4 md:px-10 relative">
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 p-8 md:p-16 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-purple-600/5 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-6">
            Initialize Contact
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Ready to architect the next-generation system? Let's discuss your project requirements and technical constraints.
          </p>
          
          <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-mono text-sm"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-mono text-sm"
              />
            </div>
            <textarea 
              placeholder="Message Payload" 
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-mono text-sm resize-none"
            />
            <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-zinc-200 transition-colors">
              Transmit Payload <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
