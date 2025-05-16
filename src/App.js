import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeModeProvider, useThemeMode } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import Home from './pages/Home';
import Horoscope from './pages/Horoscope';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const AppContent = () => {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/horoscope" element={<Horoscope />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeModeProvider>
        <AppContent />
      </ThemeModeProvider>
    </ErrorBoundary>
  );
};

export default App;