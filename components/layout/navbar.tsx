"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0)",
        boxShadow: isScrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "0 0px 0px 0px rgba(0,0,0,0)",
        borderColor: isScrolled ? "rgba(228, 228, 231, 1)" : "rgba(228, 228, 231, 0)",
        paddingTop: isScrolled ? "0px" : "8px",
        paddingBottom: isScrolled ? "0px" : "8px",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-black tracking-tighter uppercase text-zinc-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">
          Afzal <span className="text-blue-600">Labs</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <Link href="/#about" className="hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">About</Link>
          <Link href="/#services" className="hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Services</Link>
          <Link href="/#experience" className="hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Experience</Link>
          <Link href="/#projects" className="hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Work</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="/#contact" className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow">
            Contact Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-zinc-900 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[100%] left-0 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-200 py-6 px-4 flex flex-col gap-6 md:hidden shadow-xl origin-top"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-4 text-sm font-mono uppercase tracking-widest text-zinc-500 text-center">
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">About</Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Services</Link>
              <Link href="/#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Experience</Link>
              <Link href="/#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Work</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="mx-auto mt-4 px-8 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm">
                Contact Me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
