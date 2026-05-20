import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import { projectsData } from '../../data/portfolio'

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
      </motion.div>
    </section>
  )
}

export default Projects
