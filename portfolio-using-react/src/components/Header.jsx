import './Header.css';
export function Header(){
    return(
       
    <header>
      <nav>
        <div className="logo">ASTIK</div>
        <ul id="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="cv.html" className="nav-link">Resume</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="menu-icon" id="menu-icon">&#9776;</div>
      </nav>
    </header>

    );
}