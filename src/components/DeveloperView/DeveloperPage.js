import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import Skills from './SkillsSection';
import Experience from './Experience';
import Education from './Education';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  background: #141414;
  min-height: 100vh;
  color: #fff;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 12px 50px;
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
  z-index: 100;
  transition: background 0.3s;
`;

const Logo = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 25px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 18px;
  flex: 1;
`;

const NavLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:first-child {
    color: #fff;
    font-weight: 500;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  padding: 6px 12px;
  border: 1px solid #fff;
  border-radius: 3px;
  transition: all 0.2s;

  &:hover {
    background: #fff;
    color: #141414;
  }
`;

const ProfileIcon = styled.div`
  width: 28px;
  height: 28px;
  background: #4397F7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
`;

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  padding: 0 50px;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  bottom: -200px;
  background: url('/profile.jpg') center 15%/cover no-repeat;
  transition: transform 0.1s ease-out;
  z-index: 0;
  cursor: pointer;
`;

const PanHint = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 8px 14px;
  border-radius: 4px;
  font-size: 0.75rem;
  z-index: 2;
  border: 1px solid ${props => props.active ? '#e50914' : '#444'};
  transition: all 0.2s;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%),
              linear-gradient(0deg, #141414 0%, transparent 15%);
  z-index: 1;
`;

const HeroContent = styled(motion.div)`
  max-width: 550px;
  z-index: 3;
  position: relative;
`;

const HeroTag = styled.span`
  color: #46d369;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
`;

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.1;
`;

const HeroRole = styled.p`
  font-size: 1.4rem;
  color: #e50914;
  font-weight: 500;
  margin-bottom: 15px;
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #d2d2d2;
  margin-bottom: 25px;
`;

const HeroMeta = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: #888;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  &.highlight {
    color: #46d369;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const PlayButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(255,255,255,0.85);
  }
`;

const MoreInfoButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: rgba(109, 109, 110, 0.7);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(109, 109, 110, 0.5);
  }
`;

const ContentSection = styled.div`
  margin-top: -80px;
  position: relative;
  z-index: 10;
  padding-bottom: 50px;
`;

function DeveloperPage() {
  const [bgOffset, setBgOffset] = useState(0);
  const [bgActive, setBgActive] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (bgActive) {
        e.preventDefault();
        setBgOffset(prev => {
          const newOffset = prev + e.deltaY * 0.5;
          return Math.max(-200, Math.min(200, newOffset));
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [bgActive]);

  const handleBgClick = (e) => {
    e.stopPropagation();
    setBgActive(true);
  };

  const handlePageClick = () => {
    setBgActive(false);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageContainer onClick={handlePageClick}>
      <Navbar>
        <Logo src="/favicon.png" alt="Nick" />
        <NavLinks>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</NavLink>
          <NavLink onClick={() => scrollTo('projects')}>Projects</NavLink>
          <NavLink onClick={() => scrollTo('skills')}>Skills</NavLink>
          <NavLink onClick={() => scrollTo('experience')}>Experience</NavLink>
          <NavLink onClick={() => scrollTo('education')}>Education</NavLink>
        </NavLinks>
        <NavRight>
          <ContactLink href="https://linkedin.com/in/nicholas-eke-481239244" target="_blank">LinkedIn</ContactLink>
          <ProfileIcon>NE</ProfileIcon>
        </NavRight>
      </Navbar>

      <HeroSection>
        <HeroBackground
          onClick={handleBgClick}
          style={{ transform: `translateY(${bgOffset}px)`, cursor: bgActive ? 'grab' : 'pointer' }}
        />
        <HeroOverlay style={{ pointerEvents: 'none' }} />
        <PanHint active={bgActive} onClick={handleBgClick}>
          {bgActive ? '🔓 Scroll to pan • Click elsewhere to exit' : '🖼️ Click image to pan'}
        </PanHint>
        <HeroContent
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroTag>Software Engineer</HeroTag>
          <HeroTitle>Nicholas Eke</HeroTitle>
          <HeroRole>Full-Stack Developer & AI/ML Engineer</HeroRole>
          <HeroMeta>
            <MetaItem className="highlight">ALU '26</MetaItem>
            <MetaItem>B.Sc. Software Engineering</MetaItem>
            <MetaItem>Rwanda</MetaItem>
          </HeroMeta>
          <HeroSubtitle>
            Passionate about solving real-world problems through intelligent systems.
            Building impactful solutions with React, Flask, TensorFlow, and cutting-edge ML technologies.
          </HeroSubtitle>
          <HeroButtons>
            <PlayButton href="/Nicholas_Eke_CV.pdf" download>
              ▶ View Resume
            </PlayButton>
            <MoreInfoButton href="mailto:nicholaseke04@gmail.com">
              ⓘ Contact Me
            </MoreInfoButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </ContentSection>
    </PageContainer>
  );
}

export default DeveloperPage;
