import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';
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

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
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

        <div className="navbar-actions">
          <a href="mailto:hire@naman4singh.com" className="contact-button">
            hire@naman4singh.com
          </a>
          <ThemeToggle />
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
          <li><a href="#achievements" className="nav-link" onClick={(e) => handleNavClick(e, '#achievements')}>Achievements</a></li>
          <li><a href="#honours" className="nav-link" onClick={(e) => handleNavClick(e, '#honours')}>Honours</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;