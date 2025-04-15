import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>

        <div className="experience-item">
          <h3>Software Engineering & AI Intern</h3>
          <p className="meta">Remote — 2024</p>
          <ul>
            <li>Developed full-stack apps including a video platform and rental site.</li>
            <li>Deployed ML models using Flask for AI-driven applications.</li>
            <li>Built and integrated RESTful APIs across backend and frontend.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Developer Intern – African Leadership University</h3>
          <p className="meta">Kigali, Rwanda — May 2024 – Aug 2024</p>
          <ul>
            <li>Debugged internal academic systems to improve reliability.</li>
            <li>Researched and supported AI-based learning tools for classrooms.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Planning Committee Member – Health Hackathon</h3>
          <p className="meta">ALU, Kigali — Feb 2024</p>
          <ul>
            <li>Organized student hackathon on health-tech innovation.</li>
            <li>Mentored teams on AI model usage and product-building techniques.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
