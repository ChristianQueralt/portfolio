import Image from "next/image";
import Section from "../../components/Section";
import { about } from "../../lib/data";
import { getDictionary } from "../../i18n";

export default async function HomeCAT() {
  const dict = await getDictionary("CAT");

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <Section title={`${dict.home.hello} ${about.name}.`} subtitle={dict.home.tagline}>
        <div className="grid gap-6 md:grid-cols-[1fr,280px] md:items-start">
          {/* Presentació */}
          <div className="leading-relaxed text-white">
            <p className="whitespace-pre-line text-white">{dict.home.intro}</p>

            {dict.home.cvUrl && (
              <div className="mt-6">
                <a
                  href={dict.home.cvUrl}
                  download={dict.home.cvFilename}
                  className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm bg-white/10 hover:bg-white/15 text-white"
                >
                  {dict.home.downloadCV}
                </a>
              </div>
            )}
          </div>

          {/* Aside */}
          <aside className="rounded-2xl border border-white/15 p-4">
            <div className="flex items-center gap-4">
              <Image
                src={about.photo}
                alt="Foto de Christian Queralt Aixendri"
                width={96}
                height={96}
                priority
                className="h-24 w-24 rounded-full object-cover ring-1 ring-white/20 shadow"
              />
              <div className="text-sm">
                <div className="font-semibold text-white">{about.name}</div>
                <div className="text-white">{about.location}</div>
              </div>
            </div>

            <ul className="mt-4 text-sm space-y-4 leading-relaxed">
              <li>
                <span className="font-semibold text-white">{dict.aside.name}</span>
                <span className="block mt-1 text-white">{about.name}</span>
              </li>
              <li>
                <span className="font-semibold text-white">{dict.aside.location}</span>
                <span className="block mt-1 text-white">{about.location}</span>
              </li>
              <li>
                <span className="font-semibold text-white">{dict.aside.specialty}</span>
                <span className="block mt-1 text-white">{dict.home.tagline}</span>
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </main>
  );
}
