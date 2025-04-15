import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './SkillsSection';
import Experience from './Experience';
import Education from './Education';
import Footer from '../Footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';


function DeveloperPage() {
  return (
    <>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </>
  );
}

export default DeveloperPage;
