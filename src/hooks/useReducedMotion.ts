import { useEffect, useState } from 'react'

/**
 * Hook to detect user's preference for reduced motion
 * Returns true if prefers-reduced-motion is set
 * Respects WCAG 2.1 criterion 2.3.3
 */
export function useReducedMotion(): boolean {
  const [shouldReduce, setShouldReduce] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduce(mediaQuery.matches)

    const listener = (event: MediaQueryListEvent) => {
      setShouldReduce(event.matches)
    }

    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [])

  return shouldReduce
}
