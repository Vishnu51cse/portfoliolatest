import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBuilding, FaProjectDiagram } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
          Career Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Work <span className="text-gradient-primary">Experience</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Hands-on software engineering experience delivering enterprise FinTech applications & high-performance backend systems.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Glowing Timeline Bar */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-transparent" />

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:pl-20 mb-12"
          >
            {/* Timeline Node Icon (Desktop) */}
            <div className="hidden md:flex absolute left-4 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 items-center justify-center text-white shadow-lg shadow-purple-600/40 ring-4 ring-[#09090B]">
              <FaBriefcase size={14} />
            </div>

            {/* Experience Glass Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Top Accent Gradient Border Glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-80" />

              {/* Company & Role Meta Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-1">
                    <FaBuilding className="text-purple-400" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    <FaCalendarAlt className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                    <FaMapMarkerAlt className="w-3 h-3 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Project Focus Banner */}
              {exp.projectName && (
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    <FaProjectDiagram />
                    <span>Project: {exp.projectName}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                    {exp.projectDescription}
                  </p>
                </div>
              )}

              {/* Responsibilities Grid List */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-4">
                  Key Responsibilities & Achievements:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <FaCheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm text-zinc-300 group-hover/item:text-white leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                  Technologies Utilized:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 hover:border-purple-500/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
