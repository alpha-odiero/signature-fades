import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, openingHours } from '../data/business'
import Reveal from './Reveal'

export default function ContactSection() {
  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <Reveal className="contact-intro">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Contact Signature Fadez
            </p>
            <p className="section-number">04 <span>/</span> 04</p>
            <h2>Ready for your next look?</h2>
            <p className="body-copy">
              Have a question, want to check availability, or ready for a fresh look? Call the shop
              and we will help you find the right service.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={business.phoneHref}>
                Call now
                <Phone size={15} strokeWidth={1.6} />
              </a>
              <a className="button button-secondary" href={business.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
                <MessageCircle size={15} strokeWidth={1.6} />
              </a>
              <a className="button button-secondary" href={business.mapsUrl} target="_blank" rel="noreferrer">
                Get directions
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-details" delay={150}>
            <div className="contact-detail-row">
              <div className="contact-detail-icon">
                <MapPin size={18} strokeWidth={1.45} aria-hidden="true" />
              </div>
              <div>
                <span className="meta-label">Find us</span>
                <a href={business.mapsUrl} target="_blank" rel="noreferrer">
                  {business.address}
                </a>
              </div>
            </div>
            <div className="contact-detail-row">
              <div className="contact-detail-icon">
                <Phone size={18} strokeWidth={1.45} aria-hidden="true" />
              </div>
              <div>
                <span className="meta-label">Phone</span>
                <a href={business.phoneHref}>{business.phone}</a>
              </div>
            </div>
            <div className="contact-detail-row">
              <div className="contact-detail-icon">
                <MessageCircle size={18} strokeWidth={1.45} aria-hidden="true" />
              </div>
              <div>
                <span className="meta-label">WhatsApp</span>
                <a href={business.whatsappUrl} target="_blank" rel="noreferrer">
                  Message Signature Fadez
                </a>
              </div>
            </div>
            <div className="contact-detail-row">
              <div className="contact-detail-icon">
                <Clock3 size={18} strokeWidth={1.45} aria-hidden="true" />
              </div>
              <div>
                <span className="meta-label">Opening hours</span>
                <p>{business.hours}</p>
                <p className="closed-day">{business.closedDay}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="contact-links" delay={210}>
          <a className="contact-link-card" href={business.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={19} strokeWidth={1.45} aria-hidden="true" />
            <span>
              <strong>Get directions</strong>
              <small>Open Signature Fadez in Google Maps</small>
            </span>
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
          <a className="contact-link-card" href={business.reviewUrl} target="_blank" rel="noreferrer">
            <StarMark />
            <span>
              <strong>Leave us a Google Review</strong>
              <small>Your experience helps others discover us</small>
            </span>
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
          <a className="contact-link-card" href={business.phoneHref}>
            <Phone size={19} strokeWidth={1.45} aria-hidden="true" />
            <span>
              <strong>Call Signature Fadez</strong>
              <small>{business.phone}</small>
            </span>
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
          <a className="contact-link-card" href={business.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} strokeWidth={1.45} aria-hidden="true" />
            <span>
              <strong>Message on WhatsApp</strong>
              <small>Send a quick message to the shop</small>
            </span>
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
        </Reveal>

        <Reveal className="schedule-card" delay={260}>
          <div className="schedule-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                Opening hours
              </p>
              <h3>Open 6 days a week.</h3>
            </div>
            <span className="schedule-note">Sunday closed</span>
          </div>
          <div className="schedule-grid">
            {openingHours.map((item) => (
              <div className={`schedule-row ${item.hours === 'Closed' ? 'is-closed' : ''}`} key={item.day}>
                <span>{item.day}</span>
                <strong>{item.hours}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StarMark() {
  return (
    <svg
      className="contact-icon-svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 2.78 5.63 6.22.9-4.5 4.38 1.06 6.19L12 17.18 6.44 20.1l1.06-6.19L3 9.53l6.22-.9L12 3Z" />
    </svg>
  )
}
