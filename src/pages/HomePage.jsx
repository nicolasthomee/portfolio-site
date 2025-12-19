import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

function HomePage({ projects }) {
  return (
    <div className="page">
      <section className="hero" id="home">
        <div className="hero__text">
          <p className="eyebrow">Software Engineer</p>
          <h1>
            Nicolas Thome
            <span className="tagline">
              Back-end Developer | Front-end Developer
            </span>
          </h1>
          <p className="lead">
            Engenheiro de Software com formação em Engenharia de Software e
            background em Engenharia de Manufatura Mecânica e Business &
            Marketing. Experiência internacional e domínio de HTML5, CSS3,
            JavaScript e React para criar produtos digitais com foco em UX,
            performance e acessibilidade.
          </p>
          <div className="hero__actions">
            <Link to="/projetos" className="btn btn-primary">
              Ver Projetos
            </Link>
            <Link to="/contato" className="btn btn-ghost">
              Entrar em Contato
            </Link>
          </div>
          <div className="hero__meta">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>
        <div className="hero__card">
          <div className="hero__chip">Disponível para remoto e híbrido</div>
          <div className="hero__glow" />
          <div className="hero__body">
            <h3>Engenharia de Software</h3>
            <p>UX / UI · Design Systems · A11y · Integração com APIs</p>
            <ul>
              <li>Experiência internacional em produtos digitais</li>
              <li>Conhecimento de React e práticas modernas de front-end</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="section__header">
          <p className="eyebrow">Sobre</p>
          <h2>Trajetória multidisciplinar</h2>
          <p className="section__description">
            Combino Engenharia de Software com fundamentos de Engenharia de
            Manufatura Mecânica e Business & Marketing. Fluente em inglês e
            acostumado a ambientes globais.
          </p>
        </div>
        <div className="about__grid">
          <div className="card">
            <h3>Engenharia</h3>
            <p>Formação em Engenharia de Software.</p>
          </div>
          <div className="card">
            <h3>Produto</h3>
            <p>Business & Marketing aplicados a soluções digitais.</p>
          </div>
          <div className="card">
            <h3>Global</h3>
            <p>Fluente em inglês e experiência internacional.</p>
          </div>
          <div className="card">
            <h3>Front-end</h3>
            <p>HTML5, CSS3, JavaScript, React e Design Systems.</p>
          </div>
        </div>
      </section>

      <section className="section projects" id="projetos">
        <div className="section__header">
          <p className="eyebrow">Projetos</p>
          <h2>Destaques recentes</h2>
          <p className="section__description">
            Seleção de projetos com foco em front-end, UX e produtos escaláveis.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="section__footer">
          <Link to="/projetos" className="btn btn-ghost">
            Ver todos os projetos
          </Link>
        </div>
      </section>

      <section className="section contact" id="contato">
        <div className="contact__card">
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar sobre o próximo produto</h2>
            <p className="section__description">
              Aberto a oportunidades de front-end, liderando iniciativas de UX e
              construindo produtos web de alto impacto.
            </p>
            <div className="contact__links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
          <a className="btn btn-primary" href="mailto:nicolas.thome@email.com">
            Enviar e-mail
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage

