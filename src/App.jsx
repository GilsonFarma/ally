// ═══════════════════════════════════════════════════════════
// MENU DE NAVEGAÇÃO - Links do header que levam para seções
// ═══════════════════════════════════════════════════════════
const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#processo', label: 'Processo' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

// ═══════════════════════════════════════════════════════════
// DESTAQUES - Cards que aparecem na seção hero (3 principais benefícios)
// ═══════════════════════════════════════════════════════════
const destaques = [
  {
    titulo: 'Escuta ética',
    texto: 'Acolhimento com presença, respeito à singularidade e atenção à história de cada pessoa.',
  },
  {
    titulo: 'Ambiente seguro',
    texto: 'Um espaço de confiança para falar, refletir e elaborar vivências com mais clareza.',
  },
  {
    titulo: 'Cuidado humanizado',
    texto: 'Atendimento construído com sensibilidade, profissionalismo e comunicação acolhedora.',
  },
]

// ═══════════════════════════════════════════════════════════
// TÓPICOS DA SEÇÃO SOBRE - Chips que listam características principais
// ═══════════════════════════════════════════════════════════
const sobreTopicos = [
  'Escuta atenta e individualizada',
  'Atendimento com ética e presença',
  'Comunicação clara e acolhedora',
  'Espaço de confiança e respeito',
]

// ═══════════════════════════════════════════════════════════
// CARDS DE ABORDAGEM - Explicação de como você trabalha (3 aspectos)
// ═══════════════════════════════════════════════════════════
const abordagemCards = [
  {
    titulo: 'Escuta clínica',
    texto: 'Uma escuta atenta, sem julgamentos ou rótulos, aberta a compreender o que faz sentido na história e no momento de vida de quem chega. No atendimento, isso significa receber a experiência vivida de cada pessoa tal como ela se apresenta.',
  },
  {
    titulo: 'Condução dos encontros',
    texto: 'O processo acontece no seu ritmo, respeitando o tempo necessário para que cada experiência possa ser compreendida e elaborada com cuidado. A construção do vínculo é parte essencial desse caminho, sendo cultivada de forma gradual, a partir da confiança, da escuta e da presença.',
  },
  {
    titulo: 'Objetivo do acompanhamento',
    texto: 'Ao longo dos encontros, o trabalho se desenvolve de maneira colaborativa, acompanhando aquilo que se mostra significativo em cada momento. Assim, o processo terapêutico vai construindo, favorecendo maior clareza, autonomia e conexão consigo mesmo.',
  },
]

// ═══════════════════════════════════════════════════════════
// ETAPAS DO PROCESSO - 3 passos que mostram o fluxo de atendimento
// ═══════════════════════════════════════════════════════════
const etapas = [
  {
    numero: '01',
    titulo: 'Primeiro contato',
    texto: 'O primeiro contato pode acontecer de forma simples e direta, sem necessidade de preparo prévio. São compartilhadas informações sobre modalidades de atendimento, valores, horários e formas de acompanhamento. A proposta é que esse primeiro passo aconteça com leveza, permitindo que você se sinta seguro para compreender o processo.',
  },
  {
    numero: '02',
    titulo: 'Agendamento',
    texto: 'O agendamento acontece por WhatsApp, onde te dou acesso ao app com dias e horários disponíveis. Você pode escolher entre as modalidades online e presencial.',
  },
  {
    numero: '03',
    titulo: 'Início do acompanhamento',
    texto: 'Os primeiros encontros favorecem escuta, vínculo e compreensão do que será construído no processo. O vínculo vai sendo construído gradualmente, sustentado pela confiança, pela escuta atenta e pela presença.',
  },
]

