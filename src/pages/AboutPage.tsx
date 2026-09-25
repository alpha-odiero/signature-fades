import PageHero from '../components/PageHero'
import IntroSection from '../components/IntroSection'
import StorySection from '../components/StorySection'
import FeaturesSection from '../components/FeaturesSection'
import LocationSection from '../components/LocationSection'
import CTASection from '../components/CTASection'
import { routes } from '../data/business'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Signature Fades"
        title="Your grooming. Your style. Your signature."
        description="A modern barbering and grooming destination in Murang’a, built around sharp work, personal style, and a more considered visit."
        sectionNumber="03 / 04"
        primaryLabel="Call the shop"
        secondaryLabel="See services"
        secondaryHref={routes.services}
      />
      <IntroSection />
      <StorySection />
      <FeaturesSection />
      <LocationSection />
      <CTASection />
    </>
  )
}
