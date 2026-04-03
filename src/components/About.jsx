import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stats = [
  { label: 'Location', value: '📍 Torino, Italy' },
  { label: 'Education', value: '🎓 Politecnico di Torino' },
  { label: 'Languages', value: '🌐 EN · HI · IT' },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
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
        {/* Section label */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center gap-4">
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-500 font-mono">
              00
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-white/[0.06]" />
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-500">
              About
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — Photo + Quick stats */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            {/* Avatar */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-10 group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/10 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              <img
                src="/avatar.png"
                alt="Kapil Jeswani"
                className="relative w-full h-full object-cover rounded-2xl border border-white/[0.06] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Quick stats */}
            <div className="flex flex-col gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-[14px] text-slate-300">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Currently chip */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[12px] text-indigo-300 tracking-wide">
                Exploring Swift/SwiftUI & iOS ecosystems
              </span>
            </div>
          </motion.div>

          {/* Right — Bio text */}
          <motion.div variants={fadeUp} className="lg:col-span-8">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-8">
              Engineer by training.
              <br />
              <span className="text-indigo-400/80">Strategist by instinct.</span>
            </h2>

            <div className="space-y-5 max-w-2xl">
              <p className="text-[clamp(0.95rem,1.4vw,1.1rem)] leading-[1.85] text-slate-400">
                I'm Kapil Jeswani — a Computer Engineering student at{' '}
                <span className="text-slate-200">Politecnico di Torino</span>, graduating in 2026. 
                I live at the crossroads of deep technical engineering and commercial strategy, 
                which means I don't just write code — I build products that scale and sell.
              </p>

              <p className="text-[clamp(0.95rem,1.4vw,1.1rem)] leading-[1.85] text-slate-400">
                My engineering foundation spans{' '}
                <span className="text-slate-200">C++, Python, and Solidity</span> — from real-time 
                CubeSat flight software to decentralized smart contracts. On the commercial side, 
                I've executed{' '}
                <span className="text-slate-200">full-cycle B2B outbound sales</span> at Sparksense, 
                analyzing 80+ enterprise accounts and pitching C-suite executives across 6 global industries.
              </p>

              <p className="text-[clamp(0.95rem,1.4vw,1.1rem)] leading-[1.85] text-slate-400">
                Off-screen, I cultivate extreme discipline as a{' '}
                <span className="text-slate-200">National-Level 10m Pistol Shooter</span> — 
                a practice that sharpens focus under pressure, translating directly 
                into how I approach complex problem-solving and high-stakes pitches.
              </p>
            </div>

            {/* Education card */}
            <motion.div
              variants={fadeUp}
              className="mt-12 p-6 rounded-xl border border-white/[0.05] bg-white/[0.02] max-w-md hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
              data-cursor-hover
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-1">
                    BSc in Computer Engineering
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Politecnico di Torino — Graduating 2026
                  </p>
                  <p className="text-[12px] text-slate-600 mt-2">
                    Algorithms · Data Structures · Software Engineering · OOP · Computer Systems
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
