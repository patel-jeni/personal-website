import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'section'
  hover?: boolean
}

export function Card({
  children,
  className,
  as = 'div',
  hover = true,
}: CardProps) {
  const Component = motion[as]

  return (
    <Component
      className={clsx(
        'glass-card p-6 relative overflow-hidden',
        'before:absolute before:inset-0 before:rounded-2xl before:border before:border-transparent',
        'before:bg-gradient-to-br before:from-accent-purple/20 before:via-transparent before:to-accent-magenta/20',
        'before:opacity-0 before:transition-opacity before:duration-300',
        hover && 'hover:before:opacity-100',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: [0.6, 0.6, 0, 1] }}
    >
      <div className="relative z-10">{children}</div>
    </Component>
  )
}
