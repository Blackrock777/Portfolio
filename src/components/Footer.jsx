import { motion } from 'framer-motion';

/* ─── Social Links ─── */
const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ─── Footer ─── */
export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative pt-10 pb-10 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Main Footer Grid ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-8">
          {/* Left — Name + location */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <span className="text-[15px] font-bold text-white/80 tracking-tight">
                KJ
              </span>
              <span className="text-[13px] text-[#444]">—</span>
              <span className="text-[13px] text-[#555] font-normal">
                Kapil Jeswani
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start text-[12.5px] text-[#444]">
              {/* Location pin */}
              <svg
                className="w-3.5 h-3.5 text-[#555] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>Torino, Italy</span>
            </div>
          </div>

          {/* Center — Social links */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`social-${s.label.toLowerCase()}`}
                aria-label={s.label}
                className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.07] bg-white/[0.02] text-[#666] hover:text-white hover:border-white/[0.18] hover:bg-white/[0.05] transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {s.icon}
                {/* Tooltip */}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-white/[0.08] backdrop-blur-md text-[10.5px] font-medium text-white/70 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/[0.06]">
                  {s.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right — Copyright */}
          <div className="text-center sm:text-right">
            <span className="text-[12.5px] text-[#444] font-normal">
              © 2026 Kapil Jeswani. All rights reserved.
            </span>
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div className="border-t border-white/[0.04] pt-6 pb-2 flex items-center justify-center">
          <span className="text-[11px] text-[#333] tracking-wider uppercase font-medium">
            Designed & Engineered with precision
          </span>
        </div>
      </div>
    </footer>
  );
}
