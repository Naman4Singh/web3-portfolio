import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const buttonRef = useRef(null);

  const handleToggle = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      document.documentElement.style.setProperty('--toggle-x', `${centerX}px`);
      document.documentElement.style.setProperty('--toggle-y', `${centerY}px`);
    }
    toggleTheme();
  };

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <div className="theme-wave" />
        )}
      </AnimatePresence>
      <motion.button
        ref={buttonRef}
        className="theme-toggle"
        onClick={handleToggle}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{ transform: 'rotate(0deg)' }}
      >
        <div className="toggle-track">
          <motion.div
            className="toggle-thumb"
            animate={{
              x: theme === 'dark' ? 0 : 24,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          >
            <div className="toggle-icon">
              {theme === 'dark' ? (
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    fill="currentColor"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <circle cx="12" cy="12" r="5" fill="currentColor" />
                  <path
                    d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              )}
            </div>
          </motion.div>
        </div>
      </motion.button>
    </>
  );
};

export default ThemeToggle;

