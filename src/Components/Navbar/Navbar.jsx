import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { contactData } from '../../data/portfolio'

// SVG icons for each section (inline, no external dependency)
const icons = {
  profil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  stage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  parcours: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <circle cx="12" cy="6" r="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18" r="2" fill="currentColor" stroke="none" />
      <line x1="12" y1="6" x2="18" y2="6" />
      <line x1="12" y1="12" x2="18" y2="12" />
      <line x1="12" y1="18" x2="18" y2="18" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
}

const navItems = [
  { id: 'profil',   label: 'Profil',       icon: icons.profil },
  { id: 'stage',    label: 'Stage',        icon: icons.stage },
  { id: 'parcours', label: 'Parcours',     icon: icons.parcours },
  { id: 'about',    label: 'Compétences',  icon: icons.about },
  { id: 'projects', label: 'Projets',      icon: icons.projects },
  { id: 'contact',  label: 'Contact',      icon: icons.contact },
]

const Navbar = () => {
  const [active, setActive] = useState('profil')

  useEffect(() => {
    const handleScroll = () => {
      // Cas limite 1: Tout en haut
      if (window.scrollY < 50) {
        setActive('profil')
        return
      }

      // Cas limite 2: Tout en bas
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      if (isAtBottom) {
        setActive('contact')
        return
      }

      // Détection par boîte de collision avec le point focal (30% de la hauteur de l'écran)
      const focalPoint = window.innerHeight * 0.3
      let currentSectionId = null

      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        // Si le point focal est situé entre le haut et le bas de la section
        if (rect.top <= focalPoint && rect.bottom >= focalPoint) {
          currentSectionId = item.id
          break
        }
      }

      if (currentSectionId) {
        setActive(currentSectionId)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Appel initial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sidebar" aria-label="Navigation principale">
      <ul className="sidebar-nav">
        {navItems.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`sidebar-link${active === id ? ' active' : ''}`}
              onClick={e => handleNavClick(e, id)}
              aria-label={label}
              title={label}
            >
              <span className="sidebar-icon">{icon}</span>
              <span className="sidebar-tooltip">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="sidebar-socials">
        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-social-link"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <span className="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </span>
          <span className="sidebar-tooltip">LinkedIn</span>
        </a>
        <a
          href={contactData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-social-link"
          aria-label="GitHub"
          title="GitHub"
        >
          <span className="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </span>
          <span className="sidebar-tooltip">GitHub</span>
        </a>
        <a
          href={contactData.cv}
          download="CV_Etienne_POUILLE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-social-link cv-link"
          aria-label="Télécharger mon CV"
          title="Télécharger mon CV"
        >
          <span className="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
          <span className="sidebar-tooltip">Télécharger mon CV</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
