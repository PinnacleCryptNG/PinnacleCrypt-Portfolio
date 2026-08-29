import React, { useEffect, useState } from 'react';

export const InteractiveSpotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices (mouse/trackpad) to optimize mobile battery & touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 overflow-hidden"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.07), rgba(56, 189, 248, 0.03) 40%, transparent 80%)`,
      }}
    />
  );
};
