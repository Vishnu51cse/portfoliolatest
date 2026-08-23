import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, 
  FaNodeJs, FaGitAlt, FaGithub, FaBitbucket, FaAws, FaLayerGroup, 
  FaCube, FaSitemap, FaExchangeAlt, FaTachometerAlt, FaTasks, FaCloud, FaCode, FaCogs
} from 'react-icons/fa';
import { 
  SiDotnet, SiExpress, 
  SiMongodb, SiMysql, SiPostman, SiSwagger, SiVite, SiJenkins
} from 'react-icons/si';
import { skills, skillCategories } from '../data/portfolioData';

// Custom C# SVG Icon
const CSharpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1em] h-[1em]">
    <path d="M11.5 3A8.5 8.5 0 0 0 3 11.5a8.5 8.5 0 0 0 8.5 8.5c2.3 0 4.4-.9 5.9-2.4l-2.1-2.1a5.5 5.5 0 0 1-3.8 1.5 5.5 5.5 0 0 1-5.5-5.5 5.5 5.5 0 0 1 5.5-5.5c1.5 0 2.9.6 3.8 1.5l2.1-2.1A8.5 8.5 0 0 0 11.5 3zm6.5 5v2h-2v2h2v2h2v-2h2v-2h-2V8h-2zm-1.5 1h1v1h-1V9zm3 0h1v1h-1V9zm-3 3h1v1h-1v-1zm3 0h1v1h-1v-1z"/>
  </svg>
);

// Custom Microsoft Icon
const MicrosoftIcon = () => (
  <svg viewBox="0 0 23 23" className="w-[1em] h-[1em]">
    <path fill="#f25022" d="M1 1h10v10H1z"/>
    <path fill="#7fba00" d="M12 1h10v10H1z"/>
    <path fill="#00a4ef" d="M1 12h10v10H1z"/>
    <path fill="#ffb900" d="M12 12h10v10H1z"/>
  </svg>
);

// Custom SQL Server Icon
const SqlServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1em] h-[1em]">
    <path d="M12 3C6.477 3 2 4.79 2 7v10c0 2.21 4.477 4 10 4s10-1.79 10-4V7c0-2.21-4.477-4-10-4zm0 2c4.97 0 8 1.48 8 2s-3.03 2-8 2-8-1.48-8-2 3.03-2 8-2zm0 5c4.97 0 8 1.48 8 2s-3.03 2-8 2-8-1.48-8-2 3.03-2 8-2zm0 5c4.97 0 8 1.48 8 2s-3.03 2-8 2-8-1.48-8-2 3.03-2 8-2z"/>
  </svg>
);

// Custom Visual Studio Icon
const VisualStudioIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1em] h-[1em]">
    <path d="M17.584 2.016a.75.75 0 0 0-.687.166L9.625 8.784 4.542 4.417a.75.75 0 0 0-1.041.083l-2.25 2.75a.75.75 0 0 0 .041 1.042l4.208 3.708-4.208 3.708a.75.75 0 0 0-.041 1.042l2.25 2.75a.75.75 0 0 0 1.041.083l5.083-4.367 7.272 6.602a.75.75 0 0 0 1.254-.504V2.75a.75.75 0 0 0-.584-.734zM16.5 18.513L11.53 14l4.97-4.513v9.026z"/>
  </svg>
);

// Map string icon names to React Component Icons
const iconMap = {
  SiCsharp: CSharpIcon, FaJava, SiDotnet, SiMicrosoft: MicrosoftIcon, FaNodeJs, SiExpress,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap,
  SiMicrosoftsqlserver: SqlServerIcon, SiMongodb, SiMysql, FaGitAlt, FaGithub,
  FaBitbucket, SiPostman, SiVisualstudio: VisualStudioIcon, SiSwagger, FaAws, SiVite, SiJenkins,
  FaLayerGroup, FaCube, FaSitemap, FaExchangeAlt, FaTachometerAlt,
  FaTasks, FaCloud, FaCogs
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
          Technical Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Skills & <span className="text-gradient-accent">Technologies</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Technologies across 3-tier architecture, backend engineering, cloud & modern web.
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg shadow-purple-600/30 scale-105'
                : 'glass-card text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Glass Card Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || FaCode;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group glass-card glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden"
              >
                {/* Subtle top brand color accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{ backgroundColor: skill.color }}
                />

                {/* Icon Container */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${skill.color}15`, 
                    color: skill.color === "#000000" ? "#FFFFFF" : skill.color 
                  }}
                >
                  <IconComponent />
                </div>

                {/* Skill Name */}
                <span className="font-semibold text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors line-clamp-1">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
