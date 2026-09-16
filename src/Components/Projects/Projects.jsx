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

const Projects = () => {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -440, behavior: 'smooth' })
  }

  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 440, behavior: 'smooth' })
  }

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

        <div className="slider-wrapper">
          <button className="nav-btn nav-prev" onClick={scrollLeft} aria-label="Précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="projects-slider" ref={sliderRef}>
            {projectsData.map((project, idx) => (
              <div className="project-card" key={idx}>
                {/* Image */}
                <div className="pc-image">
                  <img src={project.image} alt={project.title} />
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
            ))}
          </div>

          <button className="nav-btn nav-next" onClick={scrollRight} aria-label="Suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

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
