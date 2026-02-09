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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            {copy.hero.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-12"
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
