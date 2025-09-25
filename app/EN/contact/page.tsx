import Section from "../../../components/Section";
import { contact } from "../../../lib/data";
import { getDictionary } from "../../../i18n";

export default async function ContactEN() {
  const dict = await getDictionary("EN");

  return (
    <Section title={dict.sections.contact} subtitle="How to reach me">
      <div className="rounded-2xl border border-white/15 p-6">
        <ul className="space-y-2 text-white/90 text-sm">
          <li>
            <strong className="text-white">{dict.contactLabels.email}:</strong>{" "}
            <a className="underline decoration-white/60 underline-offset-4 hover:decoration-white text-white" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </li>
          {contact.phone && (
            <li>
              <strong className="text-white">{dict.contactLabels.phone}:</strong> {contact.phone}
            </li>
          )}
          {contact.github && (
            <li>
              <strong className="text-white">{dict.contactLabels.github}:</strong>{" "}
              <a className="underline decoration-white/60 underline-offset-4 hover:decoration-white text-white" href={contact.github} target="_blank" rel="noreferrer">
                {contact.github}
              </a>
            </li>
          )}
          {contact.linkedin && (
            <li>
              <strong className="text-white">{dict.contactLabels.linkedin}:</strong>{" "}
              <a className="underline decoration-white/60 underline-offset-4 hover:decoration-white text-white" href={contact.linkedin} target="_blank" rel="noreferrer">
                {contact.linkedin}
              </a>
            </li>
          )}
        </ul>

        {contact.addresses?.length ? (
          <div className="mt-6">
            <h4 className="text-base font-semibold text-white">{dict.contactLabels.addresses}</h4>
            <ul className="mt-2 text-white/90 text-sm list-disc pl-5">
              {contact.addresses.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
