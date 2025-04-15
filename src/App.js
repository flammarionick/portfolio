import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navbar is sticky at top */}
      <Navbar />

      {/* Main sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;