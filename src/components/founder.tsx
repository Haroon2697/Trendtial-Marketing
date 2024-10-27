"use client"

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const founders = [
  {
    name: "Sheryar Kayani",
    role: "CEO & Co-Founder",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheryar-x5VPdpU5ynaQYezxY3bdkk6ErkKyb2.jpg",
  
  },
  {
    name: "Muhammad Junaid",
    role: "CTO & Co-Founder",
    imageUrl: "/junaid.jpg", // Adjust the path if necessary
  },
   
  {
    name: "Abdul Faheem",
    role: "CFO & Co-Founder",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abdul%20faheem-j7eCq0LNIO6WaDci9e1YAPcIOQ0Hd7.jpg",
 
  }

];

const adjustImagePosition = (name) => {
  switch (name) {
    case 'Muhammad Junaid':
      return 'object-[center_35%]'; // Adjust this value to move Junaid's image down
    case 'Abdul Faheem':
      return 'object-[center_20%]'; // Adjust this value to move Faheem's image down
    default:
      return 'object-center'; // Default centering for others
  }
}




const FounderCard = ({ founder, index }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg border border-red-500 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-[300px]">
        <img
          src={founder.imageUrl}
          alt={founder.name}
          className={`w-full h-full object-cover ${adjustImagePosition(founder.name)}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold mb-1 text-white">{founder.name}</h3>
          <p className="text-red-400">{founder.role}</p>
        </div>
      </div>
    </motion.div>
  )
}


export default function Founders() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="founders" className="py-20 relative overflow-hidden bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.5 }}
        >
          Our Visionary Founders
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
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
          repeatType: 'reverse',
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
          repeatType: 'reverse',
        }}
      />
    </section>
  )
}