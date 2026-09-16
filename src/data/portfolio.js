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
import kubernetesLogo from '../assets/logos/kubernetes.png'
import terraformLogo from '../assets/logos/terraform.png'
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
// import imgpytorch from '../assets/projects/pytorch-from-scratch.png'
// import imgmymarvin from '../assets/projects/myma.png'

// ============================================================
//  SECTION PROFIL
// ============================================================
export const profileData = {
  name: 'Etienne POUILLE',
  photo: profileImg,
  cv: CV,
  subtitle: 'Étudiant EPITECH — 3ème Année',
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
    id: 'fulltime',
    type: 'Stage Temps Plein',
    badge: '5 jours/semaine',
    period: '29 mars 2027 → 27 août 2027',
    duration: '4-5 mois',
    context: [
      "En fin de 3ème année, je serai disponible à temps plein pour un stage conventionnel.",
      "Cette période correspond à une immersion complète en entreprise, idéale pour un projet ambitieux et une réelle intégration dans les équipes.",
    ],
    details: [
      { label: 'Domaine', value: 'DevOps, MLOps, IA, Edge AI' },
      { label: 'Localisation', value: 'Nord (Dunkerque, Calais, Lille et ses alentours) — télétravail toléré' },
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
    description: `Année <strong>en cours</strong>.<br/>Spécialisation visée : <strong>IA</strong> (principale), Maths & DevOps (secondaires).<br/>En cours : badge Google DeepMind — <em>AI Research Foundations</em>.`,
    tags: ['IA', 'Maths', 'DevOps'],
  },
  {
    id: 'epitech-2',
    date: '2025 - 2026',
    title: 'EPITECH - 2ème Année',
    place: 'Lille',
    imageplace: 'EPITECH',
    logo: epitechLogo,
    description: `Année validée avec <strong>les félicitations</strong> (piscine).<br/>16 projets réalisés cette année comme :<br/>&emsp; Piscine (C++, Rust, Haskell), Raytracer (Rust), Starttrek (Python, IA reinforcement learning).<br/>Réalisé cette année :<br/>&emsp;- Modules IA, DevOps et Maths.<br/>&emsp;- User Group de CyberSécurité (HackTheBox Season 10).<br/>&emsp;- RobotCar (Projet de voiture autonome, nous sommes cinq et nous representons EPITECH Lille sur le &emsp;&emsp;concours national)<br/>TEPitech/TOIEC: <strong>910 points</strong>.`,
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
export const skillsData = {
  langages: [
    { name: 'Python', img: pythonLogo },
    { name: 'C', img: cLogo },
    { name: 'Rust', img: rustLogo },
    { name: 'React', img: reactLogo },
    { name: 'JavaScript', img: jsLogo },
    { name: 'C++', img: cppLogo },
    { name: 'HTML', img: htmlLogo },
    { name: 'CSS', img: cssLogo },
  ],
  outils: [
    { name: 'Linux', img: linuxLogo },
    { name: 'GitHub', img: githubLogo },
    { name: 'GitLab CI/CD', img: gitlabLogo },
    { name: 'Docker', img: dockerLogo },
    { name: 'n8n', img: n8nLogo },
    { name: 'Jenkins', img: jenkinsLogo },
    { name: 'SSH', img: sshLogo },
    { name: 'VS Code', img: vscodeLogo },
    { name: 'Canva', img: canvaLogo },
    { name: 'Ollama', img: ollamaLogo, learning: true },
    { name: 'Kubernetes', img: kubernetesLogo, learning: true },
    // { name: 'Terraform', img: terraformLogo, learning: true },
    { name: 'Claude Code', img: claudeCodeLogo, learning: true },
    { name: 'Tailscale', img: tailscaleLogo, learning: true },
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
    title: 'RoboCar',
    image: imgrobocar,
    description: "Voiture quasi-autonome suivant une ligne blanche sur circuit. Rôle : construction physique + algorithmes embarqués. Repris en 2026 avec de nouveaux objectifs.",
    tags: ['IA', 'Python', 'Câblage', 'Robotique'],
    status: 'en-cours',
    statusLabel: 'En cours (v2) — EPITECH',
    repo: null,
  },
  {
    title: 'ALF',
    image: imgalf,
    description: "Moteur agentique perso (ALF) connecté aux APIs Ollama. Sous-composants : ALF-CLI (interface ligne de commande), ALF-UI (interface web, à venir).",
    tags: ['IA', 'Python', 'API'],
    status: 'en-cours',
    statusLabel: 'En cours',
    repo: 'https://github.com/EtienneP-26/ALF.git',
  },
  {
    title: 'Tri d\'emails automatisé',
    image: imgAutoMail,
    description: "Tri automatique des emails, déployé sur VPS perso, LLM local via API Ollama (migration prévue vers gpt-oss:20b pour réduire la consommation de tokens).",
    tags: ['n8n', 'IA', 'Automatisation', 'API'],
    status: 'termine',
    statusLabel: 'Terminé, itéré',
    repo: null,
  },
  {
    title: 'StartTrek',
    image: imgstarttrek,
    description: "Modèle de Reinforcement Learning pour l'alunissage autonome d'un module spatial simulé.",
    tags: ['IA', 'Python', 'Reinforcement Learning'],
    status: 'termine',
    statusLabel: 'Terminé — EPITECH',
    repo: null,
  },
  {
    title: 'CVRIE',
    image: imgcvrie,
    description: "Clustering non supervisé (8 groupes distincts) sur une base de symptômes patients + détection de tumeurs cérébrales par imagerie/NLP (partie réalisée par un coéquipier).",
    tags: ['IA', 'Python', 'Supervised', 'Unsupervised'],
    status: 'termine',
    statusLabel: 'Terminé — EPITECH',
    repo: null,
  },
  // {
  //   title: 'MyMarvin',
  //   image: imgmymarvin,
  //   description: "Projet EPITECH : Tests automatisés à l’aide de Jenkins",
  //   tags: ['Jenkins', 'DevOps', 'Automatisation'],
  //   repo: null,
  // },
  {
    title: 'Mon Portfolio',
    image: imgmonportfolio,
    description: "Interface moderne React/Vite avec design 'Bento Grid'. Vitrine de mes compétences et projets.",
    tags: ['React', 'CSS3', 'Vite'],
    repo: null,
  },
  {
    title: 'My DOOM',
    image: imgmyDoom,
    description: "Doom-like en C avec CSFML (raycasting, 2.5D). Projet d'équipe Tek1.",
    tags: ['C', 'CSFML', 'Game Engine'],
    status: 'termine',
    statusLabel: 'Terminé — EPITECH',
    repo: 'https://github.com/EtienneP-26/My-DOOM-FPS',
  },
  {
    title: 'MinIA',
    image: imgMinIA,
    description: "Réimplémentation d'un petit LLM. Prochaine étape à définir — piste envisagée : extension vers le multimodal (texte → image).",
    tags: ['Python', 'AI', 'Maths'],
    status: 'en-exploration',
    statusLabel: 'En exploration — Perso',
    repo: 'https://github.com/EtienneP-26/MinIA',
  },
  {
    title: 'MySH',
    image: imgmysh,
    description: "Réimplémentation d'un shell Unix (parsing, redirections, pipes, builtins) en C, en plusieurs étapes individuelles puis en équipe.",
    tags: ['C', 'Unix', 'System'],
    status: 'termine',
    statusLabel: 'Terminé — EPITECH',
    repo: 'https://github.com/EtienneP-26/mysh',
  },
  {
    title: 'project-template',
    image: imgprojecttemplate,
    description: "Outil de scaffolding pour générer une base de repo instantanément (bonnes pratiques, structure prête à l'emploi).",
    tags: ['Github Actions', 'Docker', 'Bash', 'Scaffolding', 'Automatisation'],
    status: 'perso',
    statusLabel: 'Perso',
    repo: 'https://github.com/EtienneP-26/project-template.git',
  },
  // {
  //   title: 'PyTorch from scratch (Python & Rust)',
  //   image: imgpytorch,
  //   description: "Réimplémentation des fondamentaux de PyTorch (tenseurs, autograd) en Python puis en Rust.",
  //   tags: ['Python', 'Rust', 'Machine Learning'],
  //   status: 'en-cours',
  //   statusLabel: 'En cours — EPITECH',
  //   repo: null,
  // },
]

// ============================================================
//  SECTION ROADMAP — Prochainement
// ============================================================
export const roadmapData = [
  'PyTorch from scratch (Python & Rust)',
  'Fine-tuning de modèles LLM (expérimentations)',
  'RPG 2D sur Godot (avec un ami)',
  'Applications mobiles',
  'MySH réécrit en Rust',
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
