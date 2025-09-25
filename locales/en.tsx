import type { Dictionary } from "../i18n";

const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    titulations: "Education",
    currently: "Currently",
    experience: "Experience",
    contact: "Contact",
  },
  home: {
  hello: "Hi, I'm",
  downloadCV: "Download CV (PDF)",
  tagline: "Computer Engineering student — Data Science, AI/ML/CV",
  intro: `I’m 22 and in my final semester of Computer Engineering at UB; I’ll finish the degree in January 2026.

  I’m passionate about computing and, especially, Artificial Intelligence. I work comfortably across Data Science and AI/ML, and complement that focus with DevOps practices (CI/CD), containers, monitoring and continuous deployment to turn ideas into reliable products.

  I like to stay up to date with new technologies: I try tools, read docs and papers, and follow technical communities to learn something new every week. I enjoy solving real problems with clear software and well-prepared data, and I’m looking for projects where I can add value, grow, and keep learning in AI and development.`,
  
  cvUrl: "/CV_Christian_Queralt_Aixendri_EN.pdf",
  cvFilename: "CV_Christian_Queralt_Aixendri_EN.pdf",
},

  sections: {
    projects: "Projects",
    titulations: "Education",
    currently: "Currently",
    experience: "Professional Experience",
    contact: "Contact",
  },
  content: {
    projects: [
      {
        title: "Domain Adaptation in Breast Cancer Classification (BSc Thesis)",
        description:
          "Applied AI for medical imaging using transfer techniques to improve breast cancer classification with deep learning.",
        tech: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
        links: [{ label: "Repository", href: "https://github.com/ChristianQueralt/Domain_Adaptation_in_Breast_Cancer_Classification.git" }],
      },
    ],
    education: [
      {
        title: "BSc in Computer Engineering",
        org: "University of Barcelona (UB)",
        period: "Sept 2021 – Jan 2026 (expected)",
        details:
          "Training that combines a strong mathematical base, algorithmic thinking, and multi-language programming with systems perspective and software engineering best practices.\n\nExperience with OOP and algorithm design, data structures and scientific computing, as well as data analysis with statistical foundations and building machine learning and computer vision models in Python.",
      },
      {
        title: "Secondary and Pre-university (science & technology)",
        org: "IES Roquetes",
        period: "Sept 2015 – Jun 2021",
        details: "",
      },
    ],
    experience: [
      {
        role: "University internship (Continuous Integration & Deployment — CI/CD)",
        org: "UPCNet (UPC Group)",
        period: "Jan 2025 – Jul 2025",
        bullets: [
          "Managing and deploying microservices in development environments.",
          "Monitoring and configuration with Grafana and Helm/Kubernetes.",
          "Supporting dev teams and maintaining internal systems.",
        ],
      },
      {
        role: "Introductory stay at an IT company",
        org: "Introductory program",
        period: "Summer 2023",
        bullets: [
          "Familiarisation with workflows and basic technical support.",
          "Documentation management and IT service tasks.",
        ],
      },
    ],
    now: [
      {
        title: "Final semester of the BSc in Computer Engineering",
        org: "University of Barcelona (UB)",
        period: "until Jan 2026",
        details:
          "Wrapping up the degree with a focus on data science and ML. Thesis work and consolidation of software & systems fundamentals.",
      },
      {
        title: "Microsoft AI-900 — Azure AI Fundamentals",
        org: "Microsoft",
        period: "in progress",
        details:
          "Azure AI fundamentals: ML, NLP, computer vision and cognitive services. Practical and certification-oriented.",
      },
      {
        title: "IBM AI Engineering — Professional Certificate",
        org: "IBM",
        period: "in progress",
        details:
          "Applied AI engineering path: data pipelines, modeling, evaluation and MLOps to move models into production.",
      },
    ],
  },
  aside: {
  name: "Name",
  location: "Location",
  specialty: "Specialty",
},
contactLabels: {
  email: "Email",
  phone: "Phone",
  github: "GitHub",
  linkedin: "LinkedIn",
  addresses: "Addresses",
},
} satisfies Dictionary;
export default en;
