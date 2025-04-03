import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { siteConfig } from '../config/siteConfig';

const Header = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <header 
      className="fixed top-0 w-full z-50 px-4 py-2 shadow-md"
      style={{ 
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.secondary}`
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          {/* Logo container with BJK text */}
          <div 
            className="h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: colors.primary,
              color: '#FFFFFF'
            }}
          >
            <span className="font-bold text-lg">{siteConfig.logo.short}</span>
          </div>
          
          {/* Brand name - visible only on desktop */}
          <h1 
            className="hidden md:block text-xl font-semibold"
            style={{ color: colors.text }}
          >
            {siteConfig.logo.full}
          </h1>
        </Link>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ 
              backgroundColor: colors.secondary,
              color: colors.primary 
            }}
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header; 