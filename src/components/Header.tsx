import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 to-red-600 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
            <Link to="/team">Team</Link> {/* New Team link */}
          </motion.div>
        </nav>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="hidden md:inline-flex bg-white text-red-600 hover:bg-red-100">
            Get Started
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
