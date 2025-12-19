function ContactPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="section__header">
          <p className="eyebrow">Contato</p>
          <h1>Vamos construir algo juntos</h1>
          <p className="section__description">
            Aberto para oportunidades em front-end e produtos digitais. Vamos
            discutir como posso contribuir com seu time.
          </p>
        </div>
        <div className="contact__card contact__card--page">
          <div>
            <h3>Canais</h3>
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
          <div className="contact__form">
            <h3>Envie um e-mail</h3>
            <p>Responderei com rapidez e clareza.</p>
            <a className="btn btn-primary" href="mailto:nicolas.thome@email.com">
              Entrar em contato
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

