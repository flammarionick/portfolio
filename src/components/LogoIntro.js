// src/components/LogoIntro.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/LogoIntro.css';

function LogoIntro() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    // Play sound on first interaction or after a short delay
    const playSound = () => {
      if (!hasPlayed.current) {
        hasPlayed.current = true;
        const audio = new Audio('/netflix-sound.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {});
      }
    };

    // Try to play immediately
    playSound();

    // Also try on any user interaction
    const handleInteraction = () => playSound();
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    // Navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate('/select');
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [navigate]);

  return (
    <motion.div
      className="logo-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.img
        src="/favicon.png"
        alt="NICK Logo"
        className="nick-logo"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      />
    </motion.div>
  );
}

export default LogoIntro;
