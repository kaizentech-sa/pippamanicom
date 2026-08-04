import WatermelonIcon from "./WatermelonIcon";
import kiwi from "../assets/images/Kiwi-Fruits.png";

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
          <img
            src={kiwi}
            alt="Kiwi"
            className="mt-8 hidden w-4/5 rounded-[40px] md:block"
          />
        </div>

        <ul className="space-y-4">
          {CONDITIONS.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              <WatermelonIcon
                color={i % 2 === 0 ? "#61ce70" : "#ec297a"}
                size={28}
              />
              <span className="text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
