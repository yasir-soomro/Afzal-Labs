"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations/variants";
import Image from "next/image";
import { FAQAccordion } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "What is your primary tech stack?",
    answer: "I specialize in React, Next.js, and TypeScript on the frontend, with Node.js and specialized Agentic AI integrations on the backend. I prefer Tailwind CSS for styling to ensure rapid, scalable design system delivery."
  },
  {
    question: "Do you take on freelance projects?",
    answer: "Yes, I take on select freelance projects that align with my expertise in building high-performance, AI-driven applications. Feel free to use the contact form to discuss your requirements."
  },
  {
    question: "What is your design philosophy?",
    answer: "I prioritize clean, brutalist-inspired minimalism with intentional typography and whitespace. The goal is to create products that feel polished and professional, avoiding unnecessary visual noise."
  },
  {
    question: "How do you integrate AI into your products?",
    answer: "I build robust integrations using modern SDKs (like @google/genai) on server-side environments, ensuring sensitive keys remain secure while delivering robust, responsive AI capabilities to the user interface."
  }
];

export function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="about" className="py-24 w-full max-w-7xl mx-auto px-4 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeUp} className="relative aspect-square w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden border border-zinc-200 group shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
          <Image 
            src="https://picsum.photos/seed/developer/800/800" 
            alt="My Profile Picture" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-zinc-900 mb-6">
            Bridging <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">Agentic Systems</span> <br/> and Production.
          </motion.h2>
          <motion.div variants={fadeUp} className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              I am a Full Stack Agentic AI Engineer specialized in architecting agentic systems that scale. With a deep foundation in both modern web technologies and applied machine learning, I build software that not only looks exceptional but operates with cognitive capabilities.
            </p>
            <p>
              From training bespoke ML models to deploying highly resilient Next.js architectures on cloud infrastructure, my focus is always on delivering production-ready value with zero compromises on performance or aesthetics.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-6 pt-8 border-t border-zinc-200">
            <div>
              <p className="text-3xl font-bold text-zinc-900 font-mono">5+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Years Engineering</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-zinc-900 font-mono">20+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">AI Models Deployed</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24 max-w-3xl mx-auto w-full"
      >
        <motion.div variants={fadeUp} className="text-center mb-10">
          <h3 className="text-2xl font-black tracking-tighter uppercase text-zinc-900 mb-2">Frequently Asked Questions</h3>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Common inquiries about my process</p>
        </motion.div>
        
        <motion.div variants={fadeUp}>
          <FAQAccordion items={faqs} />
        </motion.div>
      </motion.div>
    </section>
  );
}
