import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import profilePic from '../assets/icons/myphoto.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="logo"
        >
          <div className="logo-box">
            <img src={profilePic} alt="Naman" className="profile-pic" />
          </div>
          <span className="logo-text">Naman4Singh</span>
        </motion.div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#experience" className="nav-link" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#achievements" className="nav-link" onClick={toggleMenu}>Achievements</a></li>
          <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;