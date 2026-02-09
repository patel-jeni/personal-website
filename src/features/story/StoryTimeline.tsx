import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TennisScene } from './scenes/TennisScene'
import { TransitionScene } from './scenes/TransitionScene'
import { MicrosoftScene } from './scenes/MicrosoftScene'
import { MindfulnessScene } from './scenes/MindfulnessScene'
import { Icons } from '@/components/Icon'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const scenes = [
  { id: 'tennis', component: TennisScene, title: 'Professional Tennis' },
  { id: 'transition', component: TransitionScene, title: 'Career Transition' },
  { id: 'microsoft', component: MicrosoftScene, title: 'Microsoft' },
  { id: 'mindfulness', component: MindfulnessScene, title: 'Mindfulness & Balance' },
]

const AUTOPLAY_INTERVAL = 6000 // 6 seconds per slide

export function StoryTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const autoplayTimeout = useRef<number | null>(null)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play
  useEffect(() => {
    if (!isPlaying || isPaused) return

    // Auto-advance to next slide
    autoplayTimeout.current = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % scenes.length)
    }, AUTOPLAY_INTERVAL)

    return () => {
      if (autoplayTimeout.current) clearTimeout(autoplayTimeout.current)
    }
  }, [currentIndex, isPlaying, isPaused])

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % scenes.length)
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length)
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
        setCurrentIndex((prev) => (prev + 1) % scenes.length)
      } else if (touchEndX - touchStartX > swipeThreshold) {
        setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length)
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
    <div
      className="relative min-h-screen flex flex-col justify-center py-16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Scene container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.6, 0.6, 0, 1] }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Progress bars with scene titles */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              onClick={() => goToSlide(index)}
              className="flex-1 max-w-[200px] group"
              aria-label={`Go to ${scene.title}`}
            >
              <div className="mb-2 text-xs text-white/60 group-hover:text-white/80 transition-colors text-center truncate">
                {scene.title}
              </div>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  key={`progress-${currentIndex}-${index}`}
                  className="h-full bg-gradient-to-r from-accent-purple to-accent-magenta rounded-full"
                  initial={{ width: index < currentIndex ? '100%' : '0%' }}
                  animate={{
                    width:
                      index === currentIndex
                        ? isPaused ? undefined : '100%'
                        : index < currentIndex
                        ? '100%'
                        : '0%',
                  }}
                  transition={{
                    duration: index === currentIndex && !isPaused ? AUTOPLAY_INTERVAL / 1000 : 0,
                    ease: 'linear',
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Chapter indicator */}
        <div className="text-center text-white/60 text-sm">
          Chapter {currentIndex + 1} of {scenes.length}
        </div>
      </div>
    </div>
  )
}
