import React, { useState, useRef, useEffect } from 'react'
import './Projects.css'

import imgMinIA from '../../assets/projects/LOGO_Min-IA.png'
import imgmyDoom from '../../assets/projects/MYDOOM.png'
import imgmonportfolio from '../../assets/projects/MonPortfolio.png'
import imgmysh from '../../assets/projects/mysh.png'

import sfmlLogo from '../../assets/logos/sfml.png'
import cLogo from '../../assets/logos/c.png'
import pythonLogo from '../../assets/logos/python.png'
import reactLogo from '../../assets/logos/react.png'
import cssLogo from '../../assets/logos/css.png'
import linuxLogo from '../../assets/logos/linux.jpeg'

const techLogos = {
    "Python": pythonLogo,
    "C": cLogo,
    "SFML": sfmlLogo,
    "React": reactLogo,
    "CSS": cssLogo,
    "Linux": linuxLogo,
}

const projects = [
    {
        title: "MinIA",
        mediaType: "image",
        media: imgMinIA,
        description: "Ce projet est un projet personnel qui a pour but de créer un Chat Bot simple grace à l'Intelligence Artificielle. Coder en Python et sans utiliser de framework, ce projet m'aide à en apprendre plus sur le fonctionnement de l'IA.",
        techno: ["Python"],
        repo: "https://github.com/EtienneP-26/MinIA"
    },
    {
        title: "My DOOM FPS",
        mediaType: "image",
        media: imgmyDoom,
        description: "Jeu de tir à la première personne inspiré du premier DOOM, développé en C avec la bibliothèque SFML adaptée au C (CSFML). Ce projet a été réalisé dans le cadre de mon cursus à EPITECH. Il met en avant mes compétences en programmation système, en gestion de la mémoire et en développement de jeux vidéo.",
        techno: ["C", "SFML"],
        repo: "https://github.com/EtienneP-26/My-DOOM-FPS"
    },
    {
        title: "Mon Portfolio",
        mediaType: "image",
        media: imgmonportfolio,
        description: "Ce portfolio est un projet personnel qui présente mes compétences, mes projets et mon parcours. Il est développé en React et CSS, mettant en avant mes compétences en développement web et en design.",
        techno: ["React", "CSS"],
        repo: "https://github.com/EtienneP-26/MonPortfolio"
    },
    {
        title: "mysh",
        mediaType: "image",
        media: imgmysh,
        description: "Ce projet a été réalisé dans le cadre de ma première année à EPITECH. Il s'agit d'une invite de commande personnalisée, basé sur le tsch, développée en C. Il permet de comprendre le fonctionnement des shells Unix et de manipuler les processus, les entrées/sorties et les commandes système.",
        techno: ["C", "Linux"],
        repo: "https://github.com/EtienneP-26/mysh"
    },
]

const Projects = () => {
    const [current, setCurrent] = useState(0)
    const [popin, setPopin] = useState(false)
    const timeoutRef = useRef(null)

    const goToPrev = () => {
        setCurrent(current === 0 ? projects.length - 1 : current - 1)
    }
    
    const goToNext = () => {
        setCurrent(current === projects.length - 1 ? 0 : current + 1)
    }

    useEffect(() => {
        setPopin(false)
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setPopin(true), 10)
        return () => clearTimeout(timeoutRef.current)
    }, [current])

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-title">Mes Projets</h2>
            <div className="slider-wrapper">
                <div className="slider-track">
                    {/* Carte précédente */}
                    <div 
                        className="slider-card prev"
                        onClick={goToPrev}
                    >
                        {(() => {
                            const prevIndex = current === 0 ? projects.length - 1 : current - 1
                            const proj = projects[prevIndex]
                            return (
                                <>
                                    <div className="slider-media">
                                        <img src={proj.media} alt={proj.title} />
                                    </div>
                                    <div className="slider-content">
                                        <h3>{proj.title}</h3>
                                        <p>{proj.description}</p>
                                        <div className="slider-techno">
                                            {proj.techno.map(tech => (
                                                <span className="slider-tech-badge" key={tech}>
                                                    <img
                                                        src={techLogos[tech]}
                                                        alt={tech}
                                                        title={tech}
                                                        style={{ width: 28, height: 28, objectFit: 'contain' }}
                                                    />
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            className="slider-repo-link"
                                            href={proj.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Voir le repo Github
                                        </a>
                                    </div>
                                </>
                            )
                        })()}
                    </div>

                    {/* Carte active */}
                    <div
                        key={current}
                        className="slider-card active popin-animate"
                    >
                        <div className="slider-media">
                            <img src={projects[current].media} alt={projects[current].title} />
                        </div>
                        <div className="slider-content">
                            <h3>{projects[current].title}</h3>
                            <p>{projects[current].description}</p>
                            <div className="slider-techno">
                                {projects[current].techno.map(tech => (
                                    <span className="slider-tech-badge" key={tech}>
                                        <img
                                            src={techLogos[tech]}
                                            alt={tech}
                                            title={tech}
                                            style={{ width: 28, height: 28, objectFit: 'contain' }}
                                        />
                                    </span>
                                ))}
                            </div>
                            <a
                                className="slider-repo-link"
                                href={projects[current].repo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Voir le repo Github
                            </a>
                        </div>
                    </div>

                    {/* Carte suivante */}
                    <div 
                        className="slider-card next"
                        onClick={goToNext}
                    >
                        {(() => {
                            const nextIndex = current === projects.length - 1 ? 0 : current + 1
                            const proj = projects[nextIndex]
                            return (
                                <>
                                    <div className="slider-media">
                                        <img src={proj.media} alt={proj.title} />
                                    </div>
                                    <div className="slider-content">
                                        <h3>{proj.title}</h3>
                                        <p>{proj.description}</p>
                                        <div className="slider-techno">
                                            {proj.techno.map(tech => (
                                                <span className="slider-tech-badge" key={tech}>
                                                    <img
                                                        src={techLogos[tech]}
                                                        alt={tech}
                                                        title={tech}
                                                        style={{ width: 28, height: 28, objectFit: 'contain' }}
                                                    />
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            className="slider-repo-link"
                                            href={proj.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Voir le repo Github
                                        </a>
                                    </div>
                                </>
                            )
                        })()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects