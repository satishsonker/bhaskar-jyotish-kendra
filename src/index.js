import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498DB', // Blue
      light: '#5DADE2',
      dark: '#2874A6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F1C40F', // Yellow
      light: '#F4D03F',
      dark: '#D4AC0D',
      contrastText: '#2C3E50',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FAFC',
    },
    text: {
      primary: '#2C3E50', // Dark blue-gray
      secondary: '#34495E',
    },
    info: {
      main: '#E8F6FF', // Light blue
      dark: '#2C3E50', // Dark blue-gray
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#2C3E50',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      color: '#2C3E50',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 500,
      color: '#2C3E50',
    },
    h4: {
      fontWeight: 500,
      color: '#34495E',
    },
    subtitle1: {
      fontSize: '1.1rem',
      color: '#34495E',
    },
    body1: {
      color: '#34495E',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1rem',
          padding: '8px 24px',
          '&:hover': {
            transform: 'translateY(-2px)',
            transition: 'transform 0.2s',
          },
        },
        contained: {
          boxShadow: '0 2px 4px rgba(52, 152, 219, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(52, 152, 219, 0.2)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(44, 62, 80, 0.1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            transition: 'transform 0.3s',
            boxShadow: '0 6px 12px rgba(44, 62, 80, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2C3E50',
          boxShadow: '0 2px 4px rgba(44, 62, 80, 0.1)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F8FAFC',
          borderRight: 'none',
          boxShadow: '2px 0 4px rgba(44, 62, 80, 0.1)',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(44, 62, 80, 0.1)',
    '0 4px 6px rgba(44, 62, 80, 0.1)',
    '0 6px 8px rgba(44, 62, 80, 0.1)',
    '0 8px 12px rgba(44, 62, 80, 0.1)',
    // ... add more shadows as needed
  ],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
); 