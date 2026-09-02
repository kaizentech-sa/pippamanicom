import { MapPin } from "lucide-react";

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
    <section id="areas" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl rounded-[40px] bg-cloud px-6 py-14 md:rounded-[56px] md:px-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-ink md:text-[36px] md:leading-tight">
              Dietitian Serving Constantia &amp; the Cape Town Southern Suburbs
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-body">
              Pippa Manicom is a registered dietitian based on Willow Road,
              Constantia, seeing clients in person from across Cape Town&rsquo;s
              Southern Suburbs, plus online consultations for clients anywhere in
              South Africa.
            </p>
          </div>

          <div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <MapPin size={14} className="shrink-0 text-pink" />
                  {area}
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-lavender pt-5 text-xs leading-relaxed text-body/80">
              Don&rsquo;t see your suburb listed? Online video consultations mean
              location is never a barrier to getting the right nutrition advice —{" "}
              <a
                href="#contact"
                className="font-semibold text-pink hover:text-pink-dark"
              >
                get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
