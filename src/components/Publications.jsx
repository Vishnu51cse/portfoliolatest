import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaExternalLinkAlt, FaQuoteLeft, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import { publicationsData } from '../data/portfolioData';

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
          Research & Publications
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          IEEE <span className="text-gradient-primary">Publication</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Peer-reviewed research paper published in IEEE Xplore applying ensemble deep learning.
        </p>
      </motion.div>

      {/* Publications Cards Grid */}
      <div className="max-w-4xl mx-auto space-y-8">
        {publicationsData.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group glass-card glass-card-hover rounded-3xl border border-white/10 p-8 relative overflow-hidden shadow-2xl"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400" />

            <div className="flex flex-col gap-6">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl shadow-inner">
                    <FaBookOpen />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">
                      {pub.publisher} • {pub.year}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Peer-Reviewed IEEE Conference
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-md flex items-center gap-1.5">
                    <FaChartLine className="text-emerald-400" />
                    {pub.metrics}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                {pub.title}
              </h3>

              {/* Abstract / Summary */}
              <div className="relative pl-6 border-l-2 border-purple-500/40 text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
                <p>{pub.summary}</p>
              </div>

              {/* Tags & Action Links */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {pub.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-zinc-300 bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* DOI Link Button */}
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-600/30 hover:scale-105 transition-all shrink-0"
                >
                  <span>DOI: {pub.doi}</span>
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
