import React from 'react';
import '../styles/Experience.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
`;

const ExperienceContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
`;
const Timeline = styled.div` 
  border-left: 3px solid #ccc;
  margin-left: 20px;
  padding-left: 20px;
`;
const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 30px;
  /* Dot indicator */
  &::before {
    content: "";
    position: absolute;
    left: -34px; /* position to overlay the border line */
    top: 0.25rem;
    width: 12px;
    height: 12px;
    border: 3px solid #ccc;
    border-radius: 50%;
    background: #fff;
  }
`;
const ItemTitle = styled.h4` font-size: 1.1rem; margin-bottom: 0.2rem; `;
const ItemDetails = styled.p` font-size: 0.9rem; color: #666; margin-bottom: 0.5rem; `;
const ItemDesc = styled.ul` font-size: 0.9rem; margin-bottom: 1rem; padding-left: 1.2em; `;
const DescPoint = styled.li` margin-bottom: 0.3em; `;

// Experience data based on Nicholas's CV
const experienceData = [
  {
    role: "Software Engineering & AI Intern",
    company: "Tech Startup (AI R&D)",
    period: "2024 – Present",
    details: [
      "Develop full-stack web applications (e.g., video streaming and property rental platforms).",
      "Design and deploy machine learning models to enhance automation and predictive analysis.",
      "Build secure RESTful APIs using Flask & Django, integrating front-end and back-end systems."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "African Leadership University",
    period: "May 2024 – Aug 2024",
    details: [
      "Assisted in debugging and optimizing internal software applications.",
      "Researched AI-powered education tools to improve student learning outcomes."
    ]
  },
  {
    role: "Planning Committee Member – Health Entrepreneurship Hackathon",
    company: "African Leadership University",
    period: "Feb 2024",
    details: [
      "Organized a coding hackathon and mentored students on software development best practices.",
      "Provided guidance on AI integration in healthcare applications, helping teams develop impactful solutions."
    ]
  }
];

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <SectionHeader>Experience</SectionHeader>
      <Timeline>
        {experienceData.map((item, idx) => (
          <TimelineItem 
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <ItemTitle>{item.role}</ItemTitle>
            <ItemDetails>{item.company} — {item.period}</ItemDetails>
            <ItemDesc>
              {item.details.map((point, i) => <DescPoint key={i}>{point}</DescPoint>)}
            </ItemDesc>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
