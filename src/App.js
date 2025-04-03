import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import Horoscope from './pages/Horoscope';
import Zodiac from './pages/Zodiac';

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <SEO /> {/* Default SEO tags */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <Sidebar />
            
            {/* Main Content Area */}
            <main className="flex-grow pt-16 md:pl-72">
              <div className="max-w-7xl mx-auto p-4">
                <div className="min-h-[calc(100vh-16rem)]">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/horoscope" element={<Horoscope />} />
                    <Route path="/zodiac" element={<Zodiac />} />
                    {/* Add more routes as needed */}
                  </Routes>
                </div>
              </div>
              <Footer />
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
