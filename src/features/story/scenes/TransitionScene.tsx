import { motion } from 'framer-motion'
import copy from '@/content/copy.json'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function TransitionScene() {
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
          {/* Placeholder: Transition/bridge illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              aria-label="Career transition illustration"
            >
              {/* Arrow path showing transition */}
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--gradient-from)" />
                  <stop offset="50%" stopColor="var(--gradient-via)" />
                  <stop offset="100%" stopColor="var(--gradient-to)" />
                </linearGradient>
              </defs>
              <path
                d="M 30 100 Q 100 30 170 100"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Arrow head */}
              <polygon
                points="170,100 160,95 160,105"
                fill="var(--gradient-to)"
              />
              {/* Starting point */}
              <circle
                cx="30"
                cy="100"
                r="8"
                fill="var(--gradient-from)"
              />
              {/* Milestone markers */}
              {[40, 50, 60, 70, 80, 90].map((percent) => {
                const x = 30 + (170 - 30) * (percent / 100)
                const y = 100 - Math.sin((percent / 100) * Math.PI) * 70
                return (
                  <circle
                    key={percent}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="var(--gradient-via)"
                    opacity="0.6"
                  />
                )
              })}
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          {copy.story.transition.title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-ch-50 leading-relaxed">
          {copy.story.transition.body}
        </p>
      </motion.div>
    </motion.div>
  )
}
