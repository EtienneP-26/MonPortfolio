import React, { useState } from 'react'
import './Contacts.css'

const contactData = [
    {
        label: "Email",
        value: "etiennepouille@outlook.com",
        link: "mailto:etiennepouille@outlook.com",
        icon: "📧"
    },
    {
        label: "Téléphone",
        value: "06.24.37.79.40",
        link: "tel:+33624377940",
        icon: "📱"
    },
    // {
    //     label: "LinkedIn",
    //     value: "linkedin.com/in/etienne-pouille",
    //     link: "https://www.linkedin.com/in/etienne-pouille",
    //     icon: "🔗"
    // },
    // {
    //     label: "Github",
    //     value: "github.com/EtienneP-26",
    //     link: "https://github.com/EtienneP-26",
    //     icon: "💻"
    // }
]

const Contacts = () => {
    const [copiedIndex, setCopiedIndex] = useState(null)

    const handleCopy = (text, idx) => {
        navigator.clipboard.writeText(text)
        setCopiedIndex(idx)
        setTimeout(() => setCopiedIndex(null), 1200)
    }

    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-desc">N'hésitez pas à me contacter si jamais vous avez besoin de plus amples informations</p>
            <div className="contact-list">
                {contactData.map((item, idx) => (
                    <div className="contact-item" key={idx}>
                        <span className="contact-icon">{item.icon}</span>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            {item.value}
                        </a>
                        <button
                            className="contact-copy-btn"
                            onClick={() => handleCopy(item.value, idx)}
                            title="Copier"
                        >
                            📋
                        </button>
                        {copiedIndex === idx && (
                            <span className="copied-bubble">Copié !</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contacts
