import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
      <img src="/profile.jpg" alt="Nicholas Eke" className="hero-image" />

        <div className="hero-text">
          <h2>Hello, I'm <span>Nicholas Eke</span></h2>
          <p className="tagline">Full Stack Developer & AI/ML Engineer</p>
          <p className="subtitle">
            I build full-stack applications and AI solutions that solve real-world problems. Skilled in React, Flask, TensorFlow, and deploying scalable software.
          </p>
          <a
            href={process.env.PUBLIC_URL + 'assets\docs\NICHOLAS EKE CV - MAIN.pdf'}
            className="btn-cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

