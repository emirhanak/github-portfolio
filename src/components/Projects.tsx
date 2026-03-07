import type { Project } from "../data/projects";
import "./projects.css";

type ProjectsProps = {
  projects: Project[];
  title: string;
  openProjectLabel: string;
};

export default function Projects({
  projects,
  title,
  openProjectLabel,
}: ProjectsProps) {
  return (
    <section className="projects" id="projects">
      <div className="section__intro reveal">
        <h2 className="section__title">{title}</h2>
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
                    {String(index + 1).padStart(2, "0")}
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

              <p className="projectCard__desc">{project.description}</p>

              {project.link ? (
                <a
                  className="projectCard__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {openProjectLabel}
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
