// ============================================================
//  portfolio.js — Source de données unique du portfolio
//  Pour mettre à jour le portfolio, modifiez uniquement ce fichier.
// ============================================================

// --- Assets : Profil ---
import profileImg from '../assets/Profil.png'
import CV from '../assets/CV_Etienne_POUILLE.pdf'

// --- Assets : Logos ---
import epitechLogo from '../assets/logos/EPI-LOGO-2023-BLANC.png'
import nddLyceeLogo from '../assets/logos/nddDkLycee.png'
import cylleneLogo from '../assets/logos/cyllene.png'
import sainteUnionLogo from '../assets/logos/sainteUnionCdF.png'
import jsLogo from '../assets/logos/js.jpeg'
import pythonLogo from '../assets/logos/python.png'
import rustLogo from '../assets/logos/rust_white.png'
import cLogo from '../assets/logos/c.png'
import cppLogo from '../assets/logos/cpp.png'
import reactLogo from '../assets/logos/react.png'
import githubLogo from '../assets/logos/github.png'
import gitlabLogo from '../assets/logos/gitlab.png'
import vscodeLogo from '../assets/logos/vscode.png'
import linuxLogo from '../assets/logos/linux.jpeg'
import dockerLogo from '../assets/logos/docker.png'
import n8nLogo from '../assets/logos/n8n.png'
import jenkinsLogo from '../assets/logos/jenkins.png'
import htmlLogo from '../assets/logos/html.png'
import cssLogo from '../assets/logos/css.png'
import sfmlLogo from '../assets/logos/sfml.png'
import canvaLogo from '../assets/logos/canva.png'

// --- Assets : Drapeaux ---
import frFlag from '../assets/flags/fr.jpeg'
import enFlag from '../assets/flags/en.jpeg'
import esFlag from '../assets/flags/es.jpeg'

// --- Assets : Projets ---
import imgMinIA from '../assets/projects/LOGO_Min-IA.png'
import imgmyDoom from '../assets/projects/MYDOOM.png'
import imgmonportfolio from '../assets/projects/MonPortfolio.png'
import imgmysh from '../assets/projects/mysh.png'
import imgrobocar from '../assets/projects/RoboCar.jpg'

// ============================================================
//  SECTION PROFIL
// ============================================================
export const profileData = {
  name: 'Etienne POUILLE',
  photo: profileImg,
  cv: CV,
  subtitle: 'Étudiant EPITECH — 2ème Année',
  bio: `J'ai 19 ans, né le 20 juin 2006, et je réside dans le nord de la France.
Je suis étudiant en informatique au programme grandes écoles en 5 ans à EPITECH Lille
et je viens de valider ma première année avec les félicitations.
Passionné par le développement web et logiciel, j'aime apprendre de nouvelles technologies et réaliser des projets.
Mes centres d'intérêts incluent le développement mais également
le sport (automobile, pratique de l'escalade et de la callisthénie), les sciences, la musique ou encore le dessin.`,
  github: 'https://github.com/EtienneP-26',
  linkedin: 'https://www.linkedin.com/in/etienne-pouille-8b7814349/',
  email: 'contact@etienne-pouille.work',
  phone: '06.24.37.79.40',
  statuses: [
    {
      icon: 'active-dot',
      title: 'Freelance',
      subtitle: 'Je suis ouvert aux missions de développement en Freelance sur mon temps libre.',
    },
  ],
}

