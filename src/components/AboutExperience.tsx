import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Award,
  Trophy,
  Medal,
  CheckCircle,
  ChevronDown,
  Sparkles,
  MapPin,
  Terminal,
  Layers,
  ArrowUpRight,
  Calendar
} from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO, AWARDS_DATA } from '../lib/data';
import { SectionHeading } from './ui/SectionHeading';

export const AboutExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journey' | 'awards'>('awards');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const getAwardIcon = (category: string) => {
    switch (category) {
      case 'Award':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Medal':
        return <Medal className="w-5 h-5 text-yellow-400" />;
      case 'Certificate':
        return <Award className="w-5 h-5 text-blue-400" />;
      case 'Grant':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        number="04"
        pill="ABOUT & TRACK RECORD"
        title="Engineering, Advocacy & Recognition"
        subtitle="Bridging technical rigor with human community building across Web3 ecosystems."
      />

      {/* Tabs */}
      <div className="flex items-center gap-3 mb-10">
        <button
          onClick={() => setActiveTab('awards')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 'awards'
              ? 'bg-[#C5A47E] text-black font-bold shadow-lg shadow-[#C5A47E]/20'
              : 'bg-[#121212] text-white/50 hover:text-white border border-white/10'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Awards & Recognition ({AWARDS_DATA.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('journey')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 'journey'
              ? 'bg-[#C5A47E] text-black font-bold shadow-lg shadow-[#C5A47E]/20'
              : 'bg-[#121212] text-white/50 hover:text-white border border-white/10'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Journey & Track Record ({EXPERIENCES.length})</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Personal Narrative & Philosophy */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#C5A47E]/40 flex items-center justify-center text-[#C5A47E] mb-6">
              <Terminal className="w-5 h-5" />
            </div>

            <h3 className="font-serif-editorial text-3xl text-[#F0F0F0] mb-4 leading-tight">
              The Pinnacle Thesis
            </h3>

            <p className="font-sans-clean text-sm text-white/70 font-light leading-relaxed mb-4">
              I operate at the intersection of developer education, high-conviction storytelling, and zero-to-one product engineering.
            </p>

            <p className="font-sans-clean text-sm text-white/50 font-light leading-relaxed mb-6">
              Whether on-stage addressing physical builders in Web3 conferences, authoring viral deep-dives, or deploying AI-driven tools, the guiding principle remains constant:
            </p>

            <blockquote className="p-4 rounded-lg bg-[#161616] border-l-2 border-[#C5A47E] font-serif-editorial text-lg text-[#E5CCA8] italic">
              "{PERSONAL_INFO.vibeQuote}"
            </blockquote>
          </div>

          {/* Core Technical Domains & Skill Cloud */}
          <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C5A47E] uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4" />
              <span>Core Competencies & Stack</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-[#161616] border border-white/10 text-xs font-mono-tech text-white/70 hover:text-white hover:border-[#C5A47E]/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Tab Content */}
        <div className="lg:col-span-7 space-y-6">
          {activeTab === 'awards' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">
                  HONORS & RECOGNITION
                </span>
                <span className="text-xs font-mono-tech text-[#C5A47E] tracking-widest">
                  VERIFIED AWARDS
                </span>
              </div>

              {AWARDS_DATA.map((award) => (
                <div
                  key={award.id}
                  className="p-6 rounded-xl bg-[#0F0F0F] border border-white/10 hover:border-[#C5A47E]/40 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#161616] border border-white/10 flex items-center justify-center">
                        {getAwardIcon(award.category)}
                      </div>
                      <div>
                        <span className="px-2 py-0.5 rounded bg-[#161616] border border-[#C5A47E]/30 text-[#C5A47E] text-[10px] font-mono-tech tracking-wider uppercase">
                          {award.badge || award.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-xs font-mono-tech">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A47E]/70" />
                      <span>{award.year}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif-editorial text-xl text-white">
                      {award.title}
                    </h4>
                    <div className="font-mono-tech text-xs text-[#C5A47E]">
                      {award.issuer}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/60 font-sans-clean font-light leading-relaxed">
                    {award.description}
                  </p>

                  {award.proofUrl && (
                    <div className="pt-2 border-t border-white/5 flex justify-end">
                      <a
                        href={award.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono-tech text-[#C5A47E] hover:underline"
                      >
                        <span>View Proof on X</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">
                  CHRONOLOGICAL EXPERIENCE
                </span>
                <span className="text-xs font-mono-tech text-[#C5A47E] tracking-widest">
                  2023 — PRESENT
                </span>
              </div>

              {EXPERIENCES.map((exp, idx) => {
                const isOpen = expandedIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-[#161616] border-[#C5A47E]/50 shadow-xl shadow-black/60'
                        : 'bg-[#0F0F0F] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono-tech text-xs text-[#C5A47E] font-semibold tracking-wider">
                            {exp.period || 'ONGOING'}
                          </span>
                          <span className="text-white/20">•</span>
                          <span className="font-mono-tech text-xs text-white/40">
                            {exp.location}
                          </span>
                        </div>

                        <h4 className="font-serif-editorial text-2xl text-[#F0F0F0]">
                          {exp.role}
                        </h4>

                        <div className="font-mono-tech text-xs text-[#E5CCA8]/80">
                          {exp.organization}
                        </div>
                      </div>

                      <div
                        className={`p-2 rounded-lg bg-[#0A0A0A] border border-white/10 text-white/40 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white border-[#C5A47E]/50' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expandable details */}
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4"
                      >
                        <p className="font-sans-clean text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                          {exp.summary}
                        </p>

                        <div className="space-y-2">
                          <div className="text-[11px] font-mono-tech text-white/40 uppercase tracking-wider">
                            Key Deliverables:
                          </div>
                          {exp.accomplishments.map((acc, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                              <span className="text-[#C5A47E] font-mono-tech font-bold text-xs mt-0.5">
                                0{aIdx + 1}.
                              </span>
                              <span className="font-light">{acc}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono-tech text-white/40 bg-[#0A0A0A] px-2 py-0.5 rounded border border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
