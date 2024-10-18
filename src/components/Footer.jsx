import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and tagline */}
        <div>
          <motion.img
            src="https://example.com/trendtial-logo.png" // Replace with Trendtial logo URL
            alt="Trendtial Logo"
            className="h-10 w-auto mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          />
          <p className="text-sm">Innovating Marketing Solutions.</p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Marketing Services', 'Careers', 'Contact Us'].map((item) => (
              <li key={item}>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Reach Us Out</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">For General Queries</p>
              <a href="mailto:info@trendtial.com" className="text-gray-400 hover:text-white transition-colors">info@trendtial.com</a>
            </li>
            <li>
              <p className="font-semibold">For Marketing Related Queries</p>
              <a href="mailto:marketing@trendtial.com" className="text-gray-400 hover:text-white transition-colors">marketing@trendtial.com</a>
            </li>
            <li>
              <p className="font-semibold">For Support</p>
              <a href="mailto:support@trendtial.com" className="text-gray-400 hover:text-white transition-colors">support@trendtial.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
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
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2024 Trendtial - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
