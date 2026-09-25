import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import darkLogo from '../assets/dark logo.png'
import { business, navigation, routes } from '../data/business'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand brand-footer" href={routes.home} aria-label={`${business.name} home`}>
              <img className="brand-logo" src={darkLogo} alt={business.name} loading="eager" decoding="async" />
            </a>
            <p>{business.tagline}</p>
            <div className="social-links">
              <a href={business.phoneHref} aria-label="Call Signature Fades">
                <Phone size={17} strokeWidth={1.45} />
              </a>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" aria-label="Get directions">
                <MapPin size={17} strokeWidth={1.45} />
              </a>
              <a href={business.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Message Signature Fades on WhatsApp">
                <MessageCircle size={17} strokeWidth={1.45} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <nav aria-label="Footer navigation">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column footer-contact-column">
            <span className="footer-label">Find us</span>
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="footer-contact-line">
              <MapPin size={15} strokeWidth={1.45} aria-hidden="true" />
              {business.address}
            </a>
            <a href={business.phoneHref} className="footer-contact-line">
              <Phone size={15} strokeWidth={1.45} aria-hidden="true" />
              {business.phone}
            </a>
            <a href={business.whatsappUrl} target="_blank" rel="noreferrer" className="footer-contact-line">
              <MessageCircle size={15} strokeWidth={1.45} aria-hidden="true" />
              WhatsApp us
            </a>
            <p className="footer-hours">{business.hours}</p>
            <p className="footer-hours">{business.weekNote}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-legal">© 2026 Signature Fades Barber Shop. All rights reserved.</span>
          <a href={routes.home} className="back-to-top">
            Back to top
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  )
}
