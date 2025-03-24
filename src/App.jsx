import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
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
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App; 