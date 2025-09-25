// components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLocaleFromPath } from "../i18n";

type NavLabels = {
  home: string;
  projects: string;
  titulations: string;
  currently: string;
  experience: string;
  contact: string;
};

const FALLBACK: NavLabels = {
  home: "Home",
  projects: "Projects",
  titulations: "Titulations",
  currently: "Currently",
  experience: "Experience",
  contact: "Contact",
};

export default function Nav({ labels }: { labels?: NavLabels }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const lang = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  const base = `/${lang}`;
  const L = labels ?? FALLBACK;

  const links = [
    { href: `${base}`, label: L.home },
    { href: `${base}/projects`, label: L.projects },
    { href: `${base}/titulations`, label: L.titulations },
    { href: `${base}/currently`, label: L.currently },
    { href: `${base}/experience`, label: L.experience },
    { href: `${base}/contact`, label: L.contact },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-neutral-900 text-white border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href={base} className="text-base font-semibold text-white">
          Christian Queralt
        </Link>

        <nav className="hidden md:flex gap-2 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`px-3 py-1.5 rounded transition-colors ${
                isActive(l.href) ? "bg-white/10" : "hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            aria-label="Abrir menú"
            className="md:hidden rounded border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-neutral-900">
          <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`px-2 py-2 rounded ${
                  isActive(l.href) ? "bg-white/10" : "hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
