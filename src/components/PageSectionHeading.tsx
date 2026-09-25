import Reveal from './Reveal'

type PageSectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}

export default function PageSectionHeading({ eyebrow, title, description, light = false }: PageSectionHeadingProps) {
  return (
    <Reveal className={`page-section-heading ${light ? 'is-light' : ''}`}>
      <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
        <span className="eyebrow-dot" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  )
}
