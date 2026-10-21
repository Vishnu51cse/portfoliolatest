import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBuilding, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Ambient Glow */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
          Academic Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          <span className="text-gradient-primary">Education</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Formal computer science foundation from a recognized engineering institution.
        </p>
      </motion.div>

      {/* Education Card */}
      <div className="max-w-3xl mx-auto">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl"
          >
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-80" />
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Top Row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <FaGraduationCap size={26} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-0.5">
                      {edu.field}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <FaStar className="w-3 h-3" />
                  {edu.gpa}
                </span>
              </div>

              {/* Institution & Period */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-zinc-300 font-medium">
                  <FaBuilding className="text-purple-400 w-4 h-4 shrink-0" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <FaCalendarAlt className="text-zinc-500 w-3.5 h-3.5 shrink-0" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
