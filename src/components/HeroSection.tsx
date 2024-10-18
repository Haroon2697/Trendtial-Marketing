// components/HeroSection.tsx

import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import AnimatedText from './AnimatedText'
import FloatingElement from './FloatingElement'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedText text="Your Go-to" />{' '}
            <span className="text-red-600">
              <AnimatedText text="Marketing" />
            </span>{' '}
            <AnimatedText text="Expert" />
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your vision, our execution. Supercharge your digital presence with Trendtial's
            cutting-edge strategies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="md:w-1/2 relative">
          <FloatingElement duration={7} yOffset={15}>
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DQJMc6Ww221eldwuuStIVrdLu2xzzL.png"
              alt="Social Media Supercharged"
              className="w-full h-auto rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </FloatingElement>
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 bg-red-500 rounded-full opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute -bottom-5 -right-5 w-16 h-16 bg-purple-500 rounded-full opacity-50"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 Q50,50 100,0 V100 H0 Z"
            fill="url(#gradient)"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <FloatingElement duration={2} yOffset={5}>
          <ArrowRight className="w-8 h-8 text-white" />
        </FloatingElement>
      </motion.div>
    </section>
  )
}

export default HeroSection
