import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/business'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="section section-cta">
      <div className="container">
        <Reveal className="cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" />
              Your next look starts here
            </p>
            <h2>Ready for your next look?</h2>
            <p>Visit Signature Fadez and leave with a style that speaks for itself.</p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={business.phoneHref}>
              Call now
              <Phone size={15} strokeWidth={1.6} />
            </a>
            <a className="button button-dark-outline" href={business.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
              <MessageCircle size={15} strokeWidth={1.6} />
            </a>
            <a className="button button-dark-outline" href={business.mapsUrl} target="_blank" rel="noreferrer">
              Get directions
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
