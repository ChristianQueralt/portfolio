import { PropsWithChildren } from "react";

type SectionProps = {
  title: string;       // Section title
  subtitle?: string;   // Optional subtitle
  id?: string;         // Optional anchor id
};

export default function Section({ title, subtitle, id, children }: PropsWithChildren<SectionProps>) {
  // Generic section wrapper
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-1 text-neutral-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
