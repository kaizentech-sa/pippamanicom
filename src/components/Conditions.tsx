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
    <section id="conditions" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div>
          <h2 className="text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
            Medical Conditions &amp; Lifestyle Needs
          </h2>
          <h3 className="mt-3 text-xl font-medium text-pink">
            Pippa can help with:
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
            As a registered dietitian in Cape Town, Pippa provides
            evidence-based, personalised nutrition therapy for a wide range
            of medical conditions and lifestyle goals, including:
          </p>
        </div>

        <img
          src={kiwi}
          alt="Fresh kiwi fruit - healthy nutrition guidance from a Cape Town dietitian"
          width={675}
          height={395}
          loading="lazy"
          className="hidden w-full rounded-[40px] object-cover md:block"
        />
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CONDITIONS.map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-4 rounded-2xl border border-lavender bg-white px-5 py-4 transition-colors hover:border-pink/40 hover:bg-cloud"
          >
            <WatermelonIcon
              color={i % 2 === 0 ? "#61ce70" : "#ec297a"}
              size={28}
            />
            <span className="text-base text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
