import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Stats Data ─── */
const stats = [
  {
    id: 1,
    value: '80+',
    label: 'Enterprise Accounts Analyzed',
    accent: 'purple',
    dotColor: 'bg-purple-400',
    borderHover: 'group-hover:border-purple-400/30',
    glowColor: 'rgba(168, 85, 247, 0.06)',
    gradientTop: 'from-purple-500/20 via-violet-500/10 to-transparent',
  },
  {
    id: 2,
    value: 'C-Suite',
    label: 'Technical Pitching',
    accent: 'cyan',
    dotColor: 'bg-cyan-400',
    borderHover: 'group-hover:border-cyan-400/30',
    glowColor: 'rgba(34, 211, 238, 0.06)',
    gradientTop: 'from-cyan-500/20 via-sky-500/10 to-transparent',
  },
  {
    id: 3,
    value: 'Full-Cycle',
    label: 'Outbound Sales',
    accent: 'emerald',
    dotColor: 'bg-emerald-400',
    borderHover: 'group-hover:border-emerald-400/30',
    glowColor: 'rgba(52, 211, 153, 0.06)',
    gradientTop: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
];

/* ─── Animation Variants ─── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const floatAnimation = (i) => ({
  y: [0, -6 - i * 2, 0],
  transition: {
    duration: 4.5 + i * 0.8,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut',
  },
});

/* ─── Stat Card ─── */
function StatCard({ stat, index }) {
  return (
    <motion.div
      variants={fadeUp}
      animate={floatAnimation(index)}
      whileHover={{
        y: 0,
        scale: 1.02,
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
      className="group relative"
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: stat.glowColor }}
      />

      <div
        className={`relative rounded-2xl border border-white/[0.06] ${stat.borderHover}
          bg-white/[0.02] backdrop-blur-md overflow-hidden
          transition-all duration-500 ease-out
          group-hover:bg-white/[0.04] group-hover:shadow-[0_8px_50px_rgba(0,0,0,0.35)]
          group-hover:border-white/[0.12] p-6 sm:p-7`}
      >
        {/* Top gradient strip */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${stat.gradientTop} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="flex items-start gap-3 mb-3">
          <span
            className={`mt-1.5 w-2 h-2 rounded-full ${stat.dotColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300 shrink-0`}
          />
          <span className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.03em] text-white/90 leading-none group-hover:text-white transition-colors duration-300">
            {stat.value}
          </span>
        </div>
        <p className="text-[14px] leading-relaxed text-[#666] group-hover:text-[#999] transition-colors duration-300 pl-5">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Expertise Section ─── */
export default function Expertise() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background ambient */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(34, 211, 238, 0.03) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        {/* ── Section Label ── */}
        <motion.div variants={fadeUp} className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent" />
            <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-[#555]">
              Expertise & Edge
            </span>
          </div>
        </motion.div>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left column — Heading + copy */}
          <motion.div variants={fadeUp}>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-[1.05] text-white mb-7">
              FROM CODE
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent">
                TO CLOSING.
              </span>
            </h2>

            <p className="text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.75] text-[#777] max-w-lg">
              With a foundation in software engineering and hands-on experience
              in B2B technical sales, I don't just write code—I build products
              that scale and sell.
            </p>
            <p className="mt-5 text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.75] text-[#555] max-w-lg">
              Cultivated extreme discipline as a{' '}
              <span className="text-[#999] font-medium">
                National-Level 10m Pistol Shooter.
              </span>
            </p>

            {/* Decorative line */}
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-white/15 to-transparent" />
          </motion.div>

          {/* Right column — Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <StatCard key={stat.id} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
