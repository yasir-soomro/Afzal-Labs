"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AnimatedLogo = () => {
  return (
    <div style={{ perspective: "800px" }} className="w-8 h-8 flex-shrink-0">
      <motion.div
        className="w-full h-full relative"
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 border-[3px] border-blue-600 bg-blue-600/10 rounded-sm" style={{ transform: "translateZ(16px)" }} />
        <div className="absolute inset-0 border-[3px] border-indigo-600 bg-indigo-600/10 rounded-sm" style={{ transform: "rotateY(180deg) translateZ(16px)" }} />
        <div className="absolute inset-0 border-[3px] border-cyan-500 bg-cyan-500/10 rounded-sm" style={{ transform: "rotateX(90deg) translateZ(16px)" }} />
        <div className="absolute inset-0 border-[3px] border-blue-400 bg-blue-400/10 rounded-sm" style={{ transform: "rotateX(-90deg) translateZ(16px)" }} />
        <div className="absolute inset-0 border-[3px] border-indigo-400 bg-indigo-400/10 rounded-sm" style={{ transform: "rotateY(90deg) translateZ(16px)" }} />
        <div className="absolute inset-0 border-[3px] border-blue-500 bg-blue-500/10 rounded-sm" style={{ transform: "rotateY(-90deg) translateZ(16px)" }} />
      </motion.div>
    </div>
  );
};

const NavLink = ({ href, onClick, children }: { href: string, onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void, children: React.ReactNode }) => (
  <Link 
    href={href} 
    onClick={onClick} 
    className="group relative px-4 py-2 text-zinc-500 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
  >
    <span className="relative z-10">{children}</span>
    <motion.span 
      className="absolute inset-0 bg-blue-50 rounded-full origin-center"
      initial={{ scale: 0 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      style={{ zIndex: 0 }}
    />
  </Link>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    
    if (pathname !== "/") {
      return; // Let standard Link navigation handle routing to home page then hash
    }

    e.preventDefault();
    
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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 lg:pt-6 pointer-events-none">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl pointer-events-auto"
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
            boxShadow: isScrolled ? "0 10px 40px -10px rgba(0, 0, 0, 0.1)" : "0 0px 0px rgba(0,0,0,0)",
            borderColor: isScrolled ? "rgba(228, 228, 231, 1)" : "rgba(255, 255, 255, 0)",
          }}
          className="w-full rounded-2xl md:rounded-full border border-transparent flex items-center justify-between px-4 md:px-6 h-16 transition-colors duration-300"
        >
          <Link href="/" onClick={(e) => handleScrollTo(e, 'top')} className="group flex items-center gap-3 text-xl font-black tracking-tighter uppercase text-zinc-900 hover:text-blue-600 transition-colors focus:outline-none rounded-full px-2 py-1">
            <AnimatedLogo />
            <span>Afzal <span className="text-blue-600">Labs</span></span>
          </Link>
          
          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <NavLink href="/#about" onClick={(e) => handleScrollTo(e, 'about')}>About</NavLink>
            <NavLink href="/#services" onClick={(e) => handleScrollTo(e, 'services')}>Services</NavLink>
            <NavLink href="/#experience" onClick={(e) => handleScrollTo(e, 'experience')}>Experience</NavLink>
            <NavLink href="/#projects" onClick={(e) => handleScrollTo(e, 'projects')}>Work</NavLink>
          </nav>
          
          <div className="hidden md:block">
            <Link href="/#contact" onClick={(e) => handleScrollTo(e, 'contact')} role="button" aria-label="Navigate to contact section" className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:-translate-y-0.5 inline-block">
              Contact Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-zinc-900 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full relative w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition-colors"
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
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.2, delay: 0.1 } }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
              className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl border border-zinc-200/50 rounded-3xl py-8 px-6 flex flex-col gap-6 md:hidden shadow-2xl origin-top z-50 pointer-events-auto"
            >
              <nav aria-label="Mobile Navigation" className="flex flex-col gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 text-center">
                {[
                  { label: "About", href: "/#about", targetId: "about" },
                  { label: "Services", href: "/#services", targetId: "services" },
                  { label: "Experience", href: "/#experience", targetId: "experience" },
                  { label: "Work", href: "/#projects", targetId: "projects" },
                ].map((item, index) => (
                  <motion.div
                    key={item.targetId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20, transition: { duration: 0.15, delay: 0 } }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={(e) => handleScrollTo(e, item.targetId)} 
                      className="block hover:text-blue-600 hover:bg-blue-50/50 transition-colors py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href="/#contact" 
                    onClick={(e) => handleScrollTo(e, 'contact')} 
                    role="button" 
                    aria-label="Navigate to contact section" 
                    className="mx-auto mt-6 px-8 py-4 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm w-full block shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
