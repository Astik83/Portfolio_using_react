
import './About.css';
export function About(){

    return(
        
    <section id="about" class="about-section">
      <div class="about-content">
        <div class="about-text">
          <h2 class="animate-title">About Me</h2>
          <p class="animate-text">
            I'm Astik Shah, a final year CSE student at <a href="https://kiit.ac.in/about/"><span class="kiit">KIIT University</span></a> with a
            passion for web design and development, along with a keen interest
            in AI and ML. I enjoy creating clean, efficient, and user-friendly
            web solutions while exploring and learning the latest technologies.
            By combining web development with AI and ML, I strive to work on
            projects that bring innovative ideas to life.
          </p>
        </div>
        <div class="about-image">
          <img
            src="img/ast.png"
            alt="Astik's Photo"
            loading="lazy"
            class="animate-image"
          />
        </div>
      </div>
    </section>

    );
}