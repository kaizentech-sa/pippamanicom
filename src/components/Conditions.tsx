import Photo from "./Photo";

const CONDITIONS = [
  "Weight Management (loss or gain)",
  "Type 2 Diabetes, Insulin Resistance",
  "Cholesterol",
  "High Blood Pressure",
  "Arthritis, Gout",
  "Fibromyalgia, Chronic Fatigue Syndrome",
  "IBS, Heartburn/Reflux, Constipation",
  "Pregnancy and Breastfeeding",
  "Menopause",
  "Sports Nutrition",
];

export default function Conditions() {
  return (
    <section id="conditions" className="bg-sage">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
          <div>
            <p className="label">How I can help</p>
            <h2 className="mt-3 text-4xl">Medical conditions &amp; lifestyle needs</h2>
            <p className="mt-4 max-w-lg text-base text-body">
              Pippa offers evidence-based, personalised nutrition care for a wide
              range of medical conditions and everyday health goals. Common
              reasons people come to see her:
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-sage">
            <Photo
              imageKey="conditions.food"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-line bg-cream px-4 py-3.5 text-[0.95rem] text-ink"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
