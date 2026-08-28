import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/data';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('create');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['create', 'organize', 'ship', 'experience', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Create', href: '#create', id: 'create' },
    { label: 'Organize', href: '#organize', id: 'organize' },
    { label: 'Ship', href: '#ship', id: 'ship' },
    { label: 'About', href: '#experience', id: 'experience' },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-auto max-w-[calc(100vw-1.5rem)]">
      {/* Floating pill navigation: dark translucent glass, hairline border, gold accents */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-[#121212]/90 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] text-[#F0F0F0] transition-all duration-300 select-none"
      >
        {/* Compact Logo Mark */}
        <a
          href="#hero"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A47E] rounded-full group pl-1"
        >
          <div className="w-7 h-7 rounded-full bg-[#1A1A1A] border border-[#C5A47E]/40 text-[#C5A47E] flex items-center justify-center font-serif-editorial text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
            P
          </div>
          <span className="font-serif-editorial text-sm font-semibold tracking-tight text-[#F0F0F0] hidden sm:inline-block pr-1">
            Pinnacle
          </span>
        </a>

        {/* Vertical Divider */}
        <div className="h-4 w-px bg-white/10 hidden md:block" />

        {/* Middle Navigation Links (hidden below md) */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-mono-tech transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A47E] rounded-full ${
                  isActive
                    ? 'text-black font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillNav"
                    className="absolute inset-0 bg-[#C5A47E] rounded-full shadow-md shadow-black/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Small Dark CTA Button at the end */}
        <button
          onClick={onOpenContact}
          className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#252525] text-[#F0F0F0] hover:text-white border border-white/15 hover:border-[#C5A47E] text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A47E] ml-1"
        >
          <span>Connect</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A47E]" />
        </button>
      </nav>
    </header>
  );
};
