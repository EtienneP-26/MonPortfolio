import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import { projectsData, roadmapData } from '../../data/portfolio'

const statusClass = {
  'en-cours': 'status-en-cours',
  'termine': 'status-termine',
  'en-exploration': 'status-en-exploration',
  'perso': 'status-perso',
}

const featuredProjects = projectsData.filter((project) => project.featured)
const otherProjects = projectsData.filter((project) => !project.featured)

/**
 * Carte d'un projet : image, statut, titre, description, tags et lien GitHub.
 * @param {{project: object}} props - Un élément de projectsData.
 * @returns {JSX.Element} La carte.
 * @example <ProjectCard project={projectsData[0]} />
 */
const ProjectCard = ({ project }) => (
  <div className="project-card">
    {/* Image */}
    <div className="pc-image">
      {project.image && <img src={project.image} alt={project.title} />}
      {project.statusLabel && (
        <span className={`pc-status ${statusClass[project.status] || ''}`}>
          {project.statusLabel}
        </span>
      )}
    </div>

    {/* Content */}
    <div className="pc-content">
      <h3 className="pc-title">{project.title}</h3>
      <p className="pc-desc">{project.description}</p>

      <div className="pc-tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Conditional GitHub button */}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary pc-btn"
        >
          Voir sur GitHub →
        </a>
      )}
    </div>
  </div>
)

/**
 * Slider horizontal de cartes projet avec ses boutons précédent / suivant.
 * @param {{projects: object[]}} props - Projets à afficher, dans l'ordre.
 * @returns {JSX.Element} Le slider.
 * @example <ProjectSlider projects={featuredProjects} />
 */
const ProjectSlider = ({ projects }) => {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -440, behavior: 'smooth' })
  }

  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 440, behavior: 'smooth' })
  }

  return (
    <div className="slider-wrapper">
      <button className="nav-btn nav-prev" onClick={scrollLeft} aria-label="Précédent">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="projects-slider" ref={sliderRef}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <button className="nav-btn nav-next" onClick={scrollRight} aria-label="Suivant">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  )
}

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <h2 className="section-title">Mes Projets</h2>

        <h3 className="projects-group-title">Projets principaux</h3>
        <ProjectSlider projects={featuredProjects} />

        {/* Pas d'animation d'entrée : un <details> fermé n'est pas rendu */}
        {otherProjects.length > 0 && (
          <details className="projects-more">
            <summary className="projects-more-summary">
              Autres projets ({otherProjects.length})
            </summary>
            <ProjectSlider projects={otherProjects} />
          </details>
        )}

        {roadmapData?.length > 0 && (
          <div className="roadmap">
            <h3 className="roadmap-title">Prochainement</h3>
            <div className="roadmap-list">
              {roadmapData.map((item, i) => (
                <span key={i} className="roadmap-item">🔹 {item}</span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Projects
