// app/CAT/layout.tsx
import "../globals.css";
import { getDictionary } from "../../i18n";
import Nav from "../../components/Nav";

export default async function LangLayout({ children }: { children: React.ReactNode }) {
  const dict = await getDictionary("CAT");

  return (
    <html lang="ca">
      <body className="text-white">
        {/* fondo */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-neutral-900 via-black to-neutral-900" />
        <div className="fixed inset-0 -z-10 [background:radial-gradient(600px_220px_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />
        <Nav labels={dict.nav} />
        <div className="mx-auto max-w-5xl px-4">
          <main className="pb-16">{children}</main>
          <footer className="border-t py-8 text-sm text-neutral-500">© {new Date().getFullYear()} Christian Queralt — Built with Next.js & TailwindCSS</footer>
        </div>
      </body>
    </html>
  );
}
