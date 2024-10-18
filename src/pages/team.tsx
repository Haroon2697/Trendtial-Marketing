import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, useMotionValue, useVelocity, useSpring, useAnimationFrame } from 'framer-motion';

const teamMembers = [
  {
    name: "Abdullah Rafique",
    role: "CTO & Co-Founder",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Visionary technologist with a passion for AI and machine learning.",
  },
  {
    name: "Ahmed Abubakr",
    role: "CEO & Co-Founder",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Strategic leader driving innovation in digital marketing.",
  },
  {
    name: "Zain-ul-Abedein",
    role: "CPO & Co-Founder",
    imageUrl: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Product visionary with a keen eye for user experience and design.",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Marketing",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Creative marketer with a data-driven approach to growth.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Full-stack wizard turning complex problems into elegant solutions.",
  },
  {
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Passionate about creating intuitive and beautiful user experiences.",
  },
];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxText = ({ children, baseVelocity = 100 }: { children: React.ReactNode; baseVelocity?: number }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }
      }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="bg-gradient-to-br from-red-800 to-red-600 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-in-out"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative h-64 overflow-hidden"
      >
        <motion.img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent flex items-end justify-center p-4"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-white text-center"
          >
            {member.bio}
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
        <p className="text-red-200">{member.role}</p>
      </motion.div>
    </motion.div>
  );
};

const TeamPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white py-20 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="container mx-auto px-4"
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-6xl font-bold text-center mb-16"
        >
          Meet Our Extraordinary Team
        </motion.h1>

        <ParallaxText baseVelocity={-5}>Innovate • Create • Inspire</ParallaxText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8">
            We're always looking for talented individuals to join our mission.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

export default TeamPage;