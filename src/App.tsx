import "./App.css";
import Projects from "./components/Projects";
import portraitUrl from "./assets/emir-portrait.png";

export default function App() {
  return (
    <div className="page">
      <main className="layout">
        <aside className="sidebar">
          <figure className="heroPortrait">
            <img src={portraitUrl} alt="Emir profil fotografi" />
          </figure>

          <div className="contactBlock">
            <p className="eyebrow">Iletisim</p>
            <a href="mailto:emirhanak@outlook.com">emirhanak@outlook.com</a>
            <a href="https://github.com/emirhanak">github.com/emirhanak</a>
            <a href="https://www.linkedin.com/in/emirhanak41/">
              linkedin.com/in/emirhanak41
            </a>
          </div>

          <div className="languageBlock">
            <p className="eyebrow">TEKNIK YETKINLIKLER</p>
            <ul>
              <li>Java (Spring Boot)</li>
              <li>REST API</li>
              <li>MS SQL Server (SSMS) T-SQL (CRUD, JOIN, Stored Procedure)</li>
              <li>C# / .NET</li>
              <li>React Native</li>
              <li>FastAPI</li>
              <li>Postman</li>
              <li>React</li>
              <li>Git</li>
            </ul>
          </div>
        </aside>

        <section className="content">
          <Projects />
        </section>
      </main>
    </div>
  );
}
