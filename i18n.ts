// i18n.ts
export const LOCALES = ["ES", "CAT", "EN"] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = "ES";
export const PREFERRED_LANG_COOKIE = "preferred_lang";

export const LOCALE_LABELS: Record<Locale, string> = {
  ES: "Español",
  CAT: "Català",
  EN: "English",
};

// Helpers útiles para el switcher y enlaces

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value.toUpperCase());
}

// Extrae el idioma del pathname actual (/ES/..., /EN/..., /CAT/...)
export function getLocaleFromPath(pathname: string): Locale {
  const seg = (pathname.split("/")[1] || "").toUpperCase();
  return isLocale(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

// Construye la misma ruta pero con otro idioma
export function buildHrefForLocale(target: Locale, pathname: string): string {
  const parts = pathname.split("/").filter(Boolean); // ["ES","projects", ...]
  // si no hay partes -> "/ES"
  if (parts.length === 0) return `/${target}`;
  // sustituye el primer segmento por el nuevo idioma
  parts[0] = target;
  return `/${parts.join("/")}`;
}

export async function getDictionary(lang: Locale) {
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
