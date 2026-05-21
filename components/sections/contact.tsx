"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp } from "@/animations/variants";
import { Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { trackEvent } from "@/lib/analytics";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  document?: FileList;
};

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    mode: "onChange",
    defaultValues: {
      message: ""
    }
  });

  const messageValue = watch("message");
  const messageLength = messageValue ? messageValue.length : 0;
  const maxMessageLength = 1000;

  const onSubmit = async (data: ContactFormData) => {
    trackEvent("contact_form_submitted", { hasMessage: !!data.message });
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Payload data:", data);
    toast.success("Payload successfully transmitted. I'll respond shortly.");
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 w-full max-w-7xl mx-auto px-4 md:px-10 relative">
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 p-6 sm:p-8 md:p-16 text-center"
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
          <p className="text-zinc-600 mb-8 md:mb-10 text-base md:text-lg">
            Ready to architect the next-generation system? Let&apos;s discuss your project requirements and technical constraints.
          </p>
          
          <div className="relative min-h-[520px]">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                >
                  <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div className="flex justify-between items-baseline mb-1">
                <label htmlFor="message" className="sr-only">Message Payload</label>
                <span className={`text-[10px] font-mono tracking-widest uppercase ${messageLength > maxMessageLength * 0.9 ? 'text-orange-500' : 'text-zinc-500'}`}>
                  {messageLength} / {maxMessageLength}
                </span>
              </div>
              <textarea 
                id="message"
                placeholder="Message Payload" 
                rows={4}
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", { 
                  required: "Message payload required",
                  maxLength: {
                    value: maxMessageLength,
                    message: "Message payload exceeds maximum length limit"
                  },
                  validate: (value) => value.trim().length > 0 || "Message payload cannot be empty"
                })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-300 transition-all font-mono text-sm resize-none"
              />
              {errors.message && <p className="text-rose-500 font-mono text-[10px] uppercase tracking-widest mt-1 ml-1" role="alert">{errors.message.message}</p>}
            </div>
            <div>
              <label htmlFor="document" className="sr-only">Technical Requirements / Project Docs</label>
              <input 
                id="document"
                type="file" 
                accept=".pdf,.doc,.docx,.txt"
                aria-invalid={errors.document ? "true" : "false"}
                {...register("document", { 
                  validate: (value) => {
                    if (!value || value.length === 0) return true;
                    const file = value[0];
                    const maxSize = 5 * 1024 * 1024; // 5MB
                    if (file.size > maxSize) return "File size must be less than 5MB";
                    const fileExt = file.name.split('.').pop()?.toLowerCase();
                    if (!['pdf', 'doc', 'docx', 'txt'].includes(fileExt || '')) return "Only PDF, DOC, DOCX, and TXT files are allowed";
                    return true;
                  }
                })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 text-zinc-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-300 transition-all font-mono text-sm file:mr-4 file:py-3 file:px-4 file:rounded-l-lg file:border-0 file:border-r file:border-zinc-200 file:text-xs file:font-bold file:uppercase file:tracking-wider file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 cursor-pointer p-0"
              />
              {errors.document && <p className="text-rose-500 font-mono text-[10px] uppercase tracking-widest mt-1 ml-1" role="alert">{errors.document.message}</p>}
              <p className="text-zinc-500 font-mono text-[10px] tracking-widest mt-2 ml-1">OPTIONAL: ATTACH SPECS OR ROSTER. MAX 5MB (.PDF, .DOCX, .TXT)</p>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-zinc-800 hover:shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed"
            >
              <div className={`absolute inset-0 bg-blue-600/20 origin-left transition-transform duration-[800ms] ease-out ${isSubmitting ? 'scale-x-100' : 'scale-x-0'} pointer-events-none`} />
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                  <span className="relative z-10">Transmitting...</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Transmit Payload</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </>
              )}
            </button>
          </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-24 h-24 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-inner"
                  >
                    <CheckCircle2 className="w-12 h-12" />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-2"
                  >
                    Transmission Successful
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-zinc-500 font-mono tracking-widest text-xs uppercase"
                  >
                    Payload received. Standby for response.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
