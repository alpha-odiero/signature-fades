import { ArrowDown, ArrowUpRight, Phone } from 'lucide-react'
import { business, routes } from '../data/business'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <img src={business.heroBackground} alt="" loading="eager" decoding="async" fetchPriority="high" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <Reveal className="hero-copy">
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" />
            {business.eyebrow}
          </p>
          <h1>{business.shortName}</h1>
          <p className="hero-tagline">{business.tagline}</p>
          <p className="hero-description">{business.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={business.phoneHref}>
              Book by phone
              <Phone size={15} strokeWidth={1.7} />
            </a>
            <a className="button button-light-outline" href={business.mapsUrl} target="_blank" rel="noreferrer">
              Get directions
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </a>
          </div>
        </Reveal>
        <div className="hero-sider" aria-hidden="true">
          <img src={business.heroImage} alt="Signature Fadez barber shop" loading="eager" decoding="async" fetchPriority="high" />
        </div>
      </div>
      <div className="container hero-footer">
        <span>01 <span className="hero-footer-line" /> 05</span>
        <a href={`${routes.about}`} className="scroll-cue">
          Scroll to explore
          <ArrowDown size={15} strokeWidth={1.6} />
        </a>
      </div>
    </section>
  )
}
