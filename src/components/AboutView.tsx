import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MapPin,
  Mail,
  Award,
  Trophy,
  Medal,
  CheckCircle2,
  ArrowLeft,
  Send,
  Twitter,
  Github,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
  Briefcase,
  Layers,
  Terminal,
  Calendar,
  ShieldCheck,
  Star
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, AWARDS_DATA, CORE_STATS } from '../lib/data';
import { PageView } from '../types';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

type AboutTab = 'awards' | 'journey' | 'skills';

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<AboutTab>('awards');

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
        return <Star className="w-5 h-5 text-blue-400" />;
    }
  };

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
          <span>04 / PROFILE & HONORS</span>
        </div>
      </div>

      {/* Hero Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>BACKGROUND & IDENTITY</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#F0F4F8] tracking-tight leading-tight">
            I turn complex technology into stories people understand.
          </h1>

          <p className="text-lg text-neutral-300 font-sans-clean font-light leading-relaxed">
            I work across decentralized technologies, artificial intelligence tools, and developer communities.
          </p>

          <p className="text-sm text-neutral-300 font-sans-clean leading-relaxed">
            My work connects in-depth technical research with real people: writing clear essays on Medium and X, hosting developer bootcamps and regional conferences, and building responsive web products from scratch.
          </p>
        </div>

        {/* Quick Profile Summary Card */}
        <div className="lg:col-span-4 p-8 rounded-3xl bg-[#0E1320] border border-blue-500/20 space-y-6 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest">Profile Card</div>
            <h3 className="font-serif-editorial text-2xl text-white">PinnacleCrypt</h3>
            <p className="text-xs font-mono-tech text-neutral-400">@PinnacleCrypt</p>
          </div>

          <div className="space-y-3 text-xs font-mono-tech text-neutral-300 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Location:</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Focus:</span>
              <span className="text-blue-300">Web3 & AI Products</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Telegram:</span>
              <a href={PERSONAL_INFO.links.telegram} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">@PinnacleCrypt</a>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest transition-colors font-bold shadow-md cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-white" />
            <span>Connect on Telegram</span>
          </a>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div className="mb-10 border-b border-white/10 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-mono-tech tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'awards'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/40'
                : 'bg-[#0E1320] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Awards & Recognition</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono-tech ${
              activeTab === 'awards' ? 'bg-black/30 text-white' : 'bg-white/10 text-neutral-400'
            }`}>
              {AWARDS_DATA.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('journey')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-mono-tech tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'journey'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/40'
                : 'bg-[#0E1320] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>Journey & Track Record</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono-tech ${
              activeTab === 'journey' ? 'bg-black/30 text-white' : 'bg-white/10 text-neutral-400'
            }`}>
              {EXPERIENCES.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-mono-tech tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/40'
                : 'bg-[#0E1320] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Capabilities & Stack</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono-tech ${
              activeTab === 'skills' ? 'bg-black/30 text-white' : 'bg-white/10 text-neutral-400'
            }`}>
              {PERSONAL_INFO.skills.length}
            </span>
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      <AnimatePresence mode="wait">
        {activeTab === 'awards' && (
          <motion.div
            key="awards"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <div>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-white">
                  Awards & Recognition
                </h2>
                <p className="text-sm text-neutral-400 font-sans-clean mt-1">
                  Honors, verified community awards, and technical research grants.
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs font-mono-tech self-start sm:self-auto">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified Honors & Grants</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AWARDS_DATA.map((award, idx) => (
                <div
                  key={award.id}
                  className="p-7 sm:p-8 rounded-3xl bg-[#0E1320] border border-blue-500/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-lg group hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]"
                >
                  <div className="space-y-4">
                    {/* Header with Icon, Category Badge & Year */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#07090E] border border-white/10 flex items-center justify-center group-hover:border-amber-400/40 transition-colors shadow-inner">
                          {getAwardIcon(award.category)}
                        </div>
                        <div>
                          <span className="px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-500/30 text-blue-300 text-[10px] sm:text-xs font-mono-tech tracking-wider uppercase">
                            {award.badge || award.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono-tech bg-[#07090E]/60 px-3 py-1 rounded-full border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-amber-400/80" />
                        <span>{award.year}</span>
                      </div>
                    </div>

                    {/* Award Title & Issuer */}
                    <div>
                      <h3 className="font-serif-editorial text-2xl sm:text-2xl text-[#F0F4F8] group-hover:text-amber-200 transition-colors leading-snug">
                        {award.title}
                      </h3>
                      <p className="text-xs font-mono-tech text-blue-400 mt-1">
                        {award.issuer}
                      </p>
                    </div>

                    {/* Highlight Box if present */}
                    {award.highlight && (
                      <div className="p-3 rounded-xl bg-[#07090E]/70 border border-white/5 text-xs font-sans-clean text-neutral-300">
                        <span className="text-amber-400 font-mono-tech font-medium">Highlight: </span>
                        {award.highlight}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans-clean leading-relaxed font-light">
                      {award.description}
                    </p>
                  </div>

                  {/* Proof Link Action if available */}
                  {award.proofUrl && (
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-mono-tech text-neutral-500">
                        Official Verification
                      </span>
                      <a
                        href={award.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-blue-400 hover:text-amber-300 transition-colors group/link"
                      >
                        <span>View Proof on X</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'journey' && (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className="pb-2">
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-white">
                Journey & Track Record
              </h2>
              <p className="text-sm text-neutral-400 font-sans-clean mt-1">
                Roles across technical writing, product engineering, and developer summit leadership.
              </p>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#0E1320] border border-blue-500/20 space-y-4 hover:border-blue-400/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-serif-editorial text-2xl text-white">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-mono-tech text-blue-400">
                        {exp.organization} · {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 font-sans-clean leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    {exp.accomplishments.map((acc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans-clean text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{acc}</span>
                      </div>
                    ))}
                  </div>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#07090E] border border-white/10 text-[11px] font-mono-tech text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'skills' && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* The Thesis Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1320] border border-blue-500/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-blue-400 uppercase tracking-widest">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Operating Philosophy</span>
              </div>

              <h3 className="font-serif-editorial text-3xl text-white">
                The Pinnacle Thesis
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 font-sans-clean font-light leading-relaxed">
                I operate at the intersection of developer education, high-conviction storytelling, and zero-to-one product engineering.
              </p>

              <blockquote className="p-4 rounded-xl bg-[#07090E] border-l-2 border-blue-500 font-serif-editorial text-lg text-blue-200 italic">
                "{PERSONAL_INFO.vibeQuote}"
              </blockquote>
            </div>

            {/* Capabilities Matrix */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1320] border border-blue-500/20 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-blue-400 uppercase tracking-widest">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Core Domains & Tech Stack</span>
              </div>
              <h2 className="font-serif-editorial text-3xl text-white">
                Technical Stack & Expertise
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_INFO.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs font-mono-tech text-blue-300 hover:border-blue-400/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

