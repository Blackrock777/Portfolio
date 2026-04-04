import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const hackathons = [
  {
    event: 'ETH Bucharest',
    year: '2025',
    location: 'Bucharest, Romania',
    role: 'Blockchain Developer',
    description: 'Collaborated within a 4-member international team to build a decentralized identity (dApp) solution focusing on secure authentication flows.',
    tags: ['Solidity', 'React', 'Web3.js', 'IPFS'],
  },
  {
    event: 'HackZurich',
    year: '2024',
    location: 'Zurich, Switzerland',
    role: 'Full-Stack Developer',
    description: "Built an on-chain reputation scoring system for DeFi protocols at Europe's largest hackathon, competing against 600+ teams across 3 tracks.",
    tags: ['Next.js', 'Solidity', 'The Graph', 'Chainlink'],
  },
  {
    event: 'Junction Helsinki',
    year: '2024',
    location: 'Helsinki, Finland',
    role: 'Product Lead',
    description: 'Led product strategy and UX design for an AI-powered logistics optimization platform. Directed a 5-person cross-functional team through rapid prototyping sprints.',
    tags: ['Python', 'Figma', 'LLMs', 'GTM Strategy'],
  },
  {
    event: 'CubeSat Hackathon',
    year: '2023',
    location: 'Torino, Italy',
    role: 'Team Lead',
    description: 'Led a multidisciplinary 5-member team through rapid algorithmic ideation, code delegation, and prototype execution. Delivered a high-impact technical pitch under a strict 48-hour deadline.',
    tags: ['C++', 'Embedded Systems', 'Real-Time OS', 'Flight Software'],
  },
  {
    event: 'NASA Space Apps Challenge',
    year: '2023',
    location: 'Global (Online)',
    role: 'Developer',
    description: 'Engaged in global, data-driven software challenges using sprint-based collaborative methodology. Built a satellite data visualization tool for climate monitoring.',
    tags: ['Python', 'Data Visualization', 'APIs', 'Geospatial'],
  },
];

export default function Hackathons() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="hackathons"
      ref={sectionRef}
      className="relative py-32 sm:py-44"
      style={{ backgroundColor: '#070b14' }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="max-w-7xl mx-auto px-8 lg:px-20"
      >
        {/* Section header */}
        <motion.div variants={fadeUp} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-500 font-mono">—</span>
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-500">
              Hackathons & Competitions
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-white">
            Built under pressure.
          </h2>
        </motion.div>

        {/* Event list */}
        <div className="flex flex-col">
          {hackathons.map((hack) => (
            <motion.div
              key={hack.event}
              variants={fadeUp}
              className="group py-10 border-b border-white/[0.04] last:border-b-0 hover:bg-white/[0.015] -mx-4 px-4 rounded-xl transition-colors duration-500"
              data-cursor-hover
            >
              {/* Top row: event name + year (right-aligned) */}
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h3 className="text-[clamp(1.15rem,2.2vw,1.5rem)] font-bold text-white/90 group-hover:text-white transition-colors">
                  {hack.event}
                </h3>
                <span className="text-[12px] font-mono text-slate-600 ml-auto">{hack.year}</span>
              </div>

              {/* Role + Location */}
              <div className="flex flex-wrap items-center gap-2 text-[13px] text-slate-500 mb-3">
                <span>{hack.role}</span>
                <span className="text-slate-700">·</span>
                <span>{hack.location}</span>
              </div>

              {/* Description */}
              <p className="text-[14px] leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors max-w-2xl mb-4">
                {hack.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {hack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide text-slate-600 border border-white/[0.04] group-hover:text-slate-400 group-hover:border-white/[0.08] transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
