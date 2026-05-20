import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Profil from './Components/Profil/Profil.jsx'
import Stage from './Components/Stage/Stage.jsx'
import Parcours from './Components/Parcours/Parcours.jsx'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'

const App = () => {
  return (
    <div className="app-layout">
      <main className="app-main">
        <Profil />
        <Stage />
        <Parcours />
        <About />
        <Projects />
        <Contacts />
        <footer>
          <p>© 2026 Etienne POUILLE — Tous droits réservés.</p>
        </footer>
      </main>
      <Navbar />
    </div>
  )
}

export default App
