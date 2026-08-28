import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Twitter, ArrowUpRight, BookOpen, Heart, Bookmark, Eye, ExternalLink } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const isMedium = article.platform === 'medium';

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
          {/* Top Bar */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#131926]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech bg-blue-950/60 border border-blue-500/40 text-blue-300 uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs font-mono-tech text-neutral-400">
                {article.date} {article.readTime ? `• ${article.readTime}` : ''}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#0E1320] hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer border border-white/10"
              aria-label="Close article modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {article.image && (
              <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-blue-500/20 shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {article.claps && (
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-blue-500/30 text-xs font-mono-tech text-sky-300 flex items-center gap-1.5 font-bold">
                    <Heart className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
                    <span>{article.claps} Medium Claps</span>
                  </div>
                )}
              </div>
            )}

            <div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F0F4F8] leading-tight">
                {article.title}
              </h3>
              {article.subtitle && (
                <p className="text-sm font-mono-tech text-blue-400 mt-2">
                  {article.subtitle}
                </p>
              )}
            </div>

            <div className="p-5 rounded-xl bg-[#131926] border border-blue-500/20 space-y-2">
              <div className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider">
                Abstract & Executive Thesis:
              </div>
              <p className="font-sans-clean text-sm text-neutral-200 font-light leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-[11px] font-mono-tech text-blue-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="p-5 border-t border-white/10 bg-[#131926] flex items-center justify-between">
            <span className="text-xs font-mono-tech text-neutral-400">
              Author: Pinnacle (@PinnacleCrypt)
            </span>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-tech font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {isMedium ? (
                <>
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Article on Medium</span>
                </>
              ) : (
                <>
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Read Full Thread on X</span>
                </>
              )}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
