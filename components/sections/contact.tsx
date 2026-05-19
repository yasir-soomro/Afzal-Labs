"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/animations/variants";
import { Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { trackEvent } from "@/lib/analytics";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    trackEvent("contact_form_submitted", { hasMessage: !!data.message });
    // Implement actual transmission logic here
    console.log("Payload data:", data);
  };

  return (
    <section id="contact" className="py-24 w-full max-w-7xl mx-auto px-4 md:px-10 relative">
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 p-8 md:p-16 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mb-8 shadow-sm">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-zinc-900 mb-6">
            Initialize Contact
          </h2>
          <p className="text-zinc-600 mb-10 text-lg">
            Ready to architect the next-generation system? Let&apos;s discuss your project requirements and technical constraints.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Name" 
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-300 transition-all font-mono text-sm"
                />
                {errors.name && <p className="text-rose-500 font-mono text-[10px] uppercase tracking-widest mt-1 ml-1" role="alert">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Email" 
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email format"
                    }
                  })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-300 transition-all font-mono text-sm"
                />
                {errors.email && <p className="text-rose-500 font-mono text-[10px] uppercase tracking-widest mt-1 ml-1" role="alert">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message Payload</label>
              <textarea 
                id="message"
                placeholder="Message Payload" 
                rows={4}
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", { required: "Message payload required" })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-300 transition-all font-mono text-sm resize-none"
              />
              {errors.message && <p className="text-rose-500 font-mono text-[10px] uppercase tracking-widest mt-1 ml-1" role="alert">{errors.message.message}</p>}
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-zinc-800 hover:shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Transmitting..." : "Transmit Payload"} {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
