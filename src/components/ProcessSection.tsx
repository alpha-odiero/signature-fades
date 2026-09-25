import { MessageCircle, Scissors, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import PageSectionHeading from './PageSectionHeading'

const steps = [
  {
    number: '01',
    title: 'Start with your look',
    description: 'Tell us what feels right, what needs refreshing, or what you want to try next.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Shape the details',
    description: 'We work through the cut, edges, and finish with attention to the whole silhouette.',
    icon: Scissors,
  },
  {
    number: '03',
    title: 'Leave feeling fresh',
    description: 'Take a final look, ask any questions, and leave ready for your next day.',
    icon: Sparkles,
  },
]

export default function ProcessSection() {
  return (
    <section className="section section-process">
      <div className="container">
        <PageSectionHeading
          eyebrow="The Signature Fades process"
          title="Simple steps. Considered finishes."
          description="Good grooming should feel straightforward from the first conversation to the final check."
          light
        />
        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal className="process-card" delay={index * 90} key={step.number}>
                <div className="process-card-top">
                  <span>{step.number}</span>
                  <Icon size={21} strokeWidth={1.35} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
