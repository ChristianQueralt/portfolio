import Section from "../../../components/Section";
import { getDictionary } from "../../../i18n";

export default async function TitulationsEN() {
  const dict = await getDictionary("EN");
  const base = "/EN";

  return (
    <>
      <Section title={dict.sections.titulations} subtitle="Formal studies">
        <ul className="grid gap-4">
          {dict.content.education.map((e: any) => (
            <li key={e.title} className="rounded-2xl border border-white/15 p-4">
              <h3 className="text-base font-semibold text-white">{e.title}</h3>
              <p className="text-white/80">{e.org} — {e.period}</p>
              {e.details && <p className="mt-1 whitespace-pre-line text-white/90">{e.details}</p>}
            </li>
          ))}
        </ul>
      </Section>

    </>
  );
}
