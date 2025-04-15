import React from 'react';
import '../styles/Skills.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
`;

const SkillsContainer = styled(motion.section)`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;
const SkillCategory = styled(motion.div)`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  text-align: left;
`;
const CategoryTitle = styled.h4` font-size: 1.1rem; margin-bottom: 0.5rem; `;
const SkillList = styled.ul` font-size: 0.95rem; line-height: 1.5; padding-left: 1.2em; `;
const SkillItem = styled.li` margin-bottom: 0.3em; `;

// Define four skill categories with relevant skills
const skillsData = [
  {
    category: "Languages & Scripting",
    skills: ["Python", "JavaScript", "SQL", "HTML/CSS", "Shell Scripting", "JSON"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Flask", "TensorFlow", "scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "AI & Data Science",
    skills: ["Machine Learning Models", "Data Visualization", "Jupyter Notebook", "AI Integration"]
  },
  {
    category: "Software Dev & Tools",
    skills: ["Version Control (Git)", "Debugging", "Automation Scripting", "API Development"]
  }
];

const Skills = () => {
  return (
    <SkillsContainer 
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <SectionHeader>Skills</SectionHeader>
      <SkillsGrid>
        {skillsData.map((group, idx) => (
          <SkillCategory key={idx} whileHover={{ scale: 1.05, backgroundColor: "#e0e0e0" }}>
            <CategoryTitle>{group.category}</CategoryTitle>
            <SkillList>
              {group.skills.map((skill, i) => <SkillItem key={i}>{skill}</SkillItem>)}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;

