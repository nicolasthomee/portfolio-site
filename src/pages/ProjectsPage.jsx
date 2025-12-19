import ProjectCard from '../components/ProjectCard'

function ProjectsPage({ projects }) {
  return (
    <div className="page">
      <section className="section">
        <div className="section__header">
          <p className="eyebrow">Projetos</p>
          <h1>Portfólio selecionado</h1>
          <p className="section__description">
            Projetos com foco em front-end moderno, performance e experiências
            centradas no usuário. Cada entrega inclui descoberta, arquitetura,
            UI e handoff limpo para times globais.
          </p>
        </div>
        <div className="project-grid project-grid--large">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage

