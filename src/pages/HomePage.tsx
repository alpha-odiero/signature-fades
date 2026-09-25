import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import LocationSection from '../components/LocationSection'
import ServicesSection from '../components/ServicesSection'
import FeaturesSection from '../components/FeaturesSection'
import ExtraServices from '../components/ExtraServices'
import Gallery from '../components/Gallery'
import CTASection from '../components/CTASection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <LocationSection />
      <FeaturesSection />
      <ExtraServices />
      <Gallery />
      <CTASection />
      <ContactSection />
    </>
  )
}
