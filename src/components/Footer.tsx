import React from 'react';
import { Twitter, Github, Mail, Send, BookOpen, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/data';
import { PageView } from '../types';
import { LegalTab } from './LegalModal';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const footerLinks: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'create', label: 'Create' },
    { id: 'organize', label: 'Organize' },
    { id: 'ship', label: 'Ship' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full bg-[#07090E] border-t border-white/10 py-14 px-4 sm:px-6 text-neutral-400">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-7">
        {/* Centered Brand Mark */}
        <div className="flex items-center select-none">
          <span className="font-display text-2xl font-bold tracking-tight text-[#F0F4F8]">
            PinnacleCrypt<span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Inline Navigation Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
          {footerLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Row of Social Icons including Medium */}
        <div className="flex items-center justify-center gap-3 text-neutral-400">
          <a
            href={PERSONAL_INFO.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 bg-[#0E1320] transition-colors"
            aria-label="Twitter / X profile"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 bg-[#0E1320] transition-colors"
            aria-label="Medium articles profile"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
          </a>
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 bg-[#0E1320] transition-colors"
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 bg-[#0E1320] transition-colors"
            aria-label="Telegram direct message"
          >
            <Send className="w-4 h-4 text-blue-400" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 bg-[#0E1320] transition-colors"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Legal & Compliance Notice Row */}
        <div className="pt-2 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-neutral-500">
          <div>
            © {new Date().getFullYear()} PinnacleCrypt. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-neutral-400">
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-blue-400 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-blue-400 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onOpenLegal?.('disclaimer')}
              className="hover:text-blue-400 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Web3 Disclaimer
            </button>
            <button
              onClick={() => onOpenLegal?.('cookies')}
              className="hover:text-blue-400 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Cookie Notice
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
