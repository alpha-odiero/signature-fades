import { MessageCircle, Phone } from 'lucide-react'
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
              Walk-ins welcome
            </p>
            <h2>Send a photo. Get the perfect cut.</h2>
            <p>
              Not sure what to ask for? Message us a picture of a cut you like, or reserve a slot before
              you travel. Open seven days a week, 9am to 8pm.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={business.whatsappUrl} target="_blank" rel="noreferrer">
              Message us
              <MessageCircle size={15} strokeWidth={1.6} />
            </a>
            <a className="button button-dark-outline" href={business.phoneHref}>
              Call the shop
              <Phone size={15} strokeWidth={1.6} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
