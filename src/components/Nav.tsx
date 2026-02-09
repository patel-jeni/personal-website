import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Icons } from './Icon'
import { AudioToggle } from './AudioToggle'
import copy from '@/content/copy.json'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { label: copy.nav.home, path: '/' },
    { label: copy.nav.story, path: '/story' },
    { label: copy.nav.projects, path: '/projects' },
    { label: copy.nav.about, path: '/about' },
    { label: copy.nav.contact, path: '/contact' },
  ]

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'bg-base/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home link */}
          <Link
            to="/"
            className="text-xl font-display font-bold hover:text-accent-purple transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-accent-purple',
                    location.pathname === item.path
                      ? 'text-accent-purple'
                      : 'text-white/80'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <AudioToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10"
            >
              <ul className="py-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={clsx(
                        'block px-4 py-2 rounded-lg transition-colors',
                        location.pathname === item.path
                          ? 'bg-accent-purple/20 text-accent-purple'
                          : 'text-white/80 hover:bg-white/10'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
