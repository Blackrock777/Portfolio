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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);
  return count;
}

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
      style={{ backgroundColor: '#060606' }}
    >
      {/* Section header */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-8 lg:px-20 mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-neutral-600 font-mono">
            02
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-white/[0.08]" />
          <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-neutral-600">
            Expertise & Edge
          </span>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto px-8 lg:px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card — spans 2 cols */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-10 sm:p-14 flex flex-col justify-between min-h-[320px] group hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-700"
            data-cursor-hover
          >
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-0.04em] leading-[1] text-white mb-6">
                FROM CODE
                <br />
                TO CLOSING.
              </h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] leading-[1.8] text-neutral-500 max-w-md">
                With a foundation in software engineering and hands-on experience
                in B2B technical sales, I don't just write code — I build products
                that scale and sell.
              </p>
            </div>
            <div className="mt-8 h-px w-16 bg-white/[0.08]" />
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
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-600 mt-4">
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
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-600 mt-4">
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
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-600 mt-4">
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
            <p className="text-[12px] text-neutral-600 mt-4 tracking-wide uppercase">
              Extreme Discipline
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
