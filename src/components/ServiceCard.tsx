import { ArrowUpRight } from 'lucide-react'
import { routes, type Service } from '../data/business'

type ServiceCardProps = {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="service-card">
      <a className="service-card-link" href={routes.contact} aria-label={`Discover ${service.name}`}>
        <div className="service-card-image">
          <img src={service.image} alt={service.name} loading="lazy" />
          <span className="service-card-index">0{index + 1}</span>
          <span className="service-card-arrow" aria-hidden="true">
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </span>
        </div>
        <div className="service-card-body">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          {service.details && <span className="service-detail">{service.details.join(' · ')}</span>}
          <span className="card-link">
            Discover
            <ArrowUpRight size={15} strokeWidth={1.6} />
          </span>
        </div>
      </a>
    </article>
  )
}
