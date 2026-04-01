import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Stats Data ─── */
const stats = [
  {
    id: 1,
    value: '80+',
    label: 'Enterprise Accounts Analyzed',
  },
  {
    id: 2,
    value: 'C-Suite',
    label: 'Technical Pitching',
  },
  {
    id: 3,
    value: 'Full-Cycle',
    label: 'Outbound Sales',
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

/* ─── Stat Card (Clean Glass Panel) ─── */
function StatCard({ stat }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -4,
        scale: 1.015,
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
      className="group"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20">
        <span className="block text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.03em] text-white/90 leading-none mb-2 group-hover:text-white transition-colors duration-300">
          {stat.value}
        </span>
        <p className="text-[14px] leading-relaxed text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
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
      className="relative pt-32 pb-32 sm:pt-40 sm:pb-40 mt-32 overflow-hidden"
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
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column — Heading + copy */}
          <motion.div variants={fadeUp}>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-[1.05] text-white mb-7">
              FROM CODE
              <br />
              <span className="text-white">
                TO CLOSING.
              </span>
            </h2>

            <p className="text-[clamp(0.95rem,1.6vw,1.1rem)] leading-loose text-neutral-500 max-w-lg">
              With a foundation in software engineering and hands-on experience
              in B2B technical sales, I don't just write code—I build products
              that scale and sell.
            </p>
            <p className="mt-5 text-[clamp(0.95rem,1.6vw,1.1rem)] leading-loose text-neutral-600 max-w-lg">
              Cultivated extreme discipline as a{' '}
              <span className="text-neutral-300 font-medium">
                National-Level 10m Pistol Shooter.
              </span>
            </p>

            {/* Decorative line */}
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-white/15 to-transparent" />
          </motion.div>

          {/* Right column — Stat cards in clean vertical stack */}
          <div className="flex flex-col gap-6 w-full max-w-sm lg:ml-auto">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
