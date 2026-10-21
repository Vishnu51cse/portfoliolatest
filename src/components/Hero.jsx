import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through roles every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % personalInfo.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-purple-900/10 to-transparent rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for Software Engineer Roles
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Vishnu Prasad
            <br />
            <span className="text-gradient-primary">Seenivasa Kumar</span>
          </h1>
        </motion.div>

        {/* Animated Role Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="h-9 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-base sm:text-xl font-semibold text-purple-300 tracking-wide"
            >
              {personalInfo.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/Vishnu_Prasad_Resume.pdf"
            download="Vishnu_Prasad_Resume.pdf"
            onClick={handleDownloadResume}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
          >
            <FaDownload className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>

          <a
            href="#experience"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-zinc-200 glass-card border border-white/15 hover:text-white hover:border-purple-500/40 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
          >
            View Experience
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-3"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl glass-card border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/40 hover:scale-110 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl glass-card border border-white/10 text-zinc-400 hover:text-blue-400 hover:border-blue-400/40 hover:scale-110 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-xl glass-card border border-white/10 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:scale-110 transition-all"
          >
            <FaEnvelope size={20} />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:border-purple-500/30 transition-all group"
            >
              <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mt-1 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors mt-2"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-purple-400"
            />
          </div>
        </motion.a>

      </div>
    </section>
  );
}
