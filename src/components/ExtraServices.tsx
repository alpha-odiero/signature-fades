import { ArrowUpRight } from 'lucide-react'
import { business, extraServices, routes } from '../data/business'
import Reveal from './Reveal'

export default function ExtraServices() {
  return (
    <section className="section section-extra">
      <div className="container">
        <div className="extra-layout">
          <Reveal className="extra-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Featured packages
            </p>
            <p className="section-number">03 <span>/</span> 04</p>
            <h2>More from us</h2>
            <p className="body-copy">
              Combine the services you need for a complete refresh. Choose a package, then call the
              shop to confirm what works for you.
            </p>
            <a className="text-link" href={routes.contact}>
              View all
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </a>
            <div className="extra-signature">
              <span className="signature-line" />
              <span>Sharp cuts. Clean finishes.</span>
            </div>
          </Reveal>

          <div className="extra-cards">
            {extraServices.map((service, index) => (
              <Reveal className="extra-card" delay={index * 90} key={service.name}>
                <a href={routes.contact} aria-label={`Explore ${service.name}`}>
                  <div className="extra-card-image">
                    <img src={service.image} alt={service.name} loading="lazy" decoding="async" />
                    <span className="extra-card-number">0{index + 1}</span>
                  </div>
                  <div className="extra-card-copy">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <span className="card-link">
                      Ask about it
                      <ArrowUpRight size={15} strokeWidth={1.6} />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <p className="extra-watermark" aria-hidden="true">
        {business.shortName}
      </p>
    </section>
  )
}
