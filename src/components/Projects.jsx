import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaFolderOpen, FaCodeBranch } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Ambient Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Featured <span className="text-gradient-accent">Projects</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Showcasing enterprise 3-tier solutions & full-stack web applications.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group glass-card glass-card-hover rounded-3xl border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            {/* Top Glowing Gradient Accent */}
            <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shadow-inner" style={{ color: project.iconColor }}>
                  <FaFolderOpen />
                </div>
                
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-zinc-300 bg-white/5 border border-white/10">
                  Featured System
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors relative z-10">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 relative z-10">
                {project.subtitle}
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                {project.description}
              </p>

              {/* Key Features Bullet List */}
              <div className="space-y-2.5 mb-8 relative z-10">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <FaCheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer: Technologies & Action Links */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Source Code"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-600/30 hover:scale-105 transition-all"
                >
                  <span>Explore</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
