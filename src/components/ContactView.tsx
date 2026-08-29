import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Github, Mail, Sparkles, CheckCircle2, MessageSquare, ArrowLeft, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/data';
import { PageView } from '../types';
import { XIcon } from './XIcon';

interface ContactViewProps {
  onNavigate: (page: PageView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'Content & Medium Articles',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          <span>05 / INQUIRIES & CHANNELS</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest">
          <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
          <span>START A CONVERSATION</span>
        </div>
        <h1 className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-[#F0F4F8] tracking-tight leading-tight">
          Let's Build Something Exceptional.
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          The fastest way to reach me is directly via Telegram. Alternatively, send an email or drop a detailed project inquiry below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Telegram Callout & Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Highlighted Telegram Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0E1526] to-[#080A0F] border border-blue-500/40 space-y-6 shadow-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono-tech text-blue-300">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>PRIMARY CONTACT CHANNEL</span>
              </div>
              <h3 className="font-serif-editorial text-3xl text-white">
                Telegram: @PinnacleCrypt
              </h3>
            </div>

            <a
              href={PERSONAL_INFO.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest transition-all font-bold shadow-[0_0_20px_rgba(59,130,246,0.35)] group cursor-pointer"
            >
              <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              <span>Open Telegram Chat</span>
            </a>
          </div>

          {/* Other Channels */}
          <div className="p-8 rounded-3xl bg-[#0E1320] border border-blue-500/20 space-y-4 text-xs font-mono-tech shadow-lg">
            <div className="text-neutral-400 uppercase tracking-widest text-[11px]">
              Direct Links
            </div>

            <div className="space-y-3">
              <a
                href={PERSONAL_INFO.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-blue-950/40 border border-white/5 hover:border-blue-500/30 text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <XIcon className="w-4 h-4 text-white" />
                  <span>X / Twitter (@PinnacleCrypt)</span>
                </div>
                <span className="text-neutral-400">→</span>
              </a>

              <a
                href={PERSONAL_INFO.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-blue-950/40 border border-white/5 hover:border-blue-500/30 text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>Medium Articles (@pinnaclecrypt)</span>
                </div>
                <span className="text-neutral-400">→</span>
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-blue-950/40 border border-white/5 hover:border-blue-500/30 text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-neutral-300" />
                  <span>GitHub (@PinnacleCryptNG)</span>
                </div>
                <span className="text-neutral-400">→</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-blue-950/40 border border-white/5 hover:border-blue-500/30 text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <span className="text-neutral-400">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0E1320] border border-blue-500/20 shadow-lg">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif-editorial text-3xl text-white">Message Transmitted</h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto font-sans-clean leading-relaxed">
                Thank you for reaching out. I'll get back to you promptly. For fastest response, drop a message on Telegram.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-tech uppercase cursor-pointer transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-[#141A29] border border-blue-500/20 focus:border-blue-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#141A29] border border-blue-500/20 focus:border-blue-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">Collaboration Focus</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141A29] border border-blue-500/20 focus:border-blue-400 text-white text-sm focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Medium Articles & Technical Writing">Medium Articles & Technical Writing</option>
                  <option value="Web3 Conference & Hackathon Organizing">Web3 Conference & Hackathon Organizing</option>
                  <option value="Product Engineering & Client Website">Product Engineering & Client Website</option>
                  <option value="Protocol Research & Advisory">Protocol Research & Advisory</option>
                  <option value="Other">Other Inquiries</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">Message / Project Scope</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your vision, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#141A29] border border-blue-500/20 focus:border-blue-400 text-white text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
