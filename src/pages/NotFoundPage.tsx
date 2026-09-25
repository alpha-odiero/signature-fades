import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This page took a wrong turn."
        description="The page you are looking for is not here, but your next Signature Fades look is still close by."
          sectionNumber="00 / 04"
        />
      <CTASection />
    </>
  )
}
