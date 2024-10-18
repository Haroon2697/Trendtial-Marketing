// components/Footer.tsx

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-2xl font-bold">
              <span className="text-white">tr</span>
              <span className="text-red-600">e</span>
              <span className="text-white">ndtial</span>
            </a>
            <p className="mt-2 text-gray-400">Your vision, our execution</p>
          </motion.div>
          <motion.nav
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Contact
            </a>
          </motion.nav>
        </div>
        <motion.div
          className="mt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Trendtial. All rights reserved.
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </footer>
  )
}

export default Footer
