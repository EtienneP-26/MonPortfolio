import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contacts.css'
import { contactData, profileData } from '../../data/portfolio'

const Contacts = () => {
  const [copiedKey, setCopiedKey] = useState(null)

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 1400)
  }

  const items = [
    {
      key: 'email',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      copyable: true,
    },
    {
      key: 'phone',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Téléphone',
      value: contactData.phone,
      href: `tel:+33624377940`,
      copyable: true,
    },
  ]

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <h2 className="section-title">Me Contacter</h2>
        <p className="contact-intro">
          Vous avez un projet, une opportunité de stage ou une simple question ?<br />
          N'hésitez pas à me contacter directement.
        </p>

        {/* Contact items */}
        <div className="contact-items">
          {items.map(item => (
            <div className="contact-item" key={item.key}>
              <span className="contact-icon">{item.icon}</span>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <a href={item.href} className="contact-value" target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </div>
              {item.copyable && (
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(item.value, item.key)}
                  title="Copier"
                >
                  {copiedKey === item.key ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#6b967e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Social + CV buttons */}
        <div className="contact-socials">
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary contact-social-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary contact-social-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
          <a
            href={contactData.cv}
            download="CV_Etienne_POUILLE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-cv-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger mon CV
          </a>
        </div>

      </motion.div>
    </section>
  )
}

export default Contacts
