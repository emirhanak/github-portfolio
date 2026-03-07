import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import portraitUrl from "./assets/emir-portrait.webp";
import trFlagUrl from "./assets/tr-flag.svg";
import gbFlagUrl from "./assets/gb-flag.svg";
import { projectsEn, projectsTr } from "./data/projects";

type Language = "tr" | "en";

const translations = {
  tr: {
    pageTitle: "Emirhan Ak | Proje Portfolyosu",
    portraitAlt: "Emir profil fotoğrafı",
    contact: "İletişim",
    skillsTitle: "TECH STACK",
    projectsTitle: "Projelerim",
    openProjectLabel: "Projeyi aç →",
    languageAria: "Dil seçimi",
  },
  en: {
    pageTitle: "Emirhan Ak | Project Portfolio",
    portraitAlt: "Emir profile photo",
    contact: "Contact",
    skillsTitle: "TECH STACK",
    projectsTitle: "My Projects",
    openProjectLabel: "Open project →",
    languageAria: "Language switcher",
  },
} as const;

export default function App() {
  const [language, setLanguage] = useState<Language>("tr");

  const currentText = translations[language];
  const currentProjects = useMemo(
    () => (language === "tr" ? projectsTr : projectsEn),
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = currentText.pageTitle;
  }, [language, currentText.pageTitle]);

  return (
    <div className="page">
      <div className="languageSwitcher" role="group" aria-label={currentText.languageAria}>
        <button
          type="button"
          className={`flagButton ${language === "tr" ? "isActive" : ""}`}
          onClick={() => setLanguage("tr")}
          aria-label="Türkçe"
        >
          <img className="flagIcon" src={trFlagUrl} alt="Türk bayrağı" />
        </button>
        <button
          type="button"
          className={`flagButton ${language === "en" ? "isActive" : ""}`}
          onClick={() => setLanguage("en")}
          aria-label="English"
        >
          <img className="flagIcon" src={gbFlagUrl} alt="British flag" />
        </button>
      </div>

      <main className="layout">
        <aside className="sidebar">
          <figure className="heroPortrait">
            <img src={portraitUrl} alt={currentText.portraitAlt} />
          </figure>

          <div className="contactBlock">
            <p className="eyebrow">{currentText.contact}</p>
            <a href="mailto:emirhanak@outlook.com">emirhanak@outlook.com</a>
            <a href="https://github.com/emirhanak">github.com/emirhanak</a>
            <a href="https://www.linkedin.com/in/emirhanak41/">
              linkedin.com/in/emirhanak41
            </a>
          </div>

          <div className="languageBlock">
            <p className="eyebrow">{currentText.skillsTitle}</p>
            <ul className="skillsList">
              <li>
                <span className="skillsList__label">Backend:</span> Java, Spring
                Boot, FastAPI
              </li>
              <li>
                <span className="skillsList__label">Frontend:</span> React,
                TypeScript
              </li>
              <li>
                <span className="skillsList__label">Mobile:</span> React Native
              </li>
              <li>
                <span className="skillsList__label">Database:</span> PostgreSQL, MS
                SQL Server
              </li>
              <li>
                <span className="skillsList__label">Dev Tools:</span> Git, Docker,
                Postman
              </li>
              <li>
                <span className="skillsList__label">Architecture:</span> REST API,
                Layered Architecture, Microservices
              </li>
            </ul>
          </div>
        </aside>

        <section className="content">
          <Projects
            projects={currentProjects}
            title={currentText.projectsTitle}
            openProjectLabel={currentText.openProjectLabel}
          />
        </section>
      </main>
    </div>
  );
}
