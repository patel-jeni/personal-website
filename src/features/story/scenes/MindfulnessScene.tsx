import { motion } from 'framer-motion'
import copy from '@/content/copy.json'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function MindfulnessScene() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.6, 0, 1] },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]"
    >
      {/* Illustration */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center"
      >
        <div className="relative w-full max-w-md aspect-square">
          {/* Placeholder: Meditation/nature illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              aria-label="Mindfulness and nature illustration"
            >
              <defs>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--gradient-from)" />
                  <stop offset="50%" stopColor="var(--gradient-via)" />
                  <stop offset="100%" stopColor="var(--gradient-to)" />
                </linearGradient>
                <radialGradient id="glow">
                  <stop offset="0%" stopColor="var(--gradient-via)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--gradient-via)" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Meditation pose silhouette */}
              <ellipse
                cx="100"
                cy="140"
                rx="30"
                ry="5"
                fill="var(--gradient-to)"
                opacity="0.3"
              />
              <circle cx="100" cy="70" r="15" fill="url(#gradient4)" />
              {/* Body */}
              <path
                d="M 100 85 L 100 120"
                stroke="url(#gradient4)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Legs (crossed) */}
              <path
                d="M 100 115 Q 80 130 70 135"
                stroke="url(#gradient4)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 100 115 Q 120 130 130 135"
                stroke="url(#gradient4)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              {/* Arms (meditation pose) */}
              <path
                d="M 100 95 Q 75 100 70 110"
                stroke="url(#gradient4)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 100 95 Q 125 100 130 110"
                stroke="url(#gradient4)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              {/* Glow/aura */}
              <circle cx="100" cy="100" r="60" fill="url(#glow)" />
              {/* Mountain silhouettes in background */}
              <path
                d="M 20 160 L 50 120 L 80 160 Z"
                fill="var(--gradient-from)"
                opacity="0.3"
              />
              <path
                d="M 120 160 L 150 110 L 180 160 Z"
                fill="var(--gradient-from)"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          {copy.story.mindfulness.title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-ch-50 leading-relaxed">
          {copy.story.mindfulness.body}
        </p>
      </motion.div>
    </motion.div>
  )
}
