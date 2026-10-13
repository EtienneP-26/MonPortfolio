// ============================================================
//  portfolio.js - Source de données unique du portfolio
//  Pour mettre à jour le portfolio, modifiez uniquement ce fichier.
// ============================================================

// --- Assets : Profil ---
import profileImg from '../assets/Profil.png'
import CV from '../assets/CV/CV_Etienne_POUILLE.pdf'

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
import gitlabLogo from '../assets/logos/gitlab.png'
import githubLogo from '../assets/logos/github.png'
import linuxLogo from '../assets/logos/linux.jpeg'
import dockerLogo from '../assets/logos/docker.png'
import n8nLogo from '../assets/logos/n8n.png'
import jenkinsLogo from '../assets/logos/jenkins.png'
import htmlLogo from '../assets/logos/html.png'
import kubernetesLogo from '../assets/logos/kubernetes.png'
// import terraformLogo from '../assets/logos/terraform.png'
import sshLogo from '../assets/logos/ssh.png'
import ollamaLogo from '../assets/logos/ollama.png'
import claudeCodeLogo from '../assets/logos/claude-code.png'
import tailscaleLogo from '../assets/logos/tailscale.png'

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
import imgstarttrek from '../assets/projects/starttrek.png'
import imgcvrie from '../assets/projects/cvrie.png'
import imgalf from '../assets/projects/ALF.png'
import imgAutoMail from '../assets/projects/autoMail.png'
import imgprojecttemplate from '../assets/projects/project-template.png'
import imgNoctia from '../assets/projects/Noctia.png'
import imgRimp from '../assets/projects/RIMP.png'
import imgMyTorch from '../assets/projects/MyTorch.png'
// import imgpytorch from '../assets/projects/pytorch-from-scratch.png'
// import imgmymarvin from '../assets/projects/myma.png'

// ============================================================
//  SECTION PROFIL
// ============================================================
export const profileData = {
  name: 'Etienne POUILLE',
  photo: profileImg,
  cv: CV,
  subtitle: 'ÉTUDIANT EPITECH - AI Engineer · MLOps · Edge AI · DevOps · FDE',
  bio: `Étudiant en 3ème année à EPITECH Lille, je construis des systèmes d'IA et l'infrastructure qui les fait tourner : LLM locaux avec Ollama, IA embarquée sur voiture autonome, pipelines CI/CD.
Ancien stagiaire SysOps / DevOps chez Cyllene, je cherche un stage IA / MLOps / Edge AI / DevOps du 29 mars au 27 août 2027, dans le Nord de la France.`,
  interests: "Centres d'intérêt : sport (automobile, escalade, callisthénie), sciences, musique, dessin.",
  github: 'https://github.com/EtienneP-26',
  linkedin: 'https://www.linkedin.com/in/etienne-pouille-8b7814349/',
  email: 'contact@etienne-pouille.work',
  phone: '06.24.37.79.40',
  statuses: [
    {
      title: 'En recherche de stage',
      subtitle: '29/03/27 - 27/08/27',
      href: '#stage',
    },
    {
      title: 'Freelance',
      subtitle: 'Automatisation IA',
    },
  ],
}

// ============================================================
//  SECTION STAGE
// ============================================================
export const stageAvailability = {
  start: '29 mars',
  end: '27 août',
  year: '2027',
  region: 'Nord',
  cities: 'Dunkerque, Calais, Lille et ses alentours',
  remote: 'télétravail toléré',
}

export const stagesData = [
  {
    id: 'fulltime',
    type: 'Stage Temps Plein',
    badge: '5 jours/semaine',
    period: `${stageAvailability.start} ${stageAvailability.year} → ${stageAvailability.end} ${stageAvailability.year}`,
    duration: '4-5 mois',
    context: [
      "En fin de 3ème année, je serai disponible à temps plein pour un stage conventionnel.",
      "Cette période correspond à une immersion complète en entreprise, idéale pour un projet ambitieux et une réelle intégration dans les équipes.",
    ],
    details: [
      { label: 'Domaine', value: 'IA, MLOps, Edge AI, DevOps' },
      { label: 'Localisation', value: `${stageAvailability.region} (${stageAvailability.cities}) - ${stageAvailability.remote}` },
      { label: 'Rythme', value: '5 jours/semaine - temps plein' },
      { label: 'Type de contrat', value: 'Stage / CDD / CDI' },
    ],
    color: 'forest',
  },
]

