import React from 'react';
import './styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Nicholas Eke. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

