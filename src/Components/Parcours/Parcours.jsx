import React from 'react'
import './Parcours.css'

const parcoursData = [
    {
        periode: "2024 - Actuellement",
        etablissement: "EPITECH Lille",
        description: "Je viens de terminer ma première année à EPITECH avec <u>74 crédits</u> sur 60 nécessaires.<br/>Durant cette année, j'ai acquis des compétences dans différents langages et l'utilisation d'outils lors de mes <u>65 projets</u> réalisé <u>seul ou en équipes</u>.", 
        color: "#F9BC2F"
    },
    {
        periode: "2021 - 2024",
        etablissement: "Lycée Notre Dame des Dunes, Dunkerque",
        description: "<u>Baccalauréat section Européenne</u> obtenu avec mention bien. <br/><u>Spécialités</u>: NSI, Mathématiques.<br/><u>Options</u>: Mathématiques Expertes et Mathématiques en Anglais.<br/> Et pendant cette période j'ai obtenu les <u>diplômes de Cambridge</u> PET et FIRST.",
        color: "#ACD68B"
    },
    {
        periode: "2016 - 2021",
        etablissement: "Collège Notre Dame, Wormhout",
        description: "Brevet des collèges obtenu avec mention très bien.<br/>Et je faisais également partie du club de robotique du collège.",
        color: "#3a8def"
    }
]

const Parcours = () => {
    return (
        <div className="parcours-container" id="parcours">
            <h2 className="parcours-title">Mon Parcours</h2>
            <div className="timeline">
                <div className="timeline-line" />
                {parcoursData.map((item, idx) => (
                    <div
                        className={`timeline-item ${idx % 2 === 1 ? 'right' : 'left'}`}
                        key={idx}
                    >
                        <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}55` }} />
                        <div className="timeline-content" style={{ borderColor: item.color }}>
                            <h3 style={{ color: item.color }}>{item.periode}</h3>
                            <p>
                                <strong>{item.etablissement}</strong><br />
                                <span dangerouslySetInnerHTML={{ __html: item.description }} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Parcours