import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, ArrowUpRight, Sparkles, Twitter, Github, Mail, Globe, Layers, BookOpen, Users, Code, Info, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/data';
import { PageView } from '../types';

interface NavigationProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string; number: string; desc: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', number: '01', desc: 'Overview & Vision', icon: Globe },
    { id: 'create', label: 'Create', number: '02', desc: 'Technical Research & Theses', icon: BookOpen },
    { id: 'organize', label: 'Organize', number: '03', desc: 'Events & Community Summits', icon: Users },
    { id: 'ship', label: 'Ship', number: '04', desc: 'Client Work & Shipped Products', icon: Code },
    { id: 'about', label: 'About', number: '05', desc: 'Background & Track Record', icon: Info },
    { id: 'contact', label: 'Contact', number: '06', desc: 'Direct Telegram & Inquiries', icon: MessageSquare },
  ];

  const handleSelectPage = (page: PageView) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#07090E]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand / Logo (Static, Non-clickable) */}
          <div className="flex items-center select-none py-1 text-left">
            <span className="font-display font-bold text-2xl sm:text-[26px] tracking-tight text-[#F0F4F8]">
              PinnacleCrypt<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 ml-6 md:ml-10 lg:ml-14">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectPage(item.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono-tech tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Direct Telegram CTA Button */}
            <a
              href={PERSONAL_INFO.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-mono-tech uppercase tracking-wider transition-all border border-blue-500/30 group cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-blue-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              <span>Telegram</span>
            </a>

            {/* Editorial Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="px-5 py-2 rounded-full border border-blue-500/30 hover:border-blue-400 hover:text-blue-300 text-neutral-300 text-xs font-mono-tech uppercase tracking-widest bg-[#0E1320] hover:bg-[#151C30] transition-all cursor-pointer shadow-sm"
            >
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Editorial Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#07090E]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
              <div className="font-display font-bold text-2xl tracking-tight text-[#F0F4F8] select-none">
                PinnacleCrypt<span className="text-blue-500">.</span>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="p-3 rounded-full border border-white/20 hover:border-blue-400 hover:bg-blue-600/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links List */}
            <div className="max-w-6xl mx-auto w-full py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-2 sm:space-y-4">
                {navItems.map((item, idx) => {
                  const isActive = currentPage === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleSelectPage(item.id)}
                        className="group w-full flex items-baseline justify-between py-2.5 sm:py-3.5 border-b border-white/10 text-left hover:border-blue-500 transition-colors cursor-pointer"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="font-mono-tech text-xs text-neutral-500 group-hover:text-blue-400 transition-colors">
                            {item.number}
                          </span>
                          <span className={`font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight transition-colors ${
                            isActive ? 'text-blue-400' : 'text-neutral-300 group-hover:text-white'
                          }`}>
                            {item.label}
                          </span>
                        </div>
                        <span className="hidden sm:inline-block font-mono-tech text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                          {item.desc}
                        </span>
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Side Info & Direct Telegram Box */}
              <div className="md:col-span-4 space-y-8 md:pl-10 md:border-l border-white/10">
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-xl text-white">
                    Let's collaborate on your next vision.
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans-clean">
                    Have an idea for Web3 research, summit organizing, technical writing, or digital products? Reach out directly on Telegram.
                  </p>
                </div>

                <a
                  href={PERSONAL_INFO.links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] group cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  <span>Message Me on Telegram</span>
                </a>

                {/* Social Links */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="text-[11px] font-mono-tech text-neutral-500 uppercase tracking-widest">
                    Direct Channels
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs font-mono-tech text-neutral-300">
                    <a
                      href={PERSONAL_INFO.links.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 underline underline-offset-4"
                    >
                      Twitter / X
                    </a>
                    <a
                      href={PERSONAL_INFO.links.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 underline underline-offset-4"
                    >
                      Medium
                    </a>
                    <a
                      href={PERSONAL_INFO.links.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 underline underline-offset-4"
                    >
                      Telegram
                    </a>
                    <a
                      href={PERSONAL_INFO.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 underline underline-offset-4"
                    >
                      GitHub
                    </a>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="hover:text-blue-400 underline underline-offset-4"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer inside Menu */}
            <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono-tech text-neutral-500">
              <div>PinnacleCrypt © {new Date().getFullYear()}</div>
              <div>I CREATE • I ORGANIZE • I SHIP</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
