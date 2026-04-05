export default function AvaliacoesSection() {
  const googleReviewLink = "https://g.page/r/CR8Fb5fSji_oEBM/review";

  const avaliacoes = [
    {
      nome: "Paciente",
      estrelas: 5,
      texto:
        "Atendimento acolhedor, humano e muito profissional. Me senti à vontade desde o primeiro contato.",
    },
    {
      nome: "Paciente",
      estrelas: 5,
      texto:
        "Uma experiência muito positiva. Escuta atenta e condução cuidadosa em todo o processo.",
    },
    {
      nome: "Paciente",
      estrelas: 5,
      texto:
        "Profissional sensível e competente. O atendimento transmite confiança e acolhimento.",
    },
  ];

  return (
    <section id="avaliacoes" className="avaliacoes-section">
      <div className="avaliacoes-container">
        <div className="avaliacoes-header">
          <span className="avaliacoes-tag">Google</span>
          <h2>Avaliações</h2>
          <p>
            Sua opinião é muito importante. Veja alguns depoimentos e, se quiser,
            deixe sua avaliação no Google.
          </p>
        </div>

        <div className="avaliacoes-resumo">
          <div className="nota">5,0</div>
          <div className="estrelas">★★★★★</div>
          <p>Atendimento avaliado com excelência</p>
        </div>

        <div className="avaliacoes-grid">
          {avaliacoes.map((item, index) => (
            <article key={index} className="avaliacao-card">
              <div className="avaliacao-topo">
                <strong>{item.nome}</strong>
                <span>{"★".repeat(item.estrelas)}</span>
              </div>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>

        <div className="avaliacoes-acoes">
          <a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="botao botao-primario"
          >
            Avaliar no Google
          </a>

          <a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="botao botao-secundario"
          >
            Ver avaliações
          </a>
        </div>
      </div>
    </section>
  );
}
