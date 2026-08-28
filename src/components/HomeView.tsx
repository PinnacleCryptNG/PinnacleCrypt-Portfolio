import React from 'react';
import { motion } from 'motion/react';
import { Send, ArrowRight, BookOpen, Users, Code, Sparkles, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, ARTICLES_DATA, EVENTS_DATA, PRODUCTS_DATA } from '../lib/data';
import { PageView } from '../types';

interface HomeViewProps {
  onNavigate: (page: PageView) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#07090E] text-[#F0F4F8] flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-5 sm:px-8 max-w-5xl mx-auto selection:bg-blue-600/30 selection:text-white font-sans-clean">
      {/* Main Centered Hero Block */}
      <div className="my-auto py-8 sm:py-14 space-y-7 sm:space-y-9">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 text-xs font-mono-tech tracking-wider uppercase text-blue-400 bg-blue-950/40 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>AVAILABLE FOR RESEARCH, EVENTS & PRODUCT BUILDS</span>
        </motion.div>

        {/* Roles / Sub-headline Tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono-tech tracking-wider uppercase text-neutral-300 font-medium"
        >
          <span className="px-3 py-1 rounded-full bg-[#0E1320] border border-blue-500/30 text-blue-300">
            Shipping AI Products
          </span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="px-3 py-1 rounded-full bg-[#0E1320] border border-white/10 text-neutral-300">
            Medium & Content Architect
          </span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="px-3 py-1 rounded-full bg-[#0E1320] border border-white/10 text-neutral-300">
            Events & Public Speaking
          </span>
        </motion.div>

        {/* Typographic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-snug sm:leading-[1.22] text-[#F0F4F8]">
            Bringing ideas to life with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 pb-1 inline-block">
              products, contents and experiences.
            </span>
          </h1>
        </motion.div>

        {/* Descriptive Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-3xl font-sans-clean"
        >
          I write clear research on Web3 and AI, organize tech conferences and hackathons for growing developer communities, and build real digital products from scratch.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-lg"
        >
          {/* Primary Solid Button: MESSAGE ME ON TELEGRAM */}
          <a
            href={PERSONAL_INFO.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all active:scale-[0.98] group cursor-pointer"
          >
            <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            <span>MESSAGE ME ON TELEGRAM</span>
          </a>

          {/* Secondary Outlined Button: EXPLORE ARCHIVE */}
          <button
            onClick={() => onNavigate('create')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-blue-500/20 hover:border-blue-400 bg-[#0E1320] hover:bg-[#151C30] text-neutral-200 font-mono-tech text-xs uppercase tracking-widest transition-all cursor-pointer active:scale-[0.98]"
          >
            <span>EXPLORE ARCHIVE</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </motion.div>
      </div>

      {/* Embedded Work Quick-Access Pillars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 pt-8 border-t border-white/10"
      >
        <button
          onClick={() => onNavigate('create')}
          className="p-5 rounded-2xl bg-[#0E1320] border border-blue-500/20 hover:border-blue-400/60 text-left transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400 mb-2.5">
            <span className="text-blue-400 font-medium">01 / RESEARCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div className="font-display font-bold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors">
            Research & Theses
          </div>
          <div className="text-xs text-neutral-400 leading-relaxed font-mono-tech">
            9+ Research Thesis
          </div>
        </button>

        <button
          onClick={() => onNavigate('organize')}
          className="p-5 rounded-2xl bg-[#0E1320] border border-blue-500/20 hover:border-blue-400/60 text-left transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400 mb-2.5">
            <span className="text-blue-400">02 / COMMUNITY</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div className="font-display font-bold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors">
            Organize & Summits
          </div>
          <div className="text-xs text-neutral-400 leading-relaxed">
            {EVENTS_DATA.length} major Web3 events & 8,000+ reach
          </div>
        </button>

        <button
          onClick={() => onNavigate('ship')}
          className="p-5 rounded-2xl bg-[#0E1320] border border-blue-500/20 hover:border-blue-400/60 text-left transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400 mb-2.5">
            <span className="text-blue-400">03 / CODE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div className="font-display font-bold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors">
            Ship & Products
          </div>
          <div className="text-xs text-neutral-400 leading-relaxed">
            {PRODUCTS_DATA.length} live client builds, web apps & tools
          </div>
        </button>
      </motion.div>

      {/* Bottom Micro-Pillars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] sm:text-xs font-mono-tech uppercase tracking-widest text-neutral-500"
      >
        <span className="text-neutral-400">MEDIUM & THESES</span>
        <span className="text-neutral-700">·</span>
        <span className="text-neutral-400">REGIONAL SUMMITS</span>
        <span className="text-neutral-700">·</span>
        <span className="text-neutral-400">ZERO-TO-ONE PRODUCTS</span>
      </motion.div>
    </div>
  );
};
