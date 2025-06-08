import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Portfolyo
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              Anasayfa
            </Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              Hakkımda
            </Link>
            <Link to="/projects" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              Projeler
            </Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              İletişim
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              onClick={toggleMenu} 
              className="ml-2 text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobil menü */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              onClick={toggleMenu}
            >
              Anasayfa
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              onClick={toggleMenu}
            >
              Hakkımda
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              onClick={toggleMenu}
            >
              Projeler
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              onClick={toggleMenu}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 