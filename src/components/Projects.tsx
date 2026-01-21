import { projects } from "../data/projects";
import "./projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section__intro reveal">
        <h2 className="section__title">Projelerim</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => {
          return (
            <article
              key={project.id}
              className={`projectCard reveal reveal--delay-${(index % 4) + 1}`}
            >
              <div className="projectCard__header">
                <div>
                  <span className="projectCard__index">
                    0{index + 1}
                  </span>
                  <h3 className="projectCard__title">{project.title}</h3>
                </div>
              </div>

              {project.tags?.length ? (
                <div className="projectCard__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projectCard__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <p className="projectCard__desc">
                {project.description}
              </p>

              {project.link ? (
                <a
                  className="projectCard__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Projeyi aç →
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
