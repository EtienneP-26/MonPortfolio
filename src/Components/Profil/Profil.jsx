import React, { useState } from 'react'
import './Profil.css'
import profile_img from '../../assets/Profil.png'
import CV from '../../assets/CV_Etienne_POUILLE.pdf'

const Profil = () => {
  const [showBubble, setShowBubble] = useState(false)

  const handleDownload = () => {
    setShowBubble(true)
    setTimeout(() => setShowBubble(false), 3000)
  }

  return (
    <div className='profil' id='profil'>
      <img src={profile_img} alt="" />
      <div className="profil-stage-bubble">
        🚀 <strong>En recherche d'un stage informatique</strong>
        pour ma deuxième année à EPITECH
        <span>Je suis disponible du 15 juillet <br/>au 15 décembre 2025</span>
      </div>
      <h1>Bonjour, je m'appelle<br/><span>Etienne POUILLE</span></h1>
      <p>J'ai 18 ans, né le 20 juin 2006, et je suis situé dans le nord de la France.
        <br/>Je suis un étudiant en informatique du programme grande écoles en 5 ans à EPITECH Lille.
        <br/>Passionné par le développement web et logiciel, j'aime apprendre de nouvelles technologies et réaliser des projets.
        <br/>Mes centres d'intérêt incluent le développement mais également
        <br/>le sport (automobile, pratique de l'escalade et de la calisthenie), des sciences, la musique ou encore le dessin.   
      </p>
      <div className="profil-action-bar" style={{ position: 'relative' }}>
        <a className="profil-boutton" href='https://www.linkedin.com/in/etienne-pouille-8b7814349/' target="_blank" rel="noopener noreferrer">
            Mon LinkedIn
        </a>
        <a className="profil-boutton" href='https://github.com/EtienneP-26' target="_blank" rel="noopener noreferrer">
          Mon Github
        </a>
        <a
          className="profil-boutton"
          href={CV}
          download="CV Etienne POUILLE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownload}
        >
          Mon CV
          {showBubble && (
            <span className="bubble-toast">CV téléchargé !</span>
          )}
        </a>
      </div>
    </div>
  )
}

export default Profil
