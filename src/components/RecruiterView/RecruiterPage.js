import React from 'react';
import ContactForm from '../shared/ContactForm';
import About from '../DeveloperView/About';
import Experience from '../DeveloperView/Experience';
import Projects from '../DeveloperView/Projects';
import Skills from '../DeveloperView/SkillsSection';
import Education from '../DeveloperView/Education';


function RecruiterPage() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <div>
      <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Hire Me</h2>
      <ContactForm />
    </div>
    </>
  );
}

export default RecruiterPage;
