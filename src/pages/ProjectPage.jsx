import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProjectPage({ projects }) {
  const { slug } = useParams()
  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [projects, slug],
  )

  if (!project) {
    return (
      <div className="page">
        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Projetos</p>
            <h1>Projeto não encontrado</h1>
            <p className="section__description">
              Este projeto não existe ou foi movido. Veja outros trabalhos.
            </p>
            <Link to="/projetos" className="btn btn-primary">
              Ver portfólio
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="project-hero">
        <div className="project-hero__text">
          <p className="eyebrow">Projeto</p>
          <h1>{project.name}</h1>
          <p className="section__description">{project.shortDescription}</p>
          <div className="project-hero__meta">
            <span className="badge">{project.stackLabel}</span>
            {project.technologies.map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
          <div className="hero__actions">
            <a
              className="btn btn-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver deploy
            </a>
            <a
              className="btn btn-ghost"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-hero__banner">
          <img src={project.banner} alt={project.name} loading="lazy" />
        </div>
      </section>

      <section className="section project-body">
        <div className="project-body__grid">
          <div className="card">
            <h3>Contexto do problema</h3>
            <p>{project.problem}</p>
          </div>
          <div className="card">
            <h3>Solução desenvolvida</h3>
            <p>{project.solution}</p>
          </div>
          <div className="card">
            <h3>Funcionalidades principais</h3>
            <ul className="list">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Tecnologias</h3>
            <div className="chips">
              {project.technologies.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="screenshots">
          {project.screenshots.map((shot) => (
            <img key={shot} src={shot} alt={project.name} loading="lazy" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectPage

