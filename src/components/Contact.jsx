import { useRef } from 'react';
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
          <span className="text-white">
            SOMETHING.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[clamp(0.95rem,1.5vw,1.05rem)] leading-relaxed text-neutral-500 mb-14 max-w-lg"
        >
          Have an idea, a project, or just want to connect? Drop me a line and
          let's make it happen.
        </motion.p>

        {/* ── Contact Form ── */}
        <form
          id="contact-form"
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-8"
        >
          {/* Name */}
          <motion.div variants={fadeUp}>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-neutral-700 pb-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors duration-300"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeUp}>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-neutral-700 pb-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors duration-300"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp}>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-neutral-700 pb-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeUp} className="pt-4">
            <motion.button
              type="submit"
              id="contact-submit"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-3 bg-white text-black text-[15px] font-semibold transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] cursor-pointer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Send Message</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
