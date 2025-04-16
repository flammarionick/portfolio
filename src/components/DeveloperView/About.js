import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const AboutSection = styled(motion.section)`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: left;
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

const ContactLink = styled.a`
  color: #0066cc;
  margin: 0 0.5rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Cv = styled.a`
display: inline-block;
margin-top: 1rem;
padding: 10px 20px;
background-color: #e50914;
color: white;
border-radius: 5px;
text-decoration: none;
font-weight: bold;
transition: background 0.3s ease;

&:hover {
  background-color: #b0060e;
}
`;


const About = () => {
  return (
    <AboutSection 
      id="about"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <AboutText>
        I am a Software Developer and AI/ML Engineer passionate about solving real-world problems through full-stack development and intelligent systems. With hands-on experience in React, Flask, TensorFlow, and machine learning model deployment, I love transforming ideas into practical, scalable software.
      </AboutText>
      <AboutText>
        I'm currently pursuing a B.Sc. in Software Engineering at African Leadership University, where I focus on developing impactful solutions using modern tools and frameworks. I enjoy combining logic and creativity to build projects that matter.
      </AboutText>
      <ContactInfo>
        <strong>Contact:</strong> 
        <ContactLink href="mailto:nicholaseke04@gmail.com">nicholaseke04@gmail.com</ContactLink> | 
        <ContactLink href="https://linkedin.com/in/nicholas-eke-481239244" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink>
      </ContactInfo>
      <Cv
  href="/Nicholas_Eke_CV.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="cv-download-button"
>
  📄 Download My CV
</Cv>

    </AboutSection>
  );
};

export default About;
