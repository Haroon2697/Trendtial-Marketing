import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-600 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left p-8"
          >
            <h2 className="text-6xl md:text-5xl font-bold mb-6">Join Our Trendtial Marketing Team!</h2>
            <p className="mb-6 text-lg">
              At Trendtial, we are committed to redefining marketing through innovation and creativity. Join us to help businesses reach new heights with our cutting-edge solutions!
            </p>
        
            <div className="space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold transition duration-300 shadow-lg hover:bg-red-100"
              >
                Join Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-red-600"
              >
                Connect
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative flex items-center justify-center shadow-lg">
          <img
            src="frame1.png"
            alt="Marketing Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/60" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;