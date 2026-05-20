"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { ArrowRight, Terminal, BrainCircuit, Activity, Cpu } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";
import dynamic from "next/dynamic";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

const HeroLottie = dynamic(() => import("@/components/ui/hero-lottie").then(mod => mod.HeroLottie), { ssr: false });

function MagneticCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const yText = useTransform(scrollY, [0, 1000], [0, 100]);
  const yCards = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full max-w-7xl mx-auto px-4 md:px-10 min-h-[90vh] flex items-center">
      {/* Background glow effects - Animated & Parallax */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-100px] md:right-[100px] w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-100px] left-[-100px] md:left-[100px] w-96 h-96 md:w-[600px] md:h-[600px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none" 
      />
      
      <div className="flex w-full relative z-10 lg:flex-row flex-col items-center">
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
            }
          }}
          style={{ y: yText }}
          className="w-full lg:w-3/5 relative z-20"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }} 
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="flex items-center gap-2 text-xs font-mono text-blue-700 bg-blue-100/50 uppercase tracking-widest px-4 py-2 border border-blue-200 rounded-full shadow-sm backdrop-blur-sm">
              <BrainCircuit className="w-4 h-4" />
              Full Stack Agentic AI Engineer
            </span>
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] text-zinc-900"
          >
            Architecting <br/>
            <Typewriter /> <br/>
            Web Systems
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }} 
            className="mt-8 text-lg md:text-xl text-zinc-600 max-w-xl leading-relaxed"
          >
            As a Full Stack Agentic AI Engineer, I specialize in architecting highly scalable, premium Next.js applications driven by autonomous AI agents and cognitive capabilities. 
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }}  
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact"
                onClick={() => trackEvent("hero_cta_clicked", { action: "initialize_project" })}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-blue-700 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] transition-all h-full"
              >
                Initialize Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/experience"
                onClick={() => trackEvent("hero_cta_clicked", { action: "view_architecture" })}
                className="flex items-center justify-center px-8 py-4 bg-white border border-zinc-200 text-zinc-800 font-bold uppercase tracking-wider text-sm rounded-full hover:bg-zinc-50 hover:shadow-md transition-all h-full"
              >
                View Architecture
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Floating Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ y: yCards }}
          className="hidden lg:flex w-full lg:w-2/5 relative h-[500px] items-center justify-center mt-20 lg:mt-0"
        >
          {/* Main Visual Node */}
          <motion.div
            animate={{ y: [0, -20, 0], rotateZ: [12, -5, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[300px] h-[300px] border-[1px] border-blue-200/50 rounded-[40px] flex items-center justify-center bg-gradient-to-tr from-blue-50/50 to-indigo-50/20 shadow-2xl backdrop-blur-xl overflow-hidden cursor-pointer"
            >
               <HeroLottie />
            </motion.div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 z-20"
          >
            <MagneticCard className="bg-white/90 backdrop-blur-md border border-zinc-200 p-4 rounded-xl shadow-xl flex items-center gap-4 cursor-pointer hover:border-blue-300 transition-colors">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Inference Engine</p>
                <p className="font-bold text-zinc-900">Optimized</p>
              </div>
            </MagneticCard>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 z-20"
          >
            <MagneticCard className="bg-white/90 backdrop-blur-md border border-zinc-200 p-4 rounded-xl shadow-xl flex items-center gap-4 cursor-pointer hover:border-blue-300 transition-colors">
              <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System Latency</p>
                <p className="font-bold text-zinc-900">12ms P99</p>
              </div>
            </MagneticCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
