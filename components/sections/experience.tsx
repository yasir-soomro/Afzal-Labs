"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations/variants";

const experiences = [
  {
    role: "Full Stack Agentic AI Engineer",
    company: "Nexus Dynamics",
    period: "2024 - Present",
    description: "Architected a distributed machine learning pipeline processing 10M+ events daily. Led the transition to hybrid edge-cloud inference models."
  },
  {
    role: "Senior Full Stack Dev",
    company: "Quantum Software",
    period: "2021 - 2024",
    description: "Spearheaded the development of a real-time data visualization platform using React, WebGL, and Node.js. Improved system latency by 40%."
  },
  {
    role: "Software Engineer",
    company: "TechNova Solutions",
    period: "2019 - 2021",
    description: "Developed scalable RESTful APIs and microservices. Integrated early NLP features into customer service dashboards."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 w-full max-w-7xl mx-auto px-4 md:px-10">
      <div className="mb-16">
        <h2 className="text-3xl font-black tracking-tighter uppercase text-zinc-900">Journey</h2>
        <p className="mt-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">Professional Timeline</p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 before:to-transparent"
      >
        {experiences.map((exp, i) => (
          <motion.div key={i} variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-white group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#fafafa]">
              <div className="w-2 h-2 bg-zinc-300 rounded-full group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all" />
            </div>
            
            {/* Content card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg tracking-tight">{exp.role}</h3>
                  <span className="text-blue-600 text-sm font-medium">{exp.company}</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{exp.period}</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
