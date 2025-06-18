import './Header.css';
export function Header(){
    return(
       
    <header>
      <nav>
        <div class="logo">ASTIK</div>
        <ul id="nav-links">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="cv.html" class="nav-link">Resume</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="menu-icon" id="menu-icon">&#9776;</div>
      </nav>
    </header>

    );
}