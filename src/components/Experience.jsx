import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Head of Community",
      company: "SomniLife",
      period: "Nov 2020 - Jan 2022",
      highlights: [
        "Built community presence from scratch: 0→ 10K TG & 34K Discord",
        "Organized weekly community events & AMAs",
        "Managed campaigns across Website and Galxe for onboarding"
      ],
      link: "https://docs.somnilife.com"
    },
    {
      title: "Community Manager",
      company: "0xScope AI",
      period: "Feb 2022 - Jun 2023",
      highlights: [
        "Expanded TG from 8K → 32K within first year",
        "Structured and led Zealy tasks & OG role campaigns to reward early adopters",
        "Increased Discord engagement by 95% through quizzes and chat-mining"
      ],
      link: "https://x.com/ScopeProtocol"
    },
    {
      title: "Community Moderator",
      company: "FameEx Exchange",
      period: "Jun 2023 - Dec 2024",
      highlights: [
        "Expanded TG community from 25K → 44K members",
        "Scaled Discord from 2K → 13K with regional sub-communities",
        "Increased user activity by 70%+",
        "Kept the groups active 24/7 via sharing crypto news and updates"
      ],
      link: "https://www.fameex.net"
  },
  {
    title: "Community Manager",
    company: "KuCoin Exchange",
    period: "Jan 2025 - Present",
    highlights: [
      "Hosting events every week: Chat, Quiz, KuCoin Earn While you Learn etc",
      "Grew 2nd group to 100K TG (max capped) and 114K Discord members",
      "Increased engagement by 63% with quizzes and events regularly",
      "Boosted engagement by 120%+ through campaigns",
      "Built and managed a 24/7 global moderator team on Discord"
    ],
    link: "https://www.kucoin.com"
  }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-header">
        <h2>Professional Experience</h2>
        <p>Building communities and driving growth for leading Web3 projects</p>
      </div>
      <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="card-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <ul className="highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="card-footer">
                <a 
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
      </div>
      <div className="experience-more">
        <div className="more-divider"></div>
        <div className="more-content">
          <div className="more-icon">+</div>
          <p className="more-text">Many more</p>
          <div className="more-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="more-divider"></div>
      </div>
    </section>
  );
};

export default Experience; 