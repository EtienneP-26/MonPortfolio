import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Stage.css'
import { stagesData } from '../../data/portfolio'

const Stage = () => {
  const [selected, setSelected] = useState(0)
  const stage = stagesData[selected]

  return (
    <section className="stage-section" id="stage">
      <motion.div
        className="stage-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="section-title">Recherche de Stage</h2>
        <p className="stage-intro">
          Je recherche <strong>deux stages</strong> dans le cadre de ma 3ème année à EPITECH Lille.<br />
          Sélectionnez un type de stage pour en voir les détails.
        </p>

        {/* ── 2 encarts côte à côte ── */}
        <div className="stage-cards-row">
          {stagesData.map((s, i) => (
            <button
              key={s.id}
              className={`stage-card-btn${selected === i ? ' selected' : ''} card-${s.color}`}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
            >
              <span className="scb-emoji">{s.emoji}</span>
              <div className="scb-info">
                <span className="scb-type">{s.type}</span>
                <span className="scb-badge">{s.badge}</span>
              </div>
              <span className="scb-period">{s.period}</span>
            </button>
          ))}
        </div>

        {/* ── Détails du stage sélectionné ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            className={`stage-detail detail-${stage.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Contexte */}
            <div className="stage-block">
              <h4 className="stage-block-title">Contexte</h4>
              {stage.context.map((c, i) => (
                <p key={i} className="stage-block-text">{c}</p>
              ))}
            </div>

            {/* Infos grid */}
            <div className="stage-info-grid">
              {stage.details.map((item, i) => (
                <div key={i} className="stage-info-item">
                  <span className="stage-info-label">{item.label}</span>
                  <span className="stage-info-value">{item.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className={`stage-cta cta-${stage.color}`}
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Me contacter pour ce stage →
            </a>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section >
  )
}

export default Stage
