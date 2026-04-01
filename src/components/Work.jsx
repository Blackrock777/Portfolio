import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ─── Project Data ─── */
const projects = [
  {
    id: 1,
    title: 'Polymarket AI Trading Bot',
    year: '2026',
    category: 'Web3 & DeFi',
    description:
      'An autonomous trading bot leveraging sentiment analysis and on-chain data for decentralized prediction markets.',
    tags: ['Python', 'Next.js', 'Solidity', 'AI Prompting'],
    accent: 'purple',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    borderHover: 'hover:border-purple-400/40',
    tagBg: 'bg-purple-500/[0.08] text-purple-300/80',
    dotColor: 'bg-purple-400',
    glowColor: 'rgba(168, 85, 247, 0.06)',
  },
  {
    id: 2,
    title: 'Enterprise NLP Assistant',
    year: '2025',
    category: 'AI Infrastructure',
    description:
      'An NLP-driven virtual assistant designed to bridge product engineering teams with enterprise client needs.',
    tags: ['Python', 'React', 'UI/UX', 'LLMs'],
    accent: 'cyan',
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    borderHover: 'hover:border-cyan-400/40',
    tagBg: 'bg-cyan-500/[0.08] text-cyan-300/80',
    dotColor: 'bg-cyan-400',
    glowColor: 'rgba(34, 211, 238, 0.06)',
  },
  {
    id: 3,
    title: 'CubeSat Telemetry Dashboard',
    year: '2023',
    category: 'Aerospace Tech',
    description:
      'Real-time flight software visualization and telemetry tracking for a 2nd-place winning hackathon project.',
    tags: ['C++', 'Next.js', 'Data Visualization'],
    accent: 'emerald',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderHover: 'hover:border-emerald-400/40',
    tagBg: 'bg-emerald-500/[0.08] text-emerald-300/80',
    dotColor: 'bg-emerald-400',
    glowColor: 'rgba(52, 211, 153, 0.06)',
  },
];

/* ─── Animation Variants ─── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Floating keyframes applied via style, toggled on hover ─── */
const floatAnimation = (i) => ({
  y: [0, -8 - i * 2, 0],
  transition: {
    duration: 4 + i * 0.6,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut',
  },
});

/* ─── Project Card ─── */
function ProjectCard({ project, index }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      animate={floatAnimation(index)}
      whileHover={{
        y: 0,
        scale: 1.015,
        transition: { duration: 0.4, ease: 'easeOut' },
      }}
      className="group relative"
    >
      {/* Ambient glow behind card */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: project.glowColor }}
      />

      <div
        className={`relative h-full rounded-2xl border border-white/10
          bg-neutral-900/50 backdrop-blur-sm overflow-hidden
          transition-all duration-500 ease-out
          group-hover:bg-neutral-900/70 group-hover:shadow-[0_8px_60px_rgba(0,0,0,0.4)]
          group-hover:border-white/20`}
      >
        {/* Top gradient strip */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Inner content */}
        <div className="relative p-8 flex flex-col h-full">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span
                className={`w-2 h-2 rounded-full ${project.dotColor} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <span className="text-[12px] font-medium tracking-wider uppercase text-[#666] group-hover:text-[#888] transition-colors duration-300">
                {project.category}
              </span>
            </div>
            <span className="text-[13px] font-mono text-[#444] group-hover:text-[#666] transition-colors duration-300">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[1.35rem] sm:text-[1.5rem] font-bold text-white/90 leading-tight mb-3 group-hover:text-white transition-colors duration-300 tracking-[-0.01em]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[14.5px] leading-relaxed text-[#777] group-hover:text-[#999] transition-colors duration-300 mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-[11.5px] font-medium tracking-wide ${project.tagBg} border border-white/[0.04] transition-all duration-300 group-hover:border-white/[0.08]`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover arrow indicator */}
          <div className="absolute top-7 right-7 sm:top-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
            <svg
              className="w-5 h-5 text-white/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Work Section ─── */
export default function Work() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 sm:py-40 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Subtle top divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(120, 119, 198, 0.04) 0%, transparent 70%)',
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
        {/* ── Section Header ── */}
        <motion.div variants={headingVariants} className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent" />
            <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-[#555]">
              Selected Work
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.1]">
            Projects that define
            <br />
            <span className="text-neutral-400">my craft.</span>
          </h2>
        </motion.div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
