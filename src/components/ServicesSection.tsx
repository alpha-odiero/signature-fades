import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { services } from '../data/business'
import Reveal from './Reveal'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageCount, setPageCount] = useState(2)
  const [carouselStep, setCarouselStep] = useState(33.6)

  useEffect(() => {
    const updatePageCount = () => {
      const isMobile = window.innerWidth < 768
      const nextCount = isMobile ? services.length : 2
      const nextStep = isMobile ? 86 : window.innerWidth <= 1080 ? 50 : 33.6
      setPageCount(nextCount)
      setCarouselStep(nextStep)
      setActiveIndex((index) => Math.min(index, nextCount - 1))
    }

    updatePageCount()
    window.addEventListener('resize', updatePageCount)
    return () => window.removeEventListener('resize', updatePageCount)
  }, [])

  const goTo = (index: number) => {
    setActiveIndex((index + pageCount) % pageCount)
  }

  const trackStyle = {
    transform: `translateX(-${activeIndex * carouselStep}%)`,
  }

  return (
    <section className="section section-services" id="services">
      <div className="container">
        <Reveal className="services-heading">
          <div>
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" />
              What we offer
            </p>
            <h2>More than just a haircut</h2>
          </div>
          <div className="services-heading-copy">
            <p>Six ways to keep your look sharp, clean, and feeling fresh.</p>
            <div className="carousel-controls" aria-label="Service carousel controls">
              <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous services">
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next services">
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="services-viewport">
          <div className="services-track" style={trackStyle}>
            {services.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </div>

        <div className="carousel-footer">
          <div className="carousel-dots" role="tablist" aria-label="Choose service slide">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                className={activeIndex === index ? 'is-active' : ''}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Show service slide ${index + 1}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <span className="carousel-count">0{activeIndex + 1} / 0{pageCount}</span>
        </div>
      </div>
    </section>
  )
}
