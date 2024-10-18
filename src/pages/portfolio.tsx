'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ChevronRight, ArrowRight, Zap, TrendingUp, BarChart, Code, Share2, Smartphone } from 'lucide-react'
import { Button } from '../components/ui/button'
// FloatingElement: Creates a floating animation effect by moving children elements up and down.
const FloatingElement = ({ children, duration = 4, yOffset = 10 }: { children: React.ReactNode, duration?: number, yOffset?: number }) => {
    return (
      <motion.div
        animate={{
          y: [0, yOffset, 0],  // Moves the element vertically by yOffset value
        }}
        transition={{
          duration: duration,  // Time for one animation cycle
          repeat: Infinity,    // Infinite loop of the animation
          repeatType: 'reverse',  // Reverse the animation direction
          ease: 'easeInOut',   // Smooth easing for the animation
        }}
      >
        {children}
      </motion.div>
    );
  };

  
  const GlowingOrb = ({ color, size, top, left, duration }: { color: string, size: string, top: string, left: string, duration: number }) => (
    <motion.div
      className="absolute rounded-full mix-blend-screen filter blur-xl opacity-70"
      style={{
        backgroundColor: color,  // Color of the orb
        width: size,  // Width of the orb
        height: size,  // Height of the orb
        top: top,  // Top position
        left: left,  // Left position
      }}
      animate={{
        scale: [1, 1.2, 1],  // Scale up and down animation
        opacity: [0.5, 0.8, 0.5],  // Change opacity
      }}
      transition={{
        duration: duration,  // Time for one cycle of animation
        repeat: Infinity,  // Infinite loop
        repeatType: 'reverse',  // Reverse the direction after every loop
      }}
    />
  );

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  )
}

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0)
  const projectsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end start"]
  })

  const projects = [
    { title: "Social Media Campaign", image: "/placeholder.svg?height=400&width=600" },
    { title: "E-commerce Website", image: "/placeholder.svg?height=400&width=600" },
    { title: "Mobile App Development", image: "/placeholder.svg?height=400&width=600" },
  ]

  const services = [
    { icon: Zap, title: "Social Media Marketing", description: "Boost your online presence" },
    { icon: Code, title: "Web Development", description: "Create stunning websites" },
    { icon: Share2, title: "Content Creation", description: "Engage your audience" },
    { icon: Smartphone, title: "Mobile App Development", description: "Reach users on-the-go" },
    { icon: TrendingUp, title: "SEO Optimization", description: "Improve your search rankings" },
    { icon: BarChart, title: "Data Analytics", description: "Make informed decisions" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <GlowingOrb color="#ef4444" size="300px" top="10%" left="5%" duration={7} />
      <GlowingOrb color="#3b82f6" size="200px" top="60%" left="80%" duration={5} />
      <GlowingOrb color="#8b5cf6" size="250px" top="80%" left="10%" duration={6} />

      <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 to-red-600 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DigiTrend
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["Home", "Services", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-red-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-4 py-20 text-center">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digital Trends
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
                Redefined
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elevate your brand with cutting-edge social media marketing and web development
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white mr-4">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black"
              >
                Our Work
              </Button>
            </motion.div>
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

        <section id="services" className="py-20 relative">
          <ParallaxText baseVelocity={-5}>Our Services</ParallaxText>
          <div className="container mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500 hover:border-red-400 transition-all duration-300"
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
        </section>

        <section id="projects" className="py-20 relative" ref={projectsRef}>
          <ParallaxText baseVelocity={5}>Our Projects</ParallaxText>
          <div className="container mx-auto px-4 mt-12">
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden"
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
                opacity: useTransform(scrollYProgress, [0, 1], [1, 0.5]),
              }}
            >
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold">{projects[currentProject].title}</h3>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 bg-gray-800 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 bg-gray-800 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 bg-gray-800 rounded-md"></textarea>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 DigiTrend. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}