// components/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  LOCALES,
  LOCALE_LABELS,
  type Locale,
  getLocaleFromPath,
  buildHrefForLocale,
  PREFERRED_LANG_COOKIE,
} from "../i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const current = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  const [open, setOpen] = useState(false);

  function setLang(target: Locale) {
    // guardar preferencia 1 año
    document.cookie = `${PREFERRED_LANG_COOKIE}=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
    // misma ruta, otro idioma
    const href = buildHrefForLocale(target, pathname);
    router.replace(href);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        aria-label="Cambiar idioma"
        onClick={() => setOpen((v) => !v)}
        className="rounded border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
      >
        {LOCALE_LABELS[current]}
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-white/20 bg-neutral-900 shadow-lg">
          {LOCALES.map((l) => (
            <li key={l}>
              <button
                onClick={() => setLang(l)}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-white/10 ${
                  l === current ? "font-semibold" : ""
                }`}
              >
                {LOCALE_LABELS[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
