import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Indicator Bar at Top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-zinc-900/50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(124,58,237,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3 glass-nav' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white font-heading font-bold text-lg tracking-tight"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-[1.5px] group-hover:scale-105 transition-transform duration-300 shadow-md shadow-purple-500/20">
              <div className="w-full h-full bg-[#09090B] rounded-[10.5px] flex items-center justify-center">
                <span className="text-sm font-extrabold text-gradient-primary">VP</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="group-hover:text-purple-400 transition-colors">
                Vishnu Prasad
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Get In Touch</span>
              <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-card text-zinc-300 hover:text-white border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-16 z-40 md:hidden glass-card rounded-2xl p-6 border border-white/10 shadow-2xl shadow-purple-900/20"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-zinc-200 hover:text-purple-400 hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 flex items-center justify-center text-center font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-md shadow-purple-600/30"
                >
                  Get In Touch <FiArrowUpRight className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
