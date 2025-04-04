import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ErrorBoundary>
      <CustomThemeProvider>
        <LanguageProvider>
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Box>
        </LanguageProvider>
      </CustomThemeProvider>
    </ErrorBoundary>
  );
}

export default App; 