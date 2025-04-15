import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Criminal Detection & Facial Recognition System</h3>
          <ul>
            <li>Built a real-time facial recognition system using TensorFlow and OpenCV.</li>
            <li>Used Flask to process video feed frames and expose a JSON API.</li>
            <li>Enhanced security insights through accurate live detection.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Healthcare Menu-Driven Application</h3>
          <ul>
            <li>Created a Python application linking healthcare providers, patients, and job seekers.</li>
            <li>Handled user interaction with Flask backend and local storage.</li>
            <li>Designed a responsive UI using JavaScript and CSS.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>YouTube Clone</h3>
          <ul>
            <li>Developed a full-stack video streaming site using React and Flask.</li>
            <li>Integrated video upload/playback with cloud storage APIs.</li>
            <li>Focused on performance, scalability, and UX.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Airbnb Clone</h3>
          <ul>
            <li>Engineered a property listing and booking system using Flask, PostgreSQL, and React.</li>
            <li>Included filters, maps, and secure authentication.</li>
            <li>Enabled users to host, book, and review properties easily.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>AQI Prediction App (Flutter + FastAPI)</h3>
          <ul>
            <li>Created an AQI predictor using a trained regression model served via FastAPI.</li>
            <li>Built a mobile app with Flutter that collects sensor inputs and returns live AQI predictions.</li>
            <li>Hosted a public Swagger-enabled API and demoed on YouTube.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>EmpowerHer Tales App</h3>
          <ul>
            <li>Developed the entire profile page (frontend + backend) in Flutter.</li>
            <li>Integrated Firebase for authentication and real-time updates.</li>
            <li>Optimized layout and user flow for storytelling functionality.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>AI Chatbot Assistant</h3>
          <ul>
            <li>Built a smart assistant using TensorFlow and NLTK for text classification and dialogue flow.</li>
            <li>Trained on FAQs and deployed as a Flask API with a React frontend.</li>
            <li>Handled real-time user queries through natural conversation.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Portfolio Website (This Site)</h3>
          <ul>
            <li>Crafted a React-based personal portfolio styled in Netflix’s visual aesthetic.</li>
            <li>Implemented responsive components, routing, and CV download integration.</li>
            <li>Built entirely from scratch with modular components and mobile-first design.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;

