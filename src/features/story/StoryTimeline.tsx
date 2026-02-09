import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TennisScene } from './scenes/TennisScene'
import { TransitionScene } from './scenes/TransitionScene'
import { MicrosoftScene } from './scenes/MicrosoftScene'
import { MindfulnessScene } from './scenes/MindfulnessScene'
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
  const [isPaused, setIsPaused] = useState(false)
  const [slideKey, setSlideKey] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const timerRef = useRef<number | null>(null)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
    setSlideKey((prev) => prev + 1)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length)
    setSlideKey((prev) => prev + 1)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setSlideKey((prev) => prev + 1)
  }, [])

  // Auto-advance timer - simple and reliable
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    // Don't set new timer if paused
    if (isPaused) {
      return
    }

    // Set new timer for exactly AUTOPLAY_INTERVAL
    timerRef.current = window.setTimeout(() => {
      goToNext()
    }, AUTOPLAY_INTERVAL)

    // Cleanup on unmount or when dependencies change
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [slideKey, isPaused, goToNext])

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
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious])

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
  }, [goToNext, goToPrevious])

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
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Progress bars with scene titles */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {scenes.map((scene, index) => {
            const isActive = index === currentIndex
            const isComplete = index < currentIndex

            return (
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
                  {isActive ? (
                    <div
                      key={slideKey}
                      className="h-full bg-gradient-to-r from-accent-purple to-accent-magenta rounded-full"
                      style={{
                        animation: `progressBar ${AUTOPLAY_INTERVAL}ms linear forwards`,
                        animationPlayState: isPaused ? 'paused' : 'running'
                      }}
                    />
                  ) : (
                    <div
                      className="h-full bg-gradient-to-r from-accent-purple to-accent-magenta rounded-full transition-[width] duration-300 ease-linear"
                      style={{
                        width: isComplete ? '100%' : '0%'
                      }}
                    />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Chapter indicator */}
        <div className="text-center text-white/60 text-sm">
          Chapter {currentIndex + 1} of {scenes.length}
        </div>
      </div>
    </div>
  )
}
