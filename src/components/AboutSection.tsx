// components/AboutSection.tsx

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-red-900 to-red-600 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K6DxgPqKgGLjlB1GPc4G58bWADfmAu.png"
              alt="About Trendtial"
              className="w-full h-auto rounded-lg shadow-2xl"
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Vision, Our Execution
            </motion.h2>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Trendtial, we're passionate about bringing your digital marketing vision to life.
              Our team of experts combines creativity with data-driven strategies to deliver
              exceptional results that supercharge your online presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-200"
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
    </section>
  )
}

export default AboutSection
