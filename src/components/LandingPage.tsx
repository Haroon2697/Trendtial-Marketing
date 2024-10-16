
import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { ChevronRight, Send, Zap, TrendingUp, BarChart, Menu, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer';

import { Button } from "./ui/button";
import { Input } from"./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../components/ui/sheet"; // Adjust path if needed


const AnimatedText = ({ text }: { text: string }) => {
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

const FloatingElement = ({ children, duration = 5, yOffset = 10 }: { children: React.ReactNode, duration?: number, yOffset?: number }) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  )
}

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [null, Math.random()],
            scale: [null, Math.random() * 0.5 + 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { email, message })
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden">
      <ParticleBackground />
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">tr</span>
            <span className="text-red-600">e</span>
            <span className="text-white">ndtial</span>
          </motion.a>
          <nav className="hidden md:flex space-x-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white">
              Get Started
            </Button>
          </motion.div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {['Services', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-red-600 transition-colors text-lg"
                  >
                    {item}
                  </a>
                ))}
                <Button className="bg-red-600 hover:bg-red-700 text-white mt-4">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedText text="Your Go-to" />
                {' '}
                <span className="text-red-600">
                  <AnimatedText text="Marketing" />
                </span>
                {' '}
                <AnimatedText text="Expert" />
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your vision, our execution. Supercharge your digital presence with Trendtial's cutting-edge strategies.
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
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
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
                  repeatType: "reverse",
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
                  repeatType: "reverse",
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
                transition={{ duration: 1.5, ease: "easeInOut" }}
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

        <section id="services" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Social Media Marketing', description: 'Supercharge your social media presence with our expert strategies.' },
                { icon: TrendingUp, title: 'SEO Optimization', description: 'Boost your search engine rankings and drive organic traffic to your website.' },
                { icon: BarChart, title: 'Data Analytics', description: 'Make informed decisions with our advanced data analysis and reporting tools.' },
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FloatingElement>
                    <service.icon className="h-12 w-12 text-red-500 mb-4" />
                  </FloatingElement>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="absolute top-1/2 left-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </section>

        <section id="about" className="py-20 bg-gradient-to-r from-red-900 to-red-600 text-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div  className="md:w-1/2 mb-10 md:mb-0">
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
                  At Trendtial, we're passionate about bringing your digital marketing vision to life. Our team of experts combines creativity with data-driven strategies to deliver exceptional results that supercharge your online presence.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-200">
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

        <section id="contact" className="py-20 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <div className="max-w-2xl mx-auto">
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </motion.form>
            </div>
          </div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: '100% 100%' }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(0,0,0,0) 70%)',
              backgroundSize: '400% 400%',
            }}
          />
        </section>
      </main>

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
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
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
    </div>
  )
}