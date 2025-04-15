import React from 'react';
import '../styles/Projects.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
`;
const ProjectsContainer = styled(motion.section)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;
const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;
const Card = styled(motion.div)`
  background: #1e1e1e;
  color: #fafafa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;
const CardTitle = styled.h3` font-size: 1.2rem; margin-bottom: 0.5rem; `;
const CardList = styled.ul` font-size: 0.95rem; line-height: 1.4; padding-left: 1.2em; `;
const CardItem = styled.li` margin-bottom: 0.5em; `;

// Project data array (title + description bullets)
const projectData = [
  {
    title: "AQI App",
    points: [
      "Developed an interactive app providing real-time Air Quality Index data using external APIs.",
      "Implemented clean visualizations and alerts to notify users of pollution levels."
    ]
  },
  {
    title: "EmpowerHer Tales",
    points: [
      "Built a platform to share inspirational stories of women's empowerment.",
      "Created an engaging UI with content management for user-submitted tales."
    ]
  },
  {
    title: "Criminal Detection & Facial Recognition",
    points: [
      "Implemented real-time facial recognition with TensorFlow & OpenCV to identify individuals from live video.",
      "Built a Flask backend and RESTful API for image processing, enhancing security applications."
    ]
  },
  {
    title: "Healthcare Menu-Driven Application",
    points: [
      "Designed a Python-based application connecting healthcare providers, job seekers, and patients.",
      "Integrated a Flask backend for authentication & data, with a user-friendly JS/CSS interface."
    ]
  },
  {
    title: "YouTube Clone",
    points: [
      "Developed a full-stack web app replicating YouTube features (React frontend, Flask/Python backend).",
      "Enabled video upload, playback, and streaming via cloud storage APIs, with a responsive UI."
    ]
  },
  {
    title: "Airbnb Clone",
    points: [
      "Created a functional property listing & booking platform using React and Flask/Python.",
      "Integrated PostgreSQL for data management, with search filters and maps to enhance UX."
    ]
  }
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionHeader>Projects</SectionHeader>
      <ProjectsGrid
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ 
          hidden: {}, 
          visible: { transition: { staggerChildren: 0.2 } }  /* stagger children reveal */
        }}
      >
        {projectData.map((proj, idx) => (
          <Card key={idx}
            variants={{ 
              hidden: { opacity: 0, y: 30 }, 
              visible: { opacity: 1, y: 0 } 
            }}
            whileHover={{ scale: 1.03 }}
          >
            <CardTitle>{proj.title}</CardTitle>
            <CardList>
              {proj.points.map((pt, i) => <CardItem key={i}>{pt}</CardItem>)}
            </CardList>
          </Card>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;