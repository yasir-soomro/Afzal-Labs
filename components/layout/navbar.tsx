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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-0" : "bg-transparent py-2"}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter uppercase text-zinc-900 hover:text-blue-600 transition-colors">
          Afzal <span className="text-blue-600">Labs</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <Link href="#about" className="hover:text-zinc-900 transition-colors">About</Link>
          <Link href="#services" className="hover:text-zinc-900 transition-colors">Services</Link>
          <Link href="#experience" className="hover:text-zinc-900 transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-zinc-900 transition-colors">Work</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="#contact" className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all">
            Contact Me
          </Link>
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
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2">About</Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2">Services</Link>
            <Link href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2">Experience</Link>
            <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors py-2">Work</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="mx-auto mt-4 px-8 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
