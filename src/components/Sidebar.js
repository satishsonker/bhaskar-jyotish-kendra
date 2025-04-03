import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  HomeIcon,
  UserIcon,
  CalendarIcon,
  StarIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', icon: HomeIcon, path: '/' },
  { name: 'Horoscope', icon: StarIcon, path: '/horoscope' },
  { name: 'Zodiac', icon: SunIcon, path: '/zodiac' },
  { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
  { name: 'Profile', icon: UserIcon, path: '/profile' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme();
  const location = useLocation();

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' }
  };

  const NavItem = ({ item }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={item.path}
        className="flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors"
        style={{
          backgroundColor: location.pathname === item.path ? colors.secondary : 'transparent',
          color: location.pathname === item.path ? colors.primary : colors.text
        }}
        onClick={() => setIsOpen(false)}
      >
        <item.icon className="h-6 w-6" />
        <span className="font-medium">{item.name}</span>
      </Link>
    </motion.div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        style={{ backgroundColor: colors.secondary }}
      >
        <Bars3Icon className="h-6 w-6" style={{ color: colors.primary }} />
      </button>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.nav
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="fixed top-0 left-0 h-full w-64 md:w-72 z-50 md:translate-x-0 transition-transform duration-300 ease-in-out"
        style={{ 
          backgroundColor: colors.background,
          borderRight: `1px solid ${colors.secondary}`
        }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold" style={{ color: colors.primary }}>
              Navigation
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-2 rounded-lg"
              style={{ backgroundColor: colors.secondary }}
            >
              <XMarkIcon className="h-6 w-6" style={{ color: colors.primary }} />
            </button>
          </div>

          <div className="space-y-2">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Sidebar; 