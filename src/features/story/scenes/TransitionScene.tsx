import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import copy from '@/content/copy.json'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import rocketAnimation from '@/assets/animations/rocket-transition.json'

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
      {/* Animated Rocket Illustration */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center"
      >
        <Player
          autoplay
          loop={!shouldReduceMotion}
          src={rocketAnimation}
          style={{ height: '400px', width: '400px' }}
          className="drop-shadow-2xl"
        />
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
