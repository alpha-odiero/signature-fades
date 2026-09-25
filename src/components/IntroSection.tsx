import { ArrowUpRight } from 'lucide-react'
import heroImage from '../assets/hero sider.webp'
import styleImage from '../assets/style.webp'
import { business, routes } from '../data/business'
import Reveal from './Reveal'

export default function IntroSection() {
  return (
    <section className="section section-intro" id="about">
      <div className="container">
        <div className="intro-layout">
          <div className="intro-images">
            <Reveal className="intro-image intro-image-main">
              <img
                src={heroImage}
                alt="Signature Fades barber shop interior with a clean modern setup"
                loading="lazy"
                decoding="async"
              />
              <span className="image-caption">Sharp looks start here</span>
            </Reveal>
            <Reveal className="intro-image intro-image-secondary" delay={120}>
              <img
                src={styleImage}
                alt="A carefully finished haircut and beard styling detail"
                loading="lazy"
                decoding="async"
              />
              <span className="image-caption">Your style, your signature</span>
            </Reveal>
            <span className="intro-stamp" aria-hidden="true">
              <span>Sharp</span>
              <strong>01</strong>
              <span>Signature style</span>
            </span>
          </div>

          <Reveal className="intro-copy" delay={180}>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              About {business.name}
            </p>
            <p className="section-number">01 <span>/</span> 04</p>
            <h2>Your Grooming. Your Style. Your Signature.</h2>
            <p className="body-copy">{business.description}</p>
            <p className="body-copy body-copy-secondary">
              Whether you are looking for a fresh fade, a sharp line-up, a clean beard, a relaxing
              facial, or a complete grooming experience, Signature Fades is designed to keep you
              looking and feeling your best.
            </p>
            <a className="text-link" href={routes.services}>
              Explore services
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
