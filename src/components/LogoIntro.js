// src/components/LogoIntro.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/LogoIntro.css';

function LogoIntro() {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio('/netflix-sound.mp3');
    audio.play().then(() => {
      setTimeout(() => navigate('/select'), 1600);
    }).catch(() => navigate('/select'));
  };

  return (
    <motion.div
      className="logo-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      onClick={handleClick}
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
