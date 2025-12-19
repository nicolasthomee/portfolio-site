import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__thumb">
        <img src={project.banner} alt={project.name} loading="lazy" />
        <div className="project-card__pill">{project.stackLabel}</div>
      </div>
      <div className="project-card__body">
        <div className="project-card__title">
          <h3>{project.name}</h3>
          <p>{project.shortDescription}</p>
        </div>
        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-card__actions">
          <Link to={`/projetos/${project.slug}`} className="btn btn-primary">
            Ver Detalhes
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            Deploy
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

