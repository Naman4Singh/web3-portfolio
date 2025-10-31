import React from 'react';
import { motion } from 'framer-motion';
import './LoadingAnimation.css';

const LoadingAnimation = ({ size = 'medium', text = 'Loading...' }) => {
  return (
    <div className={`loading-container loading-${size}`}>
      <div className="loop-loader">
        <svg 
          className="loop-svg"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="loop-track"
            cx="50"
            cy="50"
            r="40"
            stroke="var(--border)"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            className="loop-progress"
            cx="50"
            cy="50"
            r="40"
            stroke="var(--accent-1)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              filter: 'drop-shadow(0 0 8px var(--accent-1))'
            }}
          />
          <motion.g
            className="loop-dot-container"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: "50px 50px"
            }}
          >
            <circle
              className="loop-dot"
              cx="50"
              cy="10"
              r="5"
              fill="var(--accent-1)"
              style={{
                filter: 'drop-shadow(0 0 8px var(--accent-1))'
              }}
            />
          </motion.g>
        </svg>
      </div>
      
      {text && (
        <motion.p
          className="loading-text"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingAnimation;

