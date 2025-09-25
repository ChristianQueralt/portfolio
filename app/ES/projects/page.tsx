import Section from "../../../components/Section";
import ProjectCard from "../../../components/ProjectCard";
import { getDictionary } from "../../../i18n";

export default async function ProjectsES() {
  const dict = await getDictionary("ES");
  // const base =/ES";

  return (
    <>
      <Section title={dict.sections.projects} subtitle="Proyectos destacados">
        <div className="grid gap-6 sm:grid-cols-2">
          {dict.content.projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} links={p.links} />
          ))}
        </div>
      </Section>
    </>
  );
}
