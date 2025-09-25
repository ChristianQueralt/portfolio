// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isLocale,
  DEFAULT_LOCALE,
  PREFERRED_LANG_COOKIE,
} from "./i18n";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl; // e.g. "/", "/projects", "/EN/projects"
  const first = pathname.split("/")[1]?.toUpperCase();

  // Si ya lleva /ES|/CAT|/EN, deja pasar
  if (isLocale(first || "")) return NextResponse.next();

  // Lee cookie de preferencia
  const preferred = req.cookies.get(PREFERRED_LANG_COOKIE)?.value?.toUpperCase();
  const target = isLocale(preferred || "") ? preferred! : DEFAULT_LOCALE;

  // Redirige a /<lang>[pathname]
  const url = req.nextUrl.clone();
  url.pathname = `/${target}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // ignora assets y API
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
