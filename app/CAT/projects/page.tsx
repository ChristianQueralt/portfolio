import Section from "../../../components/Section";
import ProjectCard from "../../../components/ProjectCard";
import { getDictionary } from "../../../i18n";

export default async function ProjectsCAT() {
  const dict = await getDictionary("CAT");
  // const base =/CAT";

  return (
    <>
      <Section title={dict.sections.projects} subtitle="Projectes destacats">
        <div className="grid gap-6 sm:grid-cols-2">
          {dict.content.projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} links={p.links} />
          ))}
        </div>
      </Section>

    </>
  );
}
