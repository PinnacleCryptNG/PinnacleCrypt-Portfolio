import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 350);
          return 100;
        }
        // Smooth exponential-feeling load
        const increment = Math.max(2, Math.floor((100 - prev) / 6));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#07090E] flex flex-col items-center justify-between p-8 sm:p-12 select-none overflow-hidden"
        >
          {/* Subtle Ambient Background Blue Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top subtle tech indicator */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono-tech text-neutral-500 uppercase tracking-widest relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span className="text-blue-400">PINNACLECRYPT // SYSTEM</span>
            </div>
            <div>INITIALIZING ARCHIVE</div>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10">
            {/* Geometric Glowing Monogram Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-16 h-16 rounded-2xl bg-[#0F1422] border border-blue-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              <span className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-500">
                P
              </span>
              <div className="absolute -inset-1 rounded-2xl border border-blue-400/20 animate-pulse" />
            </motion.div>

            {/* Brand Title & Tagline */}
            <div className="space-y-1.5">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
              >
                PinnacleCrypt<span className="text-blue-500">.</span>
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-mono-tech text-xs tracking-widest text-neutral-400 uppercase"
              >
                I CREATE • I ORGANIZE • I SHIP
              </motion.p>
            </div>
          </div>

          {/* Bottom Progress Bar & Metric */}
          <div className="w-full max-w-xs space-y-2 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 uppercase tracking-wider">
              <span>Loading modules</span>
              <span className="text-blue-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-1 bg-[#151A26] rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-blue-300 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
