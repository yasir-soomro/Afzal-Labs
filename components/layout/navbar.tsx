"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const elem = document.getElementById(targetId);
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

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
        <a href="#" onClick={(e) => handleScrollTo(e, 'top')} className="text-xl font-black tracking-tighter uppercase text-zinc-900 hover:text-blue-600 transition-colors">
          Afzal <span className="text-blue-600">Labs</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-zinc-900 transition-colors">Services</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-zinc-900 transition-colors">Experience</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-zinc-900 transition-colors">Work</a>
        </nav>
        
        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all">
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-200 py-6 px-4 flex flex-col gap-6 md:hidden shadow-xl">
          <nav className="flex flex-col gap-4 text-sm font-mono uppercase tracking-widest text-zinc-500 text-center">
            <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-zinc-900 transition-colors py-2">About</a>
            <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-zinc-900 transition-colors py-2">Services</a>
            <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-zinc-900 transition-colors py-2">Experience</a>
            <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-zinc-900 transition-colors py-2">Work</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="mx-auto mt-4 px-8 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
