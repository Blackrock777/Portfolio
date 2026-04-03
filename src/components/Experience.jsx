import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const experiences = [
  {
    title: 'Business Development & Product Advisor',
    company: 'Sparksense',
    client: 'for FaradaIC',
    period: '2024 — Present',
    type: 'Remote',
    bullets: [
      'Managed end-to-end outbound sales discovery over 6 months, analyzing market-fit and commercial viability across 80 target enterprise accounts spanning 6 global industries.',
      'Facilitated 12 high-stakes technical discovery and pitch sessions with C-level decision-makers and engineering leads.',
      'Successfully negotiated and converted 2 enterprise prospects into active pilot engagements, contributing directly to early-stage revenue pipeline.',
      'Designed Go-to-Market collateral and iterated product value propositions based on real-time client feedback.',
    ],
    highlight: { value: '80+', label: 'Enterprise Accounts' },
  },
  {
    title: 'Consultative Sales & Strategy Trainee',
    company: 'Sparksense',
    client: null,
    period: '2024',
    type: 'Training Program',
    bullets: [
      'Mastered consultative B2B selling methodologies, structured pipeline management, and stakeholder negotiation.',
      'Built outbound lead generation capabilities through intensive live client simulations and structured frameworks.',
    ],
    highlight: { value: 'B2B', label: 'Sales Certified' },
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 sm:py-44"
      style={{ backgroundColor: '#070b14' }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-7xl mx-auto px-8 lg:px-20"
      >
        {/* Section header */}
        <motion.div variants={fadeUp} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-500 font-mono">
              —
            </span>
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-500">
              Experience
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-white">
            Where engineering meets revenue.
          </h2>
        </motion.div>

        {/* Experience cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              variants={fadeUp}
              className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.015] p-8 sm:p-10 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-700"
              data-cursor-hover
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-indigo-500/[0.03] to-transparent" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main content */}
                <div className="lg:col-span-9">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[14px]">
                        <span className="text-indigo-400/80 font-medium">{exp.company}</span>
                        {exp.client && (
                          <>
                            <span className="text-slate-700">—</span>
                            <span className="text-slate-500">{exp.client}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] text-slate-600 font-mono">{exp.period}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase text-slate-500 border border-white/[0.06]">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[14px] leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                        <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500/50 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlight stat */}
                <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
                  <div className="flex flex-row lg:flex-col items-center lg:items-end gap-2">
                    <span className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white/10 group-hover:text-indigo-400/30 transition-colors duration-700 leading-none">
                      {exp.highlight.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-slate-600">
                      {exp.highlight.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
