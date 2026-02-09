import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ChapterProps {
  children: ReactNode
  className?: string
}

export function Chapter({ children, className }: ChapterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : shouldReduceMotion
            ? {}
            : { opacity: 0, y: 40 }
      }
      transition={{ duration: 0.6, ease: [0.6, 0.6, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
