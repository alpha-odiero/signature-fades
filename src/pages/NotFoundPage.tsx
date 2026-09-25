import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { routes } from '../data/business'

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This page took a wrong turn."
        description="The page you are looking for is not here, but your next Signature Fadez look is still close by."
        sectionNumber="00 / 04"
        primaryLabel="Call the shop"
        secondaryLabel="Back home"
        secondaryHref={routes.home}
      />
      <CTASection />
    </>
  )
}
