"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Mail, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import Lottie from "lottie-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successAnimation, setSuccessAnimation] = useState<any>(null);

  useEffect(() => {
    let ignore = false;
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/2705/lottie.json')
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setSuccessAnimation(data);
        }
      })
      .catch(console.error);
    return () => {
      ignore = true;
    };
  }, []);

  const validateEmail = (email: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("error");
      setErrorMessage("Email address is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    trackEvent("newsletter_subscribe_attempt", { email });

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    trackEvent("newsletter_subscribe_success", { email });
    setEmail("");

    // Reset status after a few seconds
    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  };

  return (
    <section className="py-20 w-full max-w-7xl mx-auto px-4 md:px-10 mt-10 mb-10 border-t border-zinc-200">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center justify-center p-3 bg-zinc-100 rounded-full">
          <Mail className="w-6 h-6 text-zinc-900" />
        </motion.div>
        
        <motion.h2 
          variants={fadeUp}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-zinc-900 mb-4"
        >
          Subscribe to Network
        </motion.h2>
        
        <motion.p 
          variants={fadeUp}
          className="text-zinc-500 font-mono text-sm tracking-widest max-w-xl mx-auto mb-10 uppercase leading-relaxed"
        >
          Receive periodic updates on architectural patterns, agentic ai, and engineering principles directly to your inbox. No spam.
        </motion.p>
        
        <motion.div variants={fadeUp} className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-green-50 text-green-700 py-4 px-6 rounded-lg border border-green-200 flex items-center justify-center gap-3 font-mono text-sm tracking-wide shadow-sm"
              >
                {successAnimation ? (
                  <Lottie 
                    animationData={successAnimation} 
                    loop={false} 
                    style={{ width: 28, height: 28 }} 
                    className="flex-shrink-0"
                  />
                ) : (
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                )}
                <span>Subscription confirmed. Welcome aboard.</span>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="relative flex flex-col md:flex-row gap-3"
              >
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const newEmail = e.target.value;
                      setEmail(newEmail);
                      if (newEmail.length > 0 && !validateEmail(newEmail)) {
                        setStatus("error");
                        setErrorMessage("Please enter a valid email address");
                      } else {
                        setStatus("idle");
                        setErrorMessage("");
                      }
                    }}
                    disabled={status === "loading"}
                    placeholder="Enter email address"
                    className={`w-full bg-zinc-50 border ${status === 'error' ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:border-blue-500 focus:ring-blue-500'} rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 hover:border-zinc-300 transition-all font-mono text-sm disabled:opacity-70`}
                    aria-label="Email address"
                    aria-invalid={status === "error"}
                  />
                  {status === "error" && (
                    <div className="absolute -bottom-6 left-1 flex items-center gap-1 text-red-500 text-[10px] font-mono tracking-widest uppercase">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-zinc-800 hover:shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  <div className={`absolute inset-0 bg-blue-600/20 origin-left transition-transform duration-[800ms] ease-out ${status === 'loading' ? 'scale-x-100' : 'scale-x-0'} pointer-events-none`} />
                  
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                      <span className="relative z-10">Syncing...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Subscribe</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
