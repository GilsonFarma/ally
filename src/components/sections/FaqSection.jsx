export default function FaqSection({ faqs }) {
  return (
    <section id="faq" className="section">
      <div className="container narrow">
        <div className="section-head center">
          <span className="section-tag">FAQ</span>
          <h2>Perguntas frequentes</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <article key={item.pergunta} className="card faq-card">
              <h3>{item.pergunta}</h3>
              <p>{item.resposta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
