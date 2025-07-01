import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Car } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Histoire', path: '/histoire' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Réservation', path: '/reservation' }
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer d'abord vers l'accueil
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-2 bg-primary rounded-lg">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient font-['Dancing_Script']">
                  Kart Touristique
                </h1>
                <p className="text-xs text-muted-foreground">Grasse</p>
              </div>
            </motion.div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
            
            {/* Liens vers sections (seulement sur la page d'accueil) */}
            {location.pathname === '/' && (
              <>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden sm:flex"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button
              asChild
              className="hidden sm:flex"
              size="sm"
            >
              <Link to="/reservation">
                Réserver maintenant
              </Link>
            </Button>

            {/* Menu Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 p-4 glass-effect rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.path 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {location.pathname === '/' && (
                  <>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      Contact
                    </button>
                  </>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleDarkMode}
                    className="flex items-center space-x-2"
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    <span>{darkMode ? 'Mode clair' : 'Mode sombre'}</span>
                  </Button>
                </div>
                
                <Button
                  asChild
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/reservation">
                    Réserver maintenant
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