// ============================================================
//  SECTION STAGE
// ============================================================
export const stagesData = [
  {
    id: 'parttime',
    type: 'Stage Temps Partiel',
    badge: '2 jours / semaine',
    period: 'Septembre 2026 → Fin février 2027',
    duration: '6 mois',
    context: [
      "Durant ma 3ème année à EPITECH, je serai à l'école 3 jours (lundi, mardi, mercredi) et en entreprise 2 jours par semaine (jeudi, vendredi).",
      "Ce rythme est idéal pour une montée en compétences progressive tout en continuant ma formation.",
    ],
    details: [
      { label: 'Domaine', value: 'IA / DevOps / Développement logiciel / Automatisation' },
      { label: 'Localisation', value: 'Nord (Dunkerque, Calais, Lille et ses alentours)' },
      { label: 'Rythme', value: '3 jours école / 2 jours en entreprise (jeudi, vendredi)' },
      { label: 'Disponibilité', value: 'Dès septembre 2026' },
    ],
    color: 'sage',
  },
  {
    id: 'fulltime',
    type: 'Stage Plein Temps',
    badge: '5 jours/semaine',
    period: 'Avril 2027 → Août 2027',
    duration: '~5 mois',
    context: [
      "En fin de 3ème année, je serai disponible à temps plein pour un stage conventionnel.",
      "Cette période correspond à une immersion complète en entreprise, idéale pour un projet ambitieux et une réelle intégration dans les équipes.",
    ],
    details: [
      { label: 'Domaine', value: 'IA / DevOps / Développement logiciel / Automatisation' },
      { label: 'Localisation', value: 'Nord (Dunkerque, Calais, Lille et ses alentours)' },
      { label: 'Rythme', value: '5 jours/semaine — temps plein' },
      { label: 'Disponibilité', value: 'Début avril 2027' },
    ],
    color: 'forest',
  },
]

// ============================================================
//  SECTION PARCOURS
// ============================================================
export const parcoursData = [
  {
    id: 'epitech-2',
    date: 'Début 2026 - Actuellement',
    title: 'EPITECH - 2ème Année',
    place: 'Lille',
    imageplace: 'EPITECH',
    logo: epitechLogo,
    description: `Actuellement en cours.<br/>Plus de 35 projets réalisés comme :<br/>&emsp; Piscine (C++, Rust, Haskell), Raytracer (Rust), Starttrek (Python, IA reinforcement learning).<br/>Projets en cours :<br/>&emsp;- Modules IA, DevOps et Maths.<br/>&emsp;- User Group de CyberSécurité (HackTheBox Season 10).<br/>&emsp;- RobotCar (Projet de voiture autonome, nous sommes cinq et nous representons EPITECH Lille sur le &emsp;&emsp;concours national)<br/>TEPitech/TOIEC: <strong>910 points</strong>.`,
    tags: ['C++', 'Rust', 'Python', 'Haskell', 'Jenkins'],
  },
  {
    id: 'cyllene',
    date: 'Sept 2025 - Déc 2025',
    title: 'Cyllene - Stage Ingénieur SysOps DevOps',
    place: '',
    imageplace: 'Cyllene',
    logo: cylleneLogo,
    description: `Développement d'un <strong>outil de génération automatique d'infrastructure client</strong> en Python ayant permis la visualisation de celles-ci pour tout les clients.<br/>Automatisation du déploiement d'environnements et standardisation des processus.`,
    tags: ['Python', 'DevOps', 'Automation'],
  },
  {
    id: 'epitech-1',
    date: '2024 - 2025',
    title: 'EPITECH - 1ère Année',
    place: 'Lille',
    imageplace: 'EPITECH',
    logo: epitechLogo,
    description: `Année validée avec <strong>les félicitations</strong>.<br/>Plus de 65 projets réalisés (C, Unix System).<br/>Comme:<br/>&emsp;- Mysh: qui est un terminal fait de 0.<br/>&emsp;- Wolf3D: Un jeu vidéo avec du RayCasting<br/>&emsp;- DevOps: Docker et CI/CD GitHub actions.<br/>TEPitech/TOIEC: <strong>870 points</strong>.`,
    tags: ['C', 'Unix'],
  },
  {
    id: 'bac',
    date: '2021 - 2024',
    title: 'Baccalauréat Général - Mention Bien',
    place: 'Lycée Notre Dame des Dunes, Dunkerque',
    imageplace: '',
    logo: nddLyceeLogo,
    description: `Section Européenne Anglais.<br/>Spécialités: NSI, Mathématiques, Maths Expertes.<br/>Certifications Cambridge PET & FIRST.`,
    tags: ['Baccalauréat', 'Mention Bien', 'Section Euro'],
  },
  {
    id: 'brevet',
    date: '2016 - 2021',
    title: 'Brevet des Collèges',
    place: 'Collège Notre Dame, Wormhout',
    imageplace: '',
    logo: sainteUnionLogo,
    description: `Obtenu avec <strong>Mention Très Bien</strong>.<br/>Membre du club de robotique.`,
    tags: ['Brevet', 'Robotique'],
  },
]

