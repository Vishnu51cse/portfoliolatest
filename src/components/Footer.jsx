import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#09090B] text-zinc-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="font-heading font-bold text-lg text-white">
            Vishnu Prasad <span className="text-purple-400">Seenivasa Kumar</span>
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            Software Engineer • C# • ASP.NET Core • SQL Server • React
          </p>
        </div>

        {/* Center Copyright */}
        <div className="text-xs text-zinc-400 font-mono text-center">
          © 2026 Vishnu Prasad Seenivasa Kumar. All rights reserved.
        </div>

        {/* Right Socials & Back to top button */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-zinc-400 hover:text-blue-400 hover:bg-white/5 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="ml-2 p-2.5 rounded-xl glass-card text-zinc-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all"
          >
            <FaChevronUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
