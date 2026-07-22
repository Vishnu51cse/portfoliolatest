import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
          Contact Hub
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Let's <span className="text-gradient-primary">Connect</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Open for Software Engineer roles, backend development & technical collaborations.
        </p>
      </motion.div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Direct Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex items-center justify-between gap-4 group shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl group-hover:scale-110 transition-transform">
              <FaEnvelope />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase block mb-1">Email Address</span>
              <a href={`mailto:${personalInfo.email}`} className="text-base sm:text-lg font-bold text-white hover:text-purple-300 transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="p-3 rounded-2xl glass-card text-zinc-400 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all shrink-0"
            title="Copy Email"
          >
            {copiedEmail ? <FaCheck className="text-emerald-400" size={18} /> : <FaCopy size={18} />}
          </button>
        </motion.div>

        {/* Direct Phone Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex items-center justify-between gap-4 group shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl group-hover:scale-110 transition-transform">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase block mb-1">Phone Number</span>
              <a href={`tel:${personalInfo.phone}`} className="text-base sm:text-lg font-bold text-white hover:text-blue-300 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <button
            onClick={handleCopyPhone}
            className="p-3 rounded-2xl glass-card text-zinc-400 hover:text-white border border-white/10 hover:border-blue-500/40 transition-all shrink-0"
            title="Copy Phone Number"
          >
            {copiedPhone ? <FaCheck className="text-emerald-400" size={18} /> : <FaCopy size={18} />}
          </button>
        </motion.div>

        {/* LinkedIn Profile */}
        <motion.a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center justify-between text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl group-hover:scale-110 transition-transform">
              <FaLinkedin />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase block mb-1">LinkedIn Profile</span>
              <span className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                linkedin.com/in/vishnuprasad5
              </span>
            </div>
          </div>
        </motion.a>

        {/* GitHub Profile */}
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center justify-between text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl group-hover:scale-110 transition-transform">
              <FaGithub />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase block mb-1">GitHub Repositories</span>
              <span className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                github.com/Vishnu51cse
              </span>
            </div>
          </div>
        </motion.a>

      </div>
    </section>
  );
}
