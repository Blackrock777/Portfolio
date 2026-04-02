import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Floating Input ─── */
function FloatingField({ id, label, type = 'text', isTextarea = false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const active = focused || value.length > 0;

  const inputClasses = `
    w-full bg-transparent text-white text-[15px]
    pt-7 pb-3 border-b transition-all duration-500 outline-none
    ${focused ? 'border-white/30' : 'border-white/[0.06] hover:border-white/[0.12]'}
  `;

  const labelClasses = `
    absolute left-0 pointer-events-none transition-all duration-300
    ${active
      ? 'top-0 text-[11px] tracking-[0.1em] uppercase text-neutral-600'
      : 'top-6 text-[15px] text-neutral-600'
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
          className={`${inputClasses} resize-none`}
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
          className={inputClasses}
        />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {/* White glow line on focus */}
      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-white/60 transition-all duration-700 ${
          focused ? 'w-full' : 'w-0'
        }`}
      />
    </motion.div>
  );
}

/* ─── Contact Section ─── */
export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 sm:py-44"
      style={{ backgroundColor: '#060606' }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto px-8 lg:px-20"
      >
        {/* Section label */}
        <motion.div variants={fadeUp} className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-neutral-600 font-mono">
              03
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-white/[0.08]" />
            <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-neutral-600">
              Get in Touch
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left — Massive headline */}
          <motion.div variants={fadeUp}>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-0.04em] leading-[0.95] text-white mb-8">
              LET'S BUILD
              <br />
              SOMETHING.
            </h2>
            <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] leading-[1.8] text-neutral-600 max-w-sm">
              Have an idea, a project, or just want to connect?
              Drop me a line and let's make it happen.
            </p>

            {/* Quick links */}
            <div className="mt-12 flex flex-col gap-4">
              <a
                href="mailto:kapil@example.com"
                className="text-[14px] text-neutral-500 hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
                data-cursor-hover
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                kapil@example.com
              </a>
              <span className="text-[14px] text-neutral-600 inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Torino, Italy
              </span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <div>
            <form
              id="contact-form"
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-10"
            >
              <FloatingField id="contact-name" label="Your Name" />
              <FloatingField id="contact-email" label="Email Address" type="email" />
              <FloatingField id="contact-message" label="Your Message" isTextarea />

              <motion.div variants={fadeUp} className="pt-4">
                <motion.button
                  type="submit"
                  id="contact-submit"
                  className="group flex items-center gap-3 text-[14px] font-medium text-white tracking-wide uppercase"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
