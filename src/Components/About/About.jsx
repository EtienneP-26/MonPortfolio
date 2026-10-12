import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import { skillsData, skillLevels } from '../../data/portfolio'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const LEVEL_ORDER = Object.keys(skillLevels)

/**
 * Trie les compétences par niveau (maîtrisé, pratiqué, en apprentissage).
 * @param {Array<{level: string}>} skills - Compétences d'une catégorie.
 * @returns {Array} Nouvelle liste triée, l'ordre d'origine est conservé à niveau égal.
 * @example sortByLevel([{ level: 'pratique' }, { level: 'maitrise' }])
 */
const sortByLevel = (skills) =>
  [...skills].sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level))

/**
 * Pastille d'une compétence : icône (ou initiales), nom et marqueur de niveau.
 * @param {{skill: {name: string, img?: string, short?: string, level: string}}} props
 * @returns {JSX.Element} La pastille.
 * @example <SkillItem skill={{ name: 'Bash', short: 'sh', level: 'pratique' }} />
 */
const SkillItem = ({ skill }) => {
  const levelLabel = skillLevels[skill.level]
  const isLearning = skill.level === 'apprentissage'

  return (
    <div
      className={`bento-logo-item${isLearning ? ' learning' : ''}`}
      title={`${skill.name} — ${levelLabel}`}
    >
      <span className={`skill-badge level-${skill.level}`} aria-hidden="true" />
      {skill.img ? (
        <img src={skill.img} alt="" />
      ) : (
        <span className="skill-initials" aria-hidden="true">{skill.short}</span>
      )}
      <span>{skill.name}</span>
      <span className="sr-only">({levelLabel})</span>
    </div>
  )
}

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <h2 className="section-title">Mes Compétences</h2>

        {/* ── Légende des niveaux ── */}
        <ul className="skill-legend">
          {LEVEL_ORDER.map((level) => (
            <li key={level}>
              <span className={`skill-badge level-${level}`} aria-hidden="true" />
              {skillLevels[level]}
            </li>
          ))}
        </ul>

        {/* ── BENTO GRID ── */}
        <div className="bento-grid">

          {/* Cartes — Catégories techniques (2×2) */}
          {skillsData.categories.map((category) => (
            <motion.div
              key={category.title}
              className="bento-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3 className="bento-card-title">
                <span className="bento-icon"></span> {category.title}
              </h3>
              <div className="bento-logo-grid">
                {sortByLevel(category.skills).map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Carte — Soft Skills */}
          <motion.div
            className="bento-card bento-card-dark bento-full"
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

          {/* Carte 4 — Langues (full width) */}
          <motion.div
            className="bento-card bento-full"
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

        </div>
      </div>
    </section>
  )
}

export default About
