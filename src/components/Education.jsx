import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBuilding, FaCertificate } from 'react-icons/fa';
import { educationData, certificationsData } from '../data/portfolioData';

const MicrosoftIcon = () => (
  <svg viewBox="0 0 23 23" className="w-[1em] h-[1em]">
    <path fill="#f25022" d="M1 1h10v10H1z"/>
    <path fill="#7fba00" d="M12 1h10v10H12z"/>
    <path fill="#00a4ef" d="M1 12h10v10H1z"/>
    <path fill="#ffb900" d="M12 12h10v10H12z"/>
  </svg>
);

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
          Academic & Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Education & <span className="text-gradient-primary">Certifications</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Formal computer science foundation complemented by industry certifications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FaGraduationCap size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Degree Education</h3>
          </div>

          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-1">
                    {edu.field}
                  </span>
                  <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    {edu.degree}
                  </h4>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-md">
                  {edu.gpa}
                </span>
              </div>

              <div className="flex items-center gap-2 text-zinc-300 font-medium text-base">
                <FaBuilding className="text-purple-400 w-4 h-4 shrink-0" />
                <span>{edu.institution}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FaAward size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Verified Certifications</h3>
          </div>

          <div className="space-y-4">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                    {cert.icon === 'SiMicrosoft' ? <MicrosoftIcon /> : <FaCertificate />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-semibold font-mono border ${cert.badgeColor}`}>
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
