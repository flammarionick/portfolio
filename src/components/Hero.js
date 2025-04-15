import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import profilePic from './assets/nicholas.jpg'; // example import of profile image

const HeroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  min-height: 100vh;
  background: #000;         /* maybe a dark background for contrast */
  color: #fff;
  position: relative;
`;
const Name = styled.h1` font-size: 3rem; margin-bottom: 0.5rem; `;
const Title = styled.h2` font-size: 1.5rem; font-weight: 400; color: #ccc; `;
const ProfileImage = styled.img` 
  width: 150px; height: 150px; border-radius: 50%; margin-top: 1.5rem;
  object-fit: cover;
`;

const Hero = () => {
  useEffect(() => {
    // Play Netflix-style intro sound effect on mount (if user has interacted or autoplay is allowed)
    const audio = new Audio('/sounds/netflix-intro.mp3'); // path to your intro sound file
    audio.play().catch(err => {
      console.log('Audio playback prevented by browser', err);
      /* Alternatively, consider triggering sound on a user action (e.g., button click) to avoid autoplay issues */
    });
  }, []);

  return (
    <HeroContainer 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <Name>Nicholas Eke</Name>
      <Title>Software Developer &amp; AI/ML Engineer</Title>
      {/* Profile image below (make sure to replace src with your actual image path or imported asset) */}
      <ProfileImage src="portfolio\public\profile.jpg" alt="Nicholas Eke" />
    </HeroContainer>
  );
};

export default Hero;