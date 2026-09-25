import { ArrowUpRight } from 'lucide-react'
import { gallery, routes } from '../data/business'
import Reveal from './Reveal'

const galleryNotes = [
  {
    number: '01',
    title: 'The finish',
    description: 'Clean edges, balanced fades, and details that hold the whole look together.',
  },
  {
    number: '02',
    title: 'The atmosphere',
    description: 'A considered space for taking a pause and giving your grooming some time.',
  },
  {
    number: '03',
    title: 'The range',
    description: 'Hair, beard, skin, nails, and a little time to reset—all in one visit.',
  },
]

export default function GalleryLookbook() {
  return (
    <section className="section section-gallery-page">
      <div className="container">
        <div className="gallery-page-grid">
          {gallery.map((item, index) => (
            <Reveal className={`gallery-page-item gallery-page-item-${index + 1}`} delay={index * 45} key={`${item.image}-${index}`}>
              <figure>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <figcaption>
                  <span>0{index + 1}</span>
                  <span>Signature Fades</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="gallery-page-notes">
          {galleryNotes.map((note, index) => (
            <Reveal className="gallery-page-note" delay={index * 80} key={note.number}>
              <span>{note.number}</span>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="gallery-page-footer">
          <p>Every visit is a chance to make the next one even easier to love.</p>
          <a className="text-link" href={routes.contact}>
            Plan your visit
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </section>
  )
}
