import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Row from '../shared/Row';

const ExpCard = styled(motion.div)`
  flex: 0 0 300px;
  min-height: 180px;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  border-radius: 4px;
  padding: 20px;
  border-left: 3px solid #e50914;
`;

const Role = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
`;

const Company = styled.p`
  font-size: 0.85rem;
  color: #e50914;
  margin-bottom: 3px;
`;

const Period = styled.span`
  font-size: 0.75rem;
  color: #888;
  display: block;
  margin-bottom: 12px;
`;

const Details = styled.ul`
  font-size: 0.8rem;
  color: #b3b3b3;
  line-height: 1.5;
  padding-left: 15px;
  margin: 0;
`;

const Detail = styled.li`
  margin-bottom: 5px;
`;

const experienceData = [
  {
    role: "Software Engineering & AI Intern",
    company: "Tech Startup (AI R&D)",
    period: "2024 – Present",
    details: [
      "Full-stack web applications development",
      "ML models for automation & prediction",
      "RESTful APIs with Flask & Django"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "African Leadership University",
    period: "May 2024 – Aug 2024",
    details: [
      "Debugging & optimizing internal apps",
      "AI-powered education tools research"
    ]
  },
  {
    role: "Planning Committee Member",
    company: "Health Entrepreneurship Hackathon",
    period: "Feb 2024",
    details: [
      "Organized coding hackathon",
      "Mentored on AI integration in healthcare"
    ]
  }
];

const Experience = () => {
  return (
    <Row id="experience" title="Experience">
      {experienceData.map((item, idx) => (
        <ExpCard
          key={idx}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <Role>{item.role}</Role>
          <Company>{item.company}</Company>
          <Period>{item.period}</Period>
          <Details>
            {item.details.map((point, i) => <Detail key={i}>{point}</Detail>)}
          </Details>
        </ExpCard>
      ))}
    </Row>
  );
};

export default Experience;
