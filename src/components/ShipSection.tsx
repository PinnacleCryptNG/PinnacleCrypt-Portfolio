import React from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowUpRight, ExternalLink, FileText, Code2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { ShippedProduct } from '../types';

interface ShipSectionProps {
  onSelectProduct?: (product: ShippedProduct) => void;
}

export const ShipSection: React.FC<ShipSectionProps> = () => {
  // Format clean display URL from liveUrl
  const getDisplayUrl = (url?: string) => {
    if (!url) return 'deployed.app/';
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '') + '/';
  };

  return (
    <section id="ship" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        number="03"
        pill="SHIP"
        title="Autonomous Products & Deployed Code"
        subtitle="Zero-to-one intelligent applications, DeFi liquidity tools, and autonomous AI agents shipped to production."
      />

      {/* Responsive Grid matching the uploaded browser mockup card layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {PRODUCTS_DATA.map((product, idx) => {
          const secondaryLink = product.links.find((l) => l.type !== 'live') || product.links[0];

          return (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-3xl bg-[#0F0F0F] border border-white/10 p-5 sm:p-7 shadow-2xl hover:border-[#C5A47E]/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="space-y-6">
                {/* Top Browser Window Mockup with Scrollable Live Interactive Preview */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#141414] shadow-inner flex flex-col">
                  {/* Browser Top Navigation Bar */}
                  <div className="px-3.5 py-2.5 bg-[#181818] border-b border-white/10 flex items-center justify-between gap-3 select-none">
                    {/* Traffic Light Dots */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                    </div>

                    {/* Address Bar Pill */}
                    <div className="flex-1 max-w-xs mx-auto px-3 py-1 rounded-full bg-[#0D0D0D] border border-white/10 text-[11px] font-mono-tech text-white/60 text-center truncate">
                      {getDisplayUrl(product.liveUrl)}
                    </div>

                    {/* Right spacer for optical balance */}
                    <div className="w-8 shrink-0 flex justify-end">
                      <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
                    </div>
                  </div>

                  {/* Scrollable Live Interactive Iframe Viewport */}
                  <div className="relative w-full h-64 sm:h-72 bg-neutral-900 overflow-hidden group/frame">
                    {product.liveUrl ? (
                      <iframe
                        src={product.liveUrl}
                        title={`${product.name} Interactive Live Preview`}
                        className="w-full h-full border-0 bg-white"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs font-mono-tech text-white/40 bg-[#121212]">
                        Interactive preview available on deployed link
                      </div>
                    )}

                    {/* Floating Bottom Badge: INTERACTIVE PREVIEW • USE THE MENU */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-10">
                      <div className="px-3.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[10px] font-mono-tech uppercase tracking-widest text-[#F0F0F0] shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>INTERACTIVE PREVIEW • SCROLL &amp; EXPLORE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title & Live Demo Header Row */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#F0F0F0] tracking-tight">
                    {product.name}
                  </h3>

                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#181818] hover:bg-[#252525] text-white/80 hover:text-white border border-white/15 hover:border-[#C5A47E] text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm shrink-0"
                    >
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C5A47E]" />
                    </a>
                  )}
                </div>

                {/* WHAT THE CLIENT WANTED / WHAT WAS EXPECTED */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#FF7765]">
                    WHAT WAS EXPECTED
                  </div>
                  <p className="font-sans-clean text-sm text-white/70 font-light leading-relaxed">
                    {product.expected}
                  </p>
                </div>

                {/* WHAT I DELIVERED / WHAT I BUILT */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#818CF8]">
                    WHAT I DELIVERED
                  </div>
                  <p className="font-sans-clean text-sm text-white/85 font-light leading-relaxed">
                    {product.built}
                  </p>
                </div>

                {/* Spacious & Distinct Technology Pills */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {product.stack.slice(0, 4).map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-3.5 py-1 rounded-full text-xs font-mono-tech font-semibold tracking-wide uppercase shadow-sm ${
                        i === 0
                          ? 'bg-[#EAF5D6] text-[#2B4E11] border border-[#2B4E11]/20'
                          : i === 1
                          ? 'bg-[#E0E7FF] text-[#3730A3] border border-[#3730A3]/20'
                          : i === 2
                          ? 'bg-[#FEF3C7] text-[#78350F] border border-[#78350F]/20'
                          : 'bg-[#F3E8FF] text-[#581C87] border border-[#581C87]/20'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Buttons: VIEW DEPLOYED SITE + VIEW WRITEUP/CODE */}
              <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#181818] hover:bg-[#252525] text-white hover:text-[#C5A47E] border border-white/15 hover:border-[#C5A47E] text-xs font-mono-tech uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                  >
                    <span>VIEW DEPLOYED SITE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A47E]" />
                  </a>
                )}

                {secondaryLink && secondaryLink.url !== product.liveUrl && (
                  <a
                    href={secondaryLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-transparent hover:bg-white/5 text-white/75 hover:text-white border border-white/15 hover:border-white/30 text-xs font-mono-tech uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    {secondaryLink.type === 'hackathon' ? (
                      <span>DEVPOST SUBMISSION</span>
                    ) : (
                      <span>VIEW WRITEUP / CODE</span>
                    )}
                    <ExternalLink className="w-3.5 h-3.5 text-white/50" />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
