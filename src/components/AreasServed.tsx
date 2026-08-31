const AREAS = [
  "Constantia",
  "Tokai",
  "Bishopscourt",
  "Meadowridge",
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
    <section id="areas" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="label">Where I work</p>
          <h2 className="mt-3 text-4xl">
            Serving Constantia &amp; the Cape Town Southern Suburbs
          </h2>
          <p className="mt-4 text-base text-body">
            Pippa Manicom is a registered dietitian on Willow Road, Constantia.
            She sees clients in person from across the Southern Suburbs, and
            online from anywhere in South Africa.
          </p>
          <p className="mt-4 text-sm text-body">
            Don't see your suburb? Online consultations cover the rest of
            the country, so{" "}
            <a href="#contact" className="font-semibold text-pink-dark hover:text-pink">
              get in touch
            </a>
            .
          </p>
        </div>

        <ul className="columns-2 gap-8 border-t border-line pt-6 sm:columns-3 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          {AREAS.map((area) => (
            <li key={area} className="mb-3 flex items-center gap-2.5 text-[0.95rem] text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-honey" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
