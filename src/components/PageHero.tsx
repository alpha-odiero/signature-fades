import { ArrowUpRight, Phone } from 'lucide-react'
import { business } from '../data/business'
import Reveal from './Reveal'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  sectionNumber: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = `${business.shortName} page`,
  sectionNumber,
  primaryLabel = 'Call the shop',
  primaryHref = business.phoneHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  const hasImage = Boolean(image)

  return (
    <section
      className={`page-hero${hasImage ? '' : ' page-hero-text'}`}
      style={!hasImage ? { ['--page-hero-bg' as string]: `url(${business.heroBackground})` } : undefined}
    >
      <div className={`container${hasImage ? ' page-hero-grid' : ' page-hero-center'}`}>
        <Reveal className="page-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {eyebrow}
          </p>
          <p className="section-number">{sectionNumber}</p>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
          <div className="page-hero-actions">
            <a className="button button-primary" href={primaryHref}>
              {primaryLabel}
              <Phone size={15} strokeWidth={1.7} />
            </a>
            {secondaryLabel && secondaryHref && (
              <a className="button button-secondary" href={secondaryHref}>
                {secondaryLabel}
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </a>
            )}
          </div>
        </Reveal>
        {hasImage && image && (
          <Reveal className="page-hero-media" delay={160}>
            <figure>
              <img src={image} alt={imageAlt} loading="eager" />
              <figcaption>
                <span>{business.shortName}</span>
                <span>Murang'a · Kenya</span>
              </figcaption>
            </figure>
          </Reveal>
        )}
      </div>
    </section>
  )
}
