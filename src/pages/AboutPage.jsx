function AboutPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="section__header">
          <p className="eyebrow">Sobre</p>
          <h1>Perfil profissional</h1>
          <p className="section__description">
            Engenheiro de Software com foco em front-end e criação de produtos
            digitais completos. Formação em Engenharia de Software e Engenharia
            de Manufatura Mecânica, aliado a Business & Marketing. Fluente em
            inglês, atuo em ambientes globais com alta colaboração.
          </p>
        </div>
        <div className="about__grid">
          <div className="card">
            <h3>Engenharia de Software</h3>
            <p>
              Arquitetura de front-end, boas práticas de código e performance,
              testes e acessibilidade.
            </p>
          </div>
          <div className="card">
            <h3>Engenharia de Manufatura Mecânica</h3>
            <p>
              Pensamento sistêmico, processos e melhoria contínua aplicados a
              produtos digitais.
            </p>
          </div>
          <div className="card">
            <h3>Business & Marketing</h3>
            <p>
              Visão orientada a métricas e impacto, alinhando UX com objetivos
              de negócio.
            </p>
          </div>
          <div className="card">
            <h3>Fluência em inglês</h3>
            <p>
              Comunicação clara com times internacionais e clientes
              multinacionais.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

