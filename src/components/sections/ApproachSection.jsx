export default function ApproachSection({ abordagemCards }) {
  return (
    <section id="abordagem" className="section section-soft">
      <div className="container two-columns alt-columns">
        <div className="content-col text-card">
          <span className="section-tag">Abordagem</span>
          <h2>Um espaço de escuta, presença e cuidado para quem deseja se compreender com mais profundidade.</h2>
          <div className="text-stack">
            <p>
              Minha prática é orientada pela perspectiva fenomenológica, que valoriza a experiência vivida de cada pessoa tal como ela se apresenta. No atendimento, isso significa uma escuta atenta, sem julgamentos ou rótulos, aberta a compreender o que faz sentido na história e no momento de vida de quem chega. Mais do que oferecer respostas prontas, o trabalho acontece como um encontro que convida à reflexão, ao reconhecimento de si e à construção de novos olhares.
            </p>
            <p>
              Um espaço de escuta, presença e cuidado, onde sua história é acolhida com respeito e sensibilidade. Um processo que favorece o autoconhecimento, a elaboração emocional e a construção de caminhos mais conscientes. Mais do que respostas prontas, a proposta é caminhar junto, possibilitando que você se compreenda com mais clareza e encontre formas mais autênticas de viver.
            </p>
          </div>
        </div>

        <div className="stack-cards">
          {abordagemCards.map((item) => (
            <article key={item.titulo} className="card">
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
