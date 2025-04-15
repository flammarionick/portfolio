import React from 'react';
import './styles/SelectorPage.css';
import { useNavigate } from 'react-router-dom';

const personas = [
  { name: 'Recruiter', color: 'blue', emoji: '🧢' },
  { name: 'Developer', color: 'gray', emoji: '💻' },
  { name: 'Stalker', color: 'red', emoji: '🕵️' },
  { name: 'Client', color: 'orange', emoji: '🧭' }
];

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
      <h2>Who's Watching?</h2>
      <div className="selector-buttons">
        {personas.map((persona, index) => (
          <div
            key={index}
            className={`avatar avatar-${persona.color}`}
            onClick={() => handleClick(persona.name)}
          >
            <span className="emoji">{persona.emoji}</span>
            <p>{persona.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectorPage;
