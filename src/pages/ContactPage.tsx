import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'
import VisitSection from '../components/VisitSection'
import LocationSection from '../components/LocationSection'
import FaqSection from '../components/FaqSection'
import CTASection from '../components/CTASection'
import { business, routes } from '../data/business'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Signature Fadez"
        title="Let’s get you ready for your next look."
        description="Call the shop, check the hours, or get directions to Signature Fadez near General Hawkers in Murang’a."
        sectionNumber="04 / 04"
        primaryLabel="Call now"
        secondaryLabel="View location"
        secondaryHref={business.mapsUrl}
      />
      <ContactSection />
      <VisitSection />
      <LocationSection />
      <FaqSection />
      <CTASection />
    </>
  )
}
