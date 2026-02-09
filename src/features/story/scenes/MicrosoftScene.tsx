import { motion } from 'framer-motion'
import copy from '@/content/copy.json'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function MicrosoftScene() {
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
          {/* Placeholder: Code/development illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              aria-label="Software development illustration"
            >
              <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--gradient-from)" />
                  <stop offset="50%" stopColor="var(--gradient-via)" />
                  <stop offset="100%" stopColor="var(--gradient-to)" />
                </linearGradient>
              </defs>
              {/* Code window */}
              <rect
                x="40"
                y="40"
                width="120"
                height="120"
                rx="8"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="3"
              />
              {/* Window controls */}
              <circle cx="52" cy="52" r="3" fill="var(--gradient-from)" />
              <circle cx="62" cy="52" r="3" fill="var(--gradient-via)" />
              <circle cx="72" cy="52" r="3" fill="var(--gradient-to)" />
              {/* Code lines */}
              {[
                { x: 50, y: 75, w: 60 },
                { x: 50, y: 85, w: 80 },
                { x: 60, y: 95, w: 50 },
                { x: 60, y: 105, w: 70 },
                { x: 50, y: 115, w: 55 },
                { x: 50, y: 125, w: 75 },
                { x: 60, y: 135, w: 40 },
              ].map((line, i) => (
                <rect
                  key={i}
                  x={line.x}
                  y={line.y}
                  width={line.w}
                  height="4"
                  rx="2"
                  fill="var(--gradient-via)"
                  opacity="0.6"
                />
              ))}
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          {copy.story.microsoft.title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-ch-50 leading-relaxed">
          {copy.story.microsoft.body}
        </p>
      </motion.div>
    </motion.div>
  )
}
