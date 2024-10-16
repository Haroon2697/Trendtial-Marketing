// components/AnimatedText.tsx

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.08, delayChildren: 0.5 }}
      className="inline-block"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default AnimatedText
