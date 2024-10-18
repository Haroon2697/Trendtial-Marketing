// components/FloatingElement.tsx

import { motion } from 'framer-motion'

interface FloatingElementProps {
  children: React.ReactNode
  duration?: number
  yOffset?: number
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 5,
  yOffset = 10,
}) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElement
