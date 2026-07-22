import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaDatabase, FaServer, FaCloud, FaCheckCircle } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: FaLayerGroup,
      title: "3-Tier Architecture",
      description: "Designing decoupled, scalable applications separating Presentation, Business Logic, and Data Access layers.",
      color: "from-purple-500 to-indigo-500",
      glow: "group-hover:border-purple-500/50"
    },
    {
      icon: FaDatabase,
      title: "SQL Server & ADO.NET",
      description: "Writing complex stored procedures, database migrations, and executing query tuning for high-throughput performance.",
      color: "from-blue-500 to-cyan-500",
      glow: "group-hover:border-blue-500/50"
    },
    {
      icon: FaServer,
      title: "ASP.NET Core & Web API",
      description: "Engineering secure RESTful APIs, MVC applications, Razor Views, and seamless client-server integrations.",
      color: "from-cyan-500 to-teal-500",
      glow: "group-hover:border-cyan-500/50"
    },
    {
      icon: FaCloud,
      title: "AWS EC2 Deployment",
      description: "Deploying production-ready backend servers, configuring IIS/cloud instances, and ensuring uptime stability.",
      color: "from-orange-500 to-amber-500",
      glow: "group-hover:border-orange-500/50"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
          Professional Profile
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          About <span className="text-gradient-primary">Vishnu Prasad</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg leading-relaxed">
          Building resilient backends, optimized databases, and responsive modern web apps.
        </p>
      </motion.div>

      {/* Main Glass Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden mb-16"
      >
        {/* Background Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span>Software Engineer & Full Stack Developer</span>
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300 font-medium">
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-purple-400 w-4 h-4 shrink-0" />
                <span>Clean Code & OOP Principles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-blue-400 w-4 h-4 shrink-0" />
                <span>Agile SDLC & Jira Workflow</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />
                <span>SQL Stored Procedure Optimization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="text-teal-400 w-4 h-4 shrink-0" />
                <span>Production Issue Resolution</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 glass-card rounded-2xl border border-white/10 bg-zinc-900/40 text-center">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Current Location</div>
            <div className="text-lg font-semibold text-white mb-4">{personalInfo.location}</div>
            
            <div className="w-full h-px bg-white/10 mb-4" />

            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Primary Specialization</div>
            <div className="text-sm font-semibold text-gradient-primary">
              C# • ASP.NET Core • SQL Server • React
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4 Core Technical Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between ${pillar.glow}`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} p-0.5 mb-5 shadow-lg`}>
                  <div className="w-full h-full bg-[#09090B] rounded-[10px] flex items-center justify-center text-white">
                    <Icon size={20} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
