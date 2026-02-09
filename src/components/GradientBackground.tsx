import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function GradientBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-base" />

      {/* Single large animated gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(186, 156, 255, 0.4) 0%, rgba(252, 114, 255, 0.3) 40%, rgba(72, 123, 255, 0.2) 70%, transparent 100%)',
          x: '-50%',
          y: '-50%',
          transformOrigin: 'center center',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />
    </div>
  )
}
