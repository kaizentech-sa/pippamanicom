import WatermelonIcon from "./WatermelonIcon";
import kiwi from "../assets/images/Kiwi-Fruits.webp";

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
    <section id="conditions" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-ink">
            Medical Conditions &amp; Lifestyle Needs
          </h2>
          <h3 className="mt-2 text-xl font-medium text-ink">
            Pippa can help with:
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
            As a registered dietitian in Cape Town, Pippa provides
            evidence-based, personalised nutrition therapy for a wide range
            of medical conditions and lifestyle goals, including:
          </p>
          <img
            src={kiwi}
            alt="Fresh kiwi fruit - healthy nutrition guidance from a Cape Town dietitian"
            width={675}
            height={395}
            loading="lazy"
            className="mt-8 hidden w-4/5 rounded-[40px] md:block"
          />
        </div>

        <ul className="space-y-8">
          {CONDITIONS.map((item, i) => (
            <li key={item} className="flex items-center gap-4">
              <WatermelonIcon
                color={i % 2 === 0 ? "#61ce70" : "#ec297a"}
                size={30}
              />
              <span className="text-lg text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
