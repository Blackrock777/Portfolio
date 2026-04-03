import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

/* ─── Word-by-word reveal animation ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 2.3 },
  },
};

const wordVariants = {
  hidden: { y: '110%', rotateX: -80 },
  visible: {
    y: '0%',
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Animated Word Component ─── */
function AnimatedWord({ children }) {
  return (
    <span className="inline-block overflow-hidden align-top" style={{ perspective: '500px' }}>
      <motion.span className="inline-block" variants={wordVariants}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 100 };
  const gradientX = useSpring(useTransform(mouseX, [0, 1], [20, 80]), springConfig);
  const gradientY = useSpring(useTransform(mouseY, [0, 1], [20, 80]), springConfig);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const headline1 = ['I', 'build', 'at', 'the'];
  const headline2 = ['intersection', 'of'];
  const headline3 = ['business', '&', 'deep-tech.'];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-end overflow-hidden pb-24 sm:pb-32"
      style={{ backgroundColor: '#070b14' }}
    >
      {/* Mouse-reactive gradient mesh */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(ellipse 50% 50% at ${gradientX}% ${gradientY}%, rgba(99, 102, 241, 0.2) 0%, transparent 70%)`,
        }}
      />

      {/* Secondary ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 80%, rgba(56, 189, 248, 0.04) 0%, transparent 60%)',
        }}
      />

      {/* Top edge fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 70%, #070b14 100%)',
        }}
      />

      {/* Content — Left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 w-full">
        {/* Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white mb-10 max-w-5xl"
        >
          <span className="flex flex-wrap gap-x-[0.3em]">
            {headline1.map((w) => <AnimatedWord key={w}>{w}</AnimatedWord>)}
          </span>
          <span className="flex flex-wrap gap-x-[0.3em]">
            {headline2.map((w) => <AnimatedWord key={w}>{w}</AnimatedWord>)}
          </span>
          <span className="flex flex-wrap gap-x-[0.3em]">
            {headline3.map((w, i) => (
              <AnimatedWord key={w}>
                {w === 'deep-tech.' ? (
                  <span className="text-indigo-400/70">{w}</span>
                ) : (
                  w
                )}
              </AnimatedWord>
            ))}
          </span>
        </motion.h1>

        {/* Sub content row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-20"
        >
          {/* Bio */}
          <motion.p
            variants={fadeIn}
            className="max-w-md text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.8] text-neutral-500 font-light"
          >
            Computer Engineer & GTM Strategist — I translate
            complex architectures into high-converting commercial solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeIn} className="flex items-center gap-5 shrink-0">
            <motion.a
              href="#work"
              id="cta-view-work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#work');
                if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -80 });
              }}
              className="group flex items-center gap-3 text-[14px] font-medium text-white tracking-wide uppercase"
              whileHover={{ x: 4 }}
              data-cursor-hover
            >
              <span>View Work</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <span className="text-neutral-700">—</span>

            <motion.a
              href="#contact"
              id="cta-lets-talk"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact');
                if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -80 });
              }}
              className="text-[14px] font-medium text-neutral-500 hover:text-white tracking-wide uppercase transition-colors duration-300"
              whileHover={{ x: 4 }}
              data-cursor-hover
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
