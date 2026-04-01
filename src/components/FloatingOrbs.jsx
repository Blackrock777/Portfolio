import { motion } from 'framer-motion';

/**
 * Deep-background floating orbs that drift in zero-gravity.
 * Each orb has a unique size, colour, blur, position, and animation path.
 */
const orbs = [
  {
    id: 1,
    size: 420,
    color: 'rgba(120, 119, 198, 0.12)',
    blur: 120,
    x: '15%',
    y: '20%',
    dx: [0, 40, -20, 0],
    dy: [0, -50, 30, 0],
    duration: 22,
  },
  {
    id: 2,
    size: 320,
    color: 'rgba(34, 211, 238, 0.08)',
    blur: 100,
    x: '75%',
    y: '15%',
    dx: [0, -30, 50, 0],
    dy: [0, 40, -30, 0],
    duration: 28,
  },
  {
    id: 3,
    size: 260,
    color: 'rgba(52, 211, 153, 0.06)',
    blur: 90,
    x: '60%',
    y: '70%',
    dx: [0, 35, -40, 0],
    dy: [0, -25, 45, 0],
    duration: 25,
  },
  {
    id: 4,
    size: 180,
    color: 'rgba(168, 85, 247, 0.09)',
    blur: 80,
    x: '30%',
    y: '75%',
    dx: [0, -45, 20, 0],
    dy: [0, 35, -50, 0],
    duration: 30,
  },
  {
    id: 5,
    size: 140,
    color: 'rgba(251, 191, 36, 0.05)',
    blur: 70,
    x: '85%',
    y: '55%',
    dx: [0, 25, -35, 0],
    dy: [0, -40, 20, 0],
    duration: 20,
  },
];

export default function FloatingOrbs() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            left: orb.x,
            top: orb.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: orb.dx,
            y: orb.dy,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Extra subtle noise / grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
