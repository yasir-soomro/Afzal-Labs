"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 py-0" : "bg-transparent py-2"}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter uppercase text-white hover:text-blue-400 transition-colors">
          Afzal <span className="text-blue-500">Labs</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-zinc-400">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Work</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="#contact" className="px-5 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all">
            Contact Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 py-6 px-4 flex flex-col gap-6 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-mono uppercase tracking-widest text-zinc-400 text-center">
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">About</Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Services</Link>
            <Link href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Experience</Link>
            <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Work</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="mx-auto mt-4 px-8 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
