import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faDiscord, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ffff"
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        polygon: {
          sides: 6
        }
      },
      opacity: {
        value: 0.6,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true,
    background: {
      color: "transparent"
    }
  };

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
      <div className="hero-background">
        <div className="cyber-lines"></div>
      </div>

      <motion.div 
        className="container hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div 
            className="hero-header"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="cyber-box">
              <div className="glitch-text">COMMUNITY ARCHITECT</div>
            </div>
            
            <h1 className="hero-title">
              <span className="text-outline">NAMAN</span>
              <span className="text-fill">WEB3 NATIVE</span>
            </h1>
          </motion.div>

          <motion.div 
            className="hero-metrics"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="metric">
              <div className="metric-value">100K+</div>
              <div className="metric-label">Community Members</div>
            </div>
            <div className="metric">
              <div className="metric-value">25+</div>
              <div className="metric-label">Partnerships</div>
            </div>
            <div className="metric">
              <div className="metric-value">15+</div>
              <div className="metric-label">Projects</div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-actions"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#contact" className="cyber-button">
              <span className="cyber-button-text">Connect →</span>
              <span className="cyber-button-glitch"></span>
            </a>
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
      </motion.div>

      <div className="scroll-indicator">
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="cyber-arrow">↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 