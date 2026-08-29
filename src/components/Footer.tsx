import React from 'react';
import { PERSONAL_INFO } from '../lib/data';
import { PageView } from '../types';
import { LegalTab } from './LegalModal';
import { XIcon } from './XIcon';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05070B] border-t border-white/10 py-6 px-4 sm:px-6 text-neutral-400 font-sans-clean">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        {/* Left Side: Avatar & Copyright like GitHub */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-blue-500/50 bg-[#0E1320] shadow-[0_0_12px_rgba(59,130,246,0.35)] shrink-0">
            <img
              src="/pfp.jpg"
              alt="PinnacleCrypt"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-mono-tech text-neutral-400 tracking-tight">
            © {currentYear} PinnacleCrypt
          </span>
        </div>

        {/* Right Side: Minimalist GitHub style utility & legal links */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 sm:gap-x-6 gap-y-2 text-neutral-400 font-mono-tech text-[11px] sm:text-xs">
          <button
            onClick={() => onOpenLegal?.('terms')}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Terms
          </button>
          <button
            onClick={() => onOpenLegal?.('privacy')}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Privacy
          </button>
          <button
            onClick={() => onOpenLegal?.('disclaimer')}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Disclaimer
          </button>
          <button
            onClick={() => onOpenLegal?.('cookies')}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Cookies
          </button>
          <a
            href={PERSONAL_INFO.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <XIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            <span>X (Twitter)</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
