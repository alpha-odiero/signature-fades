import PageHero from '../components/PageHero'
import GalleryLookbook from '../components/GalleryLookbook'
import CTASection from '../components/CTASection'
import { routes } from '../data/business'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Signature edit"
        title="A closer look at the details."
        description="Sharp cuts, clean lines, grooming tools, and the small visual details that make a visit feel like a reset."
        sectionNumber="02 / 04"
        primaryLabel="Book by phone"
        secondaryLabel="Explore services"
        secondaryHref={routes.services}
      />
      <GalleryLookbook />
      <section className="section section-gallery-service-note">
        <div className="container gallery-service-note-layout">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              More than the final image
            </p>
            <h2>Every look starts with a conversation.</h2>
          </div>
          <div>
            <p className="body-copy">
              The best result is not always the most dramatic change. It is the cut, beard shape, facial,
              or grooming detail that feels right for you and is easy to keep looking sharp.
            </p>
            <p className="body-copy body-copy-secondary">
              Signature Fades brings six service categories together in one place, so your next visit can
              be as simple or as complete as you want it to be.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
