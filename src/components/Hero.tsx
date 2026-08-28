import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Globe, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/data';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-32 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient subtle luxury gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A47E]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#C5A47E]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Editorial Hero Section */}
      <div className="my-auto py-12 md:py-16 space-y-8 md:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[#C5A47E] text-[11px] sm:text-xs font-mono-tech uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A47E]" />
            <span>Ecosystem Architect & Product Builder</span>
          </div>

          {/* Editorial Headline */}
          <div className="overflow-hidden">
            <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#F0F0F0] leading-[0.95] select-none font-light">
              <span className="inline-block hover:text-[#C5A47E] transition-colors duration-300">
                I CREATE.
              </span>
              <br />
              <span className="inline-block text-white/40 hover:text-white transition-colors duration-300 italic font-serif">
                I ORGANIZE.
              </span>
              <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] via-[#E5CCA8] to-[#C5A47E]">
                I SHIP.
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Narrative & Positioning + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
              <span className="px-3 py-1 rounded-md bg-[#161616] border border-white/10 text-[#C5A47E] uppercase tracking-wider text-[11px]">
                Content Creator & Researcher
              </span>
              <span className="px-3 py-1 rounded-md bg-[#161616] border border-white/10 text-[#E5CCA8] uppercase tracking-wider text-[11px]">
                Summit Host & Organizer
              </span>
              <span className="px-3 py-1 rounded-md bg-[#161616] border border-white/10 text-[#C5A47E] uppercase tracking-wider text-[11px]">
                Autonomous Systems & Web3
              </span>
            </div>
            <p className="text-white/70 text-base sm:text-lg lg:text-xl font-sans-clean font-light leading-relaxed max-w-3xl">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-[#161616] hover:bg-[#202020] text-[#F0F0F0] hover:text-white border border-white/15 hover:border-[#C5A47E] text-xs font-mono-tech font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-black/70 cursor-pointer group"
            >
              <span>Work / Host With Me</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A47E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#ship"
              className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-white/70 hover:text-white border border-white/10 text-xs font-mono-tech uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore Shipped Code</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Info bar + Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tech text-white/40"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A47E]" />
            <span className="text-white/80 tracking-wider">SOLANA • MANTLE • AUTONOMOUS AGENTS</span>
          </div>
          <div className="hidden lg:block text-white/20">|</div>
          <div className="hidden lg:flex items-center gap-2 text-white/50">
            <span>5,000+ Conference Attendees Hosted</span>
          </div>
        </div>

        <a
          href="#create"
          className="flex items-center gap-2 text-white/40 hover:text-[#C5A47E] transition-colors group cursor-pointer tracking-wider"
        >
          <span>EXPLORE ARCHIVE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#C5A47E]" />
        </a>
      </motion.div>
    </section>
  );
};

