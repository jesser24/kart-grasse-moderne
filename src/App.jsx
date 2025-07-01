import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import des composants
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import InteractiveMap from './components/InteractiveMap';
import StatsCounter from './components/StatsCounter';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Histoire from './components/Histoire';
import FAQ from './components/FAQ';
import Reservation from './components/Reservation';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';
import LiveChat from './components/LiveChat';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router basename="/kart-grasse-moderne">
      <div className="App min-h-screen bg-background text-foreground">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Hero />
                <Services />
                <InteractiveMap />
                <About />
                <StatsCounter />
                <Testimonials />
                <Contact />
                <Footer />
                <ScrollToTop />
              </motion.div>
            } />
            <Route path="/histoire" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Histoire />
                <Footer />
                <ScrollToTop />
              </motion.div>
            } />
            <Route path="/faq" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <FAQ />
                <Footer />
                <ScrollToTop />
              </motion.div>
            } />
            <Route path="/reservation" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Reservation />
                <Footer />
                <ScrollToTop />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        
        {/* Composants globaux */}
        <ChatBot />
        <LiveChat />
      </div>
    </Router>
  );
}

export default App;

