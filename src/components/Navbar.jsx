import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      id="main-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.72)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* ── Logo ── */}
          <motion.a
            href="#"
            id="nav-logo"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-[22px] font-black tracking-tight text-white">
              KJ
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="relative px-5 py-2 text-[14px] font-medium text-[#999] hover:text-white transition-colors duration-300 group"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-purple-400/80 to-cyan-400/80 group-hover:w-3/5 transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[rgba(10,10,10,0.92)] backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[15px] font-medium text-[#999] hover:text-white transition-colors duration-200 border-b border-white/[0.04] last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
