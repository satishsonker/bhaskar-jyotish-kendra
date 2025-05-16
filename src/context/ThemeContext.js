import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};

export const ThemeModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? savedMode === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#3498DB',
        light: '#5DADE2',
        dark: '#2874A6',
        contrastText: '#fff'
      },
      secondary: {
        main: '#F1C40F',
        light: '#F4D03F',
        dark: '#D4AC0D',
        contrastText: '#000'
      },
      background: {
        default: isDarkMode ? '#1a1a1a' : '#F8FAFC',
        paper: isDarkMode ? '#2d2d2d' : '#FFFFFF'
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#2C3E50',
        secondary: isDarkMode ? '#B3B3B3' : '#34495E'
      }
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 600,
        fontSize: '2.5rem',
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        '@media (max-width:600px)': {
          fontSize: '1.25rem',
        },
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
        '@media (max-width:600px)': {
          fontSize: '1.1rem',
        },
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.1rem',
        '@media (max-width:600px)': {
          fontSize: '1rem',
        },
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#2d2d2d' : '#FFFFFF',
            color: isDarkMode ? '#FFFFFF' : '#2C3E50',
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: [
      'none',
      '0 2px 4px rgba(0,0,0,0.05)',
      '0 4px 8px rgba(0,0,0,0.05)',
      '0 8px 16px rgba(0,0,0,0.05)',
      '0 16px 24px rgba(0,0,0,0.05)',
      '0 24px 32px rgba(0,0,0,0.05)',
      ...Array(19).fill('none'),
    ],
  });

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};