import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';

/* ─── Word-by-word reveal animation ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 2.3 },
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
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
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

  /* Subtle parallax on photo */
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 60]);

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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#070b14' }}
    >
      {/* Mouse-reactive gradient mesh */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(ellipse 55% 55% at ${gradientX}% ${gradientY}%, rgba(99, 102, 241, 0.22) 0%, transparent 70%)`,
        }}
      />

      {/* Ambient bottom-right glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(56, 189, 248, 0.05) 0%, transparent 60%)',
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #070b14 100%)' }}
      />

      {/* ─── Split Layout ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 w-full items-center pt-24 pb-28">

          {/* LEFT — Text Content */}
          <div className="flex flex-col justify-center">

            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-10 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-medium tracking-[0.12em] uppercase text-slate-500">
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.6rem,6.5vw,5.8rem)] font-extrabold leading-[0.93] tracking-[-0.04em] text-white mb-10"
            >
              <span className="flex flex-wrap gap-x-[0.28em]">
                {headline1.map((w) => <AnimatedWord key={w}>{w}</AnimatedWord>)}
              </span>
              <span className="flex flex-wrap gap-x-[0.28em]">
                {headline2.map((w) => <AnimatedWord key={w}>{w}</AnimatedWord>)}
              </span>
              <span className="flex flex-wrap gap-x-[0.28em]">
                {headline3.map((w) => (
                  <AnimatedWord key={w}>
                    {w === 'deep-tech.' ? (
                      <span className="text-indigo-400/80">{w}</span>
                    ) : w}
                  </AnimatedWord>
                ))}
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 3.0 }}
              className="max-w-sm text-[clamp(0.9rem,1.3vw,1rem)] leading-[1.85] text-slate-500 font-light mb-10"
            >
              Computer Engineer & GTM Strategist — I translate
              complex architectures into high-converting commercial solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className="flex items-center gap-8"
            >
              <motion.a
                href="#work"
                id="cta-view-work"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#work');
                  if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -80 });
                }}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-indigo-500/30 bg-indigo-500/[0.07] text-[13px] font-semibold text-white tracking-wide uppercase hover:bg-indigo-500/[0.14] hover:border-indigo-400/50 transition-all duration-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor-hover
              >
                View Work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                id="cta-lets-talk"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#contact');
                  if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -80 });
                }}
                className="text-[13px] font-medium text-slate-500 hover:text-white tracking-wide uppercase transition-colors duration-300"
                whileHover={{ x: 3 }}
                data-cursor-hover
              >
                Let's Talk →
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              className="mt-16 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-slate-700 font-mono">Scroll to explore</span>
            </motion.div>
          </div>

          {/* RIGHT — Photo Panel */}
          <motion.div
            className="relative hidden lg:flex justify-end items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Ambient indigo glow behind photo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 65% at 55% 42%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 45%, transparent 70%)',
              }}
            />

            {/* Photo container with parallax + edge-blend */}
            <motion.div
              style={{ y: photoY }}
              className="relative w-[420px] h-[560px] lg:w-[460px] lg:h-[610px]"
            >
              {/* Photo — edges dissolved into background via mask */}
              <img
                src="/kapil.jpg"
                alt="Kapil Jeswani"
                className="w-full h-full object-cover object-center"
                style={{
                  maskImage: 'radial-gradient(ellipse 62% 68% at 50% 40%, black 15%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.35) 52%, transparent 65%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 62% 68% at 50% 40%, black 15%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.35) 52%, transparent 65%)',
                  filter: 'contrast(1.08) brightness(1.06) saturate(0.92)',
                }}
              />

              {/* Floating stat chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.4, duration: 0.8 }}
                className="absolute top-6 -left-10 flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-white/[0.06] bg-[#070b14]/80 backdrop-blur-sm"
              >
                <span className="text-[11px] font-mono text-indigo-400">Torino, Italy</span>
                <span className="text-[11px] text-slate-600">📍</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.7, duration: 0.8 }}
                className="absolute bottom-10 -left-12 flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-white/[0.06] bg-[#070b14]/80 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-medium text-slate-300">Open to Work</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4.0, duration: 0.8 }}
                className="absolute top-1/2 -right-10 -translate-y-1/2 flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border border-white/[0.06] bg-[#070b14]/80 backdrop-blur-sm"
              >
                <span className="text-[20px] font-black text-white">80+</span>
                <span className="text-[10px] tracking-wide uppercase text-slate-500 text-center leading-snug">Enterprise<br/>Clients</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
