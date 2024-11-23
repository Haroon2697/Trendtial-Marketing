import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';  // Import menu and close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // State to toggle mobile menu

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 to-red-600 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-white">
            <span className="text-white">tr</span>
            <span className="text-red-300">e</span>
            <span className="text-white">ndtial</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-red-300 transition-colors"
          >
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-red-300 transition-colors"
          >
            <Link to="/about">About Us</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-red-300 transition-colors"
          >
            <Link to="/team">Team</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-red-300 transition-colors"
          >
            <Link to="/work">Our Work</Link>
          </motion.div>
        </nav>

        {/* Desktop "Get Started" Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="hidden md:inline-flex bg-white text-red-600 hover:bg-red-100">
            Get Started
          </Button>
        </motion.div>

        

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />} {/* Show X to close, Menu to open */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-red-900 p-4 absolute inset-x-0 top-full flex flex-col space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="text-white text-lg hover:text-red-300"
            onClick={() => setMenuOpen(false)}  // Close menu when clicked
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:text-red-300"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/team"
            className="text-white text-lg hover:text-red-300"
            onClick={() => setMenuOpen(false)}
          >
            Team
          </Link>
          <Button className="bg-white text-red-600 hover:bg-red-100">
            Get Started
          </Button>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
