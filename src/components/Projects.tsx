import { projects } from "../data/projects";
import "./projects.css";
import { useMemo, useState } from "react";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const sorted = useMemo(() => {
    // İstersen burayı tarihe göre sıralamaya çevirebiliriz.
    return projects;
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projeler</h2>
        <p className="projects__subtitle">
          Üzerinde çalıştığım bazı projeler — detaylarını açıp okuyabilirsin.
        </p>

        <div className="projects__grid">
          {sorted.map((p) => {
            const isOpen = openId === p.id;

            return (
              <article key={p.id} className="projectCard">
                <div className="projectCard__top">
                  <h3 className="projectCard__title">{p.title}</h3>

                  <button
                    className="projectCard__btn"
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Kapat" : "Detay"}
                  </button>
                </div>

                {p.tags?.length ? (
                  <div className="projectCard__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="projectCard__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <p className={`projectCard__desc ${isOpen ? "open" : ""}`}>
                  {p.description}
                </p>

                {p.link ? (
                  <a
                    className="projectCard__link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Projeyi aç →
                  </a>
                ) : (
                  <span className="projectCard__hint">
                    (İstersen link ekleriz)
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}