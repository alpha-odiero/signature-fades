import { ArrowUpRight, Heart, Scissors, Sparkles } from 'lucide-react'
import { business, routes } from '../data/business'
import Reveal from './Reveal'
import PageSectionHeading from './PageSectionHeading'

const pillars = [
  {
    number: '01',
    title: 'Personal by design',
    description: 'There is no one-size-fits-all finish. Your hair, your routine, and your preference lead the conversation.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Precision in the details',
    description: 'The shape matters, but so do the edges, transitions, and small details that make a cut feel complete.',
    icon: Scissors,
  },
  {
    number: '03',
    title: 'A comfortable visit',
    description: 'A clear, welcoming shop makes it easier to ask questions and leave feeling looked after.',
    icon: Heart,
  },
]

export default function StorySection() {
  return (
    <section className="section section-story">
      <div className="container">
        <div className="story-layout">
          <Reveal className="story-copy">
            <PageSectionHeading
              eyebrow="The Signature Fades approach"
              title="A modern shop with a personal point of view."
              description="Signature Fades brings together practical barbering and everyday grooming for people who want to look sharp without overthinking the process."
            />
            <p className="body-copy body-copy-secondary">
              The goal is simple: make the experience feel considered from the first look in the mirror
              to the final check before you leave. That means a clean space, a clear conversation, and
              a finish that works beyond the chair.
            </p>
            <a className="text-link" href={routes.services}>
              See the service menu
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </a>
          </Reveal>
          <Reveal className="story-image" delay={150}>
            <img src={business.heroImage} alt="Signature Fades barber shop atmosphere" loading="lazy" />
            <span className="story-image-label">Sharp looks start here</span>
          </Reveal>
        </div>
        <div className="story-pillars">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal className="story-pillar" delay={index * 80} key={pillar.number}>
                <div className="story-pillar-top">
                  <span>{pillar.number}</span>
                  <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
