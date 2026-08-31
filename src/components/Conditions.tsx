import WatermelonIcon from "./WatermelonIcon";
import { artwork } from "../assets/imagery";

const Kiwi = artwork["conditions.produce"];

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
            Pippa offers evidence-based, personalised nutrition care for a wide
            range of medical conditions and everyday health goals, including:
          </p>
          <Kiwi className="mt-10 hidden w-40 md:block" />
        </div>

        <ul className="space-y-8">
          {CONDITIONS.map((item, i) => (
            <li key={item} className="flex items-center gap-4">
              <WatermelonIcon
                color={i % 2 === 0 ? "#7cc47a" : "#ec297a"}
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
