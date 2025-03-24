import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Head of Community",
      company: "SomniLife",
      period: "Jan 2022 - May 2023",
      highlights: [
        "Grew community from 0K to 30K+ members on DC and TG",
        "Implemented innovative engagement strategies",
        "Added bots to fight with Spammers"
      ],
      link: "https://docs.somnilife.com"
    },
    {
      title: "Community Manager",
      company: "KuCoin Exchange",
      period: "Jan 2022 - Oct 2023",
      highlights: [
        "Head of the official Discord server",
        "Increased user interaction volume by 200%",
        "Organized events and games for the community"
      ],
      link: "https://www.kucoin.com"
    },
    {
      title: "Community Manager",
      company: "KuCoin Wealth",
      period: "Dec 2022 - Oct 2023",
      highlights: [
        "Managed 24/7 community support with help of bots and team mates",
        "Created comprehensive docs and guides",
        "Trained and led team of moderators"
      ],
      link: "https://kucoinwealth.medium.com"
    },
    {
      title: "Community Moderator",
      company: "Bitcoin Cats",
      period: "Jan 2023 - Nov 2023",
      highlights: [
        "Developed ecosystem growth strategy",
        "Helped members to get their NFTs",
        "Successfully launched games and events"
      ],
      link: "https://www.bitcoincats.world"
    },
    {
      title: "Community Manager",
      company: "Halo SocialFi",
      period: "Sep 2022 - Present",
      highlights: [
        "Working from start to end of the project",
        "Facilitated 50+ successful proposals",
        "Built trust with the community"
      ],
      link: "https://halo.social"
    },
    {
      title: "Discord Manager",
      company: "FameEx Exchange",
      period: "Nov 2023 - Present",
      highlights: [
        "Led global marketing campaigns",
        "Achieved event success",
        "Developed discord server"
      ],
      link: "https://www.fameex.net"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="cyber-box">
            <span className="glitch-text">EXPERIENCE</span>
          </div>
        </motion.div>

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
                  className="cyber-button-small"
                >
                  View Details
                  <span className="button-glitch"></span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="more-text"
        >
          <span className="glitch-text">MANY MORE</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 