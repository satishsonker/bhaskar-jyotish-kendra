import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const astrologyThemes = {
  default: {
    primary: '#7B1FA2',
    secondary: '#E1BEE7',
    background: '#FFFFFF',
    text: '#333333',
    accent: '#9C27B0'
  },
  cosmic: {
    primary: '#1A237E',
    secondary: '#C5CAE9',
    background: '#E8EAF6',
    text: '#283593',
    accent: '#3F51B5'
  },
  mystic: {
    primary: '#4A148C',
    secondary: '#D1C4E9',
    background: '#EDE7F6',
    text: '#311B92',
    accent: '#673AB7'
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColorScheme = localStorage.getItem('colorScheme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    if (savedColorScheme && astrologyThemes[savedColorScheme]) {
      setCurrentTheme(savedColorScheme);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  const changeColorScheme = (scheme) => {
    if (astrologyThemes[scheme]) {
      setCurrentTheme(scheme);
      localStorage.setItem('colorScheme', scheme);
    }
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    currentTheme,
    changeColorScheme,
    colors: astrologyThemes[currentTheme],
    availableThemes: Object.keys(astrologyThemes)
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 