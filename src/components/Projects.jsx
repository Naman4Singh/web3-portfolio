import { motion } from 'framer-motion';
import './Projects.css';

// Import project images
import dtecImg from '../assets/projects/dtec.png';
import haloImg from '../assets/projects/halo.png';
import helloPetsImg from '../assets/projects/hellopets.png';
import scopeImg from '../assets/projects/0xscope.png';
import bitcoinCatsImg from '../assets/projects/bitcoincats.png';
import fameexImg from '../assets/projects/fameex.png';
import kucoinImg from '../assets/projects/kucoin.png';
import somniLifeImg from '../assets/projects/somnilife.png';
import windvaneImg from '../assets/projects/windvane.png';

const Projects = () => {
  const projects = [
    {
      title: "0xScope Protocol",
      category: "Analytics Platform",
      image: scopeImg,
      stats: {
        chains: "12+",
        Labels: "298 Million+",
        users: "976K+"
      },
      description: "0xScope's AI-powered solutions provide a holistic way for clients to get timely and accurate information on every facet of Web3, and more.",
      tags: ["Analytics", "Blockchain", "Dashboard"],
      link: "https://www.0xscope.com"
    },
    {
      title: "KuCoin",
      category: "Exchange",
      image: kucoinImg,
      stats: {
        investors: "39M+",
        users: "37M+",
        pairs: "900+"
      },
      description: "Leading cryptocurrency exchange platform with advanced trading features and global reach.",
      tags: ["Exchange", "Trading", "Crypto"],
      link: "https://www.kucoin.com"
    },
    {
      title: "WindVane",
      category: "NFT Marketplace",
      image: windvaneImg,
      stats: {
        collections: "Shut Down",
        volume: "Shut Down",
        artists: "Shut Down"
      },
      description: "NFT marketplace enabling creators and collectors to trade digital assets seamlessly.",
      tags: ["NFT", "Marketplace", "Digital Art"],
      link: "https://www.kucoin.com/blog/windvane-kucoin-s-nft-marketplace-launched-nft-launchpad-with-zzoopers-as-its-debut-project"
    },
    {
      title: "DTEC Protocol",
      category: "DeFi",
      image: dtecImg,
      stats: {
        tvl: "$50M+",
        yield: "15% APY",
        tokens: "10+"
      },
      description: "This is a software component that can be installed on the operating system of any type of vehicle or smart platform.",
      tags: ["DeFi", "Yield", "Protocol"],
      link: "https://dtec.space"
    },
    {
      title: "Halo.social",
      category: "SocialFi Wallet",
      image: haloImg,
      stats: {
        users: "100K+",
        chains: "10+",
        token: "$HLO"
      },
      description: "Web3 Omni Social Monetization Platform Powered by AI",
      tags: ["Wallet", "SocialFi", "AI"],
      link: "https://halo.social"
    },
    {
      title: "Hello Pets",
      category: "Metaverse",
      image: helloPetsImg,
      stats: {
        users: "shut down",
        interactions: "shut down",
        pets: "shut down"
      },
      description: "Social platform for Metaverse lovers with NFT integration and reward mechanisms.",
      tags: ["Social", "Metaverse", "NFT"],
      link: "https://www.hellopets.world/"
    },
    {
      title: "Bitcoin Cats",
      category: "NFT Collection",
      image: bitcoinCatsImg,
      stats: {
        items: "10K",
        holders: "5K+",
        floor: "0.006 BTC"
      },
      description: "Unique NFT collection combining Bitcoin culture with digital art.",
      tags: ["NFT", "Art", "Collection"],
      link: "https://www.bitcoincats.world"
    },
    {
      title: "FameEX",
      category: "Trading Platform",
      image: fameexImg,
      stats: {
        volume: "Not known",
        traders: "Not known",
        pairs: "110+"
      },
      description: "Advanced trading platform with innovative features and global market access.",
      tags: ["Trading", "Exchange", "Crypto"],
      link: "https://www.fameex.net"
    },
    {
      title: "SomniLife",
      category: "Metaverse",
      image: somniLifeImg,
      stats: {
        users: "Shut down",
        sessions: "Shut down",
        rating: "Shut down"
      },
      description: "Blockchain-integrated Metaverse platform.",
      tags: ["Metaverse", "Blockchain", "Rewards"],
      link: "https://docs.somnilife.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="cyber-box">
            <span className="glitch-text">PROJECTS</span>
          </div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="project-image">
                <div className="category-badge">{project.category}</div>
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-stats">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i} className="project-stat">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{key}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button-small"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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

export default Projects; 