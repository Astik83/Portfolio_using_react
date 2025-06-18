
import './About.css';
export function About(){

    return(
        
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="animate-title">About Me</h2>
          <p className="animate-text">
            I'm Astik Shah, a final year CSE student at <a href="https://kiit.ac.in/about/"><span className="kiit">KIIT University</span></a> with a
            passion for web design and development, along with a keen interest
            in AI and ML. I enjoy creating clean, efficient, and user-friendly
            web solutions while exploring and learning the latest technologies.
            By combining web development with AI and ML, I strive to work on
            projects that bring innovative ideas to life.
          </p>
        </div>
        <div className="about-image">
          <img
            src="img/ast.png"
            alt="Astik's Photo"
            loading="lazy"
            className="animate-image"
          />
        </div>
      </div>
    </section>

    );
}