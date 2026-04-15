import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import AboutSection from './components/sections/AboutSection'
import ApproachSection from './components/sections/ApproachSection'
import ContactSection from './components/sections/ContactSection'
import FaqSection from './components/sections/FaqSection'
import HeroSection from './components/sections/HeroSection'
import ManifestoSection from './components/sections/ManifestoSection'
import ProcessSection from './components/sections/ProcessSection'
import AvaliacoesSection from './components/sections/AvaliacoesSection'
import {
  abordagemCards,
  contact,
  destaques,
  faqs,
  links,
  siteImages,
  sobreTopicos,
  etapas,
} from './content/siteContent'
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <div className="site">
      <Header links={links} logoSrc={siteImages.brandLogo} whatsappUrl={contact.whatsappUrl} />

      <main>
        <HeroSection
          destaques={destaques}
          heroPhotoSrc={siteImages.heroPhoto}
          whatsappUrl={contact.whatsappUrl}
        />
        <AboutSection aboutPhotoSrc={siteImages.aboutPhoto} sobreTopicos={sobreTopicos} />
        <ApproachSection abordagemCards={abordagemCards} />
        <ProcessSection etapas={etapas} />
        <ManifestoSection />
        <FaqSection faqs={faqs} />
        <AvaliacoesSection />
        <ContactSection contact={contact} />
      </main>

      <Footer />
      <Analytics />
    </div>
  )
}
