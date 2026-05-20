import React from 'react'
import { motion } from 'framer-motion'
import './Parcours.css'
import { parcoursData } from '../../data/portfolio'

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const Parcours = () => {
  return (
    <section className="parcours-section" id="parcours">
      <div className="parcours-inner">
        <h2 className="section-title">Mon Parcours</h2>

        <div className="timeline-container">
          {/* Vertical line */}
          <div className="timeline-line" />

          {parcoursData.map((item, idx) => (
            <motion.div
              className="timeline-item"
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Dot on the line */}
              <div className="timeline-dot" />

              {/* Card */}
              <div className="timeline-card">
                {/* Header */}
                <div className="tc-header">
                  <div className="tc-logo-wrap">
                    <img src={item.logo} alt={item.imageplace} className="tc-logo" />
                  </div>
                  <div className="tc-meta">
                    <span className="tc-date">{item.date}</span>
                    <h3 className="tc-title">{item.title}</h3>
                    {item.place && <span className="tc-place">{item.place}</span>}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="tc-desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                {/* Mini Bento: tags */}
                <div className="tc-bento">
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Parcours