import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  number: string;
  pill: string;
  title: string;
  subtitle?: string;
  accent?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  pill,
  title,
  subtitle,
  accent = '#C5A47E',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 md:mb-20"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono-tech text-[10px] tracking-[0.3em] text-[#C5A47E] px-2.5 py-1 rounded bg-[#161616] border border-[#C5A47E]/30 uppercase">
          {number} / {pill}
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F0F0F0] tracking-tight leading-[1.05]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/40 text-sm sm:text-base max-w-md font-sans-clean font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};
