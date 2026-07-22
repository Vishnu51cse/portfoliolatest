import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090B] text-white"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
          <div className="absolute w-72 h-72 rounded-full bg-blue-600/20 blur-3xl animate-pulse delay-500" />

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-0.5 shadow-2xl shadow-purple-500/30">
              <div className="w-full h-full bg-[#09090B] rounded-[14px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-3xl text-gradient-primary">
                  VP
                </span>
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-heading font-bold text-2xl tracking-wider text-white">
                VISHNU PRASAD
              </h2>
              <p className="text-xs tracking-widest text-zinc-400 uppercase mt-1">
                Software Engineer Portfolio
              </p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1.5 bg-zinc-800 rounded-full overflow-hidden relative mt-2">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            
            <span className="text-xs font-mono text-zinc-500">{progress}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
