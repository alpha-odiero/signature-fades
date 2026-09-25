import { Clock3, MapPin, Phone, Sparkles } from 'lucide-react'
import { business } from '../data/business'
import Reveal from './Reveal'
import PageSectionHeading from './PageSectionHeading'

const visitNotes = [
  {
    title: 'Call ahead',
    description: 'If you need to check availability or talk through a service, call the shop before you set off.',
    icon: Phone,
  },
  {
    title: 'Bring your reference',
    description: 'A photo or a clear idea of the finish you want can help make the conversation more useful.',
    icon: Sparkles,
  },
  {
    title: 'Plan your arrival',
    description: 'Monday to Sunday, 9:00 AM to 8:00 PM, so any day of the week works for your visit.',
    icon: Clock3,
  },
]

export default function VisitSection() {
  return (
    <section className="section section-visit">
      <div className="container visit-layout">
        <PageSectionHeading
          eyebrow="Before you visit"
          title="Make the most of your time at the shop."
          description="A little preparation can make your visit feel easier, especially when you are trying a new look or combining services."
        />
        <div className="visit-notes">
          {visitNotes.map((note, index) => {
            const Icon = note.icon
            return (
              <Reveal className="visit-note" delay={index * 70} key={note.title}>
                <div className="visit-note-icon">
                  <Icon size={18} strokeWidth={1.45} aria-hidden="true" />
                </div>
                <div>
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="visit-location-card" delay={180}>
          <div>
            <span className="meta-label">Visit us</span>
            <h3>{business.address}</h3>
            <p>Use Google Maps for nearby places and directions before you leave.</p>
          </div>
          <a className="button button-primary" href={business.mapsUrl} target="_blank" rel="noreferrer">
            Get directions
            <MapPin size={16} strokeWidth={1.6} />
          </a>
        </Reveal>
        <p className="visit-hours-line">
          <Clock3 size={15} strokeWidth={1.5} aria-hidden="true" />
          {business.hours} · {business.weekNote}
        </p>
      </div>
    </section>
  )
}
