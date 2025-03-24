import { motion } from 'framer-motion';
import './Footer.css';
import profilePic from '../assets/icons/myphoto.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="logo-box">
              <img src={profilePic} alt="Naman" className="profile-pic" />
            </div>
            <span className="logo-text">Naman4Singh</span>
            <p>Building Web3 Communities</p>
            <a 
              href="mailto:namanrajpoot.0786@gmail.com" 
              className="footer-email"
            >
              namanrajpoot.0786@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Social</h4>
              <ul>
                <li><a href="https://x.com/Naman4Singh" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://discordapp.com/users/840946392667389984" target="_blank" rel="noopener noreferrer">Discord</a></li>
                <li><a href="https://telegram.me/naman4singh" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href="https://www.linkedin.com/in/naman-rajpoot/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="copyright">
            © {new Date().getFullYear()} Naman. All rights reserved.
          </div>
          <div className="footer-tag">
            Made with <span className="heart">♥</span> for Web3
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 