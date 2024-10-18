import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const menuItems = ['Home', 'Services', 'About', 'Team', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          tr<span className="text-red-600">e</span>ndtial
        </Link>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} // Redirect Home to "/"
              className="text-gray-300 hover:text-red-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Get Started Button for larger screens */}
        <div className="hidden md:flex">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </div>

        {/* Mobile Menu (for now, just a placeholder icon) */}
        <button className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
