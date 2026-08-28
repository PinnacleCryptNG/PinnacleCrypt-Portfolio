import React from 'react';
import { motion } from 'motion/react';
import { Users, MapPin, Award, Calendar, Wallet, Radio, Sparkles, ArrowUpRight, ArrowLeft, Send } from 'lucide-react';
import { EVENTS_DATA, CORE_STATS, PERSONAL_INFO } from '../lib/data';
import { AnimatedStat } from './ui/AnimatedStat';
import { EventItem, PageView } from '../types';

interface OrganizeViewProps {
  onSelectEvent: (event: EventItem) => void;
  onNavigate: (page: PageView) => void;
}

export const OrganizeView: React.FC<OrganizeViewProps> = ({ onSelectEvent, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#07090E] text-[#F0F4F8] pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto selection:bg-blue-600/30 selection:text-white font-sans-clean">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-blue-400" />
          <span>Back to Home</span>
        </button>

        <div className="text-xs font-mono-tech text-blue-400 tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>02 / SUMMITS & COMMUNITIES</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest">
          <Users className="w-3.5 h-3.5 text-blue-400" />
          <span>COMMUNITY & EVENTS</span>
        </div>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#F0F4F8] tracking-tight leading-tight">
          I Organize: Community Events & Summits
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
          Planning, hosting, and growing vibrant tech communities through conferences, hackathons, and hands-on developer workshops.
        </p>

        {/* Notion Master Documentation Bar */}
        <div className="pt-2">
          <a
            href="https://plume-report-019.notion.site/Pinnacles-Proof-of-work-584a78210868837f9dcf01486eab0a81"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-950/70 via-[#10192C] to-[#0D1424] border border-blue-500/40 hover:border-blue-400 text-white transition-all shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] group"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              N
            </div>
            <div className="text-left">
              <div className="text-xs font-mono-tech font-bold text-blue-300 group-hover:text-white uppercase tracking-wider flex items-center gap-1.5">
                <span>Pinnacle's Proof of Work (Notion Database)</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-[11px] text-neutral-400 font-sans-clean">
                Live metrics, media archives, participant testimonials & full production docs
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Core Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {CORE_STATS.map((stat, i) => (
          <AnimatedStat
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            sublabel={stat.sublabel}
          />
        ))}
      </div>

      {/* Events Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS_DATA.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => onSelectEvent(event)}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-[#0E1320] border border-blue-500/20 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] cursor-pointer overflow-hidden"
          >
            <div className="space-y-4">
              {/* Event Photography Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#131926] overflow-hidden border border-white/10 group-hover:border-blue-400/40 transition-colors">
                {event.image ? (
                  <>
                    <img
                      src={event.image}
                      alt={event.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling?.nextElementSibling;
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle dark bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1320] via-[#0E1320]/20 to-transparent opacity-80 pointer-events-none" />
                    
                    <div
                      style={{ display: 'none' }}
                      className={`w-full h-full bg-gradient-to-br ${event.gradient} flex-col items-center justify-center p-4 text-center absolute inset-0`}
                    >
                      <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-blue-300 mb-2">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="font-serif-editorial text-lg text-white/90 font-medium">
                        {event.name}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${event.gradient} flex flex-col items-center justify-center p-4 text-center`}>
                    <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-blue-300 mb-2">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="font-serif-editorial text-lg text-white/90 font-medium">
                      {event.name}
                    </span>
                  </div>
                )}

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#07090E]/80 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono-tech text-white shadow-sm">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>{event.location}, {event.country}</span>
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono-tech font-bold uppercase tracking-wider shadow-md">
                  {event.attendees}
                </div>
              </div>

              {/* Event Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono-tech pb-2.5 border-b border-white/5">
                <span className="inline-flex items-center self-start px-2.5 py-1 rounded-md bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-medium tracking-wide">
                  {event.role}
                </span>
                <span className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-mono-tech shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-400/70" />
                  {event.date}
                </span>
              </div>

              {/* Title & Edition */}
              <div>
                <h3 className="font-serif-editorial text-2xl text-[#F0F4F8] group-hover:text-blue-300 transition-colors">
                  {event.name}
                </h3>
                {event.edition && (
                  <div className="text-xs font-mono-tech text-blue-400/90 mt-1">
                    {event.edition}
                  </div>
                )}
              </div>

              {/* Highlight & Description */}
              <p className="text-xs text-neutral-300 font-sans-clean leading-relaxed line-clamp-2">
                {event.description}
              </p>

              {/* Quick Stats Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {event.stats.slice(0, 2).map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono-tech text-neutral-200 border border-white/10">
                    {s.label}: <strong className="text-blue-300">{s.value}</strong>
                  </span>
                ))}
                {event.walletsCreated && (
                  <span className="px-2.5 py-1 rounded-md bg-sky-950/50 text-[11px] font-mono-tech text-sky-300 border border-sky-500/30">
                    👛 {event.walletsCreated}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech">
              <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-1">
                View Archive
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>

              {event.notionUrl && (
                <a
                  href={event.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1 rounded-full bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-blue-300 hover:text-white text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>Notion</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Host CTA Callout */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0E1526] to-[#080A0F] border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif-editorial text-3xl text-white">
            Planning a Hackathon or Web3 Conference?
          </h3>
          <p className="text-sm text-neutral-300 font-sans-clean max-w-xl leading-relaxed">
            From grassroots logistics, speaker curation, to on-chain wallet generation bootcamps—let's build your next summit.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest transition-all shadow-lg font-bold group cursor-pointer"
        >
          <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          <span>Host With Me on Telegram</span>
        </a>
      </div>
    </div>
  );
};
