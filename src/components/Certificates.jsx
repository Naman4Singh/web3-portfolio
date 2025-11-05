import { motion } from 'framer-motion';
import './Certificates.css';

// Import certificate images
import cert1 from '../assets/certificates/How to use ChatGPT for Content Creation.jpg';
import cert2 from '../assets/certificates/Managing Your Time.jpg';
import cert3 from '../assets/certificates/Mircrosoft Copilot_The Art of Prompt Writing.jpg';

const Certificates = () => {
  const certificates = [
    {
      id: 'Certificate ID: a592533f54f502c4b3478d5b613b12879ca9b2235837bd483ae7d77016dc6fca', // Certificate ID
      title: 'How to use ChatGPT for Content Creation',
      image: cert1,
      credentialLink: 'https://www.linkedin.com/learning/certificates/a592533f54f502c4b3478d5b613b12879ca9b2235837bd483ae7d77016dc6fca?trk=share_certificate' // Update with your credential link
    },
    {
      id: 'Certificate ID: 2531faba95b10479f0e1a2003ff3b8db1eff8f6390127538c62d80e0a50fd1ce', // Certificate ID
      title: 'Managing Your Time',
      image: cert2,
      credentialLink: 'https://www.linkedin.com/learning/certificates/2531faba95b10479f0e1a2003ff3b8db1eff8f6390127538c62d80e0a50fd1ce?trk=share_certificate' // Update with your credential link
    },
    {
      id: 'Certificate ID: 2df4f2e2d3bbbcee1430589c6fb74954272df458ca8552d03f43c9ed7a463873', // Certificate ID
      title: 'Microsoft Copilot: The Art of Prompt Writing',
      image: cert3,
      credentialLink: 'https://www.linkedin.com/learning/certificates/2df4f2e2d3bbbcee1430589c6fb74954272df458ca8552d03f43c9ed7a463873?trk=share_certificate' // Update with your credential link
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-header">
        <h2>Certificates</h2>
        <p>Professional certifications and learning achievements</p>
      </div>
      
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="certificate-frame">
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certificate-image"
                />
              </div>
              <div className="certificate-info">
                <div className="certificate-id">
                  <span className="certificate-name">{cert.title}</span>
                  <span className="id-value">{cert.id}</span>
                </div>
                <a 
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  View Credential
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
