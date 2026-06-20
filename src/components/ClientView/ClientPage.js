import React, { useState, useEffect } from 'react';
import Projects from '../DeveloperView/Projects';
import Skills from '../DeveloperView/SkillsSection';
import ContactForm from '../shared/ContactForm';
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

  &:hover { color: #fff; }
  &:first-child { color: #fff; font-weight: 500; }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RequestButton = styled.a`
  color: #000;
  background: #e50914;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 3px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: #b20710;
  }
`;

const ProfileIcon = styled.div`
  width: 28px;
  height: 28px;
  background: #5B7A84;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
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

const HeroContent = styled(motion.div)`
  max-width: 550px;
  z-index: 2;
`;

const HeroTag = styled.span`
  color: #e50914;
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
  color: #4facfe;
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
  &.highlight { color: #4facfe; }
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
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover { background: #b20710; }
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

  &:hover { background: rgba(109, 109, 110, 0.5); }
`;

const ContentSection = styled.div`
  margin-top: -80px;
  position: relative;
  z-index: 10;
  padding-bottom: 50px;
`;

const ServicesSection = styled.section`
  padding: 30px 0;
`;

const RowTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 15px 50px;
`;

const ScrollRow = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 50px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ServiceCard = styled(motion.div)`
  flex: 0 0 260px;
  height: 180px;
  background: ${props => props.color || '#333'};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ServiceIcon = styled.span`
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
`;

const ServiceDesc = styled.p`
  font-size: 0.8rem;
  color: #b3b3b3;
  line-height: 1.4;
`;

const ContactSection = styled.section`
  padding: 50px;
  max-width: 600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 0.95rem;
  color: #888;
  text-align: center;
  margin-bottom: 30px;
`;

const services = [
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description: "Custom web applications with React, Flask, and modern databases.",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    icon: "🤖",
    title: "AI/ML Solutions",
    description: "Machine learning models, computer vision, and intelligent automation.",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    icon: "📊",
    title: "Data Engineering",
    description: "Data pipelines, visualization dashboards, and analytics solutions.",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    icon: "🔌",
    title: "API Development",
    description: "RESTful APIs, integrations, and backend architecture.",
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  }
];

function ClientPage() {
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
          <NavLink onClick={() => scrollTo('services')}>Services</NavLink>
          <NavLink onClick={() => scrollTo('projects')}>Portfolio</NavLink>
          <NavLink onClick={() => scrollTo('skills')}>Technologies</NavLink>
        </NavLinks>
        <NavRight>
          <RequestButton onClick={() => scrollTo('contact')}>Get a Quote</RequestButton>
          <ProfileIcon>C</ProfileIcon>
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
          <HeroTag>Freelance Developer</HeroTag>
          <HeroTitle>Nicholas Eke</HeroTitle>
          <HeroRole>Building Digital Solutions That Matter</HeroRole>
          <HeroMeta>
            <MetaItem className="highlight">Available for Projects</MetaItem>
            <MetaItem>Web & AI Development</MetaItem>
            <MetaItem>Remote</MetaItem>
          </HeroMeta>
          <HeroSubtitle>
            Transform your ideas into reality with custom software solutions.
            From web applications to AI-powered systems, I deliver quality code that drives results.
          </HeroSubtitle>
          <HeroButtons>
            <PlayButton onClick={() => scrollTo('contact')}>
              ▶ Start a Project
            </PlayButton>
            <MoreInfoButton onClick={() => scrollTo('projects')}>
              ⓘ View Portfolio
            </MoreInfoButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ServicesSection id="services">
          <RowTitle>Services I Offer</RowTitle>
          <ScrollRow>
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                style={{ background: service.color }}
                whileHover={{ scale: 1.03 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <div>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDesc>{service.description}</ServiceDesc>
                </div>
              </ServiceCard>
            ))}
          </ScrollRow>
        </ServicesSection>

        <Projects />
        <Skills />

        <ContactSection id="contact">
          <SectionTitle>Let's Work Together</SectionTitle>
          <SectionSubtitle>Tell me about your project and let's make it happen</SectionSubtitle>
          <ContactForm />
        </ContactSection>
      </ContentSection>
    </PageContainer>
  );
}

export default ClientPage;
