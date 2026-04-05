export default function HeroSection({ destaques, heroPhotoSrc, whatsappUrl }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-blur blur-left"></div>
      <div className="hero-blur blur-right"></div>
      <div className="pattern"></div>

      <div className="container hero-grid">
        <div className="hero-text text-card">
          <span className="eyebrow">Atendimento psicoterapêutico online e presencial</span>

          <h2>
            Um espaço de escuta, presença e cuidado para quem deseja se olhar com mais profundidade.
          </h2>

          <p className="hero-description">
            Um encontro acolhedor, ético e humano, que se orienta pela escuta da experiência vivida, favorecendo o desvelar de sentidos, a elaboração emocional e a construção de caminhos mais conscientes e autênticos.
          </p>

          <div className="hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Agendar encontro
            </a>
            <a href="#sobre" className="btn btn-secondary">
              Conhecer o trabalho
            </a>
          </div>

          <div className="highlight-grid">
            {destaques.map((item) => (
              <article key={item.titulo} className="card mini-card">
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <span className="photo-label">Allany Rodrigues</span>
            <img src={heroPhotoSrc} alt="Foto da psicóloga" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
