import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  isExternal?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  variant = 'secondary',
  isExternal = false,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // dampening factor
    setPosition({ x: middleX * 0.22, y: middleY * 0.22 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#C5A47E] hover:bg-[#D6B58F] text-black font-bold tracking-[0.15em] uppercase text-xs shadow-lg shadow-black/50 border border-[#C5A47E] transition-all';
      case 'outline':
        return 'bg-transparent hover:bg-white/5 text-[#F0F0F0] border border-white/20 hover:border-[#C5A47E] transition-colors';
      case 'ghost':
        return 'bg-transparent hover:bg-white/5 text-white/60 hover:text-white transition-colors';
      case 'secondary':
      default:
        return 'bg-[#161616] hover:bg-[#202020] text-[#F0F0F0] border border-white/10 hover:border-white/25 transition-all';
    }
  };

  const baseContent = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
        className={`px-5 py-2.5 rounded-lg text-sm font-sans-clean font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${getVariantStyles()} ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="inline-block focus:outline-none"
      >
        {baseContent}
      </a>
    );
  }

  return baseContent;
};
