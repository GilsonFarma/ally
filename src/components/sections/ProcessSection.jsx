export default function ProcessSection({ etapas }) {
  return (
    <section id="processo" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Processo</span>
          <h2>O processo terapêutico se inicia de forma simples e acolhedora, pensado para que você se sinta à vontade desde o primeiro contato.</h2>
        </div>

        <div className="text-stack section-intro-text text-card">
          <p>
            Ao longo dos encontros, o vínculo vai sendo construído gradualmente, sustentado pela confiança, pela escuta atenta e pela presença. O processo se desenvolve de maneira colaborativa, acompanhando aquilo que se mostra importante em cada momento, sem pressa e sem imposições.
          </p>
          <p>
            Com paciência e consistência, a terapia se torna um espaço de elaboração, reflexão e cuidado, favorecendo maior clareza, fortalecimento interno e novas possibilidades de se relacionar consigo e com a vida.
          </p>
        </div>

        <div className="steps-grid">
          {etapas.map((item) => (
            <article key={item.numero} className="card step-card">
              <span className="step-number">{item.numero}</span>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
