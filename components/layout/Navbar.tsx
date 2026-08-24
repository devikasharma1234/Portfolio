"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Sun, Moon, Sparkles, Code2 } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Home", id: "" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#education", label: "Education", id: "education" },
    { href: "#certifications", label: "Certifications", id: "certifications" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="rounded-2xl backdrop-blur-xl bg-white/75 dark:bg-black/70 border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-2xl px-4 sm:px-6 transition-colors duration-300">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-[#7B61FF] text-white shadow-md group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-slate-900 via-blue-900 to-[#7B61FF] dark:from-white dark:via-blue-100 dark:to-[#7B61FF] bg-clip-text text-transparent">
              Devika<span className="text-[#FF66A1]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] backdrop-blur-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-[#7B61FF] dark:text-white bg-white dark:bg-purple-950/70 shadow-sm"
                      : "text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Controls & Action CTA */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl text-xs font-bold h-10 px-4 bg-gradient-to-r from-[#7B61FF] to-indigo-600 text-white shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300"
            >
              <Download className="h-4 w-4" strokeWidth={2.5} />
              Resume
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTheme}
                  initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mounted && currentTheme === "dark" ? (
                    <Sun className="h-4 w-4 text-amber-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 lg:hidden rounded-xl text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-200 dark:border-white/10 py-4 px-2 space-y-2 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-gray-200 hover:text-[#7B61FF] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href="/resume.pdf"
                className="flex items-center justify-center gap-2 w-full mt-3 h-10 rounded-xl bg-gradient-to-r from-[#7B61FF] to-indigo-600 text-white text-xs font-bold shadow-md"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}