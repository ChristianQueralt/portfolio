import Section from "../../../components/Section";
import { getDictionary } from "../../../i18n";

export default async function CurrentlyCAT() {
  const dict = await getDictionary("CAT");
  const base = "/CAT";

  return (
    <>
      <Section title={dict.sections.currently} subtitle="En què estic centrat ara mateix">
        <ul className="grid gap-4 sm:grid-cols-2">
          {dict.content.now.map((c) => (
            <li key={`${c.title}-${c.period}`} className="rounded-2xl border border-white/15 p-4">
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="text-white/80">{c.org} — {c.period}</p>
              {c.details && <p className="mt-2 text-white/90 whitespace-pre-line">{c.details}</p>}
            </li>
          ))}
        </ul>
      </Section>

    </>
  );
}
