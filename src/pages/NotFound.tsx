import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import copy from '@/content/copy.json'

export default function NotFound() {
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    // Track 404 visits in sessionStorage for easter egg
    const count = parseInt(sessionStorage.getItem('404-visits') || '0')
    const newCount = count + 1
    sessionStorage.setItem('404-visits', newCount.toString())
    setVisitCount(newCount)
  }, [])

  const showEasterEgg = visitCount >= 3

  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Illustration */}
          <div className="w-64 h-64 mx-auto mb-8">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              aria-label="Lost in space illustration"
            >
              <defs>
                <linearGradient
                  id="spaceGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="var(--gradient-from)" />
                  <stop offset="50%" stopColor="var(--gradient-via)" />
                  <stop offset="100%" stopColor="var(--gradient-to)" />
                </linearGradient>
              </defs>
              {/* Astronaut helmet */}
              <circle
                cx="100"
                cy="100"
                r="50"
                fill="none"
                stroke="url(#spaceGradient)"
                strokeWidth="4"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="30"
                ry="35"
                fill="var(--gradient-via)"
                opacity="0.2"
              />
              {/* Face */}
              <circle cx="90" cy="95" r="3" fill="var(--gradient-from)" />
              <circle cx="110" cy="95" r="3" fill="var(--gradient-from)" />
              <path
                d="M 90 110 Q 100 115 110 110"
                fill="none"
                stroke="var(--gradient-from)"
                strokeWidth="2"
              />
              {/* Stars */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2
                const distance = 80
                const x = 100 + Math.cos(angle) * distance
                const y = 100 + Math.sin(angle) * distance
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2"
                    fill="var(--gradient-via)"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur={`${2 + i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )
              })}
            </svg>
          </div>

          <h1 className="text-6xl md:text-7xl font-display font-bold mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            {copy['404'].heading}
          </h2>
          <p className="text-xl text-white/70 mb-8">
            {copy['404'].description}
          </p>

          {showEasterEgg && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-lg text-accent-purple mb-8"
            >
              {copy['404'].easterEgg}
            </motion.p>
          )}

          <Link to="/">
            <Button variant="primary" size="lg">
              {copy['404'].cta}
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
