'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import { Button } from '../components/ui/button'
import ParticleBackground from '../components/ParticleBackground'

// Complete team members with specific adjustments for visibility
const teamMembers = [
  {
    name: "Sheryar Kayani",
    role: "CEO & Co-Founder",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheryar-x5VPdpU5ynaQYezxY3bdkk6ErkKyb2.jpg",
    bio: "Strategic leader driving innovation in digital marketing.",
    color: "from-blue-500 to-blue-700",
    linkedinUrl: "https://linkedin.com/in/sheryarkayani",
    twitterUrl: "https://twitter.com/sheryarkayani"
  },
  {
    name: "Muhammad Junaid",
    role: "CTO & Co-Founder",
    imageUrl: "/junaid.jpg",
    bio: "Visionary technologist with a passion for AI and machine learning.",
    color: "from-teal-500 to-teal-700",
    linkedinUrl: "https://linkedin.com/in/muhammad-junaid",
    twitterUrl: "https://twitter.com/muhammad-junaid"
  },
  {
    name: "Abdul Faheem",
    role: "CFO & Co-Founder",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abdul%20faheem-j7eCq0LNIO6WaDci9e1YAPcIOQ0Hd7.jpg",
    bio: "Financial expert ensuring sustainable growth and profitability.",
    color: "from-purple-500 to-purple-700",
    linkedinUrl: "https://linkedin.com/in/abdul-faheem",
    twitterUrl: "https://twitter.com/abdul-faheem"
  },
  {
    name: "Khadija",
    role: "Head HR",
    imageUrl: "/khadija.jpeg",
    bio: "Cultivating a positive work culture and nurturing talent.",
    color: "from-pink-500 to-pink-700",
    linkedinUrl: "https://linkedin.com/in/khadija",
    twitterUrl: "https://twitter.com/khadija",
    fitTop: false // Adjusted for clear visibility of face
  },
  {
    name: "Emaan",
    role: "Director Sales",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emaan-VZlwSdMddMTJwbOZtWjUAF98O1k7WX.jpg",
    bio: "Driving revenue growth through strategic sales initiatives.",
    color: "from-green-500 to-green-700",
    linkedinUrl: "https://linkedin.com/in/emaanazhar",
    twitterUrl: "https://twitter.com/emaan"
  },
  {
    name: "Mehreen",
    role: "Head Marketing",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mehreen-JfrVeMiBEoWSB9kAqSBzaHRJQBXVON.PNG",
    bio: "Creative marketer with a data-driven approach to growth.",
    color: "from-green-600 to-green-800",
    linkedinUrl: "https://linkedin.com/in/mehreen",
    twitterUrl: "https://twitter.com/mehreen",
    fitTop: true // Adjusted for clear visibility of face
  },
  {
    name: "Anooshy",
    role: "Creative Director",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anooshy-vPx0R93fsuDv5czhBkDfeLFc9n0DfF.jpg",
    bio: "Visionary designer shaping our brand's visual identity.",
    color: "from-yellow-500 to-yellow-700",
    linkedinUrl: "https://linkedin.com/in/anooshy",
    twitterUrl: "https://twitter.com/anooshy",
    fitTop: true // Adjusted for clear visibility of face
  },
  {
    name: "Sana",
    role: "Head Video Content",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sana-6vhl1s5ofPUffov2Tsbu0ZWW1NuzzZ.jpeg",
    bio: "Storyteller extraordinaire, bringing ideas to life through video.",
    color: "from-yellow-600 to-yellow-800",
    linkedinUrl: "https://linkedin.com/in/sana",
    twitterUrl: "https://twitter.com/sana",
    fitTop: true // Adjusted for clear visibility of face
  },
  {
    name: "Aabis",
    role: "Head Web Development",
    imageUrl: "/aabis.jpg",
    bio: "Crafting seamless digital experiences through innovative web solutions.",
    color: "from-purple-500 to-purple-700",
    linkedinUrl: "https://linkedin.com/in/aabis",
    twitterUrl: "https://twitter.com/aabis"
  },
  {
    name: "Tooba",
    role: "Director Global Expansion",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tooba-bKYm1nUwFDsLklC0thdg2TF2alABls.jpg",
    bio: "Spearheading international growth through data-driven strategies.",
    color: "from-pink-500 to-pink-700",
    linkedinUrl: "https://linkedin.com/in/tooba",
    twitterUrl: "https://twitter.com/tooba"
  },
  {
    name: "Khizar",
    role: "Chief Strategy Officer",
    imageUrl: "/khizar.jpg",
    bio: "Building lasting relationships and expanding our client base.",
    color: "from-green-600 to-green-800",
    linkedinUrl: "https://linkedin.com/in/khizar",
    twitterUrl: "https://twitter.com/khizar"
  },
  {
    name: "Fizza",
    role: "Head of Sales",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-27%20at%2013.03.43_b4ccce0b-w6n1z9t3QEbj5Nqa2qSBurnAWbPEmh.jpg",
    bio: "Driving sales performance and client satisfaction to new heights.",
    color: "from-green-700 to-green-900",
    linkedinUrl: "https://linkedin.com/in/fizza",
    twitterUrl: "https://twitter.com/fizza"
  },
]


// Adjust image position based on team member's name
// Adjust image position based on team member's name
const adjustImagePosition = (name) => {
  switch (name) {
    case 'Mehreen':
      return 'object-[center_30%]'; // Move image up slightly
    case 'Anooshy':
      return 'object-[center_26%]'; // Move image up slightly
    case 'Khadija':
      return 'object-[center_35%]'; // Move image up slightly
    case 'Abdul Faheem':
      return 'object-[center_1%]'; // Move image down slightly
    case 'Muhammad Junaid':
      return 'object-[center_28%]';
      case 'Tooba':
      return 'object-[center_56%]'; 
      case 'Sana':
        return 'object-[center_17%]';
        case 'Khizar':
          return 'object-[center_8%]'; // Adjust as needed to move image up
        case 'Aabis':
          return 'object-[center_3%]'; // Adjust as needed to move image up
        case 'Fizza':
          return 'object-[center_40%]'; // Adjust as needed to move image down
        
    default:
      return ''; // No adjustment
  }
}




const TeamMemberCard = ({ member }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={`bg-gradient-to-br ${member.color} rounded-lg overflow-hidden shadow-md transform transition-all duration-300 ease-in-out mb-6`}
    >
      <div className="relative h-48 overflow-hidden">
      <img
  src={member.imageUrl}
  alt={member.name}
  className={`w-full h-full object-cover ${adjustImagePosition(member.name)}`}
/>


        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-red-200 text-sm">{member.role}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white text-sm mb-4">{member.bio}</p>
        <div className="flex space-x-2">
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="secondary" className="bg-blue-500 text-white hover:bg-opacity-80">
              <Linkedin className="h-4 w-4 mr-1" />
              LinkedIn
            </Button>
          </a>
          <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="secondary" className="bg-blue-400 text-white hover:bg-opacity-80">
              <Twitter className="h-4 w-4 mr-1" />
              Twitter
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}


export default function EnhancedTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
