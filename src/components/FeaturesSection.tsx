import { BadgeCheck, Clock3, MapPin, Scissors, Sparkles, Star } from 'lucide-react'
import { features } from '../data/business'
import Reveal from './Reveal'

const featureIcons = [Scissors, Sparkles, Star, MapPin, BadgeCheck, Clock3]

export default function FeaturesSection() {
  return (
    <section className="section section-features">
      <div className="container">
        <Reveal className="centered-heading">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Why choose us
          </p>
          <h2>Why choose Signature Fades?</h2>
          <p>Professional grooming with a personal finish, every time.</p>
        </Reveal>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <Reveal className="feature-item" delay={index * 55} key={feature.title}>
                <div className="feature-icon">
                  <Icon size={21} strokeWidth={1.35} aria-hidden="true" />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <span className="feature-number">0{index + 1}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
