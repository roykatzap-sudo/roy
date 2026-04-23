'use client'

import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const directionOffset = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { y: 0, x: 32 },
  right: { y: 0, x: -32 },
  none: { y: 0, x: 0 },
}

export default function FadeInView({
  children,
  className,
  delay = 0,
  direction = 'up',
}: Props) {
  const offset = directionOffset[direction]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
