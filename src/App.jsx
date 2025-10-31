import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loading class to body
    document.body.classList.add('loading');

    // Minimum loading time for animation visibility
    const minLoadTime = 2000; // 2 seconds minimum
    
    let loadingComplete = false;
    let timerId = null;

    const finishLoading = () => {
      if (!loadingComplete) {
        loadingComplete = true;
        setIsLoading(false);
        document.body.classList.remove('loading');
      }
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      timerId = setTimeout(finishLoading, minLoadTime);
    } else {
      // Wait for page load, then minimum time
      const handleLoad = () => {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(finishLoading, minLoadTime);
      };
      
      window.addEventListener('load', handleLoad);
      
      // Fallback timeout (max 3 seconds)
      timerId = setTimeout(() => {
        window.removeEventListener('load', handleLoad);
        finishLoading();
      }, 3000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loader"
              className="initial-loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoadingAnimation 
                size="large" 
                text="Initializing Web3 Portfolio..." 
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isLoading && (
          <>
            <div className="noise"></div>
            <div className="lines"></div>
            <Navbar />
            <main className="main-content">
              <Hero />
              <Experience />
              <Achievements />
              <Contact />
              <Footer />
            </main>
          </>
        )}
      </div>
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App; 