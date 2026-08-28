import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Users, Award, Wallet, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

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
          className="relative w-full max-w-2xl bg-[#0E121B] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col font-sans-clean"
        >
          {/* Header Banner */}
          <div className="p-6 bg-[#131926] border-b border-white/10 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#0E1320] hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer border border-white/10 z-20"
              aria-label="Close event modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2.5 mb-3 pr-8">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech bg-blue-950/60 text-blue-300 uppercase border border-blue-500/40 tracking-wider">
                {event.location}, {event.country}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono-tech text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {event.date}
              </span>
            </div>

            <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F0F4F8] leading-tight">
              {event.name}
            </h3>
            
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs font-mono-tech">
              {event.edition && (
                <span className="text-blue-400 font-medium">
                  {event.edition}
                </span>
              )}
              {event.edition && <span className="text-white/20">•</span>}
              <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs">
                {event.role}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Event Photography in Modal */}
            {event.image && (
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-blue-500/30 bg-[#0E1320] shadow-lg">
                <img
                  src={event.image}
                  alt={event.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const parent = target.parentElement;
                    if (parent) parent.style.display = 'none';
                  }}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono-tech text-white">
                  📸 Event Stage & Community Archive
                </div>
              </div>
            )}

            <div>
              <div className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider mb-2">
                Executive Overview & Regional Significance:
              </div>
              <p className="font-sans-clean text-sm text-neutral-200 font-light leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="p-5 rounded-xl bg-[#131926] border border-blue-500/20 space-y-3">
              <div className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider">
                Verified Production Outcomes:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {event.stats.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#0E1320] border border-blue-500/20 text-center">
                    <div className="font-mono-tech text-lg text-blue-300 font-semibold">{s.value}</div>
                    <div className="text-[11px] font-mono-tech text-neutral-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars */}
            <div>
              <div className="text-xs font-mono-tech text-blue-400 uppercase mb-2 tracking-wider">
                Program Deliverables:
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Curated developer curricula and hands-on tooling sessions.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>On-stage keynote moderation and brand partnership alignment.</span>
                </div>
                {event.walletsCreated && (
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                    <span>Facilitated {event.walletsCreated} directly onto active mainnets.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {event.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-xs font-mono-tech text-blue-300"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-white/10 bg-[#131926] flex items-center justify-between gap-3">
            {event.notionUrl ? (
              <a
                href={event.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/40 text-xs font-mono-tech font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Open Notion Report</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono-tech text-neutral-400">
                Co-Anchor & Lead Host: Pinnacle
              </span>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#0E1320] hover:bg-blue-600/20 text-neutral-300 hover:text-white border border-blue-500/30 text-xs font-mono-tech cursor-pointer transition-colors"
            >
              Close Archive
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
