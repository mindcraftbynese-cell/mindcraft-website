'use client'

import React, { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  once?: boolean
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '0px 0px -80px 0px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedStagger({
  children,
  className = '',
  style,
  staggerDelay = 0.1,
  initialDelay = 0,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
  initialDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay, delayChildren: initialDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
} as const
