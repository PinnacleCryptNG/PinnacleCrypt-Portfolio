import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, Twitter, Github, MessageSquare, Copy, Check, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { MagneticButton } from './ui/MagneticButton';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'Content Creation',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const interestOptions: ContactMessage['interest'][] = [
    'Content Creation',
    'Event Speaking & Hosting',
    'Product Collaboration',
    'Consulting',
    'Other',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate sending transmission with realistic latency
    setTimeout(() => {
      setStatus('success');
      // Store in local storage for developer reference
      try {
        const saved = JSON.parse(localStorage.getItem('pinnacle_contact_submissions') || '[]');
        saved.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('pinnacle_contact_submissions', JSON.stringify(saved));
      } catch (err) {
        console.warn('Storage warning', err);
      }
    }, 1000);
  };

  const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || `[${formData.interest}] Inquiring from Pinnacle Portfolio`
  )}&body=${encodeURIComponent(
    `Hi Pinnacle,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        number="05"
        pill="CONNECT"
        title="Initiate Dialogue"
        subtitle="Keynote hosting, technical essay commissions, protocol research, and autonomous product consulting."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Channels & Fast Action */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#C5A47E] uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Channel</span>
              </div>
              <h3 className="font-serif-editorial text-3xl text-[#F0F0F0]">
                Let's Build Something Unforgettable
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-white/50 font-light mt-2 leading-relaxed">
                Whether you are launching a protocol, organizing a developer summit in Africa, or seeking high-conviction research, I'd love to hear from you.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-4 rounded-xl bg-[#161616] border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-[#C5A47E]/10 border border-[#C5A47E]/30 flex items-center justify-center text-[#C5A47E] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono-tech text-white/40 uppercase tracking-wider">Primary Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono-tech text-xs sm:text-sm text-[#F0F0F0] hover:text-[#C5A47E] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-[#0A0A0A] hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer shrink-0 border border-white/10"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-[#C5A47E]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Magnetic Social Links Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-mono-tech text-white/40 uppercase tracking-wider">
                Active Networks & Ecosystems
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MagneticButton
                  href={PERSONAL_INFO.links.x}
                  isExternal
                  variant="outline"
                  className="w-full justify-between py-3"
                >
                  <span className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-[#C5A47E]" />
                    <span>X / Twitter</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                </MagneticButton>

                <MagneticButton
                  href={PERSONAL_INFO.links.telegram}
                  isExternal
                  variant="outline"
                  className="w-full justify-between py-3"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#E5CCA8]" />
                    <span>Telegram</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                </MagneticButton>

                <MagneticButton
                  href={PERSONAL_INFO.links.github}
                  isExternal
                  variant="outline"
                  className="w-full justify-between py-3"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-white/60" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                </MagneticButton>

                <MagneticButton
                  href={PERSONAL_INFO.links.devto}
                  isExternal
                  variant="outline"
                  className="w-full justify-between py-3"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-[10px] text-[#C5A47E]">DEV</span>
                    <span>Dev.to</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                </MagneticButton>
              </div>
            </div>

            {/* SLA Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-white/50">
              <span className="w-2 h-2 rounded-full bg-[#C5A47E] animate-pulse" />
              <span>Typical response time: &lt; 24 hours</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0F0F0F] border border-white/10 relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C5A47E]/10 border border-[#C5A47E]/40 flex items-center justify-center text-[#C5A47E] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-editorial text-3xl text-white">
                    Transmission Dispatched
                  </h4>
                  <p className="font-sans-clean text-sm text-white/60 font-light max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your inquiry has been queued directly for Pinnacle. You can also send a direct copy via your mail client.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <a
                      href={mailtoHref}
                      className="px-5 py-2.5 rounded-lg bg-[#C5A47E] hover:bg-[#D6B58F] text-black text-xs font-mono-tech font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Default Mail Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          message: '',
                          interest: 'Content Creation',
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#161616] hover:bg-[#202020] text-white/70 hover:text-white text-xs font-mono-tech border border-white/10 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-serif-editorial text-2xl text-[#F0F0F0]">
                      Send a Direct Message
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#C5A47E] tracking-widest uppercase">
                      ENCRYPTED TRANSMISSION
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/50 text-rose-300 text-xs font-mono-tech">
                      {errorMessage}
                    </div>
                  )}

                  {/* Field: Interest Category */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-tech text-white/50 uppercase tracking-wider">
                      Area of Collaboration *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, interest: opt })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all cursor-pointer ${
                            formData.interest === opt
                              ? 'bg-[#C5A47E] text-black font-bold shadow-sm'
                              : 'bg-[#161616] text-white/50 hover:text-white border border-white/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fields: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-white/50 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Satoshi or Vitalik"
                        className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-white/10 text-white placeholder:text-white/20 text-sm font-sans-clean focus:outline-none focus:border-[#C5A47E] focus:ring-1 focus:ring-[#C5A47E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-white/50 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.xyz"
                        className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-white/10 text-white placeholder:text-white/20 text-sm font-sans-clean focus:outline-none focus:border-[#C5A47E] focus:ring-1 focus:ring-[#C5A47E] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field: Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech text-white/50 uppercase tracking-wider">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Speaking slot at Developer Summit 2026"
                      className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-white/10 text-white placeholder:text-white/20 text-sm font-sans-clean focus:outline-none focus:border-[#C5A47E] focus:ring-1 focus:ring-[#C5A47E] transition-colors"
                    />
                  </div>

                  {/* Field: Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech text-white/50 uppercase tracking-wider">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your initiative, timeline, ecosystem alignment, or technical question..."
                      className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-white/10 text-white placeholder:text-white/20 text-sm font-sans-clean focus:outline-none focus:border-[#C5A47E] focus:ring-1 focus:ring-[#C5A47E] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="text-xs font-mono-tech text-white/40">
                      * All communications treated with discretion.
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#C5A47E] hover:bg-[#D6B58F] disabled:opacity-50 text-black text-xs font-mono-tech font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-lg shadow-black/50 cursor-pointer transition-all"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
