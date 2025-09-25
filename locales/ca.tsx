import type { Dictionary } from "../i18n";
const ca = {
  nav: {
    home: "Inici",
    projects: "Projectes",
    titulations: "Formació",
    currently: "Ara mateix",
    experience: "Experiència",
    contact: "Contacte",
  },
  home: {
  hello: "Hola, sóc",
  downloadCV: "Descarregar CV (PDF)",
  tagline: "Estudiant d’Enginyeria Informàtica — Data Science, IA/ML/VPC",
  intro: `Tinc 22 anys i estic a l’últim semestre d’Enginyeria Informàtica a la UB; acabaré el grau al gener de 2026.

  Sóc apassionat de la informàtica i, especialment, de la Intel·ligència Artificial. Em moc amb comoditat entre Ciència de Dades i IA/ML, i complemento aquest enfocament amb pràctiques de DevOps (CI/CD), contenidors, monitorització i desplegament continu per convertir idees en productes fiables.

  M’agrada mantenir-me al dia de les noves tecnologies: provo eines, llegeixo documentació i articles, i segueixo comunitats tècniques per aprendre alguna cosa nova cada setmana. Gaudeixo resolent problemes reals amb programari clar i dades ben treballades, i cerco projectes on pugui aportar valor, créixer i continuar aprenent en IA i desenvolupament.`,
  
  cvUrl: "/CV_Christian_Queralt_Aixendri_CAT.pdf",
  cvFilename: "CV_Christian_Queralt_Aixendri_CAT.pdf",
},

  sections: {
    projects: "Projectes",
    titulations: "Formació",
    currently: "Ara mateix",
    experience: "Experiència professional",
    contact: "Contacte",
  },
  content: {
    projects: [
      {
        title: "Domain Adaptation in Breast Cancer Classification (TFG)",
        description:
          "IA aplicada a imatge mèdica amb tècniques de transferència per millorar la classificació mitjançant deep learning.",
        tech: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
        links: [{ label: "Repositori", href: "https://github.com/ChristianQueralt/Domain_Adaptation_in_Breast_Cancer_Classification.git" }],
      },
    ],
    education: [
      {
        title: "Grau en Enginyeria Informàtica",
        org: "Universitat de Barcelona (UB)",
        period: "set. 2021 – gen. 2026 (previst)",
        details:
          "Formació que combina base matemàtica, pensament algorísmic i programació multillenguatge amb visió de sistemes i bones pràctiques d’enginyeria.\n\nTreball en POO i disseny d’algorismes, estructures de dades i càlcul científic, així com anàlisi de dades amb fonaments estadístics i construcció de models de ML i visió per computador en Python.",
      },
      {
        title: "ESO i Batxillerat científic-tecnològic",
        org: "IES Roquetes",
        period: "set. 2015 – jun. 2021",
        details: "",
      },
    ],
    experience: [
      {
        role: "Pràctiques universitàries (Integració i Desplegament Continu — CI/CD)",
        org: "UPCNet (Grup UPC)",
        period: "gen. 2025 – jul. 2025",
        bullets: [
          "Gestió i desplegament de microserveis en entorns de desenvolupament.",
          "Monitorització i configuració amb Grafana i Helm/Kubernetes.",
          "Suport a equips de desenvolupament i manteniment de sistemes interns.",
        ],
      },
      {
        role: "Estada introductòria en empresa informàtica",
        org: "Programa introductori",
        period: "estiu 2023",
        bullets: [
          "Familiarització amb fluxos de treball i suport tècnic bàsic.",
          "Gestió documental i tasques de serveis informàtics.",
        ],
      },
    ],
    now: [
      {
        title: "Últim semestre del Grau en Enginyeria Informàtica",
        org: "Universitat de Barcelona (UB)",
        period: "fins gen. 2026",
        details:
          "Tancament del grau amb focus en ciència de dades i ML. Treball final i consolidació de fonaments de programari i sistemes.",
      },
      {
        title: "Microsoft AI-900 — Azure AI Fundamentals",
        org: "Microsoft",
        period: "en curs",
        details:
          "Fonaments d’IA a Azure: ML, NLP, visió per computador i serveis cognitius. Enfocament pràctic i de certificació.",
      },
      {
        title: "IBM AI Engineering — Professional Certificate",
        org: "IBM",
        period: "en curs",
        details:
          "Itinerari aplicat d’enginyeria d’IA: pipelines de dades, modelatge, avaluació i bones pràctiques per portar models a producció.",
      },
    ],
  },
  aside: {
  name: "Nom",
  location: "Ubicació",
  specialty: "Especialitat",
},
contactLabels: {
  email: "Correu",
  phone: "Telèfon",
  github: "GitHub",
  linkedin: "LinkedIn",
  addresses: "Adreces",
},
}satisfies Dictionary;
export default ca;
