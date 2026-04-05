export default function Header({ links, logoSrc, whatsappUrl }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="brand">
          <img src={logoSrc} alt="Logo Allany Rodrigues" className="brand-logo" />
        </a>

        <nav className="nav desktop-only">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary desktop-only">
          Agendar encontro
        </a>
      </div>
    </header>
  )
}
