import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function GradientBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full"
        style={{
          background:
            'radial-gradient(circle, var(--gradient-from) 0%, transparent 70%)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        style={{
          background:
            'radial-gradient(circle, var(--gradient-to) 0%, transparent 70%)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          background:
            'radial-gradient(circle, var(--gradient-via) 0%, transparent 60%)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
