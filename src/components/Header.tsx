import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logo from '../assets/logo.webp'
import { business, navigation, routes } from '../data/business'

type HeaderProps = {
  currentPath?: string
}

export default function Header({ currentPath = routes.home }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('click', closeOnOutsideClick)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('click', closeOnOutsideClick)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <a className="brand" href={routes.home} onClick={closeMenu} aria-label={`${business.name} home`}>
          <img className="brand-logo" src={logo} alt={business.name} loading="eager" decoding="async" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={currentPath === item.href ? 'is-current' : ''}
              aria-current={currentPath === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="button button-small button-primary" href={business.mapsUrl} target="_blank" rel="noreferrer">
            Get directions
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="container mobile-menu-inner">
          <p className="eyebrow">Explore {business.shortName}</p>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={currentPath === item.href ? 'is-current' : ''}
                aria-current={currentPath === item.href ? 'page' : undefined}
              >
                <span>0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
            ))}
          </nav>
          <a className="button button-primary mobile-menu-cta" href={business.mapsUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Get directions
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </a>
        </div>
      </div>
    </header>
  )
}
