import './Projects.css';
import { projects } from "../data/project_data";

export function Project() {
  return (
    <section id="projects" className="card-section">
      <h2>My Projects</h2>

      {projects.map((project) => (
        <div key={project.id} className="card single-image-card">
          <img src={project.image} alt="Project Image" />

          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a
              href={project.liveLink}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
