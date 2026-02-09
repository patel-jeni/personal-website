import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Logo({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-label="Jeni Patel Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--gradient-from)" />
          <stop offset="50%" stopColor="var(--gradient-via)" />
          <stop offset="100%" stopColor="var(--gradient-to)" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer rotating ring - clockwise */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        strokeDasharray="60 190"
        strokeLinecap="round"
        filter="url(#glow)"
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformOrigin: '50px 50px' }}
      />

      {/* Middle rotating ring - counter-clockwise */}
      <motion.circle
        cx="50"
        cy="50"
        r="32"
        fill="none"
        stroke="var(--gradient-via)"
        strokeWidth="1.5"
        strokeDasharray="40 160"
        strokeLinecap="round"
        opacity="0.7"
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformOrigin: '50px 50px' }}
      />

      {/* Inner rotating ring - clockwise fast */}
      <motion.circle
        cx="50"
        cy="50"
        r="24"
        fill="none"
        stroke="var(--gradient-to)"
        strokeWidth="1"
        strokeDasharray="30 120"
        strokeLinecap="round"
        opacity="0.5"
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformOrigin: '50px 50px' }}
      />

      {/* Center initials */}
      <text
        x="50"
        y="58"
        fontSize="28"
        fontWeight="700"
        fontFamily="'Instrument Serif', Georgia, serif"
        fill="url(#logoGradient)"
        filter="url(#glow)"
        textAnchor="middle"
      >
        JP
      </text>
    </svg>
  )
}
