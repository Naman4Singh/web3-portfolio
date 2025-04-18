import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      category: "Community Growth",
      stats: [
        { value: "100K+", label: "Total Members" },
        { value: "200%", label: "Growth Rate" },
        { value: "65%", label: "Retention Rate" }
      ],
      highlights: "Led multiple communities from launch to maturity across DeFi, Metaverse and NFT projects"
    },
    {
      category: "Partnerships",
      stats: [
        { value: "25+", label: "Strategic Partners" },
        { value: "$1M+", label: "Value Generated" },
        { value: "25+", label: "Joint Campaigns" }
      ],
      highlights: "Established key partnerships with major Web3 protocols and platforms"
    },
    {
      category: "Events & Engagement",
      stats: [
        { value: "70+", label: "Events Organized" },
        { value: "4K+", label: "Active Participants" },
        { value: "75%", label: "Satisfaction Rate" }
      ],
      highlights: "Hosted successful AMAs, Twitter Spaces, and community events"
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="cyber-box">
            <span className="glitch-text">ACHIEVEMENTS</span>
          </div>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="achievement-header">
                <div className="cyber-badge">{achievement.category}</div>
              </div>
              
              <div className="stats-grid">
                {achievement.stats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <motion.div
                      className="stat-value"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (i * 0.1) }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="achievement-footer">
                <p>{achievement.highlights}</p>
                <div className="cyber-line"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="achievements-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>Recognition & Honors</h3>
            <ul className="honors-list">
              <li>Community Manager of the Month - KuCoin</li>
              <li>Best Moderator - 0xScope</li>
              <li>Best Discord Manager - FameEx </li>
              <li>Best Spam/Scam Fighter</li>
              <li>Hackathon Host - Diamante</li>
            </ul>
          </div>
        </motion.div>

        {/* New train-like achievements section */}
        <motion.div 
          className="achievements-train"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="train-container">
            {/* Duplicate train items for seamless scrolling */}
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="train-item">
                  <div className="stat-value">100K+</div>
                  <div className="stat-label">Total Members</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">200%</div>
                  <div className="stat-label">Growth Rate</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">65%</div>
                  <div className="stat-label">Retention Rate</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">25+</div>
                  <div className="stat-label">Strategic Partners</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">$1M+</div>
                  <div className="stat-label">Value Generated</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">25+</div>
                  <div className="stat-label">Joint Campaigns</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">70+</div>
                  <div className="stat-label">Events Organized</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">4K+</div>
                  <div className="stat-label">Active Participants</div>
                </div>
                <div className="train-item">
                  <div className="stat-value">75%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;