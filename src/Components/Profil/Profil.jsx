import React from 'react'
import { motion } from 'framer-motion'
import './Profil.css'
import { profileData } from '../../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const Profil = () => {
  return (
    <section className="hero-section" id="profil">
      <div className="hero-content">

        {/* Photo */}
        <motion.div
          className="image-container"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <img src={profileData.photo} alt="Etienne Pouille" className="profile-pic" />
          <div className="glow-effect" />
        </motion.div>

        {/* Nom */}
        <motion.h1
          className="hero-title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="gradient-text">{profileData.name}</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.h2
          className="hero-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {profileData.subtitle}
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="hero-bio"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {profileData.bio.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}{i < profileData.bio.split('\n').length - 1 && <br />}</React.Fragment>
          ))}
        </motion.p>

        {/* Status bar */}
        <motion.div
          className="status-bar"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          {profileData.statuses.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="status-divider" />}
              <div className="status-item">
                <span className="status-icon">
                  {s.icon === 'active-dot' ? (
                    <span className="status-dot-active" />
                  ) : (
                    s.icon
                  )}
                </span>
                <div className="status-text">
                  <strong>{s.title}</strong>
                  <span>{s.subtitle}</span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

export default Profil