// ============================================================
//  SECTION COMPÉTENCES
// ============================================================
export const skillsData = {
  langages: [
    { name: 'Rust', img: rustLogo },
    { name: 'Python', img: pythonLogo },
    { name: 'C', img: cLogo },
    { name: 'C++', img: cppLogo },
    { name: 'React', img: reactLogo },
    { name: 'JavaScript', img: jsLogo },
    { name: 'HTML', img: htmlLogo },
    { name: 'CSS', img: cssLogo },
  ],
  outils: [
    { name: 'Linux', img: linuxLogo },
    { name: 'n8n', img: n8nLogo },
    { name: 'Docker', img: dockerLogo },
    { name: 'GitHub', img: githubLogo },
    { name: 'GitLab', img: gitlabLogo },
    { name: 'Canva', img: canvaLogo },
    { name: 'VS Code', img: vscodeLogo },
    { name: 'Jenkins', img: jenkinsLogo },
  ],
  langues: [
    { name: 'Français', level: 'C2 - Natif', img: frFlag },
    { name: 'Anglais', level: 'B2-C1 - Courant', img: enFlag },
    { name: 'Espagnol', level: 'A2 - Notions', img: esFlag },
  ],
  softSkills: [
    {
      title: 'Travail en équipe',
      desc: "Plus de 60 projets en équipe avec plus d'une vingtaine de personnes différentes.",
    },
    {
      title: 'Communication',
      desc: "Présentations de projets à Epitech et présentation de mon projet professionnel chez Cyllene.",
    },
    {
      title: 'Autonomie',
      desc: "Gestion de nombreux projets Epitech et projets personnels en autonomie.",
    },
    {
      title: 'Créativité',
      desc: "Création de logos pour mes projets et pratique du dessin.",
    },
    {
      title: 'Adaptabilité',
      desc: "Stage chez Cyllene : compréhension d'infrastructure complexe et résolution de problèmes.",
    },
  ],
}

// ============================================================
//  SECTION PROJETS
// ============================================================
export const projectsData = [
  {
    title: 'RoboCar - N4S',
    image: imgrobocar,
    description: "Création d'une voiture autonome sur une base de voiture télécommandée sur un circuit avec des lignes blanches.",
    tags: ['IA', 'Python', 'Câblage', 'Robotique'],
    repo: null,
  },
  {
    title: 'MinIA',
    image: imgMinIA,
    description: "Chatbot IA développé en Python pur (sans framework ML). Implémentation de réseaux de neurones from scratch.",
    tags: ['Python', 'AI', 'Maths'],
    repo: 'https://github.com/EtienneP-26/MinIA',
  },
  {
    title: 'My DOOM',
    image: imgmyDoom,
    description: "Moteur de jeu type Raycasting (Doom-like) écrit en C avec CSFML. Gestion de textures, physique et son.",
    tags: ['C', 'CSFML', 'Game Engine'],
    repo: 'https://github.com/EtienneP-26/My-DOOM-FPS',
  },
  {
    title: 'Mon Portfolio',
    image: imgmonportfolio,
    description: "Interface moderne React/Vite avec design 'Bento Grid'. Vitrine de mes compétences et projets.",
    tags: ['React', 'CSS3', 'Vite'],
    repo: null,
  },
  {
    title: 'MySH',
    image: imgmysh,
    description: "Recréation d'un Shell Unix en C (basé sur tcsh). Gestion des processus, pipes, redirections et signaux.",
    tags: ['C', 'Unix', 'System'],
    repo: 'https://github.com/EtienneP-26/mysh',
  },
]

// ============================================================
//  SECTION CONTACT
// ============================================================
export const contactData = {
  email: 'contact@etienne-pouille.work',
  phone: '06.24.37.79.40',
  github: 'https://github.com/EtienneP-26',
  linkedin: 'https://www.linkedin.com/in/etienne-pouille-8b7814349/',
  cv: CV,
}
