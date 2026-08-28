import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Twitter, ArrowUpRight, Sparkles, Cpu, TrendingUp, Layers, Coins, Globe, Bot } from 'lucide-react';
import { ARTICLES_DATA, PERSONAL_INFO } from '../lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { ArticleItem } from '../types';

interface CreateSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const CreateSection: React.FC<CreateSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterCategories = ['All', 'AI', 'DeFi', 'Yield', 'Staking', 'RWA Tokenization'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.categories.includes(selectedCategory) || a.category === selectedCategory);

  const renderCoverVisual = (article: ArticleItem) => {
    if (article.image) {
      return (
        <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-[#C5A47E]/40 transition-colors">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      );
    }

    return (
      <div className={`relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-gradient-to-br ${article.coverGradient || 'from-neutral-900 via-neutral-950 to-black'} border border-white/10 flex items-center justify-center group-hover:border-[#C5A47E]/40 transition-colors`}>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-subtle opacity-25" />
        
        {/* Ambient subtle glow inside cover */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C5A47E]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Dynamic decorative vector graphics per article theme */}
        {article.coverPattern === 'ai-defi' && (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-[#C5A47E]/40 flex items-center justify-center text-[#C5A47E] shadow-lg">
              <Bot className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-[#E5CCA8] bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AGENTIC DEFI PIPELINE</span>
            </div>
          </div>
        )}

        {article.coverPattern === 'yield' && (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-emerald-300 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10">
              <span>BTC YIELD DYNAMICS</span>
            </div>
          </div>
        )}

        {article.coverPattern === 'staking' && (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-lg">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-indigo-200 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10">
              <span>LIQUID STAKING EVM</span>
            </div>
          </div>
        )}

        {article.coverPattern === 'rwa' && (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-amber-500/40 flex items-center justify-center text-[#C5A47E] shadow-lg">
              <Coins className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-[#E5CCA8] bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10">
              <span>RWA TOKENIZATION VAULTS</span>
            </div>
          </div>
        )}

        {article.coverPattern === 'ai-atlas' && (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-violet-400/40 flex items-center justify-center text-violet-300 shadow-lg">
              <Globe className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-violet-200 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10">
              <span>ON-CHAIN INTELLIGENCE</span>
            </div>
          </div>
        )}

        {article.coverPattern === 'superpower' && (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-white/80 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10">
              <span>BUILDER VELOCITY & PROMPT</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="create" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Updated Section Heading with requested Title */}
      <SectionHeading
        number="01"
        pill="RESEARCH & NARRATIVES"
        title="Research & Content Narratives"
        subtitle="Deep-dive architectural essays, protocol tokenomics breakdowns, and autonomous AI research on cutting-edge Web3 rails."
      />

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
        <span className="font-mono-tech text-[10px] text-white/40 mr-2 uppercase tracking-widest">
          Filter:
        </span>
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#C5A47E] text-black font-bold shadow-md shadow-black/40'
                  : 'bg-[#141414] text-white/60 hover:text-white hover:bg-[#1E1E1E] border border-white/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Responsive 1 / 2 / 3 Column Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredArticles.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#C5A47E]/50 hover:bg-[#141414] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/80 cursor-pointer select-none"
            onClick={() => onSelectArticle(article)}
          >
            <div className="space-y-4">
              {/* Rounded Cover Image Placeholder */}
              <div className="relative">
                {renderCoverVisual(article)}

                {/* Small Category Tag Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-tech font-bold bg-black/80 backdrop-blur-md text-[#C5A47E] border border-[#C5A47E]/40 uppercase tracking-wider shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif-editorial text-lg sm:text-xl text-[#F0F0F0] group-hover:text-[#E5CCA8] transition-colors leading-snug line-clamp-2">
                {article.title}
              </h3>

              {/* Two-Line Excerpt */}
              <p className="font-sans-clean text-xs sm:text-sm text-white/55 font-light leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </div>

            {/* Footer Row with tiny author avatar, name, date, and external link */}
            <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
              {/* Tiny Author Avatar, Name & Date */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] border border-[#C5A47E]/40 text-[#C5A47E] flex items-center justify-center font-serif-editorial text-[10px] font-bold shadow-sm">
                  P
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono-tech text-white/60">
                  <span className="text-white/80 font-medium">Pinnacle</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/40 text-[11px]">{article.date}</span>
                </div>
              </div>

              {/* Action Link Icon */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-[#161616] border border-white/10 text-white/60 hover:text-black hover:bg-[#C5A47E] hover:border-[#C5A47E] transition-all flex items-center gap-1 group/btn shadow-sm"
                title="Read on X / Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
                <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
