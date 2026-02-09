import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TennisScene } from './scenes/TennisScene'
import { TransitionScene } from './scenes/TransitionScene'
import { MicrosoftScene } from './scenes/MicrosoftScene'
import { MindfulnessScene } from './scenes/MindfulnessScene'
import { Icons } from '@/components/Icon'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const scenes = [
  { id: 'tennis', component: TennisScene },
  { id: 'transition', component: TransitionScene },
  { id: 'microsoft', component: MicrosoftScene },
  { id: 'mindfulness', component: MindfulnessScene },
]

export function StoryTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      const swipeThreshold = 50
      if (touchStartX - touchEndX > swipeThreshold) {
        goToNext()
      } else if (touchEndX - touchStartX > swipeThreshold) {
        goToPrevious()
      }
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const CurrentScene = scenes[currentIndex].component

  return (
    <div className="relative min-h-screen flex flex-col justify-center py-16">
      {/* Scene container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: [0.6, 0.6, 0, 1] }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between">
          {/* Previous button */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous chapter"
          >
            <Icons.ChevronLeft />
          </button>

          {/* Pagination dots */}
          <div
            className="flex items-center space-x-3"
            role="tablist"
            aria-label="Story chapters"
          >
            {scenes.map((scene, index) => (
              <button
                key={scene.id}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-accent-purple'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                } rounded-full`}
                aria-label={`Go to chapter ${index + 1}`}
                aria-selected={index === currentIndex}
                role="tab"
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            disabled={currentIndex === scenes.length - 1}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next chapter"
          >
            <Icons.ChevronRight />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 text-center text-white/60 text-sm">
          Chapter {currentIndex + 1} of {scenes.length}
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-center text-white/40 text-xs">
        Use arrow keys or swipe to navigate
      </div>
    </div>
  )
}
