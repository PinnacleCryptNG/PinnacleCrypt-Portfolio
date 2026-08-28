import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Twitter, ArrowUpRight, Sparkles, BookOpen, Search, Send, ArrowLeft, Heart, ExternalLink } from 'lucide-react';
import { ARTICLES_DATA, PERSONAL_INFO } from '../lib/data';
import { ArticleItem, PageView } from '../types';

interface CreateViewProps {
  onSelectArticle: (article: ArticleItem) => void;
  onNavigate: (page: PageView) => void;
}

export const CreateView: React.FC<CreateViewProps> = ({ onSelectArticle, onNavigate }) => {
  const [activePlatformFilter, setActivePlatformFilter] = useState<'all' | 'medium' | 'x'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = ['All', 'Bitcoin & DeFi', 'Solana & DeFi', 'Web3 UX & Social', 'AI & DeFi', 'Yield', 'Staking', 'Modular Tech'];

  const mediumArticlesCount = ARTICLES_DATA.filter((a) => a.platform === 'medium').length;
  const xArticlesCount = ARTICLES_DATA.filter((a) => a.platform === 'x').length;

  const filteredArticles = ARTICLES_DATA.filter((a) => {
    const matchesPlatform = activePlatformFilter === 'all' || a.platform === activePlatformFilter;
    const matchesCat = selectedCategory === 'All'
      || a.categories.includes(selectedCategory)
      || a.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === ''
      || a.title.toLowerCase().includes(searchQuery.toLowerCase())
      || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      || a.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F0F4F8] pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto selection:bg-blue-600/30 selection:text-white font-sans-clean">
      {/* Top Breadcrumb & Back button */}
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
          <span>01 / RESEARCH ARCHIVE & THESES</span>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="space-y-5 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>RESEARCH, ESSAYS & DEEP DIVES</span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#F0F4F8] tracking-tight leading-tight">
            I Create: Technical Research & Theses
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed font-sans-clean">
            Deconstructing cryptographic mechanics, autonomous AI systems, tokenomic primitives, and decentralized infrastructure into clear, high-signal research threads and publications.
          </p>
        </div>
      </div>

      {/* Platform Tabs & Filter Bar */}
      <div className="space-y-4 mb-10 pb-6 border-b border-white/10">
        {/* Source Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#0E1320] border border-blue-500/20 w-full sm:w-fit overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActivePlatformFilter('all')}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activePlatformFilter === 'all'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Research ({ARTICLES_DATA.length})
            </button>
            <button
              onClick={() => setActivePlatformFilter('medium')}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
                activePlatformFilter === 'medium'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-300 shrink-0" />
              <span>Medium Articles ({mediumArticlesCount})</span>
            </button>
            <button
              onClick={() => setActivePlatformFilter('x')}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
                activePlatformFilter === 'x'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Twitter className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>X / Twitter Theses ({xArticlesCount})</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays, topics, or keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#0E1320] border border-blue-500/20 focus:border-blue-400 focus:outline-none text-xs font-mono-tech text-white placeholder-neutral-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none max-w-full">
          {filterCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600/30 text-blue-300 border border-blue-400/60 font-semibold'
                    : 'bg-[#0E1320]/60 text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid / Empty States */}
      {activePlatformFilter === 'medium' && mediumArticlesCount === 0 ? (
        /* Dedicated Medium Placeholder Section */
        <div className="text-center py-20 bg-[#0E1320] rounded-3xl border border-blue-500/20 p-8 space-y-5 max-w-2xl mx-auto shadow-xl">
          <div className="w-14 h-14 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
            <BookOpen className="w-7 h-7 text-sky-400" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif-editorial text-3xl text-white">
              Medium Articles Coming Soon
            </h3>
            <p className="text-sm text-neutral-300 font-sans-clean leading-relaxed max-w-md mx-auto">
              Long-form Medium research, technical theses, and in-depth essays will be published here soon.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={PERSONAL_INFO.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-tech font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Follow on Medium (@pinnaclecrypt)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setActivePlatformFilter('x')}
              className="px-6 py-3 rounded-full bg-[#131926] hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer"
            >
              Browse X Theses ({xArticlesCount})
            </button>
          </div>
        </div>
      ) : filteredArticles.length === 0 ? (
        <div className="text-center py-20 bg-[#0E1320] rounded-3xl border border-blue-500/20 p-8 space-y-4">
          <p className="text-neutral-300 font-mono-tech text-sm">No research publications match your selected filter.</p>
          <button
            onClick={() => {
              setActivePlatformFilter('all');
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-mono-tech font-bold uppercase tracking-wider hover:bg-blue-500 transition-all cursor-pointer shadow-md"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => {
            const isMedium = article.platform === 'medium';
            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                className="group relative flex flex-col justify-between p-5 rounded-3xl bg-[#0E1320] border border-blue-500/20 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Cover Image Banner */}
                  {article.image && (
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-blue-400/40 transition-colors">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1320] via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        {isMedium ? (
                          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-blue-500/40 text-[10px] font-mono-tech text-sky-300 font-bold uppercase flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            <span>Medium</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono-tech text-sky-400 font-bold uppercase flex items-center gap-1">
                            <Twitter className="w-3 h-3" />
                            <span>X Thread</span>
                          </span>
                        )}
                      </div>

                      {article.claps && (
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-blue-500/30 text-[10px] font-mono-tech text-sky-300 flex items-center gap-1 font-bold">
                          <Heart className="w-3 h-3 fill-sky-400 text-sky-400" />
                          <span>{article.claps}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300">
                      {article.category}
                    </span>
                    <span>{article.date} · {article.readTime}</span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="font-serif-editorial text-2xl text-[#F0F4F8] group-hover:text-blue-300 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed font-sans-clean">
                    {article.subtitle || article.excerpt}
                  </p>
                </div>

                {/* Bottom Direct Link Action */}
                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono-tech text-neutral-400">
                    {isMedium ? 'Medium Essay' : 'X Thread'}
                  </span>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-mono-tech font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    aria-label={`Open ${article.title} on ${isMedium ? 'Medium' : 'X'}`}
                  >
                    {isMedium ? (
                      <>
                        <BookOpen className="w-3.5 h-3.5 text-sky-300" />
                        <span>Read on Medium</span>
                      </>
                    ) : (
                      <>
                        <Twitter className="w-3.5 h-3.5 text-sky-400" />
                        <span>Read on X</span>
                      </>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}

      {/* Bottom Collaboration Callout */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0E1526] to-[#080A0F] border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif-editorial text-3xl text-white">
            Need in-depth technical writing for your protocol?
          </h3>
          <p className="text-sm text-neutral-300 font-sans-clean max-w-xl leading-relaxed">
            I deliver high-signal research theses, tokenomic breakdowns, and developer-facing research publications that drive real ecosystem engagement.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest transition-all shadow-lg group font-bold cursor-pointer"
        >
          <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          <span>Discuss Research on Telegram</span>
        </a>
      </div>
    </div>
  );
};
