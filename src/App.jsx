import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Profil from './Components/Profil/Profil.jsx'
import Parcours from './Components/Parcours/Parcours.jsx'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Profil />
      <Parcours />
      <About />
      <Projects />
      <Contacts />
      <footer>
        <p>© 2023 Etienne POUILLE. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default App
