import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Globe, FileText, CheckCircle2, ArrowUpRight, Play, Terminal, Sparkles } from 'lucide-react';
import { ShippedProduct } from '../types';

interface ProductModalProps {
  product: ShippedProduct | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0E121B] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col font-sans-clean"
        >
          {/* Header */}
          <div className="p-6 bg-[#131926] border-b border-white/10 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech bg-blue-950/60 border border-blue-500/40 text-blue-300 uppercase tracking-wider">
                  {product.status}
                </span>
                <span className="text-xs font-mono-tech text-neutral-400">
                  {product.date || product.year} • {product.category}
                </span>
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F0F4F8]">
                {product.name}
              </h3>
              <p className="text-xs font-mono-tech text-blue-400 mt-1">
                {product.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#0E1320] hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer border border-white/10"
                aria-label="Close product modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 py-2 bg-[#090D15] border-b border-white/10 flex items-center gap-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Overview & Blueprint
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'preview'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Play className="w-3 h-3" />
              <span>Interactive Live Preview</span>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {activeTab === 'overview' ? (
              <>
                {/* Expected vs Built Summary Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#131926] border border-blue-500/20 space-y-1.5">
                    <span className="font-mono-tech text-[10px] text-sky-400 uppercase tracking-wider block font-bold">
                      {product.projectType === 'client' ? 'WHAT CLIENT WANTED:' : 'WHAT WAS EXPECTED:'}
                    </span>
                    <p className="font-sans-clean text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {product.expected}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/40 space-y-1.5">
                    <span className="font-mono-tech text-[10px] text-blue-300 uppercase tracking-wider block font-bold">
                      {product.projectType === 'client' ? 'WHAT I DELIVERED:' : 'WHAT I BUILT:'}
                    </span>
                    <p className="font-sans-clean text-xs sm:text-sm text-white font-light leading-relaxed">
                      {product.built}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider mb-2">
                    Product Architecture:
                  </div>
                  <p className="font-sans-clean text-sm text-neutral-300 font-light leading-relaxed">
                    {product.extendedDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div className="p-5 rounded-xl bg-[#131926] border border-blue-500/20 space-y-3">
                  <div className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider">
                    Core Technical Highlights:
                  </div>
                  <div className="space-y-2">
                    {product.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="font-light">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs font-mono-tech text-blue-400 uppercase mb-2 tracking-wider">
                    Full Technology Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-xs font-mono-tech text-blue-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Live Preview Tab */
              <div className="space-y-4">
                <div className="p-3 bg-[#131926] rounded-xl border border-blue-500/20 flex items-center justify-between text-xs font-mono-tech">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-neutral-400">Live Deployed Target:</span>
                    <span className="text-blue-300 font-medium truncate max-w-xs">{product.liveUrl || `https://${product.domain}`}</span>
                  </div>
                  {(product.liveUrl || product.domain) && (
                    <a
                      href={product.liveUrl || `https://${product.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Open Full Screen</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Embedded Frame */}
                {(product.liveUrl || product.domain) ? (
                  <div className="relative w-full h-[380px] rounded-xl overflow-hidden border border-blue-500/20 bg-black">
                    <iframe
                      src={product.liveUrl || `https://${product.domain}`}
                      title={`${product.name} Live Demo`}
                      className="w-full h-full border-0"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                ) : (
                  <div className="p-12 text-center border border-white/10 rounded-xl bg-[#0E1320] text-neutral-400 text-sm font-mono-tech">
                    Live demo accessible via external repository.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="p-5 border-t border-white/10 bg-[#131926] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono-tech text-neutral-400">
              Shipped by Pinnacle (@PinnacleCrypt)
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {(product.liveUrl || product.domain) && (
                <a
                  href={product.liveUrl || `https://${product.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-mono-tech bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Launch Live Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {product.links.filter(l => l.type !== 'live').map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-mono-tech bg-[#0E1320] hover:bg-white/10 text-neutral-300 hover:text-white border border-blue-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
