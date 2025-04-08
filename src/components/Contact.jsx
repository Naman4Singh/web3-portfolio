import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setArrowPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    {
      platform: "Discord",
      username: "naman4singh",
      icon: "fab fa-discord",
      link: "https://discordapp.com/users/840946392667389984"
    },
    {
      platform: "Telegram",
      username: "@naman4singh",
      icon: "fab fa-telegram",
      link: "https://telegram.me/naman4singh"
    },
    {
      platform: "Twitter",
      username: "@Naman4Singh",
      icon: "fab fa-twitter",
      link: "https://x.com/Naman4Singh"
    },
    {
      platform: "LinkedIn",
      username: "Naman Rajpoot",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/naman-rajpoot/"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="cyber-box">
            <span className="glitch-text">CONNECT</span>
          </div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Let's Build Something Amazing Together</h2>
            <p>Looking for a community manager or want to discuss partnerships? I'm always open to new opportunities and collaborations.</p>
          </motion.div>

          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <i className={social.icon}></i>
                <div className="social-info">
                  <span className="platform">{social.platform}</span>
                  <span className="username">{social.username}</span>
                </div>
                <div className="connect-arrow">→</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="cursor-arrow" style={{ left: arrowPosition.x, top: arrowPosition.y }} />
    </section>
  );
};

export default Contact;