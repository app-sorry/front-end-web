import React from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

export const LogoMark = ({ className = '' }: { className?: string }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-8 ${className}`}
  >
    <rect width="32" height="32" rx="8" fill="#FF6A00" fillOpacity="0.1" />
    <path 
      d="M22 10H14C11.7909 10 10 11.7909 10 14V14C10 16.2091 11.7909 18 14 18H18C19.1046 18 20 18.8954 20 20V20C20 21.1046 19.1046 22 18 22H10" 
      stroke="#FF6A00" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M22 10L10 22" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      opacity="0.5"
    />
  </svg>
);

export const PrimaryButton = ({ children, className = '', ...props }: HTMLMotionProps<"button">) => (
  <motion.button 
    whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6A00] text-white font-medium text-sm px-5 py-3 transition-colors ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export const SecondaryButton = ({ children, className = '', ...props }: HTMLMotionProps<"button">) => (
  <motion.button 
    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent text-white font-medium text-sm px-5 py-3 transition-colors ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export const SectionEyebrow = ({ children, tag }: { children: React.ReactNode, tag?: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
    <span className="text-white/70 text-sm font-medium tracking-wide uppercase">{children}</span>
    {tag && (
      <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white rounded-full">
        {tag}
      </span>
    )}
  </div>
);

export const LiquidGlassCard = ({ children, className = '', ...props }: HTMLMotionProps<"div">) => (
  <motion.div 
    className={`relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md p-8 shadow-2xl ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
    <div className="relative z-10">
      {children as React.ReactNode}
    </div>
  </motion.div>
);
