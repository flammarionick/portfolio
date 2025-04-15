import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages & Markup</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Shell Scripting</li>
              <li>HTML & CSS</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>AI / ML & Data Science</h3>
            <ul>
              <li>TensorFlow</li>
              <li>scikit-learn</li>
              <li>Pandas & NumPy</li>
              <li>Computer Vision (OpenCV)</li>
              <li>Model Deployment & Optimization</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Web & Full-Stack</h3>
            <ul>
              <li>React</li>
              <li>Flask</li>
              <li>REST APIs</li>
              <li>Firebase</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools & Practices</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Jupyter Notebook</li>
              <li>Debugging & Testing</li>
              <li>Agile Collaboration</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

