import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Row from '../shared/Row';

const EduCard = styled(motion.div)`
  flex: 0 0 350px;
  min-height: 160px;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  border-radius: 4px;
  padding: 25px;
  position: relative;
  overflow: hidden;
`;

const Badge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #46d369;
  color: #000;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 3px;
  text-transform: uppercase;
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

const Institution = styled.p`
  font-size: 0.9rem;
  color: #4facfe;
  margin-bottom: 5px;
`;

const Period = styled.span`
  font-size: 0.75rem;
  color: #888;
  display: block;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #b3b3b3;
  line-height: 1.5;
`;

const educationData = [
  {
    degree: "B.Sc. Software Engineering",
    institution: "African Leadership University, Kigali",
    period: "May 2023 – Present",
    badge: "In Progress",
    description: "Full-stack development, algorithms, data structures, and self-directed learning. Building real-world projects with modern technologies."
  }
];

const Education = () => {
  return (
    <Row id="education" title="Education">
      {educationData.map((edu, idx) => (
        <EduCard
          key={idx}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {edu.badge && <Badge>{edu.badge}</Badge>}
          <Degree>{edu.degree}</Degree>
          <Institution>{edu.institution}</Institution>
          <Period>{edu.period}</Period>
          <Description>{edu.description}</Description>
        </EduCard>
      ))}
    </Row>
  );
};

export default Education;
