import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: "Abdullah Rafique",
    role: "CTO & Co-Founder",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Ahmed Abubakr",
    role: "CEO & Co-Founder",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Zain-ul-Abedein",
    role: "CPO & Co-Founder",
    imageUrl: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const FounderCard = ({ founder, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-lg shadow-lg group"
    >
      <motion.img
        src={founder.imageUrl}
        alt={founder.name}
        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent flex flex-col justify-end p-6"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold text-white mb-2"
        >
          {founder.name}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-lg text-red-200 bg-red-800/60 px-3 py-1 rounded-full inline-block"
        >
          {founder.role}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function Founders() {
  return (
    <div className="w-full bg-gradient-to-b from-red-900 to-red-600 px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold mb-12 text-center text-white"
      >
        Our Visionary Founders
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {founders.map((founder, index) => (
          <FounderCard key={founder.name} founder={founder} index={index} />
        ))}
      </div>
    </div>
  );
}