import { MapPin } from "lucide-react";

const AREAS = [
  "Constantia",
  "Tokai",
  "Bishopscourt",
  "Wynberg",
  "Claremont",
  "Kenilworth",
  "Newlands",
  "Rondebosch",
  "Plumstead",
  "Bergvliet",
  "Kirstenbosch",
  "Muizenberg",
  "Hout Bay",
  "Cape Town CBD",
];

export default function AreasServed() {
  return (
    <section id="areas" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-ink">
          Dietitian Serving Constantia &amp; the Cape Town Southern Suburbs
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-body">
          Pippa Manicom is a registered dietitian based on Willow Road,
          Constantia, seeing clients in person from across Cape Town&rsquo;s
          Southern Suburbs, plus online consultations for clients anywhere in
          South Africa.
        </p>
      </div>

      <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
        {AREAS.map((area) => (
          <li
            key={area}
            className="flex items-center gap-1.5 rounded-full bg-cloud px-4 py-2 text-sm font-medium text-ink"
          >
            <MapPin size={14} className="text-pink" />
            {area}
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-body/70">
        Don&rsquo;t see your suburb listed? Online video consultations mean
        location is never a barrier to getting the right nutrition advice —{" "}
        <a href="#contact" className="font-semibold text-pink hover:text-pink-dark">
          get in touch
        </a>
        .
      </p>
    </section>
  );
}
