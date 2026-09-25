import { ArrowUpRight, Compass, MapPin } from 'lucide-react'
import { business } from '../data/business'
import Reveal from './Reveal'

export default function LocationSection() {
  return (
    <section className="section section-location" id="location">
      <div className="container">
        <div className="location-layout">
          <Reveal className="location-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Find your way here
            </p>
            <p className="section-number">02 <span>/</span> 04</p>
            <h2>Find us in Murang’a.</h2>
            <p className="body-copy">
              Signature Fades is near General Hawkers in Murang’a, Kenya. Get directions before you
              set off, then come through for your next sharp look.
            </p>
            <div className="address-block">
              <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <span className="meta-label">Visit us</span>
                <p>{business.address}</p>
              </div>
            </div>
            <a className="button button-primary" href={business.mapsUrl} target="_blank" rel="noreferrer">
              View location
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </a>
            <p className="location-note">
              <Compass size={15} strokeWidth={1.5} aria-hidden="true" />
              Directions and nearby places are available on Google Maps.
            </p>
          </Reveal>

          <Reveal className="map-card" delay={160}>
            <div className="map-toolbar">
              <span className="map-label">
                <MapPin size={14} strokeWidth={1.6} aria-hidden="true" />
                Map
              </span>
              <span className="map-coordinates">Murang’a · Kenya</span>
            </div>
            <div className="map-canvas" role="region" aria-label="Google map showing the business location">
              <iframe
                title="Signature Fades location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.2599774371693!2d37.15785587310792!3d-0.7213597352657372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182899cf9c0b341f%3A0x46eda2f8c3192b99!2sSignature%20fades!5e1!3m2!1sen!2ske!4v1790348097520!5m2!1sen!2ske"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="map-iframe"
              />
            </div>
            <div className="map-card-footer">
              <span>
                <MapPin size={14} strokeWidth={1.6} aria-hidden="true" />
                {business.address}
              </span>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" aria-label="Open location in Google Maps">
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
