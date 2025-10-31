import { BrowserRouter as Router } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
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
      </div>
      <SpeedInsights />
    </Router>
  );
}

export default App; 