// ============================================================
//  SECTION PARCOURS
// ============================================================
export const parcoursData = [
  {
    id: 'epitech-3',
    date: '2026 - Actuellement',
    title: 'EPITECH - 3ème Année',
    place: 'Lille',
    imageplace: 'EPITECH',
    logo: epitechLogo,
    description: `Année <strong>en cours</strong>.<br/>Spécialisation visée : <strong>IA</strong> (principale), Maths & DevOps (secondaires).<br/>En cours : badge Google DeepMind - <em>AI Research Foundations</em>.<br/>Projets en cours :<br/>&emsp;- MyTorch : réseau de neurones recodé from scratch, utilisé pour jouer aux échecs.<br/>&emsp;- Sensai : IA en ligne de commande, dans la veine d'ALF-CLI<br/>&emsp;- Bernstein : conception d'une infrastructure Kubernetes (module DevOps)..<br/>&emsp;- Cryptographie : réimplémentation de XOR, AES, RSA et PGP.`,
    tags: ['IA', 'Maths', 'DevOps'],
  },
  {
    id: 'epitech-2',
    date: '2025 - 2026',
    title: 'EPITECH - 2ème Année',
    place: 'Lille',
    imageplace: 'EPITECH',
    logo: epitechLogo,
    description: `Année validée avec <strong>les félicitations</strong>.<br/>16 projets réalisés cette année comme :<br/>&emsp; Piscine (C++, Rust, Haskell), Raytracer (Rust), Starttrek (Python, IA reinforcement learning).<br/>Réalisé cette année :<br/>&emsp;- Modules IA, DevOps et Maths.<br/>&emsp;- User Group de CyberSécurité (HackTheBox Season 10).<br/>&emsp;- RobotCar (Projet de voiture autonome, nous sommes cinq et nous representons EPITECH Lille sur le &emsp;&emsp;concours national)<br/>TEPitech/TOIEC: <strong>910 points</strong>.`,
    tags: ['C++', 'Rust', 'Python', 'Haskell', 'Jenkins'],
  },
  {
    id: 'cyllene',
    date: 'Sept 2025 - Déc 2025',
    title: 'Cyllene - Stage Ingénieur SysOps DevOps',
    place: '',
    imageplace: 'Cyllene',
    logo: cylleneLogo,
    description: `Développement <strong>en autonomie</strong> d'un outil Python de génération et de visualisation automatique des infrastructures clients, intégré aux pipelines GitLab CI/CD.<br/>Utilisé pour accélérer la communication technique avec les clients et les équipes compta/dev.<br/>Travail en autonomie avec point hebdomadaire.`,
    tags: ['Python', 'DevOps', 'Automation', 'GitLab CI/CD'],
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
export const skillLevels = {
  maitrise: 'Maîtrisé',
  pratique: 'Pratiqué',
  apprentissage: 'En apprentissage',
}

export const skillsData = {
  categories: [
    {
      title: 'IA & MLOps',
      skills: [
        { name: 'Python', img: pythonLogo, level: 'maitrise' },
        { name: 'Ollama', img: ollamaLogo, level: 'maitrise' },
        { name: 'Claude Code', img: claudeCodeLogo, level: 'maitrise' },
        { name: 'Reinforcement Learning', short: 'RL', level: 'pratique' },
      ],
    },
    {
      title: 'Web',
      skills: [
        { name: 'React', img: reactLogo, level: 'pratique' },
        { name: 'JavaScript', img: jsLogo, level: 'pratique' },
        { name: 'HTML/CSS', img: htmlLogo, level: 'pratique' },
      ],
    },
    {
      title: 'Systèmes & embarqué',
      skills: [
        { name: 'Rust', img: rustLogo, level: 'maitrise' },
        { name: 'C', img: cLogo, level: 'maitrise' },
        { name: 'C++', img: cppLogo, level: 'pratique' },
        { name: 'Haskell', short: 'Hs', level: 'pratique' },
        { name: 'Bash', short: 'sh', level: 'pratique' },
      ],
    },
    {
      title: 'DevOps & Infra',
      skills: [
        { name: 'Linux', img: linuxLogo, level: 'maitrise' },
        { name: 'Docker', img: dockerLogo, level: 'maitrise' },
        { name: 'GitHub Actions', img: githubLogo, level: 'maitrise' },
        { name: 'Tailscale', img: tailscaleLogo, level: 'maitrise' },
        { name: 'SSH', img: sshLogo, level: 'maitrise' },
        { name: 'n8n', img: n8nLogo, level: 'maitrise' },
        { name: 'GitLab CI/CD', img: gitlabLogo, level: 'pratique' },
        { name: 'Jenkins', img: jenkinsLogo, level: 'pratique' },
        { name: 'Kubernetes', img: kubernetesLogo, level: 'apprentissage' },
      ],
    },
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
    title: 'Noctia',
    featured: true,
    image: imgNoctia,
    description: "Plugin Claude Code pour faciliter le développement avec l'IA : règles de dev et modes de travail (l'IA comme mentor, ou en autonomie avec orchestrateur et sous-agents), plus des mods Claude Code. Inclut des garde-fous (hook git, scan des manques d'un projet, audit).",
    tags: ['IA', 'Claude Code', 'Agents'],
    status: 'en-cours',
    statusLabel: 'En cours - Perso',
    repo: 'https://github.com/EtienneP-26/Noctia',
  },
  {
    title: 'ALF',
    featured: true,
    image: imgalf,
    description: "Moteur agentique perso (ALF) connecté aux APIs Ollama. Sous-composants : ALF-CLI (interface ligne de commande), ALF-UI (interface web, à venir).",
    tags: ['IA', 'Python', 'API'],
    status: 'en-cours',
    statusLabel: 'En cours - Perso',
    repo: 'https://github.com/EtienneP-26/ALF.git',
  },
  {
    title: 'Tri d\'emails automatisé',
    featured: true,
    image: imgAutoMail,
    description: "Tri automatique des emails, déployé sur VPS perso, LLM local via API Ollama (migration prévue vers gpt-oss:20b pour réduire la consommation de tokens).",
    tags: ['n8n', 'IA', 'Automatisation', 'API'],
    status: 'termine',
    statusLabel: 'Terminé, itéré',
    repo: null,
  },
  {
    title: 'RoboCar',
    featured: true,
    image: imgrobocar,
    description: "Voiture quasi-autonome sur circuit (v1 : suivi d'une ligne blanche). En v2 (2026), ajout d'un LiDAR et d'une caméra 3D pour viser une conduite autonome dans tout type d'environnement. Rôle : construction physique et algorithmes embarqués.",
    tags: ['IA', 'Python', 'Câblage', 'Robotique'],
    status: 'en-cours',
    statusLabel: 'En cours (v2) - EPITECH',
    repo: null,
  },
  // {
  //   title: 'Bernstein',
  //   image: null,
  //   description: "Projet du module DevOps : conception d'une infrastructure Kubernetes.",
  //   tags: ['DevOps', 'Kubernetes'],
  //   status: 'en-cours',
  //   statusLabel: 'En cours - EPITECH',
  //   repo: null,
  // },
  {
    title: 'MyTorch',
    featured: true,
    image: imgMyTorch,
    description: "Réseau de neurones recodé from scratch, utilisé ensuite pour jouer aux échecs.",
    tags: ['IA', 'Deep Learning'],
    status: 'en-cours',
    statusLabel: 'En cours - EPITECH',
    repo: null,
  },
  {
    title: 'RIMP',
    featured: true,
    image: imgRimp,
    description: "Application de dessin pour Linux, écrite en Rust, avec support de tablette graphique. Née d'un projet EPITECH (recoder GIMP), réorientée vers le dessin.",
    tags: ['Rust', 'Linux', 'Graphisme'],
    status: 'en-cours',
    statusLabel: 'En cours - Perso & EPITECH',
    repo: 'https://github.com/EtienneP-26/RIMP',
  },
  // {
  //   title: 'IA Sensai',
  //   image: null,
  //   description: "Projet EPITECH d'IA en ligne de commande, dans la même veine qu'ALF-CLI.",
  //   tags: ['IA', 'Python'],
  //   status: 'en-cours',
  //   statusLabel: 'En cours - EPITECH',
  //   repo: null,
  // },
  // {
  //   title: 'Module Cryptographie',
  //   image: null,
  //   description: "Réimplémentation d'algorithmes de cryptographie : XOR, AES, RSA et PGP.",
  //   tags: ['Cryptographie'],
  //   status: 'en-cours',
  //   statusLabel: 'En cours - EPITECH',
  //   repo: null,
  // },
  {
    title: 'StartTrek',
    image: imgstarttrek,
    description: "Modèle de Reinforcement Learning pour l'alunissage autonome d'un module spatial simulé.",
    tags: ['IA', 'Python', 'Reinforcement Learning'],
    status: 'termine',
    statusLabel: 'Terminé - EPITECH',
    repo: null,
  },
  {
    title: 'MinIA',
    image: imgMinIA,
    description: "Réimplémentation d'un petit LLM. Prochaine étape à définir - piste envisagée : extension vers le multimodal (texte → image).",
    tags: ['Python', 'AI', 'Maths'],
    status: 'en-exploration',
    statusLabel: 'En exploration - Perso',
    repo: 'https://github.com/EtienneP-26/MinIA',
  },
  {
    title: 'CVRIE',
    image: imgcvrie,
    description: "Clustering non supervisé (8 groupes distincts) sur une base de symptômes patients + détection de tumeurs cérébrales par imagerie/NLP (partie réalisée par un coéquipier).",
    tags: ['IA', 'Python', 'Supervised', 'Unsupervised'],
    status: 'termine',
    statusLabel: 'Terminé - EPITECH',
    repo: null,
  },
  {
    title: 'My DOOM',
    image: imgmyDoom,
    description: "Doom-like en C avec CSFML (raycasting, 2.5D). Projet d'équipe Tek1.",
    tags: ['C', 'CSFML', 'Game Engine'],
    status: 'termine',
    statusLabel: 'Terminé - EPITECH',
    repo: 'https://github.com/EtienneP-26/My-DOOM-FPS',
  },
  {
    title: 'MySH',
    image: imgmysh,
    description: "Réimplémentation d'un shell Unix (parsing, redirections, pipes, builtins) en C, en plusieurs étapes individuelles puis en équipe.",
    tags: ['C', 'Unix', 'System'],
    status: 'termine',
    statusLabel: 'Terminé - EPITECH',
    repo: 'https://github.com/EtienneP-26/mysh',
  },
  {
    title: 'Mon Portfolio',
    image: imgmonportfolio,
    description: "Interface moderne React/Vite avec design 'Bento Grid'. Vitrine de mes compétences et projets.",
    tags: ['React', 'CSS3', 'Vite'],
    repo: null,
  },
  {
    title: 'project-template',
    image: imgprojecttemplate,
    description: "Outil de scaffolding pour générer une base de repo instantanément (bonnes pratiques, structure prête à l'emploi).",
    tags: ['Github Actions', 'Docker', 'Bash', 'Scaffolding', 'Automatisation'],
    status: 'perso',
    statusLabel: 'Perso',
    repo: 'https://github.com/EtienneP-26/project-template',
  },
  // {
  //   title: 'MyMarvin',
  //   image: imgmymarvin,
  //   description: "Projet EPITECH : Tests automatisés à l’aide de Jenkins",
  //   tags: ['Jenkins', 'DevOps', 'Automatisation'],
  //   repo: null,
  // },
  // {
  //   title: 'PyTorch from scratch (Python & Rust)',
  //   image: imgpytorch,
  //   description: "Réimplémentation des fondamentaux de PyTorch (tenseurs, autograd) en Python puis en Rust.",
  //   tags: ['Python', 'Rust', 'Machine Learning'],
  //   status: 'en-cours',
  //   statusLabel: 'En cours - EPITECH',
  //   repo: null,
  // },
]

// ============================================================
//  SECTION ROADMAP - Prochainement
// ============================================================
export const roadmapData = [
  'Fine-tuning de modèles LLM (expérimentations)',
  'MySH réécrit en Rust',
  'Bibliothèque Python à cœur Rust, pour accélérer du code Python via des appels de fonctions',
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
