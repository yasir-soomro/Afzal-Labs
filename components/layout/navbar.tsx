"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/providers/language-provider";

const Logo = () => {

  return (
    <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-xs tracking-widest shadow-sm group-hover:scale-105 transition-transform duration-300">
      AL
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

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const langs = ["en", "es", "fr", "de"] as const;
  
  const toggleLanguage = () => {
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full transition-colors"
      aria-label={`Current language: ${language}. Click to change.`}
    >
      <Globe className="w-4 h-4" />
      <span>{language}</span>
    </button>
  );
};

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="group flex items-center gap-3 text-lg font-black tracking-tighter uppercase text-zinc-900 hover:text-zinc-600 transition-colors focus:outline-none rounded-full px-2 py-1">
            <Logo />
            <span>Afzal</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <NavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
            <NavLink href="/services" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
            <NavLink href="/experience" onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
            <NavLink href="/projects" onClick={() => setMobileMenuOpen(false)}>Work</NavLink>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} role="button" aria-label="Navigate to contact section" className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-blue-700 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all">
              Contact Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
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
          </div>
        </motion.div>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-[-1] md:hidden block pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: -20, 
                  scale: 0.95,
                  transition: { 
                    duration: 0.2,
                    ease: "easeIn",
                    when: "afterChildren",
                    staggerChildren: 0.05,
                    staggerDirection: -1
                  }
                },
                visible: { 
                  opacity: 1, 
                  y: 10, 
                  scale: 1,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 24,
                    when: "beforeChildren",
                    staggerChildren: 0.05
                  }
                }
              }}
              className="absolute top-full left-4 right-4 bg-white shadow-2xl border border-zinc-100 rounded-3xl py-8 px-6 flex flex-col gap-6 md:hidden origin-top z-50 pointer-events-auto"
            >
              <nav aria-label="Mobile Navigation" className="flex flex-col gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 text-center">
                {[
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Experience", href: "/experience" },
                  { label: "Work", href: "/projects" },
                ].map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -20, transition: { duration: 0.15 } },
                      visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="block hover:text-blue-600 hover:bg-blue-50/50 transition-colors py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10, transition: { duration: 0.15 } },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                  }}
                >
                  <Link 
                    href="/contact" 
                    onClick={() => setMobileMenuOpen(false)} 
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