// ═══════════════════════════════════════════════════════════
// PERGUNTAS FREQUENTES - FAQ que responde dúvidas comuns dos visitantes
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    pergunta: 'Como posso agendar um encontro?',
    resposta: 'Você pode entrar em contato pelo WhatsApp. É simples, direto e facilita o primeiro contato de forma acolhedora.',
  },
  {
    pergunta: 'Os atendimentos são online ou presenciais?',
    resposta: 'As duas opções estão disponíveis. Você pode escolher de acordo com sua preferência.',
  },
  {
    pergunta: 'Quanto tempo dura cada encontro?',
    resposta: 'Cada encontro tem duração de aproximadamente 40 minutos.',
  },
  {
    pergunta: 'Como funciona o primeiro encontro?',
    resposta: 'O primeiro encontro tem um caráter introdutório, sendo um momento dedicado a te conhecer e compreender o que te traz à terapia. Nesse encontro, também são apresentados aspectos importantes do processo terapêutico. A proposta é que você se sinta à vontade para perceber como é esse espaço e decidir com mais segurança sobre a continuidade do processo.',
  },
]

// ═══════════════════════════════════════════════════════════════════════════════════
// 🎯 COMPONENTE PRINCIPAL DO SITE - Psicóloga Premium
// ═══════════════════════════════════════════════════════════════════════════════════
// Estrutura do site:
// 1. HEADER - Logo + Menu de navegação + Botão CTA
// 2. SEÇÃO HERO - Apresentação com foto grande e destaques
// 3. SEÇÃO SOBRE - Quem é você + Foto + Tópicos
// 4. SEÇÃO ABORDAGEM - Como você trabalha (3 cards)
// 5. SEÇÃO PROCESSO - 3 passos do fluxo de atendimento
// 6. SEÇÃO DARK - Destacar valor da presença digital
// 7. FAQ - Perguntas frequentes
// 8. CONTATO - CTA final + informações de contato
// 9. FOOTER - Copyright
// ═══════════════════════════════════════════════════════════════════════════════════

