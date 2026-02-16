'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'

export function MotionDiv(props: HTMLMotionProps<'div'>) {
  return <motion.div {...props} />
}
