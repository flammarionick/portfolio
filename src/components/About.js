import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a Software Developer and AI/ML Engineer passionate about solving real-world problems through full-stack development and intelligent systems. With hands-on experience in React, Flask, TensorFlow, and machine learning model deployment, I love transforming ideas into practical, scalable software.
        </p>
        <p>
          I’m currently pursuing a B.Sc. in Software Engineering at African Leadership University, where I focus on developing impactful solutions using modern tools and frameworks. I enjoy combining logic and creativity to build projects that matter.
        </p>
        <p className="contact-info">
          <strong>Contact:</strong> 
          <a href="mailto:nicholaseke04@gmail.com">nicholaseke04@gmail.com</a> | 
          <a href="https://linkedin.com/in/nicholas-eke-481239244" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}

export default About;
