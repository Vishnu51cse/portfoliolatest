import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Radial Background Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-xs sm:text-sm font-medium text-zinc-300 mb-6 shadow-lg shadow-purple-900/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Available for Software Engineer Roles</span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Vishnu Prasad <br />
          <span className="text-gradient-primary">Seenivasa Kumar</span>
        </motion.h1>

        {/* Title & Animated Typing Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-2 text-xl sm:text-2xl font-medium text-zinc-300 mb-8 min-h-[40px]"
        >
          <span className="text-zinc-400">{personalInfo.title}</span>
          <span className="hidden sm:inline text-purple-500">•</span>
          <div className="flex items-center font-mono text-cyan-400 font-semibold">
            <span>{displayedText}</span>
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
          </div>
        </motion.div>

        {/* Short Summary Teaser */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed"
        >
          Specializing in <span className="text-zinc-200 font-semibold">C#, ASP.NET Core, SQL Server</span>, and modern <span className="text-zinc-200 font-semibold">React</span> web applications. Crafting high-performance 3-tier architectures & cloud deployments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="/Vishnu_Prasad_Resume.pdf"
            download="Vishnu_Prasad_Resume.pdf"
            onClick={handleDownloadResume}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <FaDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-zinc-200 glass-card border border-white/10 hover:border-purple-500/40 hover:text-white hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg"
          >
            <FaPaperPlane className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Social Icons Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full glass-card border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 hover:scale-110 transition-all shadow-md"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full glass-card border border-white/10 text-zinc-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:scale-110 transition-all shadow-md"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-3 rounded-full glass-card border border-white/10 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:scale-110 transition-all shadow-md"
          >
            <FaEnvelope size={20} />
          </a>
        </motion.div>

        {/* Key Stats Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 font-heading">
                <span className="text-gradient-primary">{stat.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
