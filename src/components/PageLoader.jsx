import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Cinematic page loader.
 * Shows "KJ" with a clip-path reveal, then slides away.
 */
export default function PageLoader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Brief delay then dismiss
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ backgroundColor: '#070b14' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Centered KJ */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[clamp(3rem,8vw,5rem)] font-black tracking-tighter text-white">
              KJ
            </span>
            {/* Loading line */}
            <motion.div
              className="h-[1px] bg-white/40"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
