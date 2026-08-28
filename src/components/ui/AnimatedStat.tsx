import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  suffix = '',
  label,
  sublabel,
  duration = 1800,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * (end - start) + start);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return (
    <div
      ref={ref}
      className="p-6 sm:p-8 rounded-xl bg-[#0F0F0F] border border-white/10 hover:border-[#C5A47E]/40 transition-all duration-300 group hover:glow-gold-sm"
    >
      <div className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F0F0F0] group-hover:text-[#C5A47E] transition-colors duration-300 flex items-baseline">
        <span>{count.toLocaleString()}</span>
        <span className="text-[#C5A47E] text-3xl sm:text-4xl font-serif-editorial ml-1">
          {suffix}
        </span>
      </div>
      <div className="mt-3 font-sans-clean font-medium text-sm sm:text-base text-white/90">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 font-mono-tech text-xs text-white/40 font-light leading-relaxed">
          {sublabel}
        </div>
      )}
    </div>
  );
};
