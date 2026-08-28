import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, MapPin, Award, Calendar, Wallet, Radio, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EVENTS_DATA, CORE_STATS } from '../lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { AnimatedStat } from './ui/AnimatedStat';
import { EventItem } from '../types';

interface OrganizeSectionProps {
  onSelectEvent: (event: EventItem) => void;
}

export const OrganizeSection: React.FC<OrganizeSectionProps> = ({ onSelectEvent }) => {
  return (
    <section id="organize" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        number="02"
        pill="ORGANIZE"
        title="Grassroots Movements & Global Stages"
        subtitle="Conceiving, anchoring, and scaling regional builder communities across Northern Nigeria and the global Web3 stage."
      />

      {/* Large Stats Grid */}
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

      {/* Narrative Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
        <div>
          <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F0F0F0]">
            Ecosystem Event Archive
          </h3>
          <p className="text-[11px] font-mono-tech text-[#C5A47E] uppercase tracking-widest mt-1">
            KADUNA, NIGERIA • PHYSICAL CONFERENCES • DEVELOPER CIRCUITS
          </p>
        </div>
        <a
          href="https://plume-report-019.notion.site/Pinnacles-Proof-of-work-584a78210868837f9dcf01486eab0a81"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#C5A47E]/40 text-[#C5A47E] text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-[#C5A47E] animate-pulse" />
          <span>Open Notion Proof of Work</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Photography-Forward Event Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS_DATA.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            onClick={() => onSelectEvent(event)}
            className="group cursor-pointer rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#C5A47E]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:glow-gold-sm"
          >
            {/* Visual Photography / Stage Block */}
            <div className="relative aspect-[16/10] w-full bg-[#161616] overflow-hidden border-b border-white/10">
              {event.image ? (
                <>
                  <img
                    src={event.image}
                    alt={event.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Graceful fallback to background gradient if image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling?.nextElementSibling;
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Hidden fallback container activated only on error */}
                  <div
                    style={{ display: 'none' }}
                    className={`absolute inset-0 bg-gradient-to-br ${event.gradient} flex-col items-center justify-center p-6 text-center`}
                  >
                    <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white mb-2">
                      <Users className="w-5 h-5 text-[#C5A47E]" />
                    </div>
                    <span className="font-serif-editorial text-xl sm:text-2xl text-white font-medium">
                      {event.name}
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#E5CCA8] mt-0.5">
                      {event.edition}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Stylized background atmosphere & geometric grid */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-90 group-hover:scale-105 transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-grid-subtle opacity-40" />

                  {/* Central stage graphic / iconography representation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white mb-2 group-hover:border-[#C5A47E] group-hover:scale-110 transition-all">
                      <Users className="w-5 h-5 text-[#C5A47E]" />
                    </div>
                    <span className="font-serif-editorial text-xl sm:text-2xl text-white font-medium">
                      {event.name}
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#E5CCA8] mt-0.5">
                      {event.edition}
                    </span>
                  </div>
                </>
              )}

              {/* Badges on Top corners */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-white/80 text-[11px] font-mono-tech">
                <MapPin className="w-3 h-3 text-[#C5A47E]" />
                <span>{event.location}, {event.country}</span>
              </div>

              <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-[#C5A47E] text-black text-[11px] font-mono-tech font-bold uppercase tracking-wider shadow-md">
                {event.attendees}
              </div>

              {/* Bottom tag pill inside photo container */}
              {event.walletsCreated && (
                <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 px-2 py-0.5 rounded bg-[#161616]/90 border border-[#C5A47E]/30 text-[#C5A47E] text-[10px] font-mono-tech">
                  <Wallet className="w-3 h-3" />
                  <span>{event.walletsCreated}</span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Role & Date Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="px-2.5 py-1 rounded bg-[#161616] border border-[#C5A47E]/30 text-[#C5A47E] text-xs font-mono-tech font-medium tracking-wide">
                      {event.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50 text-[11px] font-mono-tech shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A47E]/70 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/60 font-sans-clean font-light leading-relaxed mb-4">
                  {event.description}
                </p>
              </div>

              {/* Event Stats Pills */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {event.stats.map((s, i) => (
                    <div key={i} className="p-1.5 rounded bg-[#161616] border border-white/10">
                      <div className="font-mono-tech text-xs text-[#C5A47E] font-semibold">{s.value}</div>
                      <div className="text-[9px] font-mono-tech text-white/40 truncate">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono-tech text-white/40 pt-2">
                  <span className="text-[11px] text-white/40">
                    {event.tags.slice(0, 2).join(' • ')}
                  </span>
                  <span className="text-[#C5A47E] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-medium">
                    <span>View Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
