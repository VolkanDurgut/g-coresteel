import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, Zap, Settings } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItemKeys = ['home', 'about', 'services', 'projects', 'innovation', 'contact'];

  return (
    <motion.header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-accent-200/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <Settings className={`w-10 h-10 ${isScrolled ? 'text-primary-600' : 'text-white'} animate-rotate-slow`} />
              <Zap className={`absolute inset-0 w-6 h-6 m-auto ${isScrolled ? 'text-secondary-600' : 'text-secondary-400'}`} />
            </div>
            <div>
              <h1 className={`text-2xl font-poppins font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                G-CORESTEEL
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-primary-500' : 'text-white/80'} font-inter`}>
                {t('header.tagline')}
              </p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {navigationItemKeys.map((key, index) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  className={`font-inter font-medium transition-colors relative group ${
                    isScrolled ? 'text-primary-700 hover:text-secondary-600' : 'text-white hover:text-secondary-400'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {t(`header.nav.${key}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            <LanguageSwitcher />

            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300 animate-pulse-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.get_quote_button')}
            </motion.a>
          </div>
          
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="bg-white rounded-lg shadow-xl border border-accent-200 p-4">
                {navigationItemKeys.map((key, index) => (
                  <motion.a
                    key={key}
                    href={`#${key}`}
                    className="block py-3 text-primary-700 hover:text-secondary-600 font-inter font-medium border-b border-accent-100 last:border-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`header.nav.${key}`)}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-accent-100 flex justify-center">
                  <LanguageSwitcher />
                </div>
                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-3 rounded-lg font-inter font-semibold block text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {t('header.get_quote_button')}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
