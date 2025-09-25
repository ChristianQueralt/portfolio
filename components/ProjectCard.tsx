type ProjectCardProps = {
  title: string;                               // Project title
  description: string;                         // Short description
  tech: string[];                              // Tech stack list
  links?: { label: string; href: string }[];   // Optional links
};

export default function ProjectCard({ title, description, tech, links }: ProjectCardProps) {
  // Card for a single project
  return (
    <article className="rounded-2xl border p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/90">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600">
        {tech.map((t) => (
          <li key={t} className="rounded-full border px-2 py-1">{t}</li>
        ))}
      </ul>
      {links && links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {links.map((l) => (
            <a key={l.href} className="underline hover:no-underline" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
