import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { GradientBackground } from '@/components/GradientBackground'
import copy from '@/content/copy.json'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Home() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.6, 0, 1] },
    },
  }

  return (
    <main id="main-content" className="relative min-h-screen">
      <GradientBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center relative">
        {/* Glow effect behind text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-gradient-to-r from-accent-purple/20 via-accent-magenta/20 to-accent-blue/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-white via-accent-purple to-accent-magenta bg-clip-text text-transparent leading-tight"
            style={{
              textShadow: '0 0 80px rgba(186, 156, 255, 0.5)',
            }}
          >
            {copy.hero.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 font-light"
          >
            {copy.hero.subheadline}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/about">
              <Button size="lg" variant="primary">
                {copy.hero.cta}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
