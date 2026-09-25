import { ArrowUpRight, Check, Phone } from 'lucide-react'
import { business, services } from '../data/business'
import Reveal from './Reveal'
import PageSectionHeading from './PageSectionHeading'

export default function ServiceDetails() {
  return (
    <section className="section section-service-details">
      <div className="container">
        <PageSectionHeading
          eyebrow="Service details"
          title="A closer look at what we do"
          description="Every service is built around a clean finish, a clear conversation, and a look that suits the person wearing it."
        />
        <div className="service-detail-list">
          {services.map((service, index) => (
            <Reveal className="service-detail-row" delay={index * 55} key={service.name}>
              <span className="service-detail-index">0{index + 1}</span>
              <div className="service-detail-copy">
                <p className="eyebrow">
                  <span className="eyebrow-dot" />
                  {service.name}
                </p>
                <h3>{service.description}</h3>
                <p className="body-copy">{service.longDescription}</p>
                <div className="service-detail-meta">
                  <div>
                    <span className="meta-label">Includes</span>
                    <ul>
                      {service.details?.map((detail) => (
                        <li key={detail}>
                          <Check size={14} strokeWidth={1.7} aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="meta-label">Good for</span>
                    <div className="tag-list">
                      {service.idealFor.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <a className="service-detail-call" href={business.phoneHref}>
                Ask about it
                <Phone size={15} strokeWidth={1.6} aria-hidden="true" />
                <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
