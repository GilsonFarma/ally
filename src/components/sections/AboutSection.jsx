export default function AboutSection({ aboutPhotoSrc, sobreTopicos }) {
  return (
    <section id="sobre" className="section">
      <div className="container two-columns">
        <div className="photo-wrap">
          <div className="photo-outline"></div>
          <div className="photo-card">
            <img src={aboutPhotoSrc} alt="Foto de Allany Rodrigues" />
          </div>
        </div>

        <div className="content-col text-card">
          <span className="section-tag">Sobre</span>
          <h2>Uma presença profissional acolhedora, sensível e comprometida com a escuta.</h2>

          <div className="text-stack">
            <p>
              Formada pela UPE — Universidade de Pernambuco, atuo há 5 anos como psicóloga clínica e, mais recentemente, professora universitária. Minha trajetória é atravessada pelo compromisso com um cuidado ético, sensível e profundamente humano. Com experiência na clínica e na saúde pública, especialmente no contexto de vulnerabilidade, venho construindo uma prática orientada pela escuta do vivido e pelo respeito à singularidade de cada pessoa.
            </p>
            <p>
              Minha atuação se fundamenta na perspectiva fenomenológica, compreendendo o sujeito em sua existência concreta, em seus modos de ser-no-mundo, sem reduzi-lo a diagnósticos ou classificações. Acredito no encontro como espaço de transformação — um lugar onde a palavra pode emergir, os sentidos podem se desvelar e novas possibilidades de existir podem ser construídas.
            </p>
            <p>
              Meu trabalho é, antes de tudo, um convite: um espaço de pausa, reflexão e abertura, onde você possa se aproximar de si mesmo com mais cuidado, consciência e autenticidade.
            </p>
          </div>

          <div className="chips">
            {sobreTopicos.map((item) => (
              <div key={item} className="chip">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
