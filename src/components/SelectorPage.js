import React from 'react';
import './styles/SelectorPage.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const personas = [
  { name: 'Recruiter', color: '#4397F7' },   // Blue like Netflix
  { name: 'Developer', color: '#E6B616' },   // Yellow/Gold
  { name: 'Client', color: '#5B7A84' },      // Teal/Gray
  { name: 'Stalker', color: '#D93025' }      // Red
];

// Netflix-style smiley face SVG
const SmileyFace = ({ color }) => (
  <div className="profile-icon" style={{ backgroundColor: color }}>
    <div className="face">
      <div className="eyes">
        <div className="eye"></div>
        <div className="eye"></div>
      </div>
      <div className="mouth"></div>
    </div>
  </div>
);

function SelectorPage() {
  const navigate = useNavigate();

  const handleClick = (role) => {
    if (role === 'Recruiter') navigate('/recruiter');
    else if (role === 'Developer') navigate('/developer');
    else if (role === 'Stalker') navigate('/stalker');
    else navigate('/client');
  };

  return (
    <div className="selector">
      <div className="selector-header">
        <img src="/favicon.png" alt="Nick Logo" className="header-logo" />
        <span className="brand-name">Nicholas</span>
      </div>

      <div className="selector-content">
        <h1 className="selector-title">Who's watching?</h1>

        <div className="profiles-container">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="profile"
              onClick={() => handleClick(persona.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <SmileyFace color={persona.color} />
              <span className="profile-name">{persona.name}</span>
            </motion.div>
          ))}
        </div>

        <button className="manage-profiles-btn">Manage Profiles</button>
      </div>
    </div>
  );
}

export default SelectorPage;
