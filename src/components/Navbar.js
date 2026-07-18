import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'


function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="App-header">
      <div className="header-left">
        <div className="brand-name">Diana Klainer</div>
      </div>

      {/* Hamburguer menu */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`header-right ${isOpen ? 'open' : ''}`}>
        <div className="link-container">
          <Link className="link" to="/" onClick={closeMenu}>Inicio</Link>
          <Link className="link" to="/esculturas" onClick={closeMenu}>Esculturas</Link>
          <Link className="link" to="/relieves" onClick={closeMenu}>Relieves</Link>
          <Link className="link" to="/retratos" onClick={closeMenu}>Retratos</Link>
          <Link className="link" to="/muestras" onClick={closeMenu}>Muestras</Link>
          <Link className="link" to="/bio" onClick={closeMenu}>Bio</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;