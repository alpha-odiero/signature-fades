import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { business, routes } from './data/business'

type PageComponent = typeof HomePage

const pages: Record<string, PageComponent> = {
  [routes.home]: HomePage,
  [routes.services]: ServicesPage,
  [routes.gallery]: GalleryPage,
  [routes.about]: AboutPage,
  [routes.contact]: ContactPage,
}

const pageTitles: Record<string, string> = {
  [routes.home]: `${business.name} | Haircuts & Grooming in Murang’a`,
  [routes.services]: `Services | ${business.name}`,
  [routes.gallery]: `Gallery | ${business.name}`,
  [routes.about]: `About | ${business.name}`,
  [routes.contact]: `Contact | ${business.name}`,
}

function getCurrentPath() {
  return window.location.pathname.replace(/\/+$/, '') || routes.home
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const handlePathChange = () => setCurrentPath(getCurrentPath())
    window.addEventListener('popstate', handlePathChange)
    return () => window.removeEventListener('popstate', handlePathChange)
  }, [])

  useEffect(() => {
    document.title = pageTitles[currentPath] || `Page not found | ${business.name}`
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [currentPath])

  const Page = pages[currentPath] || NotFoundPage

  return (
    <>
      <Header currentPath={currentPath} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  )
}

export default App
