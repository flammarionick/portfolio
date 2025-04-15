import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>

        <div className="education-item">
          <h3>African Leadership University – Kigali, Rwanda</h3>
          <p className="meta">B.Sc. in Software Engineering — May 2023 – Present</p>
          <ul>
            <li>Focused on full-stack development, AI integration, and systems design.</li>
            <li>Completed coursework in algorithms, data structures, and software architecture.</li>
            <li>Program emphasizes leadership, problem-solving, and real-world innovation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;

