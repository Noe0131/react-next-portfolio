'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.9, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.8, 0.25, 1], 
      }}
      style={{
        overflow: 'hidden', 
        willChange: 'transform, opacity, filter',
      }}
    >
      {children}
    </motion.div>
  );
}
