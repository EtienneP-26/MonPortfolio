import React, { useState } from 'react'
import './About.css'

import htmlLogo from '../../assets/logos/html.png'
import cssLogo from '../../assets/logos/css.png'
import jsLogo from '../../assets/logos/js.jpeg'
import pythonLogo from '../../assets/logos/python.png'
import rustLogo from '../../assets/logos/rust_white.png'
import cLogo from '../../assets/logos/c.png'
import cppLogo from '../../assets/logos/cpp.png'
import reactLogo from '../../assets/logos/react.png'
import NextJsLogo from '../../assets/logos/nextjs.png'
import githubLogo from '../../assets/logos/github.png'
import vscodeLogo from '../../assets/logos/vscode.png'
import linuxLogo from '../../assets/logos/linux.jpeg'
import dockerLogo from '../../assets/logos/docker.png'
import canvaLogo from '../../assets/logos/canva.png'

import frLogo from '../../assets/flags/fr.jpeg'
import enLogo from '../../assets/flags/en.jpeg'
import esLogo from '../../assets/flags/es.jpeg'

const languages = [
  { name: 'HTML', img: htmlLogo },
  { name: 'CSS', img: cssLogo },
  { name: 'JavaScript', img: jsLogo },
  { name: 'React', img: reactLogo },
  { name: 'Express Js', img: NextJsLogo },
  { name: 'Python', img: pythonLogo },
  { name: 'Rust', img: rustLogo },
  { name: 'C', img: cLogo },
  { name: 'C++', img: cppLogo },
]

const tools = [
  { name: 'Github', img: githubLogo },
  { name: 'VS Code', img: vscodeLogo },
  { name: 'Linux', img: linuxLogo },
  { name: 'Docker', img: dockerLogo },
  { name: 'Canva', img: canvaLogo },
]

const languagesSpoken = [
  { name: 'Français C2', img: frLogo },
  { name: 'Anglais B2', img: enLogo },
  { name: 'Espagnol B1', img: esLogo },
]

const softSkills = [
  { name: 'Travail en équipe', color: '#3a8def', desc: "Plus de 30 Projets réalisés en équipe avec 11 collaborateurs differents." },
  { name: 'Communication', color: '#F9BC2F', desc: "Plus de 15 présentations de modules et projets" },
  { name: 'Autonomie', color: '#ACD68B', desc: "Plus de 35 projets EPITECH fait seul et plusieurs projets personnels." },
  { name: 'Créativité', color: '#e57373', desc: "Création de plusieurs logos pour mes differents projets et j'aime dessiner pendant mon temps libre." },
  { name: 'Adaptabilité', color: '#ba68c8', desc: "Savoir s’ajuster rapidement à de nouveaux contextes ou imprévus. Adapter l'organisation de mon travail et la communication avec mes différents partenaires de projets." },
]

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <div className="about-container" id="about">
      <h1 className="about-title">À Propos De Moi</h1>
      <p className="about-desc">
        Voici quelques informations sur moi et mes compétences.
      </p>
      <div className="about-section">
        <h2>Langages</h2>
        <div className="about-logos">
          {languages.map(lang => (
            <div className="about-logo-item" key={lang.name}>
              <img src={lang.img} alt={lang.name} />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="about-section">
        <h2>Outils</h2>
        <div className="about-logos">
          {tools.map(tool => (
            <div className="about-logo-item" key={tool.name}>
              <img src={tool.img} alt={tool.name} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="about-section">
        <h2>Langues</h2>
        <div className="about-logos">
          {languagesSpoken.map(lang => (
            <div className="about-logo-item" key={lang.name}>
              <img src={lang.img} alt={lang.name} />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="about-section">
        <h2>Soft Skills</h2>
        <div className="about-logos">
          {softSkills.map(skill => (
            <div
              className="about-softskill-badge"
              key={skill.name}
              style={{
                background: skill.color,
                color: '#262626',
                borderRadius: '24px',
                padding: '18px 24px',
                fontWeight: 600,
                fontSize: '18px',
                minWidth: '120px',
                textAlign: 'center',
                boxShadow: '0 2px 12px #0003',
                margin: '4px 0',
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.2s, box-shadow 0.2s, filter 0.2s'
              }}
              onClick={() => setSelectedSkill(skill)}
              tabIndex={0}
              onKeyPress={e => { if (e.key === 'Enter') setSelectedSkill(skill) }}
              title="Clique pour en savoir plus"
            >
              {skill.name}
              <span style={{
                marginLeft: 8,
                fontSize: 20,
                verticalAlign: 'middle',
                opacity: 0.7,
                userSelect: 'none'
              }}>🛈</span>
            </div>
          ))}
        </div>
      </div>
      {selectedSkill && (
        <div className="softskill-desc-popup" onClick={() => setSelectedSkill(null)}>
          <div className="softskill-desc-content" onClick={e => e.stopPropagation()}>
            <button
              className="softskill-close-btn"
              onClick={() => setSelectedSkill(null)}
              aria-label="Fermer"
            >
              ×
            </button>
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.desc}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
