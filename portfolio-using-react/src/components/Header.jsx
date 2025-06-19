import { useState } from 'react';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className="logo">ASTIK</div>

        {/* Toggle class based on state */}
        <ul id="nav-links" className={isMenuOpen ? 'active' : ''}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="cv.html" className="nav-link">Resume</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </div>
      </nav>
    </header>
  );
}
