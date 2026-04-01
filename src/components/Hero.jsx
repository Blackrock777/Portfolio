import { motion } from 'framer-motion';
import FloatingOrbs from './FloatingOrbs';

/* ─── Stagger helpers ─── */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* ── Background orbs ── */}
      <FloatingOrbs />

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, #0A0A0A 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
      >
        {/* Tag line chip */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase text-[#888] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white mb-7"
        >
          I build at the intersection
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            of business and deep-tech.
          </span>
        </motion.h1>

        {/* Sub-paragraph */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed text-[#888] font-normal mb-12"
        >
          I am{' '}
          <span className="text-[#ccc] font-medium">Kapil Jeswani</span>, a
          Computer Engineer and GTM Strategist. I combine creative analytical
          thinking with modern tech to translate complex architectures into
          high-converting commercial solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary – View Work */}
          <motion.a
            href="#work"
            id="cta-view-work"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#0A0A0A] text-[15px] font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Work
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>

          {/* Secondary – Let's Talk */}
          <motion.a
            href="#contact"
            id="cta-lets-talk"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white/90 border border-white/[0.12] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/[0.25] hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#555] font-medium">
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
