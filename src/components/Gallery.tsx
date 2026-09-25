import { ArrowUpRight } from 'lucide-react'
import { gallery, routes } from '../data/business'
import Reveal from './Reveal'

export default function Gallery() {
  return (
    <section className="section section-gallery" id="gallery">
      <div className="container">
        <Reveal className="gallery-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              A look around
            </p>
            <h2>See the Signature.</h2>
          </div>
          <p>
            A visual edit of sharp cuts, clean lines, thoughtful grooming, and the space where your
            next look takes shape.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {gallery.slice(0, 5).map((item, index) => (
            <Reveal className={`gallery-item ${item.className}`} delay={index * 65} key={item.image}>
              <figure>
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption>
                  <span>0{index + 1}</span>
                  <span>View detail</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="gallery-footer">
          <span>Selected work / Signature Fades</span>
          <a className="text-link" href={routes.contact}>
            Plan your visit
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </section>
  )
}
