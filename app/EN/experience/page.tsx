import Section from "../../../components/Section";
import { getDictionary } from "../../../i18n";

export default async function ExperienceEN() {
  const dict = await getDictionary("EN");
  const base = "/EN";

  return (
    <>
      <Section title={dict.sections.experience} subtitle="Internships and placements">
        <ul className="grid gap-4">
          {dict.content.experience.map((exp: any) => (
            <li key={`${exp.org}-${exp.period}`} className="rounded-2xl border border-white/15 p-4">
              <h3 className="text-base font-semibold text-white">{exp.role}</h3>
              <p className="text-white/80">{exp.org} — {exp.period}</p>
              <ul className="mt-2 list-disc pl-5 text-white/90 text-sm">
                {exp.bullets.map((b: string) => <li key={b}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

    </>
  );
}
