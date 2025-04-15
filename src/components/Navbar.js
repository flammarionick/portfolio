import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-container container">
        <h1 className="navbar-logo">Nicholas Eke</h1>
        
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

const NavLink = styled(motion.a)` 
  margin: 0 15px; 
  text-decoration: none; 
  color: #333; 
  font-weight: 500;
`;

// Inside your Navbar component render:
<NavLink 
  href="#projects" 
  whileHover={{ scale: 1.1, color: "#e63946" }}  // scale up and change color on hover
>
  Projects
</NavLink>


