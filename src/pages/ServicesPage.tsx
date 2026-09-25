import PageHero from '../components/PageHero'
import ServicesSection from '../components/ServicesSection'
import ServiceDetails from '../components/ServiceDetails'
import ProcessSection from '../components/ProcessSection'
import ExtraServices from '../components/ExtraServices'
import FaqSection from '../components/FaqSection'
import CTASection from '../components/CTASection'
import { routes } from '../data/business'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The service menu"
        title="Grooming services with a sharper finish."
        description="Explore haircuts, beard care, line-ups, facials, nail grooming, and massage services at Signature Fades in Murang’a."
        sectionNumber="01 / 04"
        primaryLabel="Call to ask"
        secondaryLabel="View gallery"
        secondaryHref={routes.gallery}
      />
      <ServicesSection />
      <ServiceDetails />
      <ProcessSection />
      <ExtraServices />
      <FaqSection />
      <CTASection />
    </>
  )
}
