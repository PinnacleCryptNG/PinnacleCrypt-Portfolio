import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Send, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA, PERSONAL_INFO } from '../lib/data';
import { ShippedProduct, PageView } from '../types';
import { ProductPreviewFrame } from './ProductPreviewFrame';

interface ShipViewProps {
  onSelectProduct?: (product: ShippedProduct) => void;
  onNavigate: (page: PageView) => void;
}

export const ShipView: React.FC<ShipViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#07090E] text-[#F0F4F8] pt-24 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto selection:bg-blue-600/30 selection:text-white font-sans-clean">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-7 pb-4 border-b border-white/10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-blue-400" />
          <span>Back to Home</span>
        </button>

        <div className="text-xs font-mono-tech text-blue-400 tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>03 / SHIPPED BUILDS & CLIENT WORK</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="space-y-3.5 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-[11px] font-mono-tech uppercase tracking-widest">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span>PORTFOLIO & PRODUCTS</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.12]">
          Creative products built for real businesses, hackathons & startups.
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Explore interactive previews of live web applications, client landing pages, and digital tools designed and shipped from scratch.
        </p>
      </div>

      {/* Products Feed - Editorial Cards Matching Website Aesthetics */}
      <div className="space-y-10">
        {PRODUCTS_DATA.map((product, idx) => {
          const isClientProject = product.projectType === 'client';
          const expectedTitle = isClientProject ? 'WHAT THE CLIENT WANTED' : 'WHAT WAS EXPECTED';
          const deliveredTitle = isClientProject ? 'WHAT I DELIVERED' : 'WHAT I BUILT';

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="rounded-[24px] sm:rounded-[28px] bg-[#0E1320] text-white border border-blue-500/20 hover:border-blue-400/50 p-5 sm:p-7 md:p-9 shadow-2xl space-y-6 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Blue Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Interactive Browser Mockup Container */}
              <div className="rounded-2xl border border-blue-500/20 overflow-hidden bg-[#07090E] shadow-md flex flex-col relative z-10">
                {/* Browser Window Top Bar */}
                <div className="bg-[#141A29] border-b border-blue-500/20 px-4 py-2 flex items-center justify-between gap-3">
                  {/* 3 Colored Mac-Style Window Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#3B82F6] border border-black/10 inline-block" />
                  </div>

                  {/* Centered URL Bar Capsule */}
                  <div className="flex-1 max-w-sm mx-auto">
                    <div className="bg-[#090D15] border border-blue-500/30 rounded-full px-3.5 py-0.5 text-[11px] font-mono-tech text-blue-300 truncate text-center shadow-xs">
                      {product.domain || `${product.id}.vercel.app/`}
                    </div>
                  </div>

                  {/* Right Spacer for optical balance */}
                  <div className="w-10 hidden sm:block" />
                </div>

                {/* Scalable Preview Canvas */}
                <div className="relative h-72 sm:h-96 md:h-[400px] bg-white overflow-hidden">
                  <ProductPreviewFrame product={product} />

                  {/* Floating Interactive Badge */}
                  <div className="absolute bottom-3 right-3 pointer-events-none z-20">
                    <div className="bg-black/90 text-white font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xl border border-blue-500/30 backdrop-blur-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span>INTERACTIVE PREVIEW · SCROLL TO EXPLORE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Live Demo Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  {product.name}
                </h2>
                <div className="px-3 py-1 rounded-full border border-blue-500/40 font-mono-tech text-xs uppercase tracking-wider text-blue-300 font-semibold bg-blue-950/50">
                  {isClientProject ? 'CLIENT BUILD' : 'LIVE DEMO'}
                </div>
              </div>

              {/* WHAT WAS EXPECTED / WHAT THE CLIENT WANTED */}
              <div className="space-y-1.5">
                <div className="font-mono-tech text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>{expectedTitle}</span>
                </div>
                <p className="text-neutral-300 font-sans-clean text-sm sm:text-[15px] font-normal leading-relaxed">
                  {product.expected}
                </p>
              </div>

              {/* WHAT I DELIVERED / WHAT I BUILT */}
              <div className="space-y-1.5">
                <div className="font-mono-tech text-xs font-bold uppercase tracking-widest text-blue-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{deliveredTitle}</span>
                </div>
                <p className="text-neutral-300 font-sans-clean text-sm sm:text-[15px] font-normal leading-relaxed">
                  {product.built}
                </p>
              </div>

              {/* Tags in Blue Website Aesthetic */}
              <div className="flex flex-wrap gap-2 pt-1">
                {product.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 font-mono-tech text-[11px] font-semibold uppercase tracking-wider shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={product.liveUrl || `https://${product.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] flex items-center gap-2 active:scale-[0.98] cursor-pointer"
                >
                  <span>VIEW DEPLOYED SITE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>

                <a
                  href={product.liveUrl || `https://${product.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 sm:py-3 rounded-full border border-blue-500/30 hover:border-blue-400 bg-[#131926] hover:bg-[#1C2436] text-[#F0F4F8] font-mono-tech text-xs uppercase tracking-widest font-semibold transition-all shadow-sm flex items-center gap-2 active:scale-[0.98] cursor-pointer"
                >
                  <span>EXPLORE CODE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Build CTA Callout */}
      <div className="mt-14 p-7 sm:p-10 rounded-[24px] bg-[#0E1320] border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-60 h-60 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-1.5 text-center md:text-left relative z-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Have a product or website you want built?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans-clean max-w-xl">
            Let's turn your idea into a fast, responsive, and beautifully designed digital product.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest transition-colors shadow-lg font-bold group relative z-10 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
          <span>Message Me on Telegram</span>
        </a>
      </div>
    </div>
  );
};
