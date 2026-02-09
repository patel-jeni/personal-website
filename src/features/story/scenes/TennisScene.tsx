import { motion } from 'framer-motion'
import copy from '@/content/copy.json'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function TennisScene() {
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
          {/* Placeholder: Simple tennis racket illustration using CSS */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              aria-label="Tennis racket illustration"
            >
              {/* Racket head */}
              <ellipse
                cx="100"
                cy="80"
                rx="50"
                ry="60"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="4"
              />
              {/* Strings */}
              {[...Array(6)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={70 + i * 10}
                  y1="30"
                  x2={70 + i * 10}
                  y2="130"
                  stroke="var(--gradient-via)"
                  strokeWidth="1"
                  opacity="0.5"
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="55"
                  y1={30 + i * 12.5}
                  x2="145"
                  y2={30 + i * 12.5}
                  stroke="var(--gradient-via)"
                  strokeWidth="1"
                  opacity="0.5"
                />
              ))}
              {/* Handle */}
              <rect
                x="95"
                y="130"
                width="10"
                height="60"
                fill="url(#gradient1)"
                rx="5"
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--gradient-from)" />
                  <stop offset="50%" stopColor="var(--gradient-via)" />
                  <stop offset="100%" stopColor="var(--gradient-to)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          {copy.story.tennis.title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-ch-50 leading-relaxed">
          {copy.story.tennis.body}
        </p>
      </motion.div>
    </motion.div>
  )
}
