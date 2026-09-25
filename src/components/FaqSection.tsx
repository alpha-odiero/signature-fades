import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/business'
import Reveal from './Reveal'
import PageSectionHeading from './PageSectionHeading'

export default function FaqSection() {
  return (
    <section className="section section-faq">
      <div className="container faq-layout">
        <PageSectionHeading
          eyebrow="Good to know"
          title="Questions before your visit?"
          description="A few quick answers to help you feel ready before you call or make the trip."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <Reveal className="faq-item" delay={index * 55} key={faq.question}>
              <details>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
