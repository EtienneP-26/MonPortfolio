import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className={`navbar navbar-right ${open ? 'open' : ''}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li><a href="#profil" onClick={e => handleNavClick(e, '#profil')}>Profil</a></li>
          <li><a href="#parcours" onClick={e => handleNavClick(e, '#parcours')}>Parcours</a></li>
          <li><a href="#about" onClick={e => handleNavClick(e, '#about')}>À Propos</a></li>
          <li><a href="#projects" onClick={e => handleNavClick(e, '#projects')}>Mes Projets</a></li>
          <li><a href="#contact" onClick={e => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
      <button
        className="navbar-toggle"
        aria-label="Ouvrir la navigation"
        onClick={() => setOpen(!open)}
      >
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
      </button>
      {open && <div className="navbar-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}

export default Navbar
