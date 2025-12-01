import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faDiscord, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faHandshake, faRocket } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    {
      platform: "Telegram",
      icon: faTelegram,
      link: "https://telegram.me/naman4singh"
    },
    {
      platform: "Discord",
      icon: faDiscord,
      link: "https://discordapp.com/users/840946392667389984"
    },
    {
      platform: "Twitter",
      icon: faTwitter,
      link: "https://x.com/Naman4Singh"
    },
    {
      platform: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/naman-rajpoot/"
    }
  ];

  return (
    <section className="hero">
      <div className="hero-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">WEB3 COMMUNITY & CUSTOMER SUPPORT SPECIALIST</div>
          <h1 className="hero-title">
            Naman Rajpoot
            <span className="role">Crypto Community Architect</span>
          </h1>
          <p className="hero-description">
          I work at the frontlines of Web3 communities, helping users every day through dedicated customer support while keeping engagement active across platforms. I build and scale blockchain communities from the ground up, support users with clear guidance, and create a safe and positive environment where members can grow with the project. My focus is on turning users into loyal supporters by combining strong community management with reliable, real-time support.
          </p>
          <div className="hero-actions">
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 10L9 7L5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <a 
              href="#experience" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#experience');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              View Experience
            </a>
          </div>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className="social-link"
                title={social.platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hero-right">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-metrics">
            <div className="metric">
              <div className="metric-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="metric-value">
                <span>100K+</span>
                <span className="crypto-dot"></span>
              </div>
              <div className="metric-label">Community Members</div>
            </div>
            <div className="metric">
              <div className="metric-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <div className="metric-value">
                <span>25+</span>
                <span className="crypto-dot"></span>
              </div>
              <div className="metric-label">Partnerships</div>
            </div>
            <div className="metric">
              <div className="metric-icon">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <div className="metric-value">
                <span>15+</span>
                <span className="crypto-dot"></span>
              </div>
              <div className="metric-label">Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 