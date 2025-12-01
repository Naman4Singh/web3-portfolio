import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
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
    },
    {
      platform: "Resume",
      username: "View Resume",
      icon: "fas fa-file-pdf",
      link: "https://drive.google.com/file/d/1whsHO2fKIaVCR1WZaFb-AWYvJ0LaExgG/view?usp=sharing"
    },
    {
      platform: "Email",
      username: "namanrajpoot.0786@gmail.com",
      icon: "fas fa-envelope",
      link: "mailto:namanrajpoot.0786@gmail.com"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
          <motion.div
            className="contact-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Connect With Me</h3>
            <p>Whether you're looking for a community manager, want to discuss partnerships, or just have a question, I'd love to hear from you.</p>
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
    </section>
  );
};

export default Contact;