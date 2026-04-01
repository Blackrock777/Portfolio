import { motion } from 'framer-motion';

/* ─── Skills list ─── */
const skills = [
  'JavaScript',
  'Python',
  'React',
  'Next.js',
  'Go-to-Market Strategy',
  'Solidity',
  'C++',
  'AI Prompting',
  'UI/UX',
  'B2B Sales',
];

/* Build the text for one full pass — doubled for seamless loop */
function MarqueeTrack({ direction = 'left', duration = 35 }) {
  const items = [...skills, ...skills]; // double for seamless wrap

  return (
    <div className="relative flex overflow-hidden select-none py-4">
      <motion.div
        className="flex shrink-0 gap-0 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        }}
      >
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center mx-3 sm:mx-5"
          >
            <span
              className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-0.03em] uppercase leading-none"
              style={{
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {skill}
            </span>
            <span className="mx-4 sm:mx-6 text-[clamp(1rem,2vw,1.6rem)] text-white/[0.08]">
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section
      id="skills-marquee"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
      aria-label="Core skills marquee"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Left / Right fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-[#0A0A0A] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#0A0A0A] to-transparent" />

      {/* Row 1 — scrolls left */}
      <MarqueeTrack direction="left" duration={40} />

      {/* Row 2 — scrolls right (offset feel) */}
      <MarqueeTrack direction="right" duration={50} />
    </section>
  );
}
