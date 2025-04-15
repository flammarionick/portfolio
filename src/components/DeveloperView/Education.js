import React from 'react';
import '../styles/Education.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
`;

const EducationContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
`;
/* We reuse Timeline, TimelineItem, ItemTitle, ItemDetails, ItemDesc, DescPoint styles from Experience */
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

const educationData = [
  {
    degree: "B.Sc. Software Engineering",
    institution: "African Leadership University, Kigali",
    period: "May 2023 – Present",
    details: [
      "Undergraduate program focused on software development and engineering principles with leadership and self-directed learning.",
      "Coursework includes full-stack development, algorithms, and data structures, with projects tackling real-world challenges."
    ]
  }
];

const Education = () => {
  return (
    <EducationContainer id="education">
      <SectionHeader>Education</SectionHeader>
      <Timeline>
        {educationData.map((edu, idx) => (
          <TimelineItem 
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ItemTitle>{edu.degree}</ItemTitle>
            <ItemDetails>{edu.institution} — {edu.period}</ItemDetails>
            <ItemDesc>
              {edu.details.map((pt, i) => <DescPoint key={i}>{pt}</DescPoint>)}
            </ItemDesc>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationContainer>
  );
};

export default Education;


