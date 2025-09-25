import type { Dictionary } from "../i18n";
const es = {
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    titulations: "Formación",
    currently: "Actualmente",
    experience: "Experiencia",
    contact: "Contacto",
  },
 home: {
  hello: "Hola, soy",
  downloadCV: "Descargar CV (PDF)",
  tagline: "Estudiante de Ingeniería Informática — Data Science, IA/ML/VA",
  intro: `Tengo 22 años y estoy en mi último semestre de Ingeniería Informática en la UB. Terminaré la carrera en enero de 2026.

          Soy un apasionado de la informática y, en especial, de la Inteligencia Artificial. Me muevo cómodo entre Ciencia de Datos e IA/ML, y complemento ese enfoque con prácticas de DevOps (CI/CD), contenedores, monitorización y despliegue continuo para convertir ideas en productos estables.

          Me gusta estar al día de las nuevas tecnologías: pruebo herramientas, leo documentación y papers, y sigo comunidades técnicas para aprender algo nuevo cada semana. Disfruto resolviendo problemas reales con software claro y datos bien trabajados, y busco proyectos donde pueda aportar valor, crecer y seguir aprendiendo en IA y desarrollo.`,
  
  cvUrl: "/CV_Christian_Queralt_Aixendri_ES.pdf",
  cvFilename: "CV_Christian_Queralt_Aixendri_ES.pdf",
  },
  
  sections: {
    projects: "Proyectos",
    titulations: "Formación",
    currently: "Actualmente",
    experience: "Experiencia profesional",
    contact: "Contacto",
  },
  content: {
    projects: [
      {
        title: "Domain Adaptation in Breast Cancer Classification (TFG)",
        description:
          "Proyecto de IA aplicada a imágenes médicas con técnicas de transferencia para mejorar la clasificación mediante deep learning.",
        tech: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
        links: [{ label: "Repositorio", href: "https://github.com/ChristianQueralt/Domain_Adaptation_in_Breast_Cancer_Classification.git" }],
      },
    ],
    education: [
      {
        title: "Grado en Ingeniería Informática",
        org: "Universitat de Barcelona (UB)",
        period: "sept. 2021 – ene. 2026 (previsto)",
        details:
          "Formación que combina base matemática, pensamiento algorítmico y programación multilenguaje con visión de sistemas y buenas prácticas de ingeniería.\n\nHe trabajado orientación a objetos y diseño de algoritmos, estructuras de datos y cálculo científico, así como análisis de datos con fundamentos estadísticos y construcción de modelos de aprendizaje automático y visión por computador en Python.",
      },
      {
        title: "ESO y Bachillerato científico-tecnológico",
        org: "IES Roquetes",
        period: "sept. 2015 – jun. 2021",
        details: "",
      },
    ],
    experience: [
      {
        role: "Prácticas universitarias (Integración y Despliegue Continuo — CI/CD)",
        org: "UPCNet (Grupo UPC)",
        period: "ene. 2025 – jul. 2025",
        bullets: [
          "Gestión y despliegue de microservicios en entornos de desarrollo.",
          "Monitorización y configuración con Grafana y Helm/Kubernetes.",
          "Soporte a equipos de desarrollo y mantenimiento de sistemas internos.",
        ],
      },
      {
        role: "Introducción a empresa de informática",
        org: "Programa introductorio",
        period: "verano 2023",
        bullets: [
          "Familiarización con flujos de trabajo y soporte técnico básico.",
          "Gestión documental y tareas de servicios informáticos.",
        ],
      },
    ],
    now: [
      {
        title: "Último semestre del Grado en Ingeniería Informática",
        org: "Universitat de Barcelona (UB)",
        period: "hasta ene. 2026",
        details:
          "Cierre de carrera orientado a ciencia de datos e IA/ML. Trabajo final y consolidación de fundamentos de software y sistemas.",
      },
      {
        title: "Microsoft AI-900 — Azure AI Fundamentals",
        org: "Microsoft",
        period: "en curso",
        details:
          "Fundamentos de IA en Azure: ML, NLP, visión por computador y servicios cognitivos. Enfoque práctico orientado a certificación.",
      },
      {
        title: "IBM AI Engineering — Professional Certificate",
        org: "IBM",
        period: "en curso",
        details:
          "Ruta aplicada de ingeniería de IA: pipelines de datos, modelado, evaluación y buenas prácticas para llevar modelos a producción.",
      },
    ],
  },

  aside: {
  name: "Nombre",
  location: "Ubicación",
  specialty: "Especialidad",
},
contactLabels: {
  email: "Email",
  phone: "Teléfono",
  github: "GitHub",
  linkedin: "LinkedIn",
  addresses: "Direcciones",
},
} satisfies Dictionary;
export default es;