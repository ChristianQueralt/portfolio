// lib/data.ts
// Static site data used across pages — filled from the provided CV

export const about = {
  // Public hero/about info
  name: "Christian Queralt Aixendri", // from CV
  tagline: "Estudiante de Ingeniería Informática — Data Science, IA/ML/VA", // from CV summary
  location: "Collblanc (Barcelona) | Roquetes (Tarragona), España", // from CV
  // Short intro paragraph for the home (from “Sobre mí”)
  // Use a template literal to keep a real line break
  photo: "/Foto_CV.jpg",

  intro: `Tengo 22 años y estoy en mi último semestre de Ingeniería Informática en la UB. Terminaré la carrera en enero de 2026. 
          Soy un apasionado de la informática y, en especial, de la Inteligencia Artificial. Me muevo cómodo entre Ciencia de Datos e IA/ML, y complemento ese enfoque con prácticas de DevOps (CI/CD), contenedores, monitorización y despliegue continuo para convertir ideas en productos estables.
          Me gusta estar al día de las nuevas tecnologías: pruebo herramientas, leo documentación y papers, y sigo comunidades técnicas para aprender algo nuevo cada semana. Disfruto resolviendo problemas reales con software claro y datos bien trabajados, y busco proyectos donde pueda aportar valor, crecer y seguir aprendiendo en IA y desarrollo.`,
};

export const projects = [
  {
    title: "Domain Adaptation in Breast Cancer Classification (TFG)", // from CV
    description:
      "Proyecto de IA aplicada a imágenes médicas con técnicas de transferencia de conocimiento para mejorar la clasificación mediante deep learning.",
    tech: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"], // aligned with CV skills
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/ChristianQueralt/Domain_Adaptation_in_Breast_Cancer_Classification.git", // from CV
      },
    ],
  },
];

export const education = [
  {
    title: "Grado en Ingeniería Informática",
    org: "Universitat de Barcelona (UB)",
    period: "sept. 2021 – feb. 2026 (previsto)",
    details: `Formación que combina base matemática, pensamiento algorítmico y programación multilenguaje con visión de sistemas y buenas prácticas de ingeniería.\n\nHe trabajado orientación a objetos y diseño de algoritmos, estructuras de datos y cálculo científico, así como análisis de datos con fundamentos estadísticos y construcción de modelos de aprendizaje automático y visión artificial por computador en Python.`,
  },
  {
    title: "ESO y Bachillerato científico-tecnológico",
    org: "IES Roquetes",
    period: "sept. 2015 – jun. 2021",
    details: "",
  },
];


export const experience = [
  {
    role: "Prácticas universitarias (Integración y Despliegue Continuo — CI/CD)",
    org: "UPCNet (Grupo UPC)",
    period: "ene. 2025 – jul. 2025", // from CV
    bullets: [
      "Gestión y despliegue de microservicios en entornos de desarrollo.",
      "Monitorización y configuración con Grafana y Helm/Kubernetes.",
      "Soporte a equipos de desarrollo y mantenimiento de sistemas internos.",
    ],
  },
  {
    role: "Introducción a empresa de informática",
    org: "Programa introductorio",
    period: "verano 2023", // from CV
    bullets: [
      "Familiarización con flujos de trabajo y soporte técnico básico.",
      "Gestión documental y tareas de servicios informáticos.",
    ],
  },
];

export const skills = {
  programming: ["Python (avanzado)", "Java", "JavaScript", "HTML/CSS", "SQL", "C", "C++", "C#"],
  dataAI: [
    "Pandas, NumPy, Matplotlib",
    "ML clásico con scikit-learn",
    "Fundamentos de deep learning para clasificación",
    "IA generativa y asistentes de programación",
  ],
  devAutomation: ["Automatización con scripts en Python", "Integración de APIs REST", "Desarrollo web básico full-stack"],
  tools: ["Git", "Jira"],
};

export const languages = [
  { name: "Castellano", level: "Nativo" },
  { name: "Catalán", level: "Nativo" },
  { name: "Inglés", level: "B2 (alto)" },
  { name: "Alemán", level: "En proceso de aprendizaje" },
];

export const extras = [
  "Carné de conducir y vehículo propio",
  "Titulación Higiénico Sanitario",
];

export const contact = {
  email: "christianqueralt2003@gmail.com", // from CV
  phone: "652-210-033", // from CV
  linkedin: "https://www.linkedin.com/in/christian-queralt-aixendri-5a4846278/?trk=opento_sprofile_details", // not present in CV
  github: "https://github.com/ChristianQueralt", // inferred from repo owner in CV
  cvUrl: "/CV_Christian_Queralt_Aixendri_ES.pdf", // place this file under /public
  addresses: [
    "Roquetes (Tarragona) — c/ Isabell II 16, 4.6", // from CV
    "Barcelona — ctra/ Collblanc 48, 2.1", // from CV (tal cual)
  ],
};

export const skillsBadges = {
  lenguajes: [
    "Python", "Java", "JavaScript",
    "HTML", "CSS", "SQL",
    "C", "C++", "C#"
  ],
  dataIA: [
    "Pandas", "NumPy", "Matplotlib",
    "scikit-learn", "PyTorch", "Visión por Computador"
  ],
  sistemasDevOps: [
    "Sistemas Operativos (Linux)", "Bash scripting",
    "CI/CD", "Docker/Contenedores", "Grafana", "Helm/Kubernetes"
  ],
  aptitudes: [
    "Algoritmos", "Estructuras de Datos", "POO (OOP)",
    "Diseño de Software", "Buenas Prácticas", "Desarrollo Web", "Android"
  ],
  matematicas: [
    "Matemáticas" // badge único que agrupa Álgebra, Cálculo, Discreta, Prob/Est
  ]
};


// Qué estoy haciendo ahora (para /currently)
export const now = [
  {
    title: "Último semestre del Grado en Ingeniería Informática",
    org: "Universitat de Barcelona (UB)",
    period: "hasta ene. 2026",
    details:
      "Cierre de carrera orientado a ciencia de datos e IA/ML. Únicamente faltan dos asignaturas",
  },
  {
    title: "Microsoft AI-900 — Azure AI Fundamentals",
    org: "Microsoft",
    period: "en curso",
    details:
      "Fundamentos de IA en Azure: visión general de ML, NLP, visión por computador y servicios cognitivos. Enfoque práctico y de certificación.",
  },
  {
    title: "IBM AI Engineering — Professional Certificate",
    org: "IBM",
    period: "en curso",
    details:
      "Ruta aplicada de ingeniería de IA: pipelines de datos, modelado, evaluación y buenas prácticas para llevar modelos a producción.",
  },
];
