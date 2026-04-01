import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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

/* ─── Floating Input ─── */
function FloatingInput({ id, label, type = 'text', isTextarea = false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const active = focused || value.length > 0;

  const sharedClasses = `
    peer w-full bg-transparent text-white/90 text-[15px] font-normal
    pt-6 pb-3 border-b transition-all duration-500 outline-none
    ${focused
      ? 'border-white/30 shadow-[0_2px_15px_rgba(255,255,255,0.06)]'
      : 'border-white/[0.08] hover:border-white/[0.14]'
    }
  `;

  const labelClasses = `
    absolute left-0 transition-all duration-300 pointer-events-none
    ${active
      ? 'top-0 text-[11px] tracking-[0.08em] uppercase font-medium text-white/40'
      : 'top-5 text-[15px] text-[#555]'
    }
  `;

  return (
    <motion.div variants={fadeUp} className="relative">
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className={sharedClasses}
        />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {/* Glow line */}
      <div
        className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-purple-400/70 via-cyan-400/70 to-emerald-400/70 transition-all duration-500 ${
          focused ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </motion.div>
  );
}

/* ─── Contact Section ─── */
export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 sm:py-40 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background ambients */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(168, 85, 247, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[350px] rounded-full pointer-events-none"
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
        className="relative z-10 max-w-3xl mx-auto px-6 md:px-12"
      >
        {/* ── Section Label ── */}
        <motion.div variants={fadeUp} className="mb-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent" />
            <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-[#555]">
              Get in Touch
            </span>
          </div>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.04em] leading-[1.05] text-white mb-5"
        >
          LET'S BUILD
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            SOMETHING.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[clamp(0.95rem,1.5vw,1.05rem)] leading-relaxed text-[#666] mb-14 max-w-lg"
        >
          Have an idea, a project, or just want to connect? Drop me a line and
          let's make it happen.
        </motion.p>

        {/* ── Contact Form ── */}
        <form
          id="contact-form"
          onSubmit={(e) => e.preventDefault()}
          className="space-y-10"
        >
          <FloatingInput id="contact-name" label="Your Name" />
          <FloatingInput
            id="contact-email"
            label="Email Address"
            type="email"
          />
          <FloatingInput
            id="contact-message"
            label="Your Message"
            isTextarea
          />

          {/* Submit Button */}
          <motion.div variants={fadeUp}>
            <motion.button
              type="submit"
              id="contact-submit"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-[#0A0A0A] text-[15px] font-semibold transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] cursor-pointer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
