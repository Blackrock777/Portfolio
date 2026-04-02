import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/* ─── Project Data ─── */
const projects = [
  {
    id: 1,
    num: '01',
    title: 'Polymarket AI Trading Bot',
    year: '2026',
    category: 'Web3 & DeFi',
    description:
      'An autonomous trading bot leveraging sentiment analysis and on-chain data for decentralized prediction markets.',
    tags: ['Python', 'Next.js', 'Solidity', 'AI Prompting'],
    accentColor: 'rgba(168, 85, 247, 0.5)',
  },
  {
    id: 2,
    num: '02',
    title: 'Enterprise NLP Assistant',
    year: '2025',
    category: 'AI Infrastructure',
    description:
      'An NLP-driven virtual assistant designed to bridge product engineering teams with enterprise client needs.',
    tags: ['Python', 'React', 'UI/UX', 'LLMs'],
    accentColor: 'rgba(34, 211, 238, 0.5)',
  },
  {
    id: 3,
    num: '03',
    title: 'CubeSat Telemetry Dashboard',
    year: '2023',
    category: 'Aerospace Tech',
    description:
      'Real-time flight software visualization and telemetry tracking for a 2nd-place winning hackathon project.',
    tags: ['C++', 'Next.js', 'Data Visualization'],
    accentColor: 'rgba(52, 211, 153, 0.5)',
  },
];

/* ─── Animation Variants ─── */
const sectionFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Single Project Card ─── */
function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardReveal}
    >
      <motion.a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="group block relative py-10 sm:py-14 border-b border-white/[0.04] hover:border-white/[0.08] transition-colors duration-500"
        whileHover="hovered"
        data-cursor-hover
      >
        {/* Hover accent glow */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
          style={{ backgroundColor: project.accentColor }}
          initial={{ scaleY: 0, opacity: 0 }}
          variants={{
            hovered: { scaleY: 1, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
          }}
        />

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 max-w-7xl mx-auto px-8 lg:px-20">
          {/* Number */}
          <div className="md:w-24 shrink-0">
            <span className="project-number text-[clamp(2rem,4vw,3rem)] font-black text-transparent leading-none">
              {project.num}
            </span>
          </div>

          {/* Title + Category */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold text-white/90 tracking-[-0.02em] leading-tight group-hover:text-white transition-colors duration-300 mb-1">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-[13px] text-neutral-600">
              <span>{project.category}</span>
              <span className="text-neutral-700">·</span>
              <span className="font-mono">{project.year}</span>
            </div>
          </div>

          {/* Description (hidden on small, visible on md+) */}
          <div className="md:w-80 shrink-0">
            <p className="text-[14px] leading-relaxed text-neutral-600 group-hover:text-neutral-400 transition-colors duration-500">
              {project.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="md:w-16 shrink-0 flex justify-end">
            <motion.div
              className="text-neutral-700 group-hover:text-white transition-colors duration-300"
              variants={{
                hovered: { x: 4, rotate: -45, transition: { duration: 0.3 } },
              }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Tags */}
        <div className="max-w-7xl mx-auto px-8 lg:px-20 mt-5 md:mt-0 md:pl-36">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide text-neutral-600 border border-white/[0.04] group-hover:text-neutral-400 group-hover:border-white/[0.08] transition-all duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

/* ─── Work Section ─── */
export default function Work() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 sm:py-44"
      style={{ backgroundColor: '#060606' }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-7xl mx-auto px-8 lg:px-20 mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-neutral-600 font-mono">
            01
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-white/[0.08]" />
          <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-neutral-600">
            Selected Work
          </span>
        </div>
        <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-extrabold tracking-[-0.04em] text-white leading-[1.05]">
          Projects that define
          <br />
          <span className="text-neutral-600">my craft.</span>
        </h2>
      </motion.div>

      {/* Project list */}
      <div>
        {/* Top border */}
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <div className="h-px bg-white/[0.06]" />
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
