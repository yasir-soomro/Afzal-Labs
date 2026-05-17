import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations/variants";

const techList = [
  "Next.js", "TypeScript", "React", "Node.js", "Python", 
  "TensorFlow", "PyTorch", "AWS", "GCP", "PostgreSQL", 
  "Redis", "Docker", "Kubernetes", "GraphQL"
];

export function TechStack() {
  return (
    <section className="py-10 w-full overflow-hidden border-y border-zinc-200 bg-white shadow-[0_4px_40px_-20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center">
        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">Powered by Industry Standards</p>
        <div className="w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
            {techList.map((tech, i) => (
              <span key={i} className="text-sm md:text-base font-bold text-zinc-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
