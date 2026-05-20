import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import { skillsData } from '../../data/portfolio'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <h2 className="section-title">Mes Compétences</h2>

        {/* ── BENTO GRID ── */}
        <div className="bento-grid">

          {/* Carte 1 — Langages (grande, span 2) */}
          <motion.div
            className="bento-card bento-span-2"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="bento-card-title">
              <span className="bento-icon"></span> Langages de programmation
            </h3>
            <div className="bento-logo-grid">
              {skillsData.langages.map((lang, i) => (
                <div key={i} className="bento-logo-item">
                  <img src={lang.img} alt={lang.name} />
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Carte 2 — Langues */}
          <motion.div
            className="bento-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="bento-card-title">
              <span className="bento-icon"></span> Langues
            </h3>
            <div className="bento-languages">
              {skillsData.langues.map((lang, i) => (
                <div key={i} className="bento-language-item">
                  <img src={lang.img} alt={lang.name} className="flag-img" />
                  <div className="language-info">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Carte 3 — Soft Skills */}
          <motion.div
            className="bento-card bento-card-dark"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="bento-card-title">
              <span className="bento-icon"></span> Soft Skills
            </h3>
            <div className="bento-soft-skills">
              {skillsData.softSkills.map((skill, i) => (
                <div key={i} className="soft-skill-row">
                  <span className="soft-skill-title">{skill.title}</span>
                  <span className="soft-skill-desc">{skill.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Carte 4 — Outils (full width) */}
          <motion.div
            className="bento-card bento-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="bento-card-title">
              <span className="bento-icon"></span> Outils & Technologies
            </h3>
            <div className="bento-logo-grid bento-logo-grid-large">
              {skillsData.outils.map((tool, i) => (
                <div key={i} className="bento-logo-item">
                  <img src={tool.img} alt={tool.name} />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
