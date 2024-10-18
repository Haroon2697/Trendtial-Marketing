import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Brand Name and Tagline */}
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

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Marketing Services', 'Careers', 'Contact Us'].map((item) => (
              <li key={item}>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">Reach Us Out</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">For General Queries</p>
              <a href="mailto:info@trendtial.com" className="text-gray-400 hover:text-red-600 transition-colors">info@trendtial.com</a>
            </li>
            <li>
              <p className="font-semibold">For Marketing Related Queries</p>
              <a href="mailto:marketing@trendtial.com" className="text-gray-400 hover:text-red-600 transition-colors">marketing@trendtial.com</a>
            </li>
            <li>
              <p className="font-semibold">For Support</p>
              <a href="mailto:support@trendtial.com" className="text-gray-400 hover:text-red-600 transition-colors">support@trendtial.com</a>
            </li>
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4">Follow Us on Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Gradient Bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Footer Bottom */}
      <motion.div
        className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        © {new Date().getFullYear()} Trendtial. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
