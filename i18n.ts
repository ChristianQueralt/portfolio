// i18n.ts (en la raíz)

export const LOCALES = ["ES", "CAT", "EN"] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = "ES";
export const PREFERRED_LANG_COOKIE = "preferred_lang";

export const LOCALE_LABELS: Record<Locale, string> = {
  ES: "Español",
  CAT: "Català",
  EN: "English",
};

// ---- TIPOS PARA EL CONTENIDO ----
export type ProjectLink = { label: string; href: string };
export type Project = { title: string; description: string; tech: string[]; links?: ProjectLink[] };
export type EducationItem = { title: string; org: string; period: string; details?: string };
export type ExperienceItem = { role: string; org: string; period: string; bullets: string[] };
export type NowItem = { title: string; org: string; period: string; details?: string };

export type Dictionary = {
  nav: {
    home: string; projects: string; titulations: string; currently: string; experience: string; contact: string;
  };
  home: {
    hello: string; downloadCV: string; tagline: string; intro: string;
    cvUrl?: string; cvFilename?: string;
  };
  sections: {
    projects: string; titulations: string; currently: string; experience: string; contact: string;
  };
  aside: {
    name: string; location: string; specialty: string;
  };
  contactLabels: {
    email: string; phone: string; github: string; linkedin: string; addresses: string;
  };
  content: {
    projects: Project[];
    education: EducationItem[];
    experience: ExperienceItem[];
    now: NowItem[];
  };
};

// ---- HELPERS DE RUTA/LOCALE ----
export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value.toUpperCase());
}

export function getLocaleFromPath(pathname: string): Locale {
  const seg = (pathname.split("/")[1] || "").toUpperCase();
  return isLocale(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

export function buildHrefForLocale(target: Locale, pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  parts[0] = target;
  return `/${parts.join("/")}`;
}

// ---- DICCIONARIO TIPADO ----
export async function getDictionary(lang: Locale): Promise<Dictionary> {
  switch (lang) {
    case "ES":
      return (await import("./locales/es")).default;
    case "CAT":
      return (await import("./locales/ca")).default;
    case "EN":
      return (await import("./locales/en")).default;
    default:
      return (await import("./locales/es")).default;
  }
}
