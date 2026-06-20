import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Row from '../shared/Row';

const SkillCard = styled(motion.div)`
  flex: 0 0 220px;
  height: 140px;
  background: ${props => props.color || '#333'};
  border-radius: 4px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  cursor: default;
`;

const CategoryTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillTag = styled.span`
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 3px;
`;

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML/CSS", "Shell"],
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    category: "Frameworks",
    skills: ["React", "Flask", "TensorFlow", "scikit-learn", "Pandas"],
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    category: "AI & ML",
    skills: ["Deep Learning", "Computer Vision", "Data Viz", "Jupyter"],
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "APIs", "Debugging", "Automation"],
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  }
];

const Skills = () => {
  return (
    <Row id="skills" title="Skills & Technologies">
      {skillsData.map((group, idx) => (
        <SkillCard
          key={idx}
          style={{ background: group.color }}
          whileHover={{ scale: 1.03 }}
        >
          <CategoryTitle>{group.category}</CategoryTitle>
          <SkillTags>
            {group.skills.map((skill, i) => (
              <SkillTag key={i}>{skill}</SkillTag>
            ))}
          </SkillTags>
        </SkillCard>
      ))}
    </Row>
  );
};

export default Skills;
