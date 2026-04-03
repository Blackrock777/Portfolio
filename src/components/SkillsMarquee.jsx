import { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'Python', 'React', 'Next.js',
  'Go-to-Market', 'Solidity', 'C++',
  'AI Prompting', 'UI/UX', 'B2B Sales',
];

function MarqueeTrack({ direction = 'left', duration = 35, hoveredSkill }) {
  const items = [...skills, ...skills, ...skills]; // triple for seamless wrap

  return (
    <div className="relative flex overflow-hidden select-none py-3">
      <motion.div
        className="flex shrink-0 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
        }}
        transition={{
          x: { duration, repeat: Infinity, repeatType: 'loop', ease: 'linear' },
        }}
      >
        {items.map((skill, i) => (
          <span key={`${skill}-${i}`} className="inline-flex items-center mx-2 sm:mx-4">
            <span
              className="text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-[-0.03em] uppercase leading-none transition-all duration-500"
              style={{
                WebkitTextStroke: hoveredSkill === skill ? '0px' : '1px rgba(255, 255, 255, 0.08)',
                WebkitTextFillColor: hoveredSkill === skill ? 'rgba(255,255,255,0.9)' : 'transparent',
                color: 'transparent',
                filter: hoveredSkill && hoveredSkill !== skill ? 'blur(1px)' : 'none',
                opacity: hoveredSkill && hoveredSkill !== skill ? 0.3 : 1,
              }}
              onMouseEnter={() => {}} // cursor handled at parent level
            >
              {skill}
            </span>
            <span className="mx-3 sm:mx-5 text-[clamp(0.6rem,1vw,0.8rem)] text-white/[0.06]">
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsMarquee() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills-marquee"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: '#070b14' }}
      aria-label="Core skills marquee"
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-48 z-10 pointer-events-none bg-gradient-to-r from-[#070b14] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-32 sm:w-48 z-10 pointer-events-none bg-gradient-to-l from-[#070b14] to-transparent" />

      {/* Hover detection layer */}
      <div
        className="relative"
        onMouseMove={(e) => {
          const el = document.elementFromPoint(e.clientX, e.clientY);
          if (el?.tagName === 'SPAN' && el.textContent && skills.includes(el.textContent)) {
            setHoveredSkill(el.textContent);
          }
        }}
      >
        <MarqueeTrack direction="left" duration={45} hoveredSkill={hoveredSkill} />
        <MarqueeTrack direction="right" duration={55} hoveredSkill={hoveredSkill} />
        <MarqueeTrack direction="left" duration={50} hoveredSkill={hoveredSkill} />
      </div>
    </section>
  );
}
