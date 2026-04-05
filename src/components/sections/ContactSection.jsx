export default function ContactSection({ contact }) {
  return (
    <section id="contato" className="section section-contact">
      <div className="container contact-box">
        <div>
          <span className="section-tag">Contato</span>
          <h2>Vamos criar um espaço de cuidado desde o primeiro contato.</h2>
          <p className="contact-description">
            Sou psicóloga clínica (CRP 02/25079) e professora universitária no curso de Psicologia, com especializações em Tanatologia, Saúde Mental, Saúde Pública, Psicologia Social, Psicologia do Esporte, Atenção Primária à Saúde e Adolescência. Atendo adolescentes e adultos, de forma presencial e online.
          </p>

          <div className="hero-actions">
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Falar no WhatsApp
            </a>
            <a href="#inicio" className="btn btn-secondary">
              Voltar ao topo
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-item">
            <strong>WhatsApp</strong>
            <span>{contact.whatsappLabel}</span>
          </div>
          <div className="contact-item">
            <strong>Instagram</strong>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <span>{contact.instagramLabel}</span>
            </a>
          </div>
          <div className="contact-item">
            <strong>E-mail</strong>
            <a href={`mailto:${contact.email}`}>
              <span>{contact.email}</span>
            </a>
          </div>
          <div className="contact-item">
            <strong>Atendimento</strong>
            <span>Online e presencial</span>
          </div>
          <div className="endereco">
            <strong>Endereço</strong>
            <span>
              Avenida Rui Barbosa, 588
              <br />
              Empresarial Luze’s – 2º andar, sala 17
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
