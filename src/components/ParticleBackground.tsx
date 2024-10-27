import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(150)].map((_, i) => ( // Increase particle count to 150
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: Math.random(),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * windowSize.width, // Add x-axis movement for a more dynamic effect
            y: Math.random() * windowSize.height,
            opacity: Math.random(),
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 10 + 5, // Faster transitions
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;