export default function App() {
  return (
    <div className="site">
      {/* ═══════════════ HEADER - Logo + Menu + Botão ═══════════════ */}
      <header className="header">
        <div className="container header-inner">
          {/* Logo que leva para o topo */}
          <a href="#inicio" className="brand">
            <img src="/logo.png" alt="Logo Allany Rodrigues" className="brand-logo" />
          </a>

          {/* Menu de navegação (só aparece em desktop) */}
          <nav className="nav desktop-only">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão CTA principal (só aparece em desktop) */}
          <a
            href="https://wa.me/5587991417597"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary desktop-only"
          >
            Agendar encontro
          </a>
        </div>
      </header>

      <main>
        {/* ═══════════════ SEÇÃO HERO - Apresentação principal ═══════════════ */}
        <section id="inicio" className="hero">
          {/* Elementos de design (fundos desfocados) */}
          <div className="hero-blur blur-left"></div>
          <div className="hero-blur blur-right"></div>
          {/* Padrão decorativo de pontos */}
          <div className="pattern"></div>

          <div className="container hero-grid">
            {/* LADO ESQUERDO - Textos e CTA */}
            <div className="hero-text text-card">
              <span className="eyebrow">Atendimento psicoterapêutico online e presencial</span>

              <h2>
                Um espaço de escuta, presença e cuidado para quem deseja se olhar com mais profundidade.
              </h2>

              <p className="hero-description">
                Um encontro acolhedor, ético e humano, que se orienta pela escuta da experiência vivida, favorecendo o desvelar de sentidos, a elaboração emocional e a construção de caminhos mais conscientes e autênticos.
              </p>

              {/* Botões CTA - Principal e Secundário */}
              <div className="hero-actions">
                <a
                  href="https://wa.me/5587991417597"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Agendar encontro
                </a>
                <a href="#sobre" className="btn btn-secondary">
                  Conhecer o trabalho
                </a>
              </div>

              {/* 3 Destaques com os principais valores */}
              <div className="highlight-grid">
                {destaques.map((item) => (
                  <article key={item.titulo} className="card mini-card">
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* LADO DIREITO - Foto da psicóloga */}
            <div className="hero-visual">
              <div className="hero-frame">
                <span className="photo-label">Allany Rodrigues</span>
                <img src="/psicologa.png" alt="Foto da psicóloga" className="hero-image" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SEÇÃO SOBRE - Quem você é + Foto ═══════════════ */}
        <section id="sobre" className="section">
          <div className="container two-columns">
            {/* LADO ESQUERDO - Foto com efeito de moldura */}
            <div className="photo-wrap">
              <div className="photo-outline"></div>
              <div className="photo-card">
                <img src="/sobre.png" alt="Foto de Allany Rodrigues" />
              </div>
            </div>

            {/* LADO DIREITO - Conteúdo sobre você */}
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

              {/* Chips com tópicos principais */}
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

        {/* ═══════════════ SEÇÃO ABORDAGEM - Como você trabalha ═══════════════ */}
        <section id="abordagem" className="section section-soft">
          <div className="container two-columns alt-columns">
            {/* LADO ESQUERDO - Texto explicativo */}
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

            {/* LADO DIREITO - 3 Cards com aspectos da abordagem */}
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

        {/* ═══════════════ SEÇÃO PROCESSO - 3 Passos do fluxo ═══════════════ */}
        <section id="processo" className="section">
          <div className="container">
            {/* Título e subtítulo */}
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

            {/* Grid com 3 cards mostrando as etapas */}
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

        {/* ═══════════════ SEÇÃO DARK - Destaque de valor ═══════════════ */}
        <section className="section section-dark">
          <div className="container dark-single">
            <h2 className="dark-only-title">De olhos abertos.</h2>
          </div>
        </section>

        {/* ═══════════════ SEÇÃO FAQ - Perguntas frequentes ═══════════════ */}
        <section id="faq" className="section">
          <div className="container narrow">
            {/* Título centralizado */}
            <div className="section-head center">
              <span className="section-tag">FAQ</span>
              <h2>Perguntas frequentes</h2>
            </div>

            {/* Lista de cards com perguntas e respostas */}
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

        {/* ═══════════════ SEÇÃO CONTATO - CTA final ═══════════════ */}
        <section id="contato" className="section section-contact">
          <div className="container contact-box">
            {/* Lado esquerdo - Texto e botões */}
            <div>
              <span className="section-tag">Contato</span>
              <h2>Vamos criar um espaço de cuidado desde o primeiro contato.</h2>
              <p className="contact-description">
                Sou psicóloga clínica (CRP 02/25079) e professora universitária no curso de Psicologia, com especializações em Tanatologia, Saúde Mental, Saúde Pública, Psicologia Social, Psicologia do Esporte, Atenção Primária à Saúde e Adolescência. Atendo adolescentes e adultos, de forma presencial e online.
              </p>

              {/* Botões CTA */}
              <div className="hero-actions">
                <a
                  href="https://wa.me/5587991417597"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Falar no WhatsApp
                </a>
                <a href="#inicio" className="btn btn-secondary">
                  Voltar ao topo
                </a>
              </div>
            </div>

            {/* Lado direito - Informações de contato */}
            <div className="contact-panel">
              <div className="contact-item">
                <strong>WhatsApp</strong>
                <span>(87) 99141-7597</span>
              </div>
              <div className="contact-item">
                <strong>Instagram</strong>
                <a href="https://instagram.com/allanyrodriguespsi" target="_blank" rel="noreferrer">
                  <span>@allanyrodriguespsi</span>
                </a>
              </div>
              <div className="contact-item">
                <strong>E-mail</strong>
                <a href="mailto:allanyrodriguespsi@gmail.com">
                  <span>allanyrodriguespsi@gmail.com</span>
                </a>
              </div>
              <div className="contact-item">
                <strong>Atendimento</strong>
                <span>Online e presencial</span>
              </div>
              {/* Endereço só aparece para atendimento presencial */}
              <div className="endereco">
                <strong>Endereço</strong>
                <span>Avenida Rui Barbosa, 588<br />
                  Empresarial Luze’s – 2º andar, sala 17</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════ FOOTER - Copyright ═══════════════ */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Allany Rodrigues • Psicóloga • Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
