import React from 'react';
import { Sun, Moon, ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  isMenuOpen,
  setIsMenuOpen
}) => {
  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img 
              src="/api/placeholder/150/50" 
              alt="Fermentos Vida Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-green-200 transition">INICIO</a>
            <a href="#" className="hover:text-green-200 transition">PRODUCTOS</a>
            <a href="#" className="hover:text-green-200 transition">SOBRE NOSOTROS</a>
            <a href="#" className="hover:text-green-200 transition">CONTACTO</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-green-700 transition"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="p-2 rounded-full hover:bg-green-700 transition">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-green-700 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 hover:bg-green-700 rounded-md">INICIO</a>
            <a href="#" className="block px-3 py-2 hover:bg-green-700 rounded-md">PRODUCTOS</a>
            <a href="#" className="block px-3 py-2 hover:bg-green-700 rounded-md">SOBRE NOSOTROS</a>
            <a href="#" className="block px-3 py-2 hover:bg-green-700 rounded-md">CONTACTO</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;