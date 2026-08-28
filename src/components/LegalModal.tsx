import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, AlertTriangle, Cookie, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/data';

export type LegalTab = 'privacy' | 'terms' | 'disclaimer' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#0E121B] border border-blue-500/20 rounded-[28px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#F0F4F8] font-sans-clean"
        >
          {/* Top Modal Header */}
          <div className="bg-[#131926] border-b border-white/10 px-6 py-4 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  Legal Compliance & Transparency
                </h3>
                <p className="text-[11px] font-mono-tech text-neutral-400">
                  Last Updated: March 2025 • PinnacleCrypt
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/10 hover:border-blue-500/50 hover:bg-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close legal modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tab Selection Navigation */}
          <div className="flex items-center gap-2 px-6 py-3 bg-[#0A0D14] border-b border-white/10 overflow-x-auto scrollbar-none shrink-0">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms & Conditions</span>
            </button>

            <button
              onClick={() => setActiveTab('disclaimer')}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'disclaimer'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Web3 & Financial Disclaimer</span>
            </button>

            <button
              onClick={() => setActiveTab('cookies')}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'cookies'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Policy</span>
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-neutral-300 leading-relaxed font-sans-clean">
            {/* PRIVACY POLICY */}
            {activeTab === 'privacy' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest">
                    SECTION 01
                  </span>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Privacy Policy
                  </h4>
                </div>

                <p>
                  At <strong>PinnacleCrypt</strong> (accessible from this website), the privacy and data rights of our visitors and community members are of supreme importance. This document outlines the types of information collected and how we protect and utilize it in compliance with applicable global privacy standards (including GDPR, CCPA, and NDPR principles).
                </p>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    1. Information We Collect
                  </h5>
                  <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
                    <li>
                      <strong>Direct Communications:</strong> When you contact PinnacleCrypt via email or Telegram, we may receive your contact handle, name, and message content to respond to inquiries or consulting opportunities.
                    </li>
                    <li>
                      <strong>Log Files & Technical Telemetry:</strong> Like most standard web servers, we automatically log browser user agents, timestamps, and referring pages for security diagnostics and uptime monitoring. No personal biometric or financial credentials are ever logged.
                    </li>
                    <li>
                      <strong>Interactive Previews:</strong> Live previews embedded within the portfolio run within isolated sandboxes and do not inject third-party tracking scripts into your personal browser environment.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    2. Use of Information
                  </h5>
                  <p>
                    Collected data is strictly used to maintain portfolio performance, ensure operational security, respond to verified client inquiries, and deliver high-quality technical content. We do not sell, rent, or trade your personal data to any third-party advertisers or brokers.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    3. Your Rights & Contact Information
                  </h5>
                  <p>
                    You have the right to request access to, rectification of, or permanent deletion of any personal communications sent to us. To exercise your rights, contact us directly at <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 underline font-mono-tech">{PERSONAL_INFO.email}</a>.
                  </p>
                </div>
              </div>
            )}

            {/* TERMS & CONDITIONS */}
            {activeTab === 'terms' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest">
                    SECTION 02
                  </span>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Terms & Conditions of Service
                  </h4>
                </div>

                <p>
                  By accessing and browsing this portfolio website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    1. Intellectual Property & License
                  </h5>
                  <p>
                    All proprietary research theses, brand assets, product mockups, articles, and graphic illustrations presented on this website are the intellectual property of PinnacleCrypt or respective featured clients, unless otherwise stated. You may quote or cite excerpts for educational or editorial purposes provided full attribution is clearly linked to PinnacleCrypt.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    2. Code & Product Demos
                  </h5>
                  <p>
                    Open-source repositories linked from this portfolio are governed by their respective open-source licenses (e.g., MIT or Apache 2.0). Interactive client previews and smart contract prototypes are presented for portfolio demonstration only and are provided "as-is" without warranty of any kind.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    3. Limitation of Liability
                  </h5>
                  <p>
                    In no event shall PinnacleCrypt or its associates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use of or inability to use the materials, code demos, or articles published on this platform.
                  </p>
                </div>
              </div>
            )}

            {/* WEB3 & FINANCIAL DISCLAIMER */}
            {activeTab === 'disclaimer' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest">
                    SECTION 03
                  </span>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Web3, Cryptography & Financial Disclaimer
                  </h4>
                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-200 text-xs sm:text-sm font-medium">
                  <strong>IMPORTANT LEGAL NOTICE:</strong> None of the content, technical theses, code repositories, smart contracts, Medium articles, or Twitter threads published on this website constitute financial, investment, legal, or tax advice.
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    1. Educational & Technical Nature Only
                  </h5>
                  <p>
                    All research papers, mechanism breakdowns (including liquid staking, algorithmic yields, automated market makers, modular rollups, zero-knowledge proofs, and AI agent frameworks) are strictly authored for educational, architectural, and technological critique.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    2. No Investment Solicitation
                  </h5>
                  <p>
                    PinnacleCrypt does not endorse, recommend, or solicit the purchase, sale, or staking of any digital asset, cryptocurrency, token, or decentralized protocol. Cryptocurrency markets and experimental smart contracts carry substantial financial and technical risk. Always conduct your own independent research (DYOR).
                  </p>
                </div>
              </div>
            )}

            {/* COOKIE POLICY */}
            {activeTab === 'cookies' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest">
                    SECTION 04
                  </span>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Cookie & Local Storage Policy
                  </h4>
                </div>

                <p>
                  This website utilizes minimal, privacy-first local storage solely to retain your visual viewing preferences (such as navigation history and interactive state).
                </p>

                <div className="space-y-3 pt-2">
                  <h5 className="font-display font-semibold text-base text-white text-blue-300">
                    Types of Cookies / Local State Used:
                  </h5>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                    <li>
                      <strong>Essential Operational State:</strong> Keeps track of active tabs, modal interactions, and view responsiveness.
                    </li>
                    <li>
                      <strong>Zero Third-Party Advertising Trackers:</strong> We do NOT employ invasive cross-site advertising pixels or surveillance trackers.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-[#131926] border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-400">
              <Check className="w-3.5 h-3.5 text-blue-400" />
              <span>Full compliance & transparency enabled</span>
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer"
            >
              I Understand & Agree
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
