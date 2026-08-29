import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Cpu, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Slower, more captivating initialization (~4.8 seconds total duration for an atmospheric entrance)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 600);
          return 100;
        }
        // Smooth gradual progression
        const step = prev < 25 ? 1.2 : prev < 60 ? 1.0 : prev < 85 ? 1.4 : 1.8;
        const next = Math.min(100, Math.round((prev + step) * 10) / 10);
        return next;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Dynamic phase status readout
  const getPhaseText = (val: number) => {
    if (val < 25) return 'INITIALIZING CORE PROTOCOLS';
    if (val < 50) return 'INDEXING RESEARCH ARCHIVES & THESES';
    if (val < 75) return 'SYNCING COMMUNITY EVENTS & SUMMITS';
    if (val < 92) return 'CALIBRATING PRODUCT ECOSYSTEMS';
    return 'SYSTEM ONLINE // WELCOME';
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#05070B] flex flex-col items-center justify-between p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Exotic Cyber Grid Background */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          {/* Deep Ambient Exotic Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-sky-500/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />

          {/* Top telemetry bar */}
          <div className="w-full max-w-4xl flex items-center justify-between text-[11px] font-mono-tech text-neutral-400 uppercase tracking-widest relative z-10 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              <span className="text-sky-300 font-semibold tracking-wider">PINNACLECRYPT // ARCHIVE v2.6</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-neutral-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>NODES ACTIVE</span>
            </div>
          </div>

          {/* Center Exotic Monogram & Identity */}
          <div className="flex flex-col items-center justify-center text-center space-y-7 relative z-10 my-auto">
            {/* Holographic Glowing Monogram with Orbiting Ring */}
            <div className="relative flex items-center justify-center">
              {/* Outer Orbiting Cyber Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-5 rounded-full border border-dashed border-sky-400/30 pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-2xl border border-blue-500/30 pointer-events-none"
              />

              {/* Main Avatar Badge Box */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-24 h-24 rounded-3xl bg-gradient-to-b from-[#0E1526] to-[#080B12] border-2 border-blue-400/50 flex items-center justify-center shadow-[0_0_50px_rgba(56,189,248,0.4)] z-10 overflow-hidden p-1"
              >
                <img
                  src="/pfp.jpg"
                  alt="PinnacleCrypt"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-sky-400/10 animate-pulse pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Brand Title & Editorial Motto */}
            <div className="space-y-2 max-w-md">
              <motion.h1
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
              >
                PinnacleCrypt<span className="text-sky-400">.</span>
              </motion.h1>
              <motion.p
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="font-mono-tech text-xs tracking-[0.25em] text-neutral-300 uppercase"
              >
                I CREATE • I ORGANIZE • I SHIP
              </motion.p>
            </div>

            {/* Dynamic Status Pill */}
            <motion.div
              key={getPhaseText(progress)}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-sky-300 text-[11px] font-mono-tech tracking-wider uppercase shadow-inner"
            >
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>{getPhaseText(progress)}</span>
            </motion.div>
          </div>

          {/* Bottom High-Tech Telemetry & Progress Bar */}
          <div className="w-full max-w-md space-y-3 relative z-10 pb-4">
            <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-400 uppercase tracking-wider">
              <span className="text-neutral-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>Synchronizing Archive</span>
              </span>
              <span className="text-sky-400 font-bold text-sm tracking-widest">{Math.floor(progress)}%</span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-1.5 bg-[#0D121F] rounded-full overflow-hidden border border-white/10 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-blue-300 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>

            {/* Equalizer / Audio Frequency Visualizer aesthetic bars */}
            <div className="flex items-center justify-center gap-1 pt-1 opacity-70">
              {[40, 70, 30, 90, 50, 80, 45, 95, 60, 30, 85, 40].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [(h * 0.2), (h * 0.16), (h * 0.1)] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6 + (i % 4) * 0.2,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                  className="w-1 rounded-full bg-sky-400/60"
                  style={{ height: 6 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
