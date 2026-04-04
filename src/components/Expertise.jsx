import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Count-up hook ─── */
function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);
  return count;
}

/* ─── Skill categories ─── */
const skillCategories = [
  {
    title: 'Engineering',
    icon: '⚡',
    skills: ['C++', 'Python', 'Solidity', 'JavaScript', 'Swift', 'SQL'],
  },
  {
    title: 'Product & GTM',
    icon: '🚀',
    skills: ['Go-to-Market', 'Technical Pitching', 'Pipeline Mgmt', 'B2B Sales', 'Consultative Selling'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠',
    skills: ['Git', 'Docker', 'Figma', 'HubSpot', 'Postman', 'Linux'],
  },
  {
    title: 'Systems & Design',
    icon: '🧠',
    skills: ['System Design', 'RESTful APIs', 'OOP', 'Data Structures', 'Algorithms', 'Agile'],
  },
];

/* ─── Animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Expertise() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const accountCount = useCountUp(80, 2000, isInView);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative py-32 sm:py-44"
      style={{ backgroundColor: '#070b14' }}
    >
      {/* Section header */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-8 lg:px-20 mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-600 font-mono">
            —
          </span>
          <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-slate-600">
            Expertise & Edge
          </span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto px-8 lg:px-20"
      >
        {/* ─── Skill Categories Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6 sm:p-8 group hover:bg-white/[0.03] hover:border-indigo-500/10 transition-all duration-700"
              data-cursor-hover
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-[14px] font-semibold text-white/80 tracking-wide uppercase">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-[11px] text-slate-500 border border-white/[0.04] group-hover:text-slate-400 group-hover:border-white/[0.08] transition-all duration-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bento Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card — spans 2 cols */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-10 sm:p-14 flex flex-col justify-between min-h-[320px] group hover:bg-white/[0.03] hover:border-indigo-500/10 transition-all duration-700 overflow-hidden relative"
            data-cursor-hover
          >
            {/* Top accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/50 via-indigo-400/20 to-transparent" />
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-0.04em] leading-[1] text-white mb-6">
                FROM CODE
                <br />
                <span className="text-indigo-400/60">TO CLOSING.</span>
              </h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] leading-[1.8] text-slate-500 max-w-md">
                With a foundation in software engineering and hands-on experience
                in B2B technical sales, I don't just write code — I build products
                that scale and sell.
              </p>
            </div>
            <div className="mt-8 h-px w-16 bg-indigo-500/20" />
          </motion.div>

          {/* Stat 1 — Enterprise Accounts */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-700"
            data-cursor-hover
          >
            <span className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.03em] text-white leading-none">
              {accountCount}+
            </span>
            <p className="text-[13px] font-medium tracking-wide uppercase text-slate-600 mt-4">
              Enterprise Accounts
              <br />
              Analyzed
            </p>
          </motion.div>

          {/* Stat 2 — C-Suite */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-700"
            data-cursor-hover
          >
            <span className="text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.03em] text-white leading-none">
              C-Suite
            </span>
            <p className="text-[13px] font-medium tracking-wide uppercase text-slate-600 mt-4">
              Technical
              <br />
              Pitching
            </p>
          </motion.div>

          {/* Stat 3 — Full-Cycle */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-700"
            data-cursor-hover
          >
            <span className="text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.03em] text-white leading-none">
              Full-Cycle
            </span>
            <p className="text-[13px] font-medium tracking-wide uppercase text-slate-600 mt-4">
              Outbound
              <br />
              Sales
            </p>
          </motion.div>

          {/* Personal touch card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-700"
            data-cursor-hover
          >
            <div>
              <span className="text-[28px] mb-3 block">🎯</span>
              <p className="text-[15px] font-semibold text-white/80 leading-snug">
                National-Level
                <br />
                10m Pistol Shooter
              </p>
            </div>
            <p className="text-[12px] text-slate-600 mt-4 tracking-wide uppercase">
              Extreme Discipline
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